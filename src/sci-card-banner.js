import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

export class SciCardBanner extends SimpleColors {
  static get tag() {
    return 'sci-card-banner';
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
    this.accentColor = 'green';
    this.dark = false;
    this.mainheader = 'This is the main header.';
    this.subheader = 'This is the subheader.';
  }

  static get properties() {
    return {
      ...super.properties,
      mainheader: { type: String },
      subheader: { type: String },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
          --sci-card-banner-color1: darkorange;
          --sci-card-banner-color2: green;
          --sci-card-banner-color3: blue;
          width: 500px;
        }
        img {
          display: inline-flex;
          height: var(--sci-card-height, 150px);
          width: var(--sci-card-width, 150px);
          background-color: transparent;
        }
        #banner1 {
          display: flex;
          flex-direction: row;
          background-color: var(--sci-card-banner-color1);
          color: white;
        }
        #banner2 {
          display: flex;
          flex-direction: row;
          background-color: var(--sci-card-banner-color2);
          color: white;
        }
        #banner3 {
          display: flex;
          flex-direction: row;
          background-color: var(--sci-card-banner-color3);
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
        }
        #sub-header {
          font-size: 250%;
          text-transform: uppercase;
        }
      `,
    ];
  }

  render() {
    // return html`<div>This is my ${this.title} and this is ${this.header}<slot></slot></div>`;
    return html`
      <div id="banner1">
        <div id="headers">
          <div slot="main-header" id="main-header">Unit 1</div>
          <div slot="sub-header" id="sub-header">Learning Objectives</div>
        </div>
      </div>
      <div id="banner2">
        <div id="headers">
          <div slot="main-header" id="main-header">Unit 1</div>
          <div slot="sub-header" id="sub-header">Chem Connection</div>
        </div>
      </div>
      <div id="banner3">
        <div id="headers">
          <div slot="main-header" id="main-header">Unit 1</div>
          <div slot="sub-header" id="sub-header">Did you know?</div>
        </div>
      </div>
    `;
  }
}
window.customElements.define(SciCardBanner.tag, SciCardBanner);
