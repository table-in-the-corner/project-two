// dependencies / things imported
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';
import '@table-in-the-corner/invisi-button';

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

    if (this.getAttribute('icon') != null) {
      const sketchTag = document.createElement('sci-card-icon');
      sketchTag.innerHTML = this.getAttribute('icon');
      this.appendChild(sketchTag);
      setTimeout(() => {
        import('./SciCardIcon.js');
      }, 0);
    }

    // document.querySelector('#cardFrame').addEventListener('toggle', event => {
    //   if (document.querySelector('#cardFrame').open) {
    //     document.querySelector('summary').style.transform = 'rotate(-90deg)';
    //   } else {
    //     document.querySelector('summary').style.transform = 'rotate(90deg)';
    //   }
    // })
    // this.addEventListener('toggle', document.querySelector('summary')._rotateIcon);
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      type: { type: String, reflect: true },
      myIcon: { type: String, attribute: 'my-icon' },
      mainheader: { type: String },
      subheader: { type: String },
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
        this.accentColor = 'seagreen';
      }
      if (propName === 'type' && this[propName] === 'objective') {
        this.myIcon = 'lightbulb';
        this.mainheader = 'Unit 1';
        this.subheader = 'Learning Objectives';
        this.accentColor = 'darkorange';
      }
      if (propName === 'type' && this[propName] === 'fact') {
        this.myIcon = 'question';
        this.mainheader = 'Unit 1';
        this.subheader = 'Did you know?';
        this.accentColor = 'slateblue';
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

  // _rotateIcon() {
  //   // console.log(this);
  //   if (!this.shadowRoot.querySelector('details').open) {
  //     this.shadowRoot.querySelector('summary').style.listStyleImage =
  //       "url('../assets/arrow-down.svg')";
  //   } else {
  //     this.shadowRoot.querySelector('summary').style.listStyleImage =
  //       "url('../assets/arrow-right.svg')";
  //   }

  //   // if (this.open) {
  //   //   document.querySelector('summary::marker').style.transform = 'rotate(-90deg)';
  //   // } else {
  //   //   console.log("hi");
  //   //   // document.querySelector('summary::marker').style.transform = 'rotate(90deg)';
  //   // }
  // }

  // CSS - specific to Lit
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
        }
        img {
          display: inline-flex;
          height: var(--learning-card-height, 50px);
          width: var(--learning-card-width, 50px);
          background-color: green;
        }
        summary {
          list-style-position: inside;
          list-style-image: url('../assets/arrow-right.svg');
          display: block;
        }
        #drawerContents {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        #cardFrame {
          box-shadow: 4px 4px 7px 0px rgba(128, 0, 0, 1);
          margin: 30px 0px;
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

        /* summary:hover {
          background-color: var(--simple-colors-default-theme-orange-6);
        } */
      `,
    ];
  }

  // HTML - specific to Lit
  render() {
    return html`
      <div id="cardFrame">
        <details>
          <summary part="banner">
            <div
              class="slot-wrapper"
              data-label="Header"
              data-layout-slotname="header"
            >
              <sci-card-banner my-icon="${this.myIcon}" type="${this.type}">
                <div slot="main-header">
                  <slot name="mainheader">${this.mainheader}</slot>
                </div>
                <div slot="sub-header">
                  <slot name="subheader">${this.subheader}</slot>
                </div>
              </sci-card-banner>
            </div>
          </summary>
          <div id="drawerContents">
            <ul>
              <li>Test</li>
              <li>Test2</li>
            </ul>
            <a
              tabindex="-1"
              href="${this.link}"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              part="invisi-button-link"
              @click=${this._playSound}
              ?contenteditable="${this.editMode}"
            >
              <invisi-button
                class="button"
                type="${this.type}"
                .disabled="${this.disabled}"
                style="--invisi-button-background-color: ${this.accentColor};"
              >
                ${this.type}
                <sci-card-icon
                  class="img"
                  icon="test"
                  my-icon="${this.myIcon}"
                  type="${this.myIcon}"
                ></sci-card-icon>
              </invisi-button>
            </a>
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
