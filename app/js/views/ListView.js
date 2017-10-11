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
                    ${item.taskTitle}
                </li>

            `).join('')}
        `;
    }
}

// ${n.description}
