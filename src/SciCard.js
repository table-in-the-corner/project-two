// dependencies / things imported
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';
import '@table-in-the-corner/invisi-button/invisi-button';

// this is the base path to the assets calculated at run time
// this ensures that assets are shipped correctly when building the demo
// on github pages, or when people reuse assets outside your elements in production
// because this won't change we can leverage as an internal variable without being
// declared in properties. This let's us ship the icons while referencing them correctly
// const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
// const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
// const question = new URL('../assets/question.svg', import.meta.url).href;
// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class SciCard extends SimpleColors {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'sci-card';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.myIcon = null;
    this.type = '';
    this.dark = false;
    this.mainheader = 'Unit 1';
    this.subheader = 'Learning Objectives';
    this.openState = true;
    this.accentColor = '#835FFF';

    if (this.getAttribute('icon') != null) {
      const sketchTag = document.createElement('sci-card-icon');
      sketchTag.innerHTML = this.getAttribute('icon');
      this.appendChild(sketchTag);
      setTimeout(() => {
        import('./SciCardIcon.js');
      }, 0);
    }
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      type: { type: String, reflect: true },
      myIcon: { type: String, attribute: 'my-icon' },
      mainheader: { type: String, reflect: true },
      subheader: { type: String, reflect: true },
      openState: { type: Boolean },
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
        this.accentColor = '#008C37';
      }
      if (propName === 'type' && this[propName] === 'objective') {
        this.myIcon = 'lightbulb';
        // this.mainheader = 'Unit 1';
        // this.subheader = 'Learning Objectives';
        this.accentColor = '#FF9625';
      }
      if (propName === 'type' && this[propName] === 'fact') {
        this.myIcon = 'question';
        this.mainheader = 'Unit 1';
        this.subheader = 'Did you know?';
        this.accentColor = '#0066CA';
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
    window.addEventListener('resize', this.stateToggle.bind(this));
  }

  // HTMLElement life-cycle, element has been removed from the page OR moved
  // this fires every time the element moves
  disconnectedCallback() {
    window.removeEventListener('resize', this.stateToggle.bind(this));
    super.disconnectedCallback();
  }

  /* eslint-disable no-param-reassign */
  stateToggle() {
    // console.log(this.shadowRoot.querySelector('details'))
    // https://stackoverflow.com/questions/52365938/get-all-elements-containing-a-class-with-queryselector
    if (
      this.window.document
        .querySelector('card-frame')
        .shadowRoot.querySelector('sci-card').clientWidth < 380
    ) {
      this.openState = false;
      const nodeList = this.window.document.querySelectorAll('card-frame');
      nodeList.forEach(el => {
        el.shadowRoot
          .querySelector('sci-card')
          .shadowRoot.querySelector('details').open = this.openState;
      });

      // this.window.document.querySelector('card-frame').shadowRoot.querySelector('sci-card').shadowRoot.querySelector('details').open = this.openState
    } else {
      this.openState = true;
      const nodeList2 = this.window.document.querySelectorAll('card-frame');
      nodeList2.forEach(el => {
        el.shadowRoot
          .querySelector('sci-card')
          .shadowRoot.querySelector('details').open = this.openState;
      });

      // this.window.document.querySelector('card-frame').shadowRoot.querySelector('sci-card').shadowRoot.querySelector('details').open = true
    }
  }
  /* eslint-enable no-param-reassign */

  // CSS - specific to Lit
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
          min-width: 100px;
        }
        img {
          display: inline-flex;
          height: var(--learning-card-height, 50px);
          width: var(--learning-card-width, 50px);
          background-color: green;
        }
        summary {
          list-style-position: inside;
          display: block;
        }
       
        #drawerContents {
          font-size: 150%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        #cardFrame {
          box-shadow: 4px 4px 7px 0px rgba(128, 0, 0, 1);
          margin: 30px 0px;
        }
        #invisi-button-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .button {
          display: inline-block;
          text-align: center;
          color: white;
          background-color: var(--invisi-button-background-color);
          padding: 0.5rem 2rem;
          border: 2px solid var(--invisi-button-background-color);
          border-radius: 5px;
          font-family: var(--invisi-button-font);
          text-decoration: none;
          transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
        }
        @media screen and (max-width: 560px) {
          #drawerContents {
            font-size: .75em;
          }

        @media screen and (min-width: 560px) {
        #drawerContents {
          font-size: 1em;
        }
        @media screen and (min-width: 920px) {
          #drawerContents {
            font-size: 2em;
          }
      `,
    ];
  }

  // HTML - specific to Lit
  render() {
    return html`
      <div id="cardFrame">
        <details .open=${this.openState}>
          <summary part="banner">
            <div
              class="slot-wrapper"
              data-label="Header"
              data-layout-slotname="header"
            >
              <sci-card-banner my-icon="${this.myIcon}" type="${this.type}">
                <div slot="main-header">
                  <slot name="header-container"></slot>
                </div>
                <div slot="sub-header">
                  <slot name="sub-header-container"></slot>
                </div>
              </sci-card-banner>
            </div>
          </summary>
          <div id="drawerContents">
            <slot name="card-body"></slot>
            <slot name="body-container"></slot>
          </div>
          <div id="invisi-button-container" slot="invisi-button">
            <invisi-button
              style="--invisi-button-background-color: ${this.accentColor}"
              title="Details"
              link="https://science.psu.edu/"
            ></invisi-button>
          </div>
        </details>
      </div>
      <script type="module">
        import './src/app.js';
      </script>
    `;
  }

  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return {
      canScale: false,
      canPosition: false,
      canEditSource: true,
      contentEditable: true,
      gizmo: {
        title: 'Sci Card',
        description: 'An element that you have to replace / fix / improve',
        icon: 'credit-card',
        color: 'blue',
        groups: ['Content', 'Presentation', 'Education'],
      },
      settings: {
        configure: [
          {
            property: 'type',
            title: 'Type',
            description: 'Identifies the card',
            inputMethod: 'select',
            options: {
              science: 'science',
              objectives: 'objective',
              fact: 'fact',
            },
          },
        ],
        advanced: [],
      },
      demoSchema: [
        {
          tag: SciCard.tag,
          properties: {
            type: 'science',
          },
          content:
            "<p slot='header'>This tag renders in the header</p><ul><li>This renders</li><li>Below the tag</li></ul>",
        },
      ],
    };
  }
}
