import { html } from 'lit-html';
import '../src/app.js';

export default {
  title: 'Project two',
  component: 'sci-card',
  argTypes: {
    type: {
      options: ['objective', 'science', 'fact'],
      control: { type: 'select' },
    },
    header: {
      control: 'text',
    },
    subheader: {
      control: 'text',
    },
  },
};

function Template({ type = 'science', header, subheader, slot }) {
  return html`
    <card-frame type=${type}>
      <div slot="header">${header}</div>
      <div slot="subheader">${subheader}</div>
      ${slot}
    </card-frame>
  `;
}

export const Card = Template.bind({});

export const ScienceCard = Template.bind({});
ScienceCard.args = {
  type: 'science',
  header: html`<span>Unit 1</span>`,
  subheader: html`<span>Chem Connection</span>`,
  slot: html`
    <ul slot="body-content">
      <li>Describe the subatomic particles that make up an atom.</li>
      <li>
        Use the periodic table to determine the numbers of protons and electrons
        in a neutral (uncharged) atom.
      </li>
    </ul>
  `,
};

export const ObjectiveCard = Template.bind({});
ObjectiveCard.args = {
  type: 'objective',
  header: html`<span>Unit 1</span>`,
  subheader: html`<span>Learning Objectives</span>`,
  slot: html`
    <ul slot="body-content">
      <li>Learning Objective 1</li>
      <li>Learning Objective 2</li>
    </ul>
  `,
};

export const FactCard = Template.bind({});
FactCard.args = {
  type: 'fact',
  header: html`<span>Unit 1</span>`,
  subheader: html`<span>Did you know?</span>`,
  slot: html`
    <ul slot="body-content">
      <li>
        There is about 0.4 pounds or 200g of NaCl in the average adult human
        body.
      </li>
    </ul>
  `,
};
