import 'hammerjs';
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from 'lit';
declare global {
    interface HASSDomEvents {
        'slider-moved': {
            value?: number;
        };
    }
}
export declare class HaBarSlider extends LitElement {
    disabled: boolean;
    mode?: 'start' | 'end' | 'cursor';
    vertical: boolean;
    showHandle: boolean;
    value?: number;
    step: number;
    min: number;
    max: number;
    private _mc?;
    pressed: boolean;
    valueToPercentage(value: number): number;
    percentageToValue(value: number): number;
    steppedValue(value: number): number;
    boundedValue(value: number): number;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private slider;
    setupListeners(): void;
    destroyListeners(): void;
    private get _tenPercentStep();
    _handleKeyDown(e: KeyboardEvent): void;
    _handleKeyUp(e: KeyboardEvent): void;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        'ha-bar-slider': HaBarSlider;
    }
}
