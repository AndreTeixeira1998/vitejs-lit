import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import './components/pico-input';

@customElement('demo-input')
export class DemoInput extends LitElement {
  @state() private value = false;

  protected render(): TemplateResult {
    return html`
    <pico-input
    type="text"
    placeholder="Valid"
    aria-invalid="false"
    value="test"
  ></pico-input>
  <pico-input
    type="text"
    placeholder="Invalid"
    aria-invalid="true"
  ></pico-input>
  <pico-input type="text" placeholder="Disabled" disabled></pico-input>
  <pico-input type="text" value="Readonly" readonly></pico-input>
  <pico-input checked>ola</pico-input>
  <pico-input
    type="color"
    id="color"
    name="color"
    value="#0eaaaa"
    @input=${() => {
      console.log('whooa', this);
    }}
  ></pico-input>
    `;
  }

  static get styles() {
    return css`
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'demo-input': DemoInput;
  }
}
