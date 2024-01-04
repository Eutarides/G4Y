class Item extends HTMLElement {

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

            .item{
                display:flex;
                justify-content:space-around;
                flex-direction: row;
                padding-top:5%;
                padding-bottom:5%;
                padding-left:7%;
                padding-right:7%;
                gap:8rem;
            }

            .item-menu{
                display:flex;
                justify-content: space-between;
                background-color: #5b52bc;
                flex-direction: column;
                border-radius:5px;
                padding:5% 5%;
                border:solid 2px  #363070;
            }

            .item-menu-categories{
                display:flex;
                flex-direction: column;
                justify-content: space-between;
                gap:1rem;
            }

            .item-menu-title{
                background-color: #7e77ca;
                border:solid 2px  #363070;
                border-radius:5px;
                padding-left:1rem;
                padding-right:1rem;
                display: inline;
                width: fit-content;
                color:white;
            }

            .item-menu-description{
                background-color: #7e77ca;
                border:solid 2px  #363070;
                border-radius:5px;
                padding-left:1rem;
                padding-right:1rem;
                display: inline;
                width: fit-content;
                color:white;
            }

            .item-menu-especs{
                background-color: #7e77ca;
                border:solid 2px  #363070;
                border-radius:5px;
                padding-left:1rem;
                padding-right:1rem;
                display: inline;
                width: fit-content;
                color:white;
            }

            .required{
                gap:1rem;
                display:flex;
                flex-direction: column;
                gap:1rem;
                padding-top:5%;
                padding-bottom:3%;
            }

            .required-item{
                display:flex;
                flex-direction:row;
                gap:0.6rem;
                font-family: 'Lato', sans-serif;
            }

            .required-title{
                font-weight: 700;
            }

            .genre{
                display:flex;
                flex-direction: row;
                gap:1rem;
                padding-top:3%;
            }

            .genre-title{
                font-weight: 700;
            }

            .team{
                display:flex;
                flex-direction:row;
                gap:1rem;
            }

            .team-title{
                font-weight: 700;
            }

            .item-menu-checkout{
                width:40%;
                padding-left:30%;
            }
            .checkout-button{
                width:100%;
                background-color:#ff8675;
                border-radius:10px;
                border-color:#d15747;
                cursor:pointer;
            }

            .checkout-button h4{
                font-size:1.5rem;
                margin:0.5rem;
                font-weight:600;
                color:white;
            }
        </style>

        <div class="item">
            <div class="item-image">
                <picture>
                    <a><img src="../images/toallas-portuguesas-TheGame-resized.png"></a>
                </picture>
            </div>
            <div class="item-menu">
                <div class="item-menu-categories">
                    <div class="item-menu-title">
                        <h3>Toallas Portuguesas:"The Game"</h3>
                    </div>
                    <div class="item-menu-description">
                        <h4>Toallas Portuguesas: "The Game" es el primer juego basado en la aclamada saga de novelas con su mismo nombre. En esta entrega exploraremos Oporto de la mano de Jôao,
                            el hijo de una estirpe milenaria de costureros especializados en la procucción de toallas con capacidades extraordinarias. ¿Serás capaz de parar a las fuerzas del mal que pretenden
                            destruir la paz en Portugal? Descúbrelo en este apasionante RPG.
                        </h4>
                    </div>
                    <div class="item-menu-especs">
                        <div class="item-menu-especs-details">
                            <div class="genre">
                                <div class="genre-title">Género:</div>
                                <div class="genre-description">Action RPG</div>
                            </div>
                            <div class="team">
                                <div class="team-title">Desarrolladores:</div>
                                <div class="team-description">Jogo Bonito</div>
                            </div>
                        </div>
                        <div class="required">
                            <div class="required-item">
                                <div class="required-title">SO:</div>
                                <div class="required-description">Windows 10</div>
                            </div>
                            <div class="required-item">
                                <div class="required-title">Procesador:</div>
                                <div class="required-description">Intel Core i3-2100 or AMD Phenom II X4 965</div>
                            </div>
                            <div class="required-item">
                                <div class="required-title">Memoria:</div>
                                <div class="required-description">6 GB de RAM</div>
                            </div>
                            <div class="required-item">
                                <div class="required-title">Gráficos:</div>
                                <div class="required-description">NVIDIA GeForce GT 730, 2 GB or AMD Radeon HD 7570, 1GB or Intel HD Graphics 630</div>
                            </div>
                            <div class="required-item">
                                <div class="required-title">DirectX:</div>
                                <div class="required-description">Versión 11</div>
                            </div>
                            <div class="required-item">
                                <div class="required-title">Almacenamiento:</div>
                                <div class="required-description">20 GB de espacio disponible</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item-menu-checkout">
                    <button class="checkout-button">
                        <h4>Añadir al carrito</h4>
                    </button>
                </div>
            </div>
        </div>

        `;

    }

    
}

customElements.define('item-component', Item);