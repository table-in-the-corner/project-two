import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/app.js';

describe('LearningCard', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<learning-card></learning-card>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('cool');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
   it('checks updatedProperties', () => {
    expect(element.type).to.equal('science');
    expect(element.icon).to.equal('beaker');
    element.type = 'objective';
    expect(element.type).to.equal('objective');
    expect(element.icon).to.equal('lightbulb');
    element.type = 'question';
    expect(element.type).to.equal('fact');
    expect(element.icon).to.equal('question');
});
