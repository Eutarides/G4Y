class HomeImage extends HTMLElement {

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
            .home-image{
                position:relative;
                overflow:hidden;
            }

            .home-image-picture{
                overflow:hidden;
            }

            .home-image-title{
                position:absolute;
                z-index: 1001;
                top:15%;
                left:42%;
            }

            .home-image-title h2{
                font-size:3rem;
                color:white;
            }

            .home-image-subtitle{
                position:absolute;
                z-index: 1001;
                top:75%;
                left:44%;
            }

            .home-image-subtitle{
                font-size:1.2rem;
                color:white;
            }
        </style>

        <div class="home-image">
            <picture>
                <a><img src="../images/bolitakinki.webp"></a>
            </picture>
            <div class="home-image-title">
                <h2>Bolitakinki 3</h2>
            </div>
            <div class="home-image-subtitle">
                <h3>Regresa tras el éxodo</h3>
            </div>
        </div>

        `;

    }

    
}

customElements.define('home-image-component', HomeImage);