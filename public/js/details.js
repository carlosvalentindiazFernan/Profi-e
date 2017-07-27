(function customElementShadowDOM(document, customElements) {
  'use strict';
  class MyCustomElement extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = `
        <link rel="stylesheet" href="public/css/details.css">
        <section>demo</section>
      `;
      }
  }

  customElements.define('my-custom-element', MyCustomElement);

})(document, window.customElements);
