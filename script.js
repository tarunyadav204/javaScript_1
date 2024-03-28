const inputBox = document.getElementById("input-box");
const listItm = document.getElementById("list-container");

function AddTsk(){
    if(inputBox.value==="")
    {
        alert("You Must Write Something");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listItm.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savedata();
}

listItm.addEventListener("click" , function(e){
    if(e.target.tagName === 'LI')
    {
       e.target.classList.toggle("checked");
       savedata();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        savedata();
    }
});

function savedata(){
    localStorage.setItem("data", listItm.innerHTML);
}

function showTask(){
    listItm.innerHTML = localStorage.getItem("data");
}
showTask();