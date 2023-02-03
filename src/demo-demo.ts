import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import './demo-pico';

@customElement('demo-demo')
export class DemoDemo extends LitElement {
  @state() private value = false;

  protected render(): TemplateResult {
    return html`<demo-pico></demo-pico>`;
  }

  /*static get styles() {
    return css`
    `;
  }*/
}

declare global {
  interface HTMLElementTagNameMap {
    'demo-demo': DemoDemo;
  }
}
