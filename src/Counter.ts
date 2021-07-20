import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CounterController } from './CounterController.js';

@customElement('counter-component')
export class Counter extends LitElement {
  private counter?: CounterController = new CounterController(this, 0);

  @property() name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  // eslint-disable-next-line class-methods-use-this
  onClick() {
    console.log('clicked');
  }

  render() {
    return html`
      <div>
        <p>Hello, ${this.name}!</p>
        <button @click=${this.onClick}>click!</button>
        <button @click=${() => this.counter?.increment()}>+1</button>
        <button @click=${() => this.counter?.decrement()}>-1</button>
        <p>count: ${this.counter?.counter}</p>
      </div>
    `;
  }
}
