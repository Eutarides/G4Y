class SalesRow extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    connectedCallback() {
        document.addEventListener('hide-aside', (event => {
            this.toggleAside();
        }));
    };

    render() {

        this.shadow.innerHTML = 
        /*html*/
        `
        <style>
            .sales-items{
                display:flex;
                justify-content: space-between;
                flex-direction: column;
                gap:5rem;
            }

            .sales-items-row{
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap:6rem;
            }
        </style>

        <div class="sales-items-row">
            <slot name="sales-item"></slot>

            <slot name="sales-item"></slot>

            <slot name="sales-item"></slot>
        </div>

        `;

    }

    
}

customElements.define('sales-row-component', SalesRow);