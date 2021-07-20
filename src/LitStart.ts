import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './Counter.js';

@customElement('lit-start')
export class LitStart extends LitElement {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return html` <counter-component name="hitode"></counter-component> `;
  }
}
