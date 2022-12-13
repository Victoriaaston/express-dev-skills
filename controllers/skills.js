const skills = require("../models/skills")

function index(req, res) { 
    res.render("index", {skills: skills.getSkills()})
}

function show(req, res){
    res.render("show", {skills: skills.getOne(req.params.id)})
}

module.exports = {
    index, 
    show
}