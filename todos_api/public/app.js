$(document).ready(function() {
    $.getJSON("/api/todos")
    .then(addTodos);

    $('#todoInput').keypress(function(event){
        //13 keycode is equal to ENTER
        if(event.which == 13) {
            createTodo();
        }
    });

    $('.list').on('click', 'li', function() {
        updateTodo($(this));
    });

    $('.list').on('click', 'span', function(event) {
        event.stopPropagation();
        removeTodo($(this).parent());
    });
});

function addTodo(todo) {
    const newTodo = $('<li class="task">' + todo.name + '<span>X</span></li>');
    newTodo.data('id', todo._id); //this is a JQuery way to store data in element
    newTodo.data('completed', todo.completed);
    if (todo.completed) {
        newTodo.addClass('done');
    }
    $('.list').append(newTodo);
}

function addTodos(todos) {
    todos.forEach(todo => {
        addTodo(todo);
    });
}

function createTodo(){
    const userInput = $('#todoInput').val();
    $.post('/api/todos', {name: userInput})
    .then(newTodo => {
        $('#todoInput').val('');
        addTodo(newTodo)
    })
    .catch(err => console.log(err));
}

function removeTodo(todo){
    const clickedId = todo.data('id');
    const deleteUrl = '/api/todos/' + clickedId;
    $.ajax({
        method: 'DELETE',
        url: deleteUrl
    })
    .then(data => todo.remove())
    .catch(err => console.log(err));
}

function updateTodo(todo) {
    const clickedId = todo.data('id');
    const updateUrl = '/api/todos/' + clickedId;
    const isDone = !todo.data('completed');
    const updateData = {completed: isDone};
    $.ajax({
        method: 'PUT',
        url: updateUrl,
        data: updateData
    })
    .then(updatedTodo => {
        todo.toggleClass('done');
        todo.data('completed', isDone);
    })
    .catch(err => console.log(err));
}



