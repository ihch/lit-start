import { html, TemplateResult } from 'lit-html';
import '../src/lit-start.js';

export default {
  title: 'LitStart',
  component: 'lit-start',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <lit-start style="--lit-start-background-color: ${backgroundColor}" .title=${title}></lit-start>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
