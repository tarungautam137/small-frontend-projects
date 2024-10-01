var inp=document.querySelector("input");
var btn=document.querySelector("#input button");
var list=document.querySelector("#tasks");

btn.addEventListener("click",addTask);

inp.addEventListener("keypress", function(e){
    if(e.key==="Enter") addTask();
});
var tasks=[];
function addTask(){
    var val=inp.value.trim();
    if(val!==''){
        var task={
            description:val,
            completed:false,
        } 
        tasks.push(task);
        inp.value='';
        displayTasks();
    }
}
function changeStatus(index){
    tasks[index].completed=!tasks[index].completed;
    displayTasks();
}
function deleteTask(index){
    tasks.splice(index, 1);
    displayTasks();
}
function displayTasks(){
    list.innerHTML="";
    var sortedTasks=tasks.slice().sort((a,b)=>a.completed-b.completed);

    sortedTasks.forEach((task)=>{
       var content=document.createElement("div");
       content.classList.add("display");
       
       var status=document.createElement("button");
       status.textContent=task.completed?"Completed":"Incomplete";
       status.addEventListener("click",()=>{changeStatus(tasks.indexOf(task))});

       var deleteButton=document.createElement("button");
       deleteButton.textContent="Delete";
       deleteButton.addEventListener("click",()=>{deleteTask(tasks.indexOf(task))});

       var text=document.createElement("span");
       text.textContent=task.description;
       if(task.completed){
        text.classList.add("completed");
       }

       content.appendChild(status);
       content.appendChild(text);
       content.appendChild(deleteButton);

       list.appendChild(content);
    })
}