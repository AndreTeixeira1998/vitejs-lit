import { LitElement, TemplateResult } from 'lit';
import './components/ha-bar-switch';
import './components/ha-card';
export declare class DemoHaBarSwitch extends LitElement {
    private checked;
    handleValueChanged(e: any): void;
    protected render(): TemplateResult;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'demo-switch': DemoHaBarSwitch;
    }
}
