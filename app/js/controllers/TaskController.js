class TaskController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._id = 0;
        this._fieldTaskId = $('#taskId');
        this._fieldTaskTitle = $('#taskTitle');
        this._fieldDescription = $('#description');
        this._btnSubmit = $("#btnSend");
        this._cardAdd = $(".cardContainer");

        this._listTask = new ListTask();

        this._listView = new ListView($('#listView'));
        this._listView.update(this._listTask);

        this._message = new Message();
        this._messageView = new MessageView($('#messageView'));
        this._messageView.update(this._message);

    }

    verificarIs(event) {
        event.preventDefault();

        if (this._fieldTaskId.value == "") {
            this._addTask();
        } else {
            this._editTask();
        }
    }

    _editTask() {
        this._listTask._tasks.forEach(function(element) {
            if(element.id == this._fieldTaskId.value) {
                element.taskTitle = this._fieldTaskTitle.value;
                element.description = this._fieldDescription.value;
            }
        }, this);

        this._listView.update(this._listTask);
        this._message.messageText = 'Edit Success';
        this._messageView.update(this._message);

        this._clearForm();
    }

    _addTask(event) {
        this._listTask.addTask(this._createTask());
        this._listView.update(this._listTask);

        this._message.messageText = 'Create Task';
        this._messageView.update(this._message);

        this._clearForm();

    }

    triggerTask() {
        this._btnSubmit.click();
    }

    closeTask(event) {
        event.preventDefault();
        this._cardAdd.classList.remove("is-cardAdd-show");
        this._clearForm();
    }

    _createTask() {

        return new Task(
            this._id++,
            this._fieldTaskTitle.value,
            this._fieldDescription.value);
    }

    editOpen(id) {

        let task = this._listTask._tasks[id];

        this._fieldTaskId.value = task.id;
        this._fieldTaskTitle.value = task.taskTitle;
        this._fieldDescription.value = task.description;
    }

    openNewTask() {
        this._cardAdd.classList.add("is-cardAdd-show");
        this._clearForm();
    }

    _clearForm() {
        this._fieldTaskId.value = "";
        this._fieldTaskTitle.value = "";
        this._fieldDescription.value = "";
    }
}
