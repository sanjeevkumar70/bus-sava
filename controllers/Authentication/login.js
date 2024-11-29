const UserModel = require('../../model/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET_KEY = "your_secret_key"; // Replace with an actual secret key

// Login API
const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate input
        if (!username || !password) {
            return res.status(400).json({ error: "Username and password are required" });
        }

        // Check if user exists
        const user = await UserModel.findOne({ username });
        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id, username: user.username }, SECRET_KEY, { expiresIn: "1h" });

        return res.status(200).json({
            message: "Login successful",
            token
        });
    } catch (error) {
        console.error("Login error: ", error);
        return res.status(500).json({ error: "Server error" });
    }
};

// Logout API
const logout = (req, res) => {
    // Invalidate the token on the client side (remove it from storage)
    return res.status(200).json({ message: "Logout successful" });
};

module.exports = { login, logout };
