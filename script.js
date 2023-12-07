alert("Single tap to mark a task as completed, and double tap to remove the task.")
let input=document.getElementById('input');
let button = document.getElementById('add');
let todoList = document.getElementById('todoList');

let todos = [];

button.addEventListener('click',()=>{
    todos.push(input.value)
    addtodo(input.value)
    input.value=''
})

function addtodo(todo){
    let para = document.createElement('p');
    para.innerText = todo;
    todoList.appendChild(para)

    
    
    
    //to strike through and remove
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        remove(todo)
    })
}
