var TaskController = (function () {

    const $ = document.querySelector.bind(document);

    return class TaskController {

        constructor() {

            this._id = 0;
            this._fieldTaskId = $('#taskId');
            this._fieldTaskTitle = $('#taskTitle');
            this._fieldDescription = $('#description');
            this._cardAdd = $(".cardContainer");

            this._listTask = new ListTask();

            this._listView = new ListView($('#listView'));
            this._listView.update(this._listTask);

            this._message = new Message();
            this._messageView = new MessageView($('#messageView'));
            this._messageView.update(this._message);

        }

        verifyIs(event) {

            if (this._fieldTaskId.value == "") {
                this._addTask();
            } else {
                this._editTask();
            }
            this._fieldTaskTitle.focus();

            this._listRemoveActive();
        }

        _editTask() {

            this._listTask._tasks.forEach(item => {
                if(item.id == this._fieldTaskId.value) {
                    item.taskTitle = this._fieldTaskTitle.value;
                    item.description = this._fieldDescription.value;
                }
            }, this);

            this._listView.update(this._listTask);
            this._message.messageText = 'Edit Success';
            this._messageView.update(this._message);

            this._clearForm();
        }

        _addTask(event) {

            if(this._fieldTaskTitle.checkValidity()) {
                this._listTask.addTask(this._createTask());
                this._listView.update(this._listTask);

                this._message.messageText = 'Create Task';
                this._messageView.update(this._message);
                this._clearForm();
            }
        }

        closeTask(event) {

            event.preventDefault();
            this.verifyIs();
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

            this._listRemoveActive();
            $("#list-id-" + id).classList.add("is-active");
            let task = this._listTask._tasks[id];
            this._fieldTaskId.value = task.id;
            this._fieldTaskTitle.value = task.taskTitle;
            this._fieldDescription.value = task.description;
        }

        openNewTask() {

            this._cardAdd.classList.add("is-cardAdd-show");
            this._clearForm();
        }

        keyCodeEnter(event) {

            if(event.keyCode === 13){
                this.verifyIs();
            }
        }

        _listRemoveActive() {
            document.querySelectorAll('.list-task').forEach(function(item) {
                item.classList.remove("is-active");
            });
        }

        _clearForm() {

            this._fieldTaskId.value = null;
            this._fieldTaskTitle.value = null;
            this._fieldDescription.value = null;
        }
    }

})();
