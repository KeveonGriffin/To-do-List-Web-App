const task = document.getElementById("input");
const listContainer = document.getElementById("listContainer");

function addTask() {
    if(task.value === ''){
        alert("Task name cannot be empty.");
    } else {
        let li = document.createElement("li");
        li.innerHTML = task.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    task.value = "";
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},  false);