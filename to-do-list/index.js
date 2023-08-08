var cnt=0;
var taskArray = [];

var Content = document.getElementById("to-do");
var Priority = document.getElementById("priority");


function addTask() {
    var DON = document.getElementById("DON");
    if(Content.value.length != 0){

        taskArray.push({
            id: cnt,
            check: DON.checked , 
            contents: Content.value, 
            priority: Priority.value
        });
        console.log(taskArray[cnt]);

        const taskList = document.getElementById("show");

        const taskOption = document.createElement("li");
        taskOption.id = "options";//필요할까?
        taskOption.value = cnt;

        const modify = document.createElement('button');
        modify.id = modify;
        modify.innerText = "수정 확인";

        const taskSelect = document.createElement("select");
        taskSelect.id = "taskSelect";
        const priorityList = ['낮음','보통','높음','아주 높음'];
        for(const i of priorityList)
        {
            const option = document.createElement("option");
            option.id = 'option';
            option.text = i; /*taskArray[cnt].priority;*/
            option.value = i;
            taskSelect.add(option);
        }
        console.log(taskArray[cnt].priority);
        taskArray[cnt].priority.selected;

        const taskContent = document.createElement("input");
        taskContent.type = "text";
        taskContent.value = Content.value;

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.checked = DON.checked;

        //출력돼야 하는 것들 checkbox, text, option
        taskOption.appendChild(checkBox);
        taskOption.appendChild(taskContent);
        taskOption.appendChild(taskSelect);
        taskList.appendChild(taskOption);
        taskOption.appendChild(modify);

        ///초기화
        DON.checked = false;
        Content.value = null;
        Priority.value = "낮음";

        cnt++;
    }
    else { alert("Please type anything"); }
}

const modifyButton = document.getElementById("modify");
var Op = document.getElementById('options');
modifyButton.onclick = infoModify(modifyButton.value);

function infoModify(ii) {
    console.log(Op[ii].value);
    /*var modify = document.querySelector("button #modify");
    taskArray[modify.value].check = DON.checked;
    taskArray[modify.value].contents = Content.value;
    taskArray[modify.value].priority = Priority.value;*/

}

/*
function taskAll() {

}

function taskDone() {

}

function taskNotDone() {

}*/