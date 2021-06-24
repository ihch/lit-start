import { html, fixture, expect } from '@open-wc/testing';

import { LitStart } from '../src/LitStart.js';
import '../src/lit-start.js';

describe('LitStart', () => {
  let element: LitStart;
  beforeEach(async () => {
    element = await fixture(html`<lit-start></lit-start>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
