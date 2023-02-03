import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from 'lit';
import './ha-svg-icon';
export declare class HaBarSwitch extends LitElement {
    disabled: boolean;
    vertical: boolean;
    reversed: boolean;
    checked?: boolean;
    pathOn?: string;
    pathOff?: string;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private _toggle;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _keydown;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        'ha-bar-switch': HaBarSwitch;
    }
}
