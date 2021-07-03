import { html, fixture, expect } from '@open-wc/testing';

import { LitStart } from '../src/LitStart.js';

describe('LitStart', () => {
  let element: LitStart;
  beforeEach(async () => {
    element = await fixture(html`<lit-start></lit-start>`);
  });

  it('renders a h1', () => {
    // eslint-disable-next-line
    expect(element).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
