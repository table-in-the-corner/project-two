import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';
import { IntersectionObserverMixin } from '@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js';

import './SciCardIcon.js';

export class SciCardBanner extends IntersectionObserverMixin(SimpleColors) {
  static get tag() {
    return 'sci-card-banner';
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    // changedProperties.forEach((oldValue, propName) => {
    //   if (propName === "elementVisible" && this[propName]){
    //     import('./SciCardIcon.js');
    //   }
    //   if(
    //     ["elementVisible", "myIcon", "type"].includes(
    //       propName
    //     ) && this.type && this.myIcon && this.elementVisible
    //   ){
    //     clearTimeout(this._debounce);
    //     this._debounce = setTimeout(() => {
    //       this.updateIcon(this.type, this.myIcon);
    //     }, 25);
    //   }
    // });

    super.update(changedProperties);
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'elementVisible' && this[propName]) {
        import('./SciCardIcon.js');
        // if (propName === 'type' && this[propName] === 'science') {
        //   this.myIcon = 'beaker';
        //   this.accentColor = '#008c37';
        // }
        // if (propName === 'type' && this[propName] === 'objective') {
        //   this.myIcon = 'lightbulb';
        //   this.accentColor = '#ff9625';
        // }
        // if (propName === 'type' && this[propName] === 'fact') {
        //   this.myIcon = 'question';
        //   this.accentColor = '#0066ca';
        // }
        // // used for storybook when a type above isn't selected
        // if (propName === 'type' && this[propName] === '') {
        //   this.myIcon = 'lightbulb';
        //   this.accentColor = '#835fff';
        // }
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

  constructor() {
    super();
    this.type = '';
    this.myIcon = 'lightbulb';
    this.accentColor = 'blue';
  }

  static get properties() {
    return {
      ...super.properties,
      type: { type: String, reflect: true },
      myIcon: { type: String, attribute: 'my-icon' },
      accentColor: { type: String, attribute: 'accent-color' },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
          margin: 0;
          font-family: 'Open Sans', sans-serif;
          font-display: swap;
          background-color: var(--simple-colors-default-theme-indigo-6);
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
          justify-content: start;
        }
        sci-card-icon {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        @media screen and (max-width: 560px) {
          #main-header {
            font-size: 0.5rem;
          }
          #sub-header {
            font-size: 1rem;
          }
        }

        @media screen and (min-width: 560px) {
          #main-header {
            font-size: 1rem;
          }
          #sub-header {
            font-size: 2rem;
          }
        }

        @media screen and (min-width: 920px) {
          #main-header {
            font-size: 2rem;
          }
          #sub-header {
            font-size: 3rem;
          }
        }
        :host([type='science']) {
          background-color: var(--simple-colors-default-theme-green-7);
        }
        :host([type='objective']) {
          background-color: var(--simple-colors-default-theme-orange-6);
        }
        :host([type='fact']) {
          background-color: var(--simple-colors-default-theme-light-blue-8);
        }
      `,
    ];
  }

  render() {
    return html`
      <div
        id="bannerElement"
        style="--sci-card-banner-color: ${this.accentColor}"
      >
        ${this.elementVisible
          ? html`<sci-card-icon
              icon="${this.myIcon}"
              my-icon="${this.myIcon}"
              type="${this.myIcon}"
            ></sci-card-icon>`
          : ``}
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
