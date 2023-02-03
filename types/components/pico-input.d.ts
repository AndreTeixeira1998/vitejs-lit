import { LitElement, TemplateResult } from 'lit';
export declare class PicoInput extends LitElement {
    haptic: boolean;
    cid: string;
    name: string;
    type: string;
    role: string;
    text: string;
    ariaLabel: string;
    ariaInvalid: string;
    value?: string | undefined;
    checked: boolean;
    disabled: boolean;
    readonly: boolean;
    protected firstUpdated(): void;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        'pico-input': PicoInput;
    }
}
