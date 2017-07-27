(function details(document, customElements) {
  'use strict';

  class Destails extends HTMLElement{

    constructor(){
      super();
      const shadowRoot = this.attachShadow({mode: 'open'});

      shadowRoot.innerHTML = `
        <link rel="stylesheet" href="css/details.css">
        <section>

        </section>
      `;
    }

  }

  class NameDetails  extends HTMLElement {

    constructor() {
      super();
      const shadowRoot = this.attachShadow({mode: 'open'});

      shadowRoot.innerHTML = `
        <link rel="stylesheet" href="css/name.css">
        <div class="name">
          <p></p>
        </div>
      `;
    }

  }

  class ImageDetails  extends HTMLElement {

    constructor() {
      super();
      const shadowRoot = this.attachShadow({mode: 'open'});

      shadowRoot.innerHTML = `
        <link rel="stylesheet" href="css/imagedetails.css">
        <Img src="" alt="" />
      `;
    }

  }

  class TextDetails extends HTMLElement{
    constructor(){
      super();
      const shadowRoot = this.attachShadow({mode: 'open'});

      shadowRoot.innerHTML = `
        <link rel="stylesheet" href="css/text.css">
        <div class="text">
          <p></p>
        </div>
      `;
    }
  }

  customElements.define('name-details', NameDetails);
  customElements.define('image-details',ImageDetails);
  customElements.define('name-details', TextDetails);
  customElements.define('details-container', Destails);

})(document, window.customElements);
