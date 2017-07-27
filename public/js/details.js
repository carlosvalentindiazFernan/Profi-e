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

  customElements.define('details-container', DetailsContainer);

})(document, window.customElements);
