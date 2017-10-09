class View {

    constructor(element) {

        this._element = element;
    }

    template() {

        throw new Error('Template required');
    }

    update(model) {

        this._element.innerHTML = this.template(model);
    }
}
