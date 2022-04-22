// build your `Project` model here
const db = require('../../data/dbConfig');

function getProject(){
    return db('projects');
}

function getProjectById(project_id){
    return db('projects').where('project_id', project_id).first()
}

async function addProject(project) {
    const [project_id] = await db('projects')
        .insert(project)
    return getProjectById(project_id)
}

module.exports = {
    getProject,
    getProjectById,
    addProject
}