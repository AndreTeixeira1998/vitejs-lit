import { CSSResultGroup, LitElement, SVGTemplateResult } from 'lit';
export declare class HaSvgIcon extends LitElement {
    path?: string;
    viewBox?: string;
    protected render(): SVGTemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        'ha-svg-icon': HaSvgIcon;
    }
}
