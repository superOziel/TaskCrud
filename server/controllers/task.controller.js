const Task = require('../models/task');
const taskController = {};

taskController.getTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
}

taskController.getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
}

taskController.createTask = async (req, res) => {
    const task = new Task({
        name: req.body.name,
        description: req.body.description,
        finish: req.body.finish,
        update: req.body.update,

    });
    await task.save();
    console.log(task);
    res.json({
        'status': "Task saved."
    });
}

taskController.editTask = async (req, res) => {
    const { id } = req.params;
    const task = {
        name: req.body.name,
        description: req.body.description,
        finish: req.body.finish,
        update: req.body.update
    }
    await Task.findByIdAndUpdate(id, {$set : task }, {new : true });
    res.json({
        'status': "Task updated."
    });
}

taskController.deleteTask = async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({
        'status': "Task deleted."
    });

};


module.exports = taskController;