const db = require('../models');

exports.getTodos = (req, res) => {
    //here we are working with Promises
    db.Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.send(err));
}

exports.createTodo = (req, res) => {
    db.Todo.create(req.body)
    .then(newTodo => res.status(201).json(newTodo))
    .catch(err => res.send(err));
}

exports.showTodo = (req, res) => {
    db.Todo.findById(req.params.todoId)
    .then(todo => res.json(todo))
    .catch(err => res.send(err));
}

exports.updateTodo = (req, res) => {
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(todo => res.json(todo))
    .catch(err => res.send(err));
}

exports.removeTodo = (req, res) => {
    db.Todo.findByIdAndRemove({_id: req.params.todoId})
    .then(todo => res.json({message: "Item Deleted"}))
    .catch(err => res.send(err));
}

module.exports = exports;