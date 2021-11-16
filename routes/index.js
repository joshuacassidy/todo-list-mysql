var express = require('express');
var router = express.Router();
var MySql = require('sync-mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  
    var connection = new MySql({
      host: 'localhost',
      user: 'root',
      password: 'root', 
      database : 'web_app_todolist_users_test_no_auth'
    });
    
    var todos = connection.query('SELECT * FROM todos;');
    
    res.render('index', { title: 'Todo list', todos:todos });
  
});

router.post('/add', function(req, res, next) {
  var connection = new MySql({
    host: 'localhost',
    user: 'root',
    password: 'root', 
    database : 'web_app_todolist_users_test_no_auth'
  });
  connection.query('INSERT INTO todos (task) VALUES (?)', [req.body.task]);

  res.redirect("/")
});

router.get('/delete', function(req, res, next) {
  var connection = new MySql({
    host: 'localhost',
    user: 'root',
    password: 'root', 
    database : 'web_app_todolist_users_test_no_auth'
  });
  connection.query('DELETE FROM todos where todo_id = (?)', [req.query.todo_id]);
  res.redirect("/")
});

router.get('/edit', function(req, res, next) {
  var connection = new MySql({
    host: 'localhost',
    user: 'root',
    password: 'root', 
    database : 'web_app_todolist_users_test_no_auth'
  });
  var todo = connection.query('SELECT * FROM todos where todo_id = (?)', [req.query.todo_id])[0];
  res.render('edit', { title: 'Todo list', todo:todo, todo_id:req.query.todo_id });
});

router.post('/edit', function(req, res, next) {
  var connection = new MySql({
    host: 'localhost',
    user: 'root',
    password: 'root', 
    database : 'web_app_todolist_users_test_no_auth'
  });
  connection.query('UPDATE todos SET task = ? where todo_id = (?)', [req.body.task, req.body.todo_id]);
  res.redirect("/")
});

module.exports = router;
