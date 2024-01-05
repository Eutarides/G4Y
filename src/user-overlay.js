class UserOverlay extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    connectedCallback() {
        document.addEventListener("show-filter-modal", (event => {
            this.openModal();
        
        }));
    };

    render() {

        this.shadow.innerHTML =
        /*html*/
        `
        <style>

            button{
                width:100%;
                height:100%;
                background-color:rgb(243, 133, 8);
                color:white;
                cursor: pointer;
                border-radius:10px;
                border:solid 1px #b93827;
                font-size:1.3rem;
            }

            h3{
                margin:0.2rem;
            }
            
            p{
                font-family: "Poppins", sans-serif;
            }
            
            input{
                width:100%;
                height:65%;
                background-color: rgb(119, 173, 193);
                color:white;
                cursor: pointer;
                border-radius:10px;
                border:none;
                font-size:1.3rem;
            }
            .modal-overlay{
                z-index:1003;
                width:100vw;
                height:100vh;
                position:absolute;
                top:-1%;
                left:-1%;
                display:flex;
                align-items: center;
                flex-direction: column;
                justify-content: space-around;
                opacity:0;
                visibility: hidden;
                transition:0.7s;
                background-color: rgba(20, 3, 95, 0.493);
            }
            
            .modal-overlay.active{
                visibility: visible;
                opacity: 1;
            }
            
            .user-modal{
                width:40%;
                height:60%;
                background-color:  #f3a59b;
                border-radius:10px;
                display:flex;
                justify-content: space-between;
                flex-direction: column;
                padding:1% 5%;
                opacity:1;
                visibility: hidden;
                transition:0.7s;
                gap:1rem;
                position:relative;
                border:solid 3px #b93827;
            }
            
            .user-modal.active{
                opacity: 1;
                visibility: visible;
            }

            .user-area{
                display:flex;
                justify-content: space-between;
                flex-direction: column;
                gap:2rem;
                padding:10% 0%;
                padding-right:10%;
            }

            .user{
                display:flex;
                flex-direction:row;
                gap:1rem;
                background-color:#ff8675;
                padding-left:2%;
                border-radius:5px;
                border:solid 1px #b93827;
                color:white;
            }

            .user-data{
                display:flex;
                flex-direction:column;
                gap:1rem;
            }

            .user-data-item{
                display:flex;
                flex-direction:row;
                gap:1rem;
                padding-left:2%;
                border-radius:5px;
                border:solid 1px #b93827;
                background-color:#ff8675;
                color:white;
            }

            .logout-button{
                padding-bottom:5%;
                height:3rem;
                width:60%;
                padding-left:20%;
            }

            .close-button{
                position:absolute;
                top:1%;
                right:1%;
                width:50px;
                fill:white;
            }
        </style>

        <div class="modal-overlay">
            <div class="user-modal">
                <div class="user-area">
                    <div class="user">
                        <div class="user-title">
                            <h3>Usuario:</h3>
                        </div>
                        <div class="user-name">
                            <h3>NumencioMaster5357</h3>
                        </div>
                    </div>
                    <div class="user-data">
                        <div class="user-data-item">
                            <div class="user-data-item-title">
                                <h3>Email:</h3>
                            </div>
                            <div class="user-data-item-description">
                                <h3>NumencioMaster5357@gmail.com</h3>
                            </div>
                        </div>
                        <div class="user-data-item">
                            <div class="user-data-item-title">
                                <h3>País:</h3>
                            </div>
                            <div class="user-data-item-description">
                                <h3>España</h3>
                            </div>
                        </div>
                        <div class="user-data-item">
                            <div class="user-data-item-title">
                                <h3>Código Postal:</h3>
                            </div>
                            <div class="user-data-item-description">
                                <h3>07021</h3>
                            </div>
                        </div>
                        <div class="user-data-item">
                            <div class="user-data-item-title">
                                <h3>Ciudad:</h3>
                            </div>
                            <div class="user-data-item-description">
                                <h3>Campica</h3>
                            </div>
                        </div>
                        <div class="user-data-item">
                            <div class="user-data-item-title">
                                <h3>Dirección:</h3>
                            </div>
                            <div class="user-data-item-description">
                                <h3>Carrer Campica 52 5ºA</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="logout-button">
                    <button>Cerrar Sesión</button>
                </div>
                <div class="close-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                </div>
            </div>
        </div>

        `;

        let button = this.shadow.querySelector(".filter-button.cancel");

        button.addEventListener("click",()=>{
            
            this.deleteModal();
    
        });

    };
    

    openModal(){

        let filterModal = this.shadow.querySelector(".filter-modal");
        let overlay = this.shadow.querySelector(".modal-overlay");

        filterModal.classList.add("active");
        overlay.classList.toggle("active");
    };

    deleteModal(){

        let filterModal = this.shadow.querySelector(".filter-modal");
        let overlay = this.shadow.querySelector(".modal-overlay");

        filterModal.classList.remove("active");
        overlay.classList.remove("active");
    };
}

customElements.define('user-overlay-component', UserOverlay);