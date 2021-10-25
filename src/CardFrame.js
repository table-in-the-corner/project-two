import { LitElement, html, css } from 'lit';
import './SciCard.js';

export class CardFrame extends LitElement {
  static get tag() {
    return 'card-frame';
  }

  constructor() {
    super();
    this.type = '';
  }

  static get properties() {
    return {
      type: { type: String, reflect: true },
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'science') {
        this.myIcon = 'beaker';
        this.mainheader = 'Unit 1';
        this.subheader = 'Chem Connection';
      }
      if (propName === 'type' && this[propName] === 'objective') {
        // this.myIcon = 'lightbulb';
        // this.mainheader = 'Unit 1';
        // this.subheader = 'Learning Objectives';
      }
      if (propName === 'type' && this[propName] === 'fact') {
        this.myIcon = 'question';
        this.mainheader = 'Unit 1';
        this.subheader = 'Did you know?';
      }
    });
  }

  static get styles() {
    return css`
      sci-card[type='objective']::part(banner) {
        background-color: darkorange;
      }
      sci-card[type='science']::part(banner) {
        background-color: seagreen;
      }
      sci-card[type='fact']::part(banner) {
        background-color: slateblue;
      }
    `;
  }

  render() {
    return html`
      <div>
        <sci-card type="${this.type}">
          <div slot="header"></div>
        </sci-card>
      </div>
    `;
  }
}
