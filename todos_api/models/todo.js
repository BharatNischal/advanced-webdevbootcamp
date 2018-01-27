const mongoose = require('mongoose');

//this is how we define a Mongoose Schema
const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Attention: Name Is Required'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

//This is how we create a Model from our Schema
const Todo = mongoose.model('Todo', todoSchema);

//we use module.exports to use our model in main file
module.exports = Todo;