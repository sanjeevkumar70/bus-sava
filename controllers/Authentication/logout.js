const logout = (req, res) => {
    try {
        return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
};

module.exports = { logout };
