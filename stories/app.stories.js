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
  },
};

function Template({ type }) {
  return html` <card-frame type="${type}"></card-frame> `;
}
export const Card = Template.bind({});
