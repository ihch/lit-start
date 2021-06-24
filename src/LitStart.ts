import { LitElement, html, property, customElement } from 'lit-element';

@customElement('po-pi')
export class PoPi extends LitElement {
  @property({ type: String }) name;

  constructor(name: string) {
    super();
    this.name = name;
  }

  render() {
    return html` <p>Hello, ${this.name}!</p> `;
  }
}

@customElement('lit-start')
export class LitStart extends LitElement {
  render() {
    return html`
      <po-pi name="hitode"></po-pi>
      <p>
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}
