//Document is the DOM can be accessed in the console with document.window.
// Tree is from the top, html, body, p etc.

//Problem: User interaction does not provide the correct results.
//Solution: Add interactivity so the user can manage daily tasks.
//Break things down into smaller steps and take each step at a time.


// Event handling, user interaction is what starts the code execution.

var taskInput=document.getElementById("new-task");//Add a new task.
var addButton=document.getElementsByTagName("button")[0];//first button
var incompleteTaskHolder=document.getElementById("incomplete-tasks");//ul of #incompleteTasks
var completedTasksHolder=document.getElementById("completed-tasks");//completed-tasks


//New task list item
var createNewTaskElement=function(taskString){

    var listItem=document.createElement("li");

    //input (checkbox)
    var checkBox=document.createElement("input");//checkbx
    //label
    var label=document.createElement("label");//label
    //input (text)
    var editInput=document.createElement("input");//text
    //button.edit
    var editButton=document.createElement("button");//edit button

    //button.delete
    var deleteButton=document.createElement("button");//delete button
    var deleteButtonImg=document.createElement("img");//delete button image

    label.innerText=taskString;
    label.className='list__task-label';

    //Each elements, needs appending
    listItem.className = "list__item";
    checkBox.type="checkbox";
    checkBox.className = "list__checkbox"
    editInput.type="text";
    editInput.className="list__task-input";

    editButton.innerText="Edit"; //innerText encodes special characters, HTML does not.
    editButton.className="list__edit-btn";

    deleteButton.className="list__delete-btn";
    deleteButtonImg.src='./remove.svg';
    deleteButtonImg.className ="list__delete-img"
    deleteButton.appendChild(deleteButtonImg);


    //and appending.
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
}



var addTask=function(){
    console.log("Add Task...");
    //Create a new list item with the text from the #new-task:
    if (!taskInput.value) return;
    var listItem=createNewTaskElement(taskInput.value);

    //Append listItem to incompleteTaskHolder
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value="";

}

//Edit an existing task.

var editTask=function(){
    console.log("Edit Task...");
    console.log("Change 'edit' to 'save'");


    var listItem=this.parentNode;

    var editInput=listItem.querySelector('.list__task-input');
    var label=listItem.querySelector("label");
    var editBtn=listItem.querySelector(".list__edit-btn");
    var containsClass=listItem.classList.contains("list__item_edit-mode");
    //If class of the parent is .editmode
    if(containsClass){

        //switch to .editmode
        //label becomes the inputs value.
        label.innerText=editInput.value;
        editBtn.innerText="Edit";
    }else{
        editInput.value=label.innerText;
        editBtn.innerText="Save";
    }

    //toggle .editmode on the parent.
    listItem.classList.toggle("list__item_edit-mode");
};


//Delete task.
var deleteTask=function(){
    console.log("Delete Task...");

    var listItem=this.parentNode;
    var ul=listItem.parentNode;
    //Remove the parent list item from the ul.
    ul.removeChild(listItem);

}


//Mark task completed
var taskCompleted=function(){
    console.log("Complete Task...");

    //Append the task list item to the #completed-tasks
    var listItem=this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);

}


var taskIncomplete=function(){
    console.log("Incomplete Task...");
//Mark task as incomplete.
    //When the checkbox is unchecked
    //Append the task list item to the #incompleteTasks.
    var listItem=this.parentNode;
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem,taskCompleted);
}



var ajaxRequest=function(){
    console.log("AJAX Request");
}

//The glue to hold it all together.


//Set the click handler to the addTask function.
addButton.onclick=addTask;
addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);


var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
    console.log("bind list item events");
//select ListItems children
    var checkBox=taskListItem.querySelector("input[type=checkbox]");
    var editButton=taskListItem.querySelector(".list__edit-btn");
    var deleteButton=taskListItem.querySelector(".list__delete-btn");


    //Bind editTask to edit button.
    editButton.onclick=editTask;
    //Bind deleteTask to delete button.
    deleteButton.onclick=deleteTask;
    //Bind taskCompleted to checkBoxEventHandler.
    checkBox.onchange=checkBoxEventHandler;
}

//cycle over incompleteTaskHolder ul list items
//for each list item
for (var i=0; i<incompleteTaskHolder.children.length;i++){

    //bind events to list items chldren(tasksCompleted)
    bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
}




//cycle over completedTasksHolder ul list items
for (var i=0; i<completedTasksHolder.children.length;i++){
    //bind events to list items chldren(tasksIncompleted)
    bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
}




// Issues with usability don't get seen until they are in front of a human tester.

//prevent creation of empty tasks.

//Change edit to save when you are in edit mode.

// Comments for cross-check
console.log("Выполнено полностью:", 
"\n\nПравило '1.1 Отступы'",
"\nПравило '1.2 Нижний регистр написания'",
"\n***значения alt и value могут быть записаны с большой буквы, см. док с вопросами к заданию",
"\nПравило '1.3 Кавычки в HTML/CSS документе'",
"\nПравило '2.1 Форматирование'",
"\nПравило '2.2 Тип документа / Document Type'",
"\n***строка <!DOCTYPE html> добавлена http://htmlbook.ru/html/%21doctype",
"\nПравило '2.3 Символы-мнемоники'",
"\nПравило '2.4 Атрибут 'type''",
"\n***из первого линка с подключением шрифтов тип также удален, потому что подключается файл CSS, см. док с вопросами к заданию",
"\nПравило '3.1 Единый стиль именования селекторов (классов / id)'",
"\nПравило '3.2 Значимые названия идентификаторов и классов'",
"\nПравило '3.3 Лаконичность названий идентификаторов и классов'",
"\nПравило '3.4 Теговые селекторы'",
"\nПравило '3.5 Отступы в блоках'",
"\nПравило '3.6 Пробел после названий свойств'",
"\nПравило '3.7 Точка с запятой после свойств'",
"\nПравило '3.8 Разделение селекторов и свойств'",
"\nПравило '1.1 Семантика'",
"\nПравило '1.2 Альтернатива для мультимедиа'",
"\n***на мой взгляд все картинки в данном случае являются значимыми, а не декоративными",
"\nПравило '2.1 БЭМ'",
"\n***первый раз пользовалась именованием БЭМ, но очень старалась, если что-то не так, то прошу оставить комментарий (желательно с советом как было бы лучше сделать))",
"\n\nФункционал работает исправно",
"\nПожалуйста, разворачивайте названия коммитов полностью, в некоторых указано по два пункта правил"
)