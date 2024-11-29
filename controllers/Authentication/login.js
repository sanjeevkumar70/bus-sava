const UserModel = require('../../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET_KEY = "your_secret_key";

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ error: "Username and password are required" });
        }
        const user = await UserModel.findOne({
            $or: [
                { email: username }, 
                { mobile: username }  
            ]
        });
        if (!user) {
            return res.status(401).json({ error: "Invalid username" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid password" });
        }
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



module.exports = { login };
