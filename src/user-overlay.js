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
                height:50%;
                background-color: rgb(119, 173, 193);
                color:white;
                cursor: pointer;
                border-radius:10px;
                border:none;
                font-size:1.3rem;
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
                width:100.4vw;
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
            
            .filter-modal{
                width:30%;
                height:45%;
                background-color:  hsl(180, 57%, 36%);
                border-radius:10px;
                display:flex;
                justify-content: space-between;
                flex-direction: column;
                align-items: center;
                opacity:1;
                visibility: hidden;
                transition:0.7s;
            }
            
            .filter-modal.active{
                opacity: 1;
                visibility: visible;
                transition:0.7s;
            }
            
            .announcement{
                padding:5% 10% 0% 10%;
                height:15%;
            }
            
            .announcement p{
                font-size: 1.3rem;
                font-weight: 600;
                color:white;
            }
            
            .filter-form{
                height:35%;
                width:90%;
                display:flex;
                justify-content:space-between;
                flex-direction: column;
                align-items: center;
            }
            
            .filter-form.active{
                width:90%;
                height:50%;
                display:flex;
                justify-content:space-between;
            }
            
            .input-title{
                display:flex;
                flex-direction:column;
                gap:0.5rem;
                width:90%;
            }
            
            .input-title p{
                font-family: "Poppins", sans-serif;
                font-size: 100%;
                line-height: 1.15;
                color:white;
                text-align:center;
                font-weight:900;
                margin:0;
            }
            
            .input-row{
                display:flex;
            }
            
            .input-row input{
                height:100%;
            }
            
            .filter-modal-buttons{
                display:flex;
                flex-direction: row;
                height:20%;
                justify-content: space-between;
                width:81%;
                gap:2.6rem;
            }
            
            .filter-button.cancel{
                background-color: rgba(231, 118, 26, 0.904);
            }
        </style>

        <div class="modal-overlay">
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
                    <div class="user-data-item-description">ç
                        <h3>NumencioMaster5357@gmail.com</h3>
                    </div>
                </div>
                <div class="user-data-item">
                    <div class="user-data-item-title">
                        <h3>País:</h3>
                    </div>
                    <div class="user-data-item-description">ç
                        <h3>España</h3>
                    </div>
                </div>
                <div class="user-data-item">
                    <div class="user-data-item-title">
                        <h3>Código Postal:</h3>
                    </div>
                    <div class="user-data-item-description">ç
                        <h3>07021</h3>
                    </div>
                </div>
                <div class="user-data-item">
                    <div class="user-data-item-title">
                        <h3>ciudad:</h3>
                    </div>
                    <div class="user-data-item-description">ç
                        <h3>Campica</h3>
                    </div>
                </div>
                <div class="user-data-item">
                    <div class="user-data-item-title">
                        <h3>Dirección:</h3>
                    </div>
                    <div class="user-data-item-description">ç
                        <h3>Carrer Campica 52 5ºA</h3>
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