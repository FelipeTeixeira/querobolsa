class ListView extends View {

    constructor(element) {
        super(element);
    }

    template(model) {

        return `
            ${model.tasks.map(item => `

                <li onclick="taskController.openNewTask(), taskController.editOpen(${item.id})" id="list-id-${item.id}" class="list-task">
                    <svg class="icon icon-check">
                        <use xlink:href="#icon-check"></use>
                    </svg>
                    ${item.taskTitle}
                    <svg class="icon icon-dropdown">
                        <use xlink:href="#icon-dropdown"></use>
                    </svg>
                </li>

            `).join('')}
        `;
    }
}

// ${n.description}
