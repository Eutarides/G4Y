class PaymentMethod extends HTMLElement {

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

            .payment-method{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding:0% 5%;
                border:solid 1px #363070;
                border-radius: 5px;
                background-color: #7e77ca;
            }

            .payment-method:hover{
                cursor:pointer;
            }

            .selection{
                display: flex;
                flex-direction: row;
                gap:5rem;
                align-items: center;
            }

            .selection-filled{
                display:none;
                fill:white;
            }

            .selection-filled.active{
                display:block;
            }

            .selection-empty{
                display:none;
                fill:white;
            }

            .selection-empty.active{
                display:block;
            }

            .selection-image picture a img{
                width:140px;
            }

            svg{
                width: 1.5em;
            }
        </style>

        <div class="payment-method">
            <div class="selection">
                <div class="selection-filled">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-slice-8</title><path d="M12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z" /></svg>
                </div>
                <div class="selection-empty active">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                </div>
                <div class="selection-image">
                    <picture>
                        <a><img src="../images/paypal.png"></a>
                    </picture>
                </div>
            </div>
            <div class="payment-method-title">
                <h3>Paypal</h3>
            </div>
        </div>

        `;

    }

    
}

customElements.define('payment-method-component', PaymentMethod);