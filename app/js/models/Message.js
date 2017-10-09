class Message {

    constructor(messageText='') {

        this._messageText = messageText;
    }

    get messageText() {

        return this._messageText;
    }

    set messageText(messageText) {

        this._messageText = messageText;
    }
}
