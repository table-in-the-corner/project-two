import { LitElement, html } from 'lit';
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

  render() {
    return html`
      <div>
        <sci-card type="${this.type}">
          <div slot="header-container">
            <slot name="header"></slot>
          </div>
          <div slot="sub-header-container">
            <slot name="subheader"></slot>
          </div>
          <div slot="invisi-button"></div>
          <div slot="body-container">
            <slot name="body-content"></slot>
          </div>
        </sci-card>
      </div>
    `;
  }
}
