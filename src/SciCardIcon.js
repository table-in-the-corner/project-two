import { LitElement, html, css } from 'lit';

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

export class SciCardIcon extends LitElement {
  static get tag() {
    return 'sci-card-icon';
  }

  constructor() {
    super();
    this.icon = null;
    this.type = "fact";
  }

  static get properties() {
    return {
      type: { type: String, reflect: true },
      icon: { type: String },
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'science') {
        this.icon = beaker;
      }
      if (propName === 'type' && this[propName] === 'objective') {
        this.icon = lightbulb;
      }
      if (propName === 'type' && this[propName] === 'fact') {
        this.icon = question;
      }
    });
  }

  static get styles() {
    return [
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
    return html`
      <div>
        <img part="icon" src="${this.icon}" alt="" />
      </div>
    `;
  }
}
customElements.define(SciCardIcon.tag, SciCardIcon);
