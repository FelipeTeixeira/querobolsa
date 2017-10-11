class Task {

    constructor(id, taskTitle, description) {
        this._id = id;
        this._taskTitle = taskTitle;
        this._description = description;
    }

    get id() {
        return this._id;
    }

    get taskTitle() {
        return this._taskTitle;
    }

    set taskTitle(value) {
        this._taskTitle = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }
}
