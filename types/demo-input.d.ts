import { LitElement, TemplateResult } from 'lit';
import './components/pico-input';
export declare class DemoInput extends LitElement {
    private value;
    protected render(): TemplateResult;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'demo-input': DemoInput;
    }
}
