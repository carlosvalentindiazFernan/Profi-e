(function componentContainer(document){
  'use strict';

  const users =[
    {
      id : "1",
      name : "carlos",
      img : "public/img/batman.jpg",
      about : "Me gusta la pizza"

    },
    {
      id : "2",
      name : "pedro",
      img : "public/img/iron.jpg",
      about : "Quiero dormir"

    },
    {
      id : "3",
      name : "juan",
      img : "public/img/super.jpg",
      about : "Hola soy juan :)"

    },
    {
      id : "4",
      name : "alex",
      img : "public/img/verde.jpg",
      about : "no me molestes"

    }
  ]


  class EventToDetails{

    static getUser(userName){

      for(let elemnt of users ){
        if(elemnt.name == userName){
            return elemnt
        }
      }
     return null;
    }

  }


  class ContainerList extends HTMLElement{

    	constructor(){
    		super();

    		const shadowRoot = this.attachShadow({mode: 'open'});
    		   shadowRoot.innerHTML = `
              <link rel="stylesheet" href="public/css/nav.css">

               <div class="container">

                   <ul>
                     <component-list name="carlos"></component-list>
                     <component-list name="pedro"></component-list>
                     <component-list name="juan"></component-list>
                     <component-list name="alex"></component-list>
                    </ul>

               </div>
            `;

    	}
    }


  class ComponentList extends HTMLElement{

    constructor(name){
        super();

		    const shadowRoot = this.attachShadow({mode: 'open'});

		    shadowRoot.innerHTML=`

              <style>

                  li{

                    text-decoration: none;
                    list-style:none;
                  	margin:30px 10px 20px 10px;
                  	color: #fff;
                  	cursor:pointer;
                    background-color: #e91e63;
                  	width:100%;
                  	position:relative;
                  	left:-30px;
                  	top:70px;
                  	font-size:20px;
                  }

                  li:hover{
                    background-color: #fff;
                  	color:#e91e63;
                  }


              </style>

		      `;
          //creacion de elemento li
          let li = document.createElement('li');
          li.innerHTML=this.getAttribute('name');
          shadowRoot.appendChild(li);

          shadowRoot.addEventListener('click',() =>{
            console.log(this.getAttribute("name"));
             EventToDetails.getUser(this.getAttribute("name"));
          });
	   }

    // CODIGO PARA OBSERVAR CUANDO EL ATRIBUTO NOMBRE DEL ELEMENTO CAMBIA
    static get observedAttributes(){return ['name']}

    attributeChangedCallback(attr, oldValue, newValue){
      if(attr === "name"){this.textContent = `Hola, ${newValue}` ;}
    }

  }


  class DetailsContainer extends HTMLElement {
      constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
          <link rel="stylesheet" href="public/css/details.css">
          <section>
            <imgage-details></imgage-details>
            <name-details></name-details>
            <aboutme-details></aboutme-details>
          </section>
        `;
        }
    }


  class ImageDetails extends HTMLElement {
      constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
          <link rel="stylesheet" href="public/css/imagedetails.css">
          <div id="ImgeDetails">
            <img src="https://avatars1.githubusercontent.com/u/10068053?v=4&u=837fd229b3d0751eeb11ff4f812d14548e4b20e1&s=400"/>
          </div>
        `;
        }
    }


  class NameDetails extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({mode: 'open'});

      shadowRoot.innerHTML = `
            <link rel="stylesheet" href="public/css/name.css">
            <div id="nametext">
              <p>demo</p>
            </div>
          `;

      }

      static getGato(){
      }
  }


  class AboutMeDetails extends HTMLElement{
    constructor() {
      super();
      const shadowRoot = this.attachShadow({mode: 'open'});

      shadowRoot.innerHTML = `
            <link rel="stylesheet" href="public/css/aboutme.css">
            <div id="aboutmetext">
              <p>About me text</p>
            </div>
          `;
      }

  }



  class prueba{
    func(param){console.log(param);}
    }


  //Details element
  customElements.define('imgage-details', ImageDetails);
  customElements.define('details-container', DetailsContainer);
  customElements.define('name-details', NameDetails);
  customElements.define('aboutme-details',AboutMeDetails);


  //Nev Bar
  customElements.define('component-list', ComponentList);
  customElements.define('container-list', ContainerList);


  NameDetails.getGato();

})(document);
