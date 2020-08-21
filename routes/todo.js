var express=require('express');
var router=express.Router();
var helpers=require("../helpers/todo");

router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo);
router.get('/:todoId',helpers.getTodo);
router.put('/:todoId',helpers.updateTodo);
router.delete('/:todoId',helpers.deleteTodo);
module.exports=router;

