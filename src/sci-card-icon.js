import { html, css } from 'lit';
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";

export class SciCardIcon extends SimpleColors {
    static get tag() {
        return 'sci-card-icon';
    }
    constructor () {
        super();
    }
    static get styles() {
        return [...super.styles,
            css`
            :host {
                display: block;
                background-color: var(--simple-colors-default-theme-accent-1);
                border: 2px solid cyan;
            }
            `
        ];
    }
    render() {
        return html`<div>Icon Stuff<slot></slot><div>`;
    }
}
window.customElements.define(SciCardIcon.tag, SciCardIcon);
