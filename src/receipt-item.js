class ReceiptItem extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    };

    render() {

        this.shadow.innerHTML = 
        /*html*/
        `
        <style>

            h2{
                font-family: 'Lato', sans-serif;
            }

            h3{
                font-family: 'Lato', sans-serif;
            }

            h4{
                font-family: 'Lato', sans-serif;
            }

            h5{
                font-family: 'Lato', sans-serif;
            }

            .receipt-item{
                display:flex;
                flex-direction:row;
                justify-content: space-between;
            }

            .receipt-item-title{
                width:45%;
                color:white;
            }

            .receipt-item-quantity{
                color:white;
            }

            .receipt-item-price{
                display:flex;
                justify-content: space-between;
                flex-direction: column;
                padding:5% 0%;
                gap:0.5rem;
            }

            .actual-price h4{
                margin:0;
                color:white;
            }

            .former-price h4{
                margin:0;
                text-decoration: line-through;
                color:#4c496b;
            }
        </style>

        <div class="receipt-item">
            <div class="receipt-item-title">
                <h4>Toallas Portuguesas "The Game"</h4>
            </div>
            <div class="receipt-item-quantity">
                <h4>1</h4>
            </div>
            <div class="receipt-item-price">
                <div class="actual-price">
                    <h4>€ 36.81</h4>
                </div>
                <div class="former-price">
                    <h4>€ 50.99</h4>
                </div>
            </div>
        </div>

        `;

    }

    
}

customElements.define('receipt-item-component', ReceiptItem);