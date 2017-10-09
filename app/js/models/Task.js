class Task {

    constructor(taskTitle, description) {

        this._taskTitle = taskTitle;
        this._description = description;
        Object.freeze(this);
    }

    get taskTitle() {

        return this._taskTitle;
    }

    get description() {

        return this._description;
    }
}
