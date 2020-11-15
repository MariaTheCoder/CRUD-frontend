
const submitBtn = document.getElementById("submit");
const inputItem = document.getElementById("input");
const groceryList = document.getElementById("groceries");


submitBtn.addEventListener("click", function() {
    
    let item = document.createElement("li");
    item.innerText = inputItem.value;
    groceryList.appendChild(item);
    // alert(inputItem.value);
});