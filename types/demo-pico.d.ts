import { LitElement, TemplateResult } from 'lit';
import './components/pico-input';
export declare class DemoPico extends LitElement {
    private value;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        'demo-pico': DemoPico;
    }
}
