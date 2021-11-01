import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

export class SciCardIcon extends SimpleColors {
  static get tag() {
    return 'sci-card-icon';
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'science') {
        this.myIcon = 'beaker';
      }
      if (propName === 'type' && this[propName] === 'objective') {
        this.myIcon = lightbulb;
      }
      if (propName === 'type' && this[propName] === 'fact') {
        this.myIcon = 'question';
      }
      // if (propName === 'type' && this[propName] === 'beaker') {
      //   this.myIcon = 'beaker';
      // }
      // if (propName === 'type' && this[propName] === 'lightbulb') {
      //   this.myIcon = 'lightbulb';
      // }
      // if (propName === 'type' && this[propName] === 'question') {
      //   this.myIcon = 'question';
      // }
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

    // if (this.open) {
    //   document.querySelector('summary::marker').style.transform = 'rotate(-90deg)';
    // } else {
    //   console.log("hi");
    //   // document.querySelector('summary::marker').style.transform = 'rotate(90deg)';
    // }
  }

  constructor() {
    super();
    this.myIcon = null;
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
        img {
          display: inline-flex;
          height: var(--sci-card-height, 150px);
          width: var(--sci-card-width, 150px);
          background-color: transparent;
        }

        @media screen and (max-width: 600px) {
          img {
            height: var(--sci-card-height, 100px);
            width: var(--sci-card-width, 100px);
          }
        }
      `,
    ];
  }

  render() {
    // return html`<div>This is my ${this.title} and this is ${this.header}<slot></slot></div>`;
    if (this.myIcon === 'lightbulb') {
      return html`
        <div id="bannerElement">
          <img part="icon" src="${lightbulb}" alt="" />
        </div>
      `;
    }
    if (this.myIcon === 'beaker') {
      return html`
        <div id="bannerElement">
          <img part="icon" src="${beaker}" alt="" />
        </div>
      `;
    }
    if (this.myIcon === 'question') {
      return html`
        <div id="bannerElement">
          <img part="icon" src="${question}" alt="" />
        </div>
      `;
    }
    return null;
  }
}
