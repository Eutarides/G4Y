class Nav extends HTMLElement {

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
            .nav{
                display:flex;
                flex-direction: column;
                background-color: #5b52bc;
            }

            .nav-menu{
                border-bottom: 1px solid rgb(77, 8, 121);
            }

            .nav-menu ul{
                display:flex;
                justify-content: space-between;
                flex-direction:row;
                padding-left:18%;
                padding-right:18%;
                list-style: none;
            }

            .nav-menu ul li h4{
                margin:0;
                color:white;
            }

            .nav-menu ul li{
                background-color: #413b86;
                padding-left:1%;
                padding-right:1%;
                border-radius:5px;
            }

            .nav-menu ul li:hover{
            text-decoration: underline;
            text-decoration-color: white;
            cursor: pointer;
            }


            .nav-menu-categories{
                display:flex;
                justify-content: start;
                flex-direction: row;
                padding-left:18%;
                padding-right:18%;
                gap:2rem;
                background-image: linear-gradient(to right, #5b52bc, #7e77ca);
            }

            .category-title h3{
                text-decoration: underline;
                color:white;
                background-color: #413b86;
                border-radius:5px;
                width:3rem;
                text-align: center;
            }

            .category-list-column ul{
                list-style:none;
            }

            .category-list-column ul li{
                background-color: #413b86;
                padding-left:1%;
                padding-right:1%;
                border-radius:5px;
            }

            .category-list-column ul li:hover{
                text-decoration: underline;
                text-decoration-color: white;
                cursor: pointer;
            }

            .category-list-column ul li h5 {
                color: white;
                text-align: center;
            }
        </style>

        <div class="nav">
            <div class="nav-menu">
                <ul>
                    <li class="nav-item">
                        <h4>PC</h4>
                    </li>
                    <li class="nav-item">
                        <h4>PlayStation</h4>
                    </li>
                    <li class="nav-item">
                        <h4>XBOX</h4>
                    </li>
                    <li class="nav-item">
                        <h4>Switch</h4>
                    </li>
                </ul>
            </div>
            <div class="nav-menu-categories">
                <div class="category-title">
                    <h3>PC</h3>
                </div>
                <div class="category-list"></div>
                    <div class="category-list-column">
                        <ul>
                            <li>
                                <h5>Estrategia</h5>
                            </li>
                            <li>
                                <h5>FPS</h5>
                            </li>
                            <li>
                                <h5>Plataformas</h5>
                            </li>
                        </ul>
                    </div>
                    <div class="category-list-column">
                        <ul>
                            <li>
                                <h5>Gestión</h5>
                            </li>
                            <li>
                                <h5>Simuladores</h5>
                            </li>
                            <li>
                                <h5>Rol</h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        `;

    }

    
}

customElements.define('nav-component', Nav);