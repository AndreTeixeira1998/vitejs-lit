import { html, LitElement, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import './demo-demo.ts';
import './demo-pico.ts';
import './demo-slider.ts';
import './demo-switch.ts';

@customElement('root-app')
export class RootApp extends LitElement {
  @state() private value = false;

  protected render(): TemplateResult {
    return html`  
    <demo-pico></demo-pico>
    <demo-slider></demo-slider>
    <demo-switch></demo-switch>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'root-app': RootApp;
  }
}

/**
 * 
 
        <ha-switch
          .checked=${this.coreUserData && this.coreUserData.showAdvanced}
          .disabled=${this.coreUserData === undefined}
          @change=${this._advancedToggled}
        ></ha-switch>

        <ha-slider
                .min=${this.selector.number?.min}
                .max=${this.selector.number?.max}
                .value=${this.value ?? ""}
                .step=${this.selector.number?.step ?? 1}
                .disabled=${this.disabled}
                .required=${this.required}
                pin
                ignore-bar-touch
                @change=${this._handleSliderChange}
              >
        </ha-slider>

        hui-color-picker

 */
