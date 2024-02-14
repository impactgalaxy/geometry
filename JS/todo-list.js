const complete_head = document.getElementById("complete-header");
const complete_parent = document.getElementById("completed-list")
const parent = document.getElementById("ol-parent");
parent.addEventListener("click", function (event) {
    if (event.target !== parent) {
        event.target.parentNode.removeChild(event.target);
        complete_head.style.display = "none";
        event.target.setAttribute("title", "Completed")
        complete_parent.appendChild(event.target);
    } else {
        event.stopPropagation();
    }
});


complete_parent.addEventListener("click", function (event) {
    if (event.target.parentNode.children.length === 1) {
        complete_head.style.display = "block";
    }
    if (event.target.tagName === "LI") {
        event.target.parentNode.removeChild(event.target);
    }
    event.stopPropagation();

})

function addTodo() {
    const item = document.getElementById("item");
    const parent = document.getElementById("ol-parent");
    if (item.value === "") {
        alert("Please add item or task");
    }
    else {
        const li = document.createElement("li");
        li.innerText = item.value;
        parent.appendChild(li);

    }
    item.value = "";
}

