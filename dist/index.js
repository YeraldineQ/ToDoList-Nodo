"use strict";
//Selección de elementos
const btnSubmit = document.querySelector('.todo-btn');
const inputTodo = document.querySelector('.todo-input');
const formTodo = document.querySelector('.todo-form');
const todoList = document.querySelector('.todo-list');
const btnDeleteAll = document.querySelector('.todo-delete-all');
//gestionar envio
const handleSubmit = (e) => {
    e.preventDefault();
    //Crear nuevo objeto ToDo
    const newTodo = {
        id: Date.now(),
        todo: inputTodo.value,
        completed: false
    };
    //Guardar y almacenamiento local
    todos.push(newTodo);
    //guardar local
    saveTodos();
    //Añadir nuevo ToDo Fn
    appendTodo(newTodo);
    //Restablecer input
    inputTodo.value = "";
};
// guardar todos
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
};
;
// Nuevos arreglos Todo
const todos = JSON.parse(localStorage.getItem('todos') || '[]');
console.log(todos);
//Añadiendo nuevo todos al DOM on start
window.addEventListener('DOMContentLoaded', () => {
    todos.forEach(todo => appendTodo(todo));
});
//Añadir funciones
const appendTodo = (newTodo) => {
    const newLi = document.createElement('li');
    const checkB = document.createElement('input');
    checkB.type = "checkbox";
    checkB.checked = newTodo.completed;
    //Añadir evento al checkbox
    checkB.addEventListener('change', () => {
        console.log('Checked');
        newTodo.completed = checkB.checked;
        //guardar todos
        saveTodos();
    });
    newLi.append(newTodo.todo, checkB);
    todoList.prepend(newLi);
};
//Añadir los eventos al formulario
formTodo.addEventListener('submit', e => handleSubmit(e));
//Eliminar
const clearTodos = () => {
    todos.length = 0;
    saveTodos();
    todoList.innerHTML = "";
};
btnDeleteAll.onclick = () => clearTodos();
