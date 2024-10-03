const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

async function login(req, res) {
    const { username, password } = req.body;
    const user = userModel.getUserByUsername(username);

    if (!user)
        return res.status(403).json({ code: 403, message: "Usuario no encontrado" });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid)
        return res.status(403).json({ code: 403, message: "Contraseña incorrecta" });

    return res.status(200).json({
        code: 200,
        message: "Inicio de sesión exitoso",
        apiKey: user.apiKey, // Retorna la API key al usuario
    });
}

module.exports = { login };
