import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './Counter.js';


@customElement('lit-start')
export class LitStart extends LitElement {
  render() {
    return html`
      <counter-component name="hitode"></counter-component>
    `;
  }
}
