import { LitElement, html, css } from 'lit';
import './SciCard.js';

export class CardFrame extends LitElement {
  static get tag() {
    return 'card-frame';
  }

  // constructor(){
  //     super();
  // }

  static get properties() {
    return {};
  }

  static get styles() {
    return css``;
  }

  render() {
    return html`
      <div>
        <sci-card type="${this.myCard}"> </sci-card>
      </div>
    `;
  }
}
