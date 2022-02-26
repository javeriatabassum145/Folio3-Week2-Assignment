// Remove All button function 
function remove_all(){
    alert("Are you sure to remove all the items?")
    document.getElementById("ul").innerHTML = "";
}

// Close button action function 
let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length ; i++){
    close[i].onclick = function(){
        this.parentElement.style.display = "none";
    }
}

// Add button function 
function add_press(){
    let li = document.createElement("li");
    let value = document.getElementById("input").value;
    let creating_li = document.createTextNode(value);
    li.appendChild(creating_li);
    if (value == ""){
        alert("Enter something");
    }
    else{
        document.getElementById("ul").appendChild(li);
    }

    let span = document.createElement("span");
    let close_icon = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(close_icon);
    li.appendChild(span);
    document.getElementById("input").value = "";

    for (i = 0; i < close.length; i++){
        close[i].onclick = function(){
            this.parentElement.style.display = "none";
        }
    }
}

