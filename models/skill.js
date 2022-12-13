const skills = [
    {id: 1, skill: HTML, level: 4},
    {id: 2, skill: CSS, level: 3},
    {id: 3, skill: JavaScript, level: 3}, 
    {id: 4, skill: express, level: 2}
]

module.exports = {
    getAll, 
    getOne
}

function getAll() {
    return skills
}

function getOne(skill) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}
console.log(getOne)