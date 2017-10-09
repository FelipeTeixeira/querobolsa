class TaskController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._fieldTaskTitle = $('#taskTitle');
        this._fieldDescription = $('#description');
        this._btnSubmit = $("#btnSend");

        this._listTask = new ListTask();

        this._listView = new ListView($('#listView'));
        this._listView.update(this._listTask);

        this._message = new Message();
        this._messageView = new MessageView($('#messageView'));
        this._messageView.update(this._message);

    }

    addTask(event) {
        event.preventDefault();
        this._listTask.addTask(this._createTask());
        this._listView.update(this._listTask);

        this._message.messageText = 'Create Task';

        this._messageView.update(this._message);

        this._clearForm();
    }

    triggerTask() {
        this._btnSubmit.click();
    }

    _createTask() {

        return new Task(
            this._fieldTaskTitle.value,
            this._fieldDescription.value);
    }

    _clearForm() {

        this._fieldTaskTitle.value = "";
        this._fieldDescription.value = "";

        // this._fieldTaskTitle.focus();
    }
}
