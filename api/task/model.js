// build your `Task` model here
const db = require('../../data/dbConfig');

function getTask(){
    return db('tasks');
}
function getTaskById(task_id){
    return db('tasks').where('task_id', task_id).first()
}

async function addTask(task) {
    const [task_id] = await db('tasks')
        .insert(task)
    return getTaskById(task_id)
}

module.exports = {
    getTask,
    addTask
}