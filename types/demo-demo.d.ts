import { LitElement, TemplateResult } from 'lit';
import './demo-pico';
export declare class DemoDemo extends LitElement {
    private value;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'demo-demo': DemoDemo;
    }
}
