import { CSSResultGroup, LitElement, TemplateResult } from 'lit';
export declare class HaCard extends LitElement {
    header?: string;
    raised: boolean;
    static get styles(): CSSResultGroup;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ha-card': HaCard;
    }
}
