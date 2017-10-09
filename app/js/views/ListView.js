class ListView extends View {

    constructor(element) {
        super(element);
    }

    template(model) {

        return `
            ${model.tasks.map(n => `

                <li>
                    <svg class="icon icon-check">
                        <use xlink:href="#icon-check"></use>
                    </svg>
                    ${n.taskTitle}
                </li>

            `).join('')}
        `;
    }
}

// ${n.description}
