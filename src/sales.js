class Sales extends HTMLElement {

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
            .sales{
                display:flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                gap:2rem;
                margin-top:1rem;
                padding-bottom:5rem;
            }

            .sales-title{
                background-color: #ff5942;
                border-radius:10px;
                padding-left:1.5%;
                padding-right:1.5%;
            }

            .sales-title h2{
                color:white;
                font-size:2rem;
            }

            .sales-items{
                display:flex;
                justify-content: space-between;
                flex-direction: column;
                gap:5rem;
            }
        </style>

        <div class="sales">
            <div class="sales-title">
                <h2>Ofertas</h2>
            </div>
            <div class="sales-items">
                <slot name="sales-items-row">
                </slot>
                <slot name="sales-items-row">
                </slot>               
            </div>
        </div>

        `;

    }

    
}

customElements.define('sales-component', Sales);