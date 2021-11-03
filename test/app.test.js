import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/app.js';
import '../src/SciCardBanner.js';
import '../src/SciCard.js';
import '../src/CardFrame.js';
import '../src/SciCardIcon.js';

describe('SciCardIcon', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(
      html`<sci-card-icon icon="beaker" type="beaker"></sci-card-icon>`
    );
  });

  it('Check beaker image link is correct', () => {
    expect(element.shadowRoot.querySelector('img').src).to.equal(
      'http://localhost:8000/assets/beaker.svg'
    );
  });
});
describe('SciCardBanner', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(
      html`<sci-card-banner type="fact"></sci-card-banner>`
    );
  });

  it('Has a blue background', () => {
    expect(
      element.shadowRoot.querySelector('#bannerElement').style.cssText
    ).to.equal('--sci-card-banner-color: blue;');
  });
});
describe('SciCard', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<sci-card type="fact"></sci-card>`);
  });

  it('renders a Header, Subheader', () => {
    expect(element.mainheader).to.equal('Unit 1');
    expect(element.subheader).to.exist;
    expect(element.subheader).to.equal('Did you know?');
    expect(
      element.shadowRoot.querySelector('#cardFrame').querySelector('details')
    ).to.exist;
  });
});

describe('CardFrame', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<card-frame type="science"></card-frame>`);
  });
  it('passes the a11y audit', async () => {
    element.type = 'science';
    setTimeout(() => {
      expect(element).shadowDom.to.be.accessible();
    }, 100);
    element.type = 'objective';
    setTimeout(() => {
      expect(element).shadowDom.to.be.accessible();
    }, 100);
    element.type = 'fact';
    setTimeout(() => {
      expect(element).shadowDom.to.be.accessible();
    }, 100);
  });

  it('Contains appropriate body list slots', async () => {
    expect(element.shadowRoot.querySelectorAll('div slot')[0].name).to.equal(
      'header'
    );
    expect(element.shadowRoot.querySelectorAll('div slot')[1].name).to.equal(
      'subheader'
    );
    expect(element.shadowRoot.querySelectorAll('div slot')[2].name).to.equal(
      'body-content'
    );
  });
});
