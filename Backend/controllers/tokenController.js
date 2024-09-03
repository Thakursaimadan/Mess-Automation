const Token = require('../models/token');

// Generate unique token
exports.generateToken = async (req, res) => {
    const { studentId } = req.body;
    const code = Math.random().toString(36).substr(2, 8); // Generate a unique code
    
    const token = new Token({
        studentId,
        code
    });

    try {
        const newToken = await token.save();
        res.status(201).json(newToken);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Verify and use token
exports.verifyToken = async (req, res) => {
    const { code } = req.body;
    try {
        console.log("sabgbg")
        const token = await Token.findOne({ code });
        if (!token) return res.status(404).json({ message: 'Token not found' });
        if (token.isUsed) return res.status(400).json({ message: 'Token already used' });
        
        token.isUsed = true;
        await token.save();
        res.json({ message: 'Token verified and used' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
