$(document).ready(function () {
    $.getJSON("/api/todos")
        .then(addTodos);
});
function addTodos(todos) {
    todos.forEach(function (todo) {
        addTodo(todo);
    });
    $("#todoInput").keypress(function (event) {
        if(event.which==13){
            addNewTodo();
        }
    });
    $(".list").on("click","li",function () {
        updateTodo($(this));
    });
    $(".list").on("click","span",function (e) {
        e.stopPropagation();
        removeTodo($(this).parent());
    })

}
function addTodo(todo) {
    var newTodo=$('<li class="task">'+todo.name+"<span>X</span></li>");
    newTodo.data("id",todo._id);
    newTodo.data("completed",todo.completed);
    if(todo.completed){
        newTodo.addClass("done");
    }
    $('.list').append(newTodo);
}
function addNewTodo() {
    var val=$("#todoInput").val();
    $.post("/api/todos",{name:val})
        .then(function (newTodo) {
            addTodo(newTodo);
            $("#todoInput").val(" ");
        })
        .catch(function (err) {
            console.log(err);
        });
}
function updateTodo(todo) {
    var isDone=!todo.data("completed");
    var updatedData={completed:isDone};
    var updateUrl="/api/todos/"+todo.data('id');
    $.ajax({
        method:"PUT",
        url:updateUrl,
        data:updatedData
    }).then(function () {
        todo.toggleClass("done");
        todo.data("completed",isDone);
    })
}
function removeTodo(todo) {
    var clickedId=todo.data('id');
    var deleteUrl="/api/todos/"+clickedId;
    $.ajax({
        method:"DELETE",
        url:deleteUrl
    }).then(function () {
        todo.remove();
    }).catch(function (err) {
        console.log(err);
    })
}
