/* Defining buttons */
const submitBtn = document.getElementById("submit");
const clearBtn = document.getElementById("clear");

/* Defining grocery list */
const groceryList = document.getElementById("groceries");

/* Defining input item / new item on grocery list */
const inputItem = document.getElementById("input");

/* The eventlistener underneath adds a new element to list according to what is typed into input field*/
submitBtn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inputItem.value;
  groceryList.appendChild(item);
});

/* The eventlistener underneath clears grocery list completely */
clearBtn.addEventListener("click", function () {
  groceryList.innerHTML = "";
});

