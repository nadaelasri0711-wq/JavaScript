const ulTodoList = document.getElementById("todo-list");
const inputTask = document.getElementById('new-task');


function buttonInsertTask(){
    let newTask = inputTask.value.trim();
    if(!listTasks().includes(newTask)){
        insertTask(newTask);
    }
}

function insertTask(){
    let task= inputTask.value;
    let liTask = document.createElement('li');
    liTask.textContent = task;
    liTask.ondbclick= () => deleteTask(liTask);
    liTask.onclick = () => liTask.classList.toggle('selected');
    ulTodoList.appendChild(liTask);
}

function deleteTask(task){
    task.remove();
}

function getListTasks(){
    return [...ulTodoList.querySelectorAll('li')]
        .map( li => li.textContent );
    
}

function sortTasks (){
    let listTasks = getListTasks();
    console.log("sin ordenar", listTasks);
    listTasks.sort((a,b)=> a.localeCompare(b));
    console.log("ordenado: ", listTasks);
    ulTodoList.innerHTML = '';
    listTasks.forEach(task => {
        insertTask(task)
    });
}
