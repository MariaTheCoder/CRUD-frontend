/* Defining buttons */
const submitBtn = document.getElementById("submit");
const clearBtn = document.getElementById("clear");

/* Defining grocery list */
const groceryList = document.getElementById("groceries");

/* Defining input item / new item on grocery list */
const inputItem = document.getElementById("input");



submitBtn.addEventListener("click", function() {
    
    let item = document.createElement("li");
    item.innerText = inputItem.value;
    groceryList.appendChild(item);
});

