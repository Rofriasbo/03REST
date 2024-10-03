const projectModel = 
require("../models/projectModel");

function getAllProjects(req, res){
const projects = projectModel.getAllProjects();
if (projects.length>0)
    res.status(200).json(projects);
else 
res.status(400).json({code : 400, message : "No se encontro el proyecto"})

}

function createProyect(req,res){
    const newProyect =
    projectModel.createProyect(req.body);

    res.status(201).json(newProyect);
}

module.exports = {
getAllProjects,
createProyect
}
