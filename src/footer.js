class Footer extends HTMLElement {

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
            footer{
                display:flex;
                flex-direction: column;
                padding-bottom: 5%;
                background-color: #413b86;
            }

            .footer-spaces{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding-left:15%;
                padding-right: 30%;
                padding-top: 2%;
                gap:35%;
            }

            .spaces{
                display:flex;
                flex-direction: row;
                justify-content: space-between;
                gap:5rem;
            }

            .footer-section{
                display: flex;
                flex-direction: column;
                border-radius:10px;
                padding-left: 4%;
                padding-right: 4%;
            }

            .footer-section-title{
                white-space: nowrap;
                color:#b0a9f5;
                text-decoration: underline;
            }

            .footer-section-title:hover{
                color:white;
                cursor: pointer;
            }

            .footer-section-items{
                gap:2rem;
                display: flex;
                flex-direction: column;
                white-space: nowrap;
                color:#b0a9f5;
            }

            .footer-section-item:hover{
                color:white;
                cursor: pointer;
            }

            .footer-section h4{
                margin:0;
            }

            .footer-socials{
                display:flex;
                flex-direction: column;
            }

            .footer-socials-title{
                color:#b0a9f5;
                font-size: 1.2rem;
                white-space: nowrap;
                text-decoration: underline;
            }

            .footer-socials-title:hover{
                color:white;
                cursor: pointer;
            }



            .footer-socials-items{
                display:flex;
                flex-direction: row;
                gap:1rem;
            }

            .footer-socials-items svg{
                width:20%;
                fill:#b0a9f5;
            }

            .footer-socials-items svg:hover{
                fill:white;
                cursor: pointer;
            }
        </style>

        <footer>
            <div class="footer-spaces">
                <div class="spaces">
                    <div class="footer-section">
                        <div class="footer-section-title">
                            <h3>Sobre G4Y</h3>
                        </div>
                        <div class="footer-section-items">
                            <div class="footer-section-item">
                                <h4>Quienes somos</h4>
                            </div>
                            <div class="footer-section-item">
                                <h4>Contáctanos</h4>
                            </div>
                            <div class="footer-section-item">
                                <h4>Miembros</h4>
                            </div>
                        </div>
                    </div>
                    <div class="footer-section">
                        <div class="footer-section-title">
                            <h3>Ayuda</h3>
                        </div>
                        <div class="footer-section-items">
                            <div class="footer-section-item">
                                <h4>Soporte técnico</h4>
                            </div>
                            <div class="footer-section-item">
                                <h4>Crear un ticket</h4>
                            </div>
                            <div class="footer-section-item">
                                <h4>Devoluciones</h4>
                            </div>
                        </div>
                    </div>
                    <div class="footer-section">
                        <div class="footer-section-title">
                            <h3>Comunidad</h3>
                        </div>
                        <div class="footer-section-items">
                            <div class="footer-section-item">
                                <h4>Blog</h4>
                            </div>
                            <div class="footer-section-item">
                                <h4>Afiliación</h4>
                            </div>
                            <div class="footer-section-item">
                                <h4>Newsletter</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-socials">
                    <div class="footer-socials-title">
                        <h3>Nuestras Redes</h3>
                    </div>
                    <div class="footer-socials-items">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>facebook</title><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>twitter</title><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>instagram</title><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                            <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </footer>

        `;

    }

    
}

customElements.define('footer-component', Footer);