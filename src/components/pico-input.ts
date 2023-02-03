import styles from '/css/pico.css?inline';
import { css, html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { forwardHaptic } from '../data/haptics';
import { ifDefined } from 'lit/directives/if-defined.js';

@customElement('pico-input')
export class PicoInput extends LitElement {
  // Generate a haptic vibration.
  // Only set to true if the new value of the switch is applied right away when toggling.
  // Do not add haptic when a user is required to press save.

  @property({ type: Boolean }) public haptic = false;

  @property({ type: String }) cid = 'cid';

  @property({ type: String }) name = 'input';

  @property({ type: String }) type = 'checkbox';

  @property({ type: String }) role = 'switch';

  @property({ type: String }) text = '';

  @property({ attribute: 'aria-label' })
  override ariaLabel!: string;

  @property({ attribute: 'aria-invalid' })
  ariaInvalid!: string;

  @property({ type: String }) value? = '';

  @property({ type: Boolean }) checked = false;

  @property({ type: Boolean }) disabled = false;

  @property({ type: Boolean }) readonly = false;

  protected firstUpdated() {
    this.addEventListener('input', (e) => {
      console.log('changed', this.value);
      if (this.haptic) {
        forwardHaptic('light');
      }
    });
  }

  protected override render(): TemplateResult {
    return html`
  <label for="${this.cid}">
    <input 
    ?checked="${this.checked}" 
    ?disabled="${this.disabled}"
    ?readonly="${this.readonly}"
    type="${this.type}" 
    id="${this.cid}" 
    value="${this.value}" 
    name="${this.name}" 
    role="${this.role}"
    aria-label="${ifDefined(this.ariaLabel)}"
    aria-invalid="${ifDefined(this.ariaInvalid)}"
    >

    ${this.textContent}
  </label>
    `;
  }
  static styles = [unsafeCSS(styles), css``];
}

declare global {
  interface HTMLElementTagNameMap {
    'pico-input': PicoInput;
  }
}
