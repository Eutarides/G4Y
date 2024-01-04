class CartItem extends HTMLElement {

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
            .cart-details-item{
                background-color: #7e77ca;
                width:80%;
                border-radius:5px;
                padding-left:1%;
                padding-top:0.1rem;
                padding-bottom:0.1rem;
                margin-bottom:1rem;
                border:solid 1px #363070;
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
                background-color: #5b52bc;
                border-radius:5px;
                border:solid 1px #363070;
            }

            .item-description-title h4{
                margin:0.4rem;
                color:white;
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

            .button-count {
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
                border:solid 1px #363070;
                display:flex;
                flex-direction: row;
                align-items: center;
                height: 25%;
                padding-left:2%;
                padding-right:2%;
                margin-top:10%;
                border-radius:5px;
            }
        </style>

        <div class="cart-details-item">
            <div class="item-image">
                <picture>
                    <a><img src="../images/toallas-portuguesas-TheGame-cart.png"></a>
                </picture>
            </div>
            <div class="item-description">
                <div class="item-description-section">
                    <div class="item-description-title">
                        <h4>Toallas Portuguesas: "The Game"</h4>
                    </div>
                    <div class="item-description-count">
                        <button class="button-count no-active" disabled>-</button>
                        <input type="text" readonly class="number-product" value="1">
                        <button class="button-count">+</button>
                    </div>
                </div>
                <div class="item-description-price">
                    <h3>€ 36.81</h3>
                </div>
            </div>
        </div>

        `;

    }

    
}

customElements.define('cart-item-component', CartItem);