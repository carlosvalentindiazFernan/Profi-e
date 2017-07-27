(function componentContainer(document){
  'use strict';

  class ContainerList extends HTMLElement{

    	constructor(){
    		super();

    		const shadowRoot = this.attachShadow({mode: 'open'});
    		   shadowRoot.innerHTML = `
               <div class="container">

                   <ul>
                     <component-list name="carlos"></component-list>
                     <component-list name="pedro"></component-list>
                     <component-list name="juan"></component-list>
                     <component-list name="alex"></component-list>
                    </ul>

               </div>

               <style>

                  div{

                  	width: 300px;
                    height: 400px;
                  	background:  #3B5998;;
                  	border-radius: 10px;
                    box-shadow: 5px 6px 5px #333;
                  }

               </style>
            `;

    	}
    }

 //CODIGO PARA EL COMPONENTE LISTA

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
                  	color: white;
                  	cursor:pointer;
                  	border-bottom: 1px solid #333;
                  	width:100%;
                  	position:relative;
                  	left:-30px;
                  	top:70px;
                  	font-size:20px;
                  }

                  li:hover{

                  	color:gray;
                  }
              </style>

		      `;
          //creacion de elemento li
          let li = document.createElement('li');
          li.innerHTML=this.getAttribute('name');
          shadowRoot.appendChild(li);

          shadowRoot.addEventListener('click',() =>{
            console.log(this.getAttribute("name"));
            const p= new prueba();
            p.func(this.getAttribute("name"));
          });
	   }

    // CODIGO PARA OBSERVAR CUANDO EL ATRIBUTO NOMBRE DEL ELEMENTO CAMBIA
    static get observedAttributes(){return ['name']}

    attributeChangedCallback(attr, oldValue, newValue){
      if(attr === "name"){this.textContent = `Hola, ${newValue}` ;}
    }

  }


  class prueba{
    func(param){console.log(param);}
    }

  customElements.define('component-list', ComponentList);
  customElements.define('container-list', ContainerList);

  const ElementList = customElement.get('component-list');
  const elementList = new ElementList();
  const otherElement = document.createElement('component-list');

  document.body.append(elementList);
  document.body.append(customElement);


})(document);
