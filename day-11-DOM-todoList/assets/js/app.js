const inputField = document.getElementById('todo');
const btnAdd = document.getElementById('btn-add');
const todoList = document.getElementById('todo-ul');

btnAdd.addEventListener("click", () => {
    const todoText = inputField.value.trim();
    if (todoText === "") {
        alert("Please enter a valid To-Do");
        return;
    }

    // New todo item creation
    const newTodo = document.createElement("li");
    newTodo.style.display = "flex";
    newTodo.style.justifyContent = "space-between";
    newTodo.style.alignItems = 'center';
    newTodo.style.marginBottom = '0.5rem';
    newTodo.style.paddingRight = '6rem';

    // Create a checkbox
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.style.margin = 0;
    checkBox.style.width = "18px"

    // Create a span to hold the todo text
    const todoSpan = document.createElement("span");
    todoSpan.innerText = todoText;

    // Create the update button
    const btnUpdate = document.createElement("button");
    btnUpdate.innerText = 'Update';
    btnUpdate.classList.add('btn');
    btnUpdate.style.backgroundColor = 'gray';
    btnUpdate.style.width = '5rem';

    btnUpdate.addEventListener("click", () => {
        const updateText = prompt("Enter new todo", todoSpan.innerText);
        if (updateText !== null && updateText.trim() !== "") {
            todoSpan.innerText = updateText;
        }
    });

    // Create the remove button
    const btnRemove = document.createElement('button');
    btnRemove.innerText = 'Remove';
    btnRemove.classList.add('btn');
    btnRemove.style.backgroundColor = 'red';
    btnRemove.style.width = '5rem';
    btnRemove.addEventListener("click", () => {
        newTodo.remove();
    });

    // Group the buttons
    const btnGroup = document.createElement("div");
    btnGroup.style.display = "flex";
    btnGroup.append(btnUpdate, btnRemove);

    // Append the checkbox, todo text, and buttons to the todo item
    newTodo.append(checkBox, todoSpan, btnGroup);
    todoList.append(newTodo);

    inputField.value = "";
});
