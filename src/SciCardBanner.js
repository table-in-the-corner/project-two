import { LitElement, html, css } from 'lit';
import { IntersectionObserverMixin } from '@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js';

export class SciCardBanner extends IntersectionObserverMixin(LitElement) {
  static get tag() {
    return 'sci-card-banner';
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'elementVisible' && this[propName]) {
        import('./SciCardIcon.js');
      }
    });
  }

  constructor() {
    super();
    this.type = 'fact';
  }

  static get properties() {
    return {
      ...super.properties,
      type: { type: String, reflect: true },
    };
  }

  static get styles() {
    return [
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
      `,
    ];
  }

  render() {
    return html`
      <div
        id="bannerElement"
      >
        ${this.elementVisible
          ? html`<sci-card-icon
              type="${this.type}"
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
customElements.define(SciCardBanner.tag, SciCardBanner);
