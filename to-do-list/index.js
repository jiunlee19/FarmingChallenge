function addTask() {
    var Content = document.getElementById("to-do");
    if(Content.value.length != 0){
        const taskList = document.getElementById("show");

        const taskOption = document.createElement("li");

        const taskPriority = document.createElement("p");
        var Priority = document.getElementById("priority");
        taskPriority.innerText = Priority.value;

        const taskContent = document.createElement("p");
        taskContent.innerText = Content.value;
        Content.innerText = '';
        Content.value = null;

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";


        //출력돼야 하는 것들 checkbox, text, option
        taskOption.appendChild(checkBox);
        taskOption.appendChild(taskContent);
        taskOption.appendChild(taskPriority);
        taskList.appendChild(taskOption);
    }
    else { alert("Please type anything"); }

}