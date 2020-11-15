/* Defining buttons */
const submitBtn = document.getElementById("submit");
const clearBtn = document.getElementById("clear");

/* Defining grocery list */
const groceryList = document.getElementById("groceries");

/* Defining input item / new item on grocery list */
const inputItem = document.getElementById("input");

inputItem.addEventListener("keydown", function(event) {
  if(event.key === "Enter") {
    event.preventDefault();
    submitBtn.click();
  }
});

/* The eventlistener underneath adds a new element to list according to what is typed into input field*/
submitBtn.addEventListener("click", function () {
  const item = create("li", "", ["grocery_item"]);
  const itemName = create("span", inputItem.value, ["item_name"]);
  const actions = create("span", "", ["actions", "item_actions"]);
  const updateBtn = create("button", "Update");
  const deleteBtn = create("button", "Delete");

  if(inputItem.value.trim() === "") return alert("Please type in an item");

  inputItem.value = "";

  deleteBtn.addEventListener("click", function () {
    groceryList.removeChild(this.parentElement.parentElement);

    inputItem.disabled = false;
  });

  updateBtn.addEventListener("click", function () {

    /* This code expresses what happens in update-mode */
    if(this.innerText === "Update") {
      this.innerText = "Save"
      inputItem.value = "";
      inputItem.disabled = true;

      const currentValue = this.parentElement.previousSibling.innerText;
      this.parentElement.parentElement.removeChild(this.parentElement.previousSibling);

      const inputNewValue = create("input");

      inputNewValue.value = currentValue;
      this.parentElement.parentElement.prepend(inputNewValue);
    } 
    else {

      const newValue = this.parentElement.previousSibling.value;

      if(newValue.trim() === "") {
        inputItem.disabled = true;

        return alert("Please type in an element");
      }
      else {

        inputItem.disabled = false;

        /* This code expresses what happens upon clicking 'save' / exiting update-mode */
        this.innerText = "Update";
    
        this.parentElement.parentElement.removeChild(this.parentElement.previousSibling);
  
        const itemSpan = create("span", newValue, ["item_name"]);
        
        this.parentElement.parentElement.prepend(itemSpan);
      
      }

    };
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

/* Function to create a new element given 3 parameters, being element, inner text and class(es) */
function create(element, innerText = "", arrayOfClasses = [], id = "") {
  const resultingElement = document.createElement(element);
  resultingElement.id = id;
  resultingElement.innerText = innerText;
  arrayOfClasses.forEach((cls) => {
    resultingElement.classList.add(cls);
  });

  return resultingElement;
}
