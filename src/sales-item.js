class SalesItem extends HTMLElement {

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

            .sales-item{
                display:flex;
                flex-direction: row;
                gap:1rem;
                background-color: #ff8675;
                border-radius: 15px;
                padding:3%;
            }

            .sales-item:hover{
                cursor: pointer;
                background-color:#ff5942;
            }

            .sales-item-image{
                display:flex;
                flex-direction: row;
                align-items: center;
            }

            .sales-item h4{
                color:white;
                margin:0;
            }

            .sales-item-title{
                font-size:1.5rem;
            }

            .sales-item-platform{
                font-size:1.5rem;
            }

            .sales-item h5{
                color:white;
                margin:0;
            }

            .sales-item-former-price{
                text-decoration: line-through;
                text-decoration-color: white;
            }

            .sales-item h6{
                color:rgb(168, 20, 20);
                border:solid 1px rgb(168, 20, 20);
                width:40px;
                border-radius:5px;
                padding-left:5px;
                font-size:1rem;
                margin:0;
            }

            .sales-item-content{
                gap:1rem;
                display:flex;
                flex-direction: column;
            }
        </style>

        <div class="sales-item">
            <div class="sales-item-image">
                <picture>
                    <a><img src="../images/toallas-portuguesas-TheGame (1).png"></a>
                </picture>
            </div>
            <div class="sales-item-content">
                <div class="sales-item-title">
                    <h5>Toallas Portuguesas "The Game"</h5>
                </div>
                <div class="sales-item-platform">
                    <h5>PC</h5>
                </div>
                <div class="sales-item-actual-price">
                    <h4>€ 36.81</h4>
                </div>
                <div class="sales-item-former-price">
                    <h5>€ 50.99</h5>
                </div>
                <div class="sales-item-discount">
                    <h6>28%</h6>
                </div>
            </div>
        </div>

        `;

    }

    
}

customElements.define('sales-item-component', SalesItem);