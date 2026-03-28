const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assuming you have a User model defined

// User registration
const register = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });

    try {
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to register user' });
    }
};

// User login
const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' }); // Replace 'your_jwt_secret' with your secret
            res.json({ message: 'Login successful', token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to log in' });
    }
};

// User logout (just a placeholder, usually handled client-side)
const logout = (req, res) => {
    res.json({ message: 'Logout successful' });
};

module.exports = { register, login, logout };