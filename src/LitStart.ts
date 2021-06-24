import { LitElement, html } from 'lit-element';

export class LitStart extends LitElement {
  render() {
    return html`
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
