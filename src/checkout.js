class Checkout extends HTMLElement {

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

            .checkout{
                display:flex;
                justify-content: space-between;
                padding:4% 7%;
                gap:0.5rem;
            }

            .payment-area{
                background-color: #5b52bc;
                width:65%;
                padding:1% 3%;
                display:flex;
                gap:1.5rem;
                flex-direction: column;
                border-radius:5px;
            }

            .payment-title{
                background-color: #7e77ca;
                width:25%;
                border-radius:5px;
            }

            .payment-title h3{
                text-align: center;
                font-size: 1.5rem;
                margin:0.5rem;
                color:white;
            }

            .payment-methods{
                display:flex;
                flex-direction: column;
                justify-content: space-between;
                border-radius: 5px;
                gap:0.5rem;
            }

            .receipt-area{
                background-color: #5b52bc;
                width:35%;
                display:flex;
                flex-direction: column;
                padding:1% 2%;
                border-radius:5px;
            }

            .receipt-area-details{
                display:flex;
                flex-direction: column;
                gap:0.3rem;
            }

            .total-subtotal{
                background-color: #7e77ca;
                border-radius:5px;
                display:flex;
                flex-direction: row;
                padding:0% 3%;
                justify-content: space-between;
                align-items: center;
                border:solid 1px #363070;
                color:white;
            }

            .subtotal-price{
                background-color:white;
                height:50%;
                align-items: center;
                display:flex;
                border-radius: 5px;
            }

            .subtotal-price h4{
                margin:0.3rem 1rem;
                color:black;
            }

            .receipt-area-items{
                background-color: #7e77ca;
                border:solid 1px #363070;
                border-radius:5px;
                padding:0% 3%;
                gap:0.3rem;
            }

            .receipt-total{
                background-color: #7e77ca;
                border-radius:5px;
                display:flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                border:solid 1px #363070;
                padding-bottom:4%;
            }

            .total-price{
                display:flex;
                flex-direction: row;
                justify-content: space-between;
                width:95%;
                align-items: center;
            }

            .total-price-title{
                color:white;
            }

            .total-price-content{
                background-color:white;
                height:50%;
                align-items: center;
                display:flex;
                border-radius: 5px;
            }

            .total-price-content h3{
                margin:0.3rem 1rem;
            }

            .total-button{
                background-color:#4030eb;
                border:solid 1px #363070;
                width:80%;
                font-size: 1.5rem;
                border-radius:5px;
                color:white;
            }
        </style>

        <div class="checkout">
            <div class="payment-area">
                <div class="payment-title">
                    <h3>Métodos de pago</h3>
                </div>
                <div class="payment-methods">
                    <slot name="payment-method"></slot>
                </div>
            </div>
            <div class="receipt-area">
                <div class="receipt-area-details">
                    <div class="total-subtotal">
                        <div class="subtotal-title">
                            <h4>Subtotal (2 artículos)</h4>
                        </div>
                        <div class="subtotal-price">
                            <h4>€ 73.62</h4>
                        </div>
                    </div> 
                    <div class="receipt-area-items">
                        <slot name="receipt-item"></slot>
                    </div>
                    <div class="receipt-total">
                        <div class="total-price">
                            <div class="total-price-title">
                                <h4>Precio total</h4>
                            </div>
                            <div class="total-price-content">
                                <h3>€ 73.62</h3>
                            </div>
                        </div>
                        <button class="total-button">Pagar con Paypal </button>
                    </div>
                </div>
            </div>
        </div>

        `;

    }

    
}

customElements.define('checkout-component', Checkout);