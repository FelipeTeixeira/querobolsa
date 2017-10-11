class ListView extends View {

    constructor(element) {
        super(element);
    }

    template(model) {

        return `
            ${model.tasks.map(item => `

                <li onclick="taskController.openNewTask(), taskController.editOpen(${item.id})">
                    <svg class="icon icon-check">
                        <use xlink:href="#icon-check"></use>
                    </svg>
                    ${item.taskTitle} -- ${item.id} * ${item.description} *
                </li>

            `).join('')}
        `;
    }
}

// ${n.description}
