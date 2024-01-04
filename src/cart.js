class Cart extends HTMLElement {

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

            .cart{
                display:flex;
                flex-direction:row;
                justify-content: space-between;
                margin-right:5%;
                margin-left:5%;
                margin-top:3%;
                margin-bottom:3%;
                padding-left:2%;
                padding-right:2%;
            }

            .cart-details{
                display:flex;
                flex-direction: column;
                justify-content: space-between;
                background-color: #5b52bc;
                width:77.5%;
                border-radius:5px;
                padding-left:2%;
                gap:1rem;
            }

            .cart-details-title{
                margin-top:1%;
                padding-left:1%;
                background-color: #f3a59b;
                width:20%;
                border-radius:5px;
                display:flex;
                flex-direction: column;
                align-items: center;
                border:solid 1px #d35645;
            }

            .cart-details-title h3{
                font-size:1.5rem;
                margin:0.5rem;
                color:white;
            }

            .cart-details-item{
                background-color: #f3a59b;
                width:80%;
                border-radius:5px;
                padding-left:1%;
                padding-top:0.1rem;
                padding-bottom:0.1rem;
                margin-bottom:1rem;
                border:solid 1px #d35645;
                display:flex;
                flex-direction: row;
                gap:1rem;
            }

            .item-image{
                display:flex;
                flex-direction: row;
                align-items: center;
                padding:0.5rem;
            }

            .item-description{
                display:flex;
                flex-direction:row;
                justify-content: space-between;
                width:80%;
            }

            .item-description-section{
                display:flex;
                flex-direction: column;
                justify-content: space-around;
                padding-bottom:2%;
            }

            .item-description-title{
                background-color: #f5cec9;
                border-radius:5px;
                border:solid 1px #d35645;
            }

            .item-description-title h4{
                margin:0.4rem;
            }

            .item-description-count{
                display:flex;
                flex-direction: row;
                align-items: center;
                gap:0.3rem;
            }

            .item-description-count a {
                text-decoration: none;
                font-weight: 700;
                color: black;

            }

            .button-count{
                display: flex;
                width: 1rem;
                height: 1.6rem;
                background-color: #2196F3;
                color: white;
                font-size: 24px;
                border: none;
                outline: none;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
            }

            .button-count:hover{
                cursor:pointer;
            }

            .button-count:active {
                background-color: #1565C0;
            }

            .number-product {
                display: inline-block;
                width: 1.5rem;
                height: 1.5rem;
                font-size: 24px;
                border: 1px solid silver;
                text-align: center;
            }

            :disabled {
                background-color: silver;
            }

            .item-description-price{
                background-color: white;
                border:solid 1px #d35645;
                display:flex;
                flex-direction: row;
                align-items: center;
                height: 25%;
                padding-left:2%;
                padding-right:2%;
                margin-top:10%;
                border-radius:5px;
            }


            .cart-price{
                background-color: #5b52bc;
                width:20%;
                border-radius:5px;
                padding-bottom:1%;
                height:25%;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap:1.5rem;
            }

            .cart-price-details{
                display:flex;
                flex-direction: row;
                gap:1rem;
            }

            .title{
                background-color: #f3a59b;
                border:solid 1px #d35645;
                margin-top:0.5rem;
                text-align: center;
                white-space: nowrap;
                border-radius:5px;
            }

            .title h3{
                margin:0.3rem;
                color:white;
            }

            .total{
                background-color: white;
                border:solid 1px #363070;
                margin-top:0.5rem;
                text-align: center;
                white-space: nowrap;
                border-radius:5px; 
            }

            .total h3{
                margin:0.3rem;
            }

            .cart-price-button button{
                background-color:rgb(243, 133, 8);
                border-radius:5px;
                border:solid 1px #363070;
                cursor:pointer;
                font-size:1.3rem;
                color:white;
                font-weight:600;
            }
        </style>

        <div class="cart">
            <div class="cart-details">
                <div class="cart-details-title">
                    <h3>Tu carrito</h3>
                </div>
                <div class="cart-details-items">
                    <slot name="cart-item"></slot>

                    <slot name="cart-item"></slot>
                </div>
            </div>
            <div class="cart-price">
                <div class="cart-price-details">
                    <div class="title">
                        <h3>Precio total</h3>
                    </div>
                    <div class="total">
                        <h3>€ 73.62</h3>
                    </div>
                </div>
                <div class="cart-price-button">
                    <button>Continuar pago</button>
                </div>
            </div>
        </div>

        `;

    }

    
}

customElements.define('cart-component', Cart);