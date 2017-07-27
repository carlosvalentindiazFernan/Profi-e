(function Details(document, customElements) {
  'use strict';

  class DetailsContainer extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = `
        <link rel="stylesheet" href="public/css/details.css">
        <section>demo</section>
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

  customElements.define('details-container', DetailsContainer);
  customElements.define('imgage-details', ImageDetails);



})(document, window.customElements);
