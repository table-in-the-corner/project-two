import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';
import './SciCardIcon.js';

export class SciCardBanner extends SimpleColors {
  static get tag() {
    return 'sci-card-banner';
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'science') {
        this.myIcon = 'beaker';
      }
      if (propName === 'type' && this[propName] === 'objective') {
        this.myIcon = 'lightbulb';
      }
      if (propName === 'type' && this[propName] === 'fact') {
        this.myIcon = 'question';
      }
    });
  }

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  // HTMLElement life-cycle, element has been connected to the page / added or moved
  // this fires EVERY time the element is moved
  connectedCallback() {
    super.connectedCallback();
  }

  // HTMLElement life-cycle, element has been removed from the page OR moved
  // this fires every time the element moves
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _rotateIcon() {
    // console.log(this);
    if (!this.shadowRoot.querySelector('details').open) {
      this.shadowRoot.querySelector('summary').style.listStyleImage =
        "url('../assets/arrow-down.svg')";
    } else {
      this.shadowRoot.querySelector('summary').style.listStyleImage =
        "url('../assets/arrow-right.svg')";
    }
  }

  constructor() {
    super();
    this.type = '';
    this.myIcon = null;

    if (this.getAttribute('icon') != null) {
      const sketchTag = document.createElement('sci-card-icon');
      sketchTag.innerHTML = this.getAttribute('icon');
      this.appendChild(sketchTag);
      setTimeout(() => {
        import('./SciCardIcon.js');
      }, 0);
    }
  }

  static get properties() {
    return {
      ...super.properties,
      type: { type: String, reflect: true },
      myIcon: { type: String, attribute: 'my-icon' },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
        }
        #banner {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background-color: transparent;
          color: white;
        }
        #headers {
          padding: 5px;
          margin: 5px;
          display: inline-flex;
          flex-direction: column;
          justify-content: left;
          align-items: left;
        }
        #main-header {
          font-size: 200%;
          text-transform: uppercase;
          font-weight: 300;
        }
        #sub-header {
          font-size: 250%;
          text-transform: uppercase;
          font-weight: 500;
        }
        #bannerElement {
          display: flex;
          flex-direction: row;
        }
      `,
    ];
  }

  render() {
    return html`
      <div id="bannerElement">
        <sci-card-icon
          icon="test"
          my-icon="${this.myIcon}"
          type="${this.myIcon}"
        ></sci-card-icon>
        <div id="banner">
          <div id="headers">
            <slot id="main-header" name="main-header"></slot>
            <slot id="sub-header" name="sub-header"></slot>
          </div>
        </div>
      </div>
    `;
  }
}
