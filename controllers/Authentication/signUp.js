const UserModal = require('../../model/user');
const bcrypt = require('bcryptjs');

const signUp = async (req, res) => {
    const { name, email, mobile, password } = req.body;
    if (!name || !email || !mobile || !password) {
        return res.status(400).json({ error: `${name || email || mobile || password}  are required` });
    }
    const existingData = await UserModal.findOne({ email })
    if (existingData) {
        return res.status(400).json({ error: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new UserModal({
        name: name,
        email: email,
        mobile: mobile,
        password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({
        message: "User created successfully",
    });
};
module.exports = { signUp }