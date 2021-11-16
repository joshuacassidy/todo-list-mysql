DROP DATABASE IF EXISTS web_app_todolist_users_test_no_auth;
CREATE DATABASE web_app_todolist_users_test_no_auth;

USE web_app_todolist_users_test_no_auth;

CREATE TABLE IF NOT EXISTS todos (
    todo_id integer primary key AUTO_INCREMENT, 
    task varchar(255)
);

