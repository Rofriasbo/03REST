const userModel = require('../models/userModel');

function authenticateApiKey(req, res, next) {
    const apiKey = req.headers['x-api-key']; 

    if (!apiKey) {
        return res.status(403).json({ code: 403, message: 'API key no proporcionada' });
    }

    const user = userModel.getUserByApiKey(apiKey);
    if (!user) {
        return res.status(403).json({ code: 403, message: 'API key inválida' });
    }

    req.user = user; 
    next(); 
}

module.exports = authenticateApiKey;
