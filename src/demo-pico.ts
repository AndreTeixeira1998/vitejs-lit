import { css, html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import './components/pico-input';
import styles from '/css/pico.css?inline';

@customElement('demo-pico')
export class DemoPico extends LitElement {
  @state() private value = false;

  protected render(): TemplateResult {
    return html`
    <!-- Select -->
<label for="fruit">Fruit</label>
<select id="fruit" required>
  <option value="" selected>Select a fruit…</option>
  <option>…</option>
</select>

<!-- Radios -->
<fieldset>
  <legend>Size</legend>
  <label for="small">
    <input type="radio" id="small" name="size" value="small" checked>
    Small
  </label>
  <label for="medium">
    <input type="radio" id="medium" name="size" value="medium">
    Medium
  </label>
  <label for="large">
    <input type="radio" id="large" name="size" value="large">
    Large
  </label>
  <label for="extralarge">
    <input type="radio" id="extralarge" name="size" value="extralarge" disabled>
    Extra Large
  </label>
</fieldset>

<!-- Checkboxes -->
<fieldset>
  <label for="terms">
    <input type="checkbox" id="terms" name="terms">
    I agree to the Terms and Conditions
  </label>
  <label for="terms_sharing">
    <input type="checkbox" id="terms_sharing" name="terms_sharing" disabled checked>
    I agree to share my information with partners
  </label>
</fieldset>

<!-- Switches -->
<fieldset>
  <label for="switch">
    <input type="checkbox" id="switch" name="switch" role="switch">
    Publish on my profile
  </label>
  <label for="switch_disabled">
    <input type="checkbox" id="switch_disabled" name="switch_disabled" role="switch" disabled checked>
    User must change password at next logon
  </label>
</fieldset>
    
    `;
  }

  static styles = [unsafeCSS(styles), css``];
}

declare global {
  interface HTMLElementTagNameMap {
    'demo-pico': DemoPico;
  }
}
