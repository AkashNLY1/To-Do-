// VARIABLES ---------------------------------------------------------->

// TASK - Input(name), Button
var tName = document.querySelector(".inp-tname")
var addBtn = document.querySelector(".add-btn")

// MESSAGE / ALERTS
var enterT = document.getElementById("alert1")
var preLoad = document.getElementById("preload")

// TASK LIST, TASK ITEM
var tList = document.querySelector(".tlist")
var tItem = document.querySelector(".titem")

// TASK BUTTONS - (done, dlt)
var doneBtn = document.querySelector(".done-btn")
var delBtn = document.querySelector(".del-btn")

// LOGICS ---------------------------------------------------------->

// ADD TASK - When click on addBtn (or) form submission
addBtn.addEventListener("click",function(event){
    event.preventDefault()
    if(tName.value != '')
    {
        enterT.style.visibility = "hidden"
        preLoad.style.display = "none"
        var task = document.createElement("div")
        task.setAttribute("class","titem")
        task.innerHTML = `
                        <p class="tname">${tName.value}</p>
                        <button class="done-btn" onclick="doneTask(event)" ></button>
                        <button class="del-btn" onclick="delTask(event)" ></button> `
        tList.append(task) 
        tName.value = ''
    }
    else
    {
        enterT.style.visibility = "visible"
    }
    
})

// TASK BUTTONS
// DONE - TASK
function doneTask(event){
    event.target.parentElement.style.opacity = "50%"
}
// REMOVE - TASK
function delTask(event)
{
    event.target.parentElement.remove();
}
