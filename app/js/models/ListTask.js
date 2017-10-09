class ListTask {

    constructor() {

        this._tasks = [];
    }

    addTask(task) {

        this._tasks.push(task);
    }

    get tasks() {

        return this._tasks;
    }
}
