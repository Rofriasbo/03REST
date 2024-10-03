const express = require('express');
const bodyParser = require('body-parser');
const projectController = require('./controllers/projectController');
const projectRoutes = require('./routers/projectroutes');
const authRoutes = require('./routers/authroutes');

const app = express();
app.use(bodyParser.json());
app.use('/projects', projectRoutes);
app.use('/auth', authRoutes);

app.use((req, res, next) => {
    res.status(404).json({ code: 404, message: "Ruta no encontrada" });
});

module.exports = app;
