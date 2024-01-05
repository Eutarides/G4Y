class Header extends HTMLElement {

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
            
            header{
                height:100px;
                display:flex;
                justify-content:space-between;
                align-items:center;
                background-color: #7e77ca;
                padding-left:13%;
                padding-right:10%;
                background-image: linear-gradient(to right, #5b52bc, #7e77ca);
                gap:1rem;
            }

            *::selection{
                background-color: transparent;
                }
                
                *{
                box-sizing: border-box;
                }
                    
                .contenir{
                    width: 40%;
                    height: 40%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
                .search{
                    box-shadow:0px 0px 20px 1px #ffffff ;
                    border: 0;
                    border-radius: 30px 0 0 30px;
                    padding: 0 10px 0 10px;
                    text-align: center;
                    color: black;
                    height: 50px;
                    width: 500px;
                    font-size: 25px;
                    font-weight: 1000;
                }

                .search::selection{
                    background-color: red;
                    color: white;
                }
                .search:focus{
                    border: 0;
                    outline: 0;
                }
                .search:hover{
                    cursor: text;
                }
                
                .search-btn{
                    transition: 0.2s ease-in-out;
                    box-shadow:0px 0px 20px 1px #ff8675 ;
                    border: 0;
                    border-radius: 0 30px 30px 0;
                    padding: 0 10px 0 10px;
                    text-align: center;
                    color: black;
                    position: relative;
                    background-color: #ff8675;
                    height: 50px;
                    width: 100px;
                    font-size: 25px;
                    font-weight: 1000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .search-btn:hover{
                transition: 0.2s ease-in-out;
                background-color: #ff5942;
                box-shadow:0px 0px 20px 1px #ff5942 ;
                font-size: 30px;
                font-weight: 800;
                cursor: pointer;
                }

            .user-interface{
                display:flex;
                flex-direction:row;
                align-items: center;
                justify-content: space-between;
                gap:1.7rem;
            }

            .logo:hover{
                cursor: pointer;
            }

            .country{
                background-color:#ff8675;
                border-radius:20px;
                padding-left:3%;
                padding-right:3%;
                color:white;
                margin:0;
            }

            .country:hover{
                cursor: pointer;
            }

            .country h3{
                margin-top:8px;
                margin-bottom:8px;
            }

            .user-profile{
                display:flex;
                flex-direction:row;
                gap:0.5rem;
                align-items: center;
                margin:0;
                background-color:#ff8675;
                border-radius:20px;
                padding-left:3%;
                padding-right:3%;
            }

            .user-profile:hover{
                cursor: pointer;
            }

            .profile-svg{
                width:35px;
                fill:#5b52bc;
            }

            .profile-name{
                color:white;
            }

            .profile-name h4{
                margin-top:8px;
                margin-bottom:8px;
            }

            .cart{
                background-color:#ff8675;
                border-radius:20px;
                padding-left:3%;
                padding-right:3%;
            }

            .cart:hover{
                cursor: pointer;
            }

            .cart-svg{
                width:35px;
                fill:#5b52bc;
            }
        </style>

        <header>
            <div class="logo">
                <picture>
                    <a class="logo-image"><img src="../images/logo-G4Y-r.webp"></a>
                </picture>
            </div>
            <div class="contenir">

                <input type="text" class="search" id="search-inp" placeholder="Search...">

                <button class="search-btn"  id="search-inp-btn">&#x027A4;</button>

            </div>
            <div class="user-interface">
                <div class="country">
                    <h3>ES/EUR</h3>
                </div>
                <div class="user-profile">
                    <div class="profile-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>account</title><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>
                    </div>
                    <div class="profile-name">
                        <h4>NumencioMaster5357</h4>
                    </div>
                </div>
                <div class="cart">
                    <div class="cart-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart-outline</title><path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" /></svg>
                    </div>
                </div>
            </div>
        </header>

        `;

    }

    
}

customElements.define('header-component', Header);