/* Defining buttons */
const submitBtn = document.getElementById("submit");
const clearBtn = document.getElementById("clear");

/* Defining grocery list */
const groceryList = document.getElementById("groceries");

/* Defining input item / new item on grocery list */
const inputItem = document.getElementById("input");

/* The eventlistener underneath adds a new element to list according to what is typed into input field*/
submitBtn.addEventListener("click", function () {
  const item = create("li", "", ["grocery_item"])
  const itemName = create("span", inputItem.value, ["item_name"] );
  const actions = create("span", "", ["actions", "item_actions"])
  const updateBtn = create("button", "Update");
  const deleteBtn = create("button", "Delete");

  deleteBtn.addEventListener("click", function() {
      groceryList.removeChild(this.parentElement.parentElement);
  });

  updateBtn.addEventListener("click", function() {
      alert("I was clicked!");
  });

  item.appendChild(itemName);
  actions.appendChild(updateBtn);
  actions.appendChild(deleteBtn);
  item.appendChild(actions);
  groceryList.appendChild(item);
});

/* The eventlistener underneath clears grocery list completely */
clearBtn.addEventListener("click", function () {
  groceryList.innerHTML = "";
});


function create(element, innerText="", arrayOfClasses=[], id="") {
    const resultingElement = document.createElement(element);
    resultingElement.id = id;
    resultingElement.innerText = innerText;
    arrayOfClasses.forEach(cls => {
        resultingElement.classList.add(cls);
    });

    return resultingElement;
}