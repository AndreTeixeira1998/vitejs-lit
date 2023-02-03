import { LitElement, TemplateResult } from 'lit';
import './components/ha-bar-slider';
import './components/ha-card';
export declare class DemoHaBarSlider extends LitElement {
    private value;
    private sliderPosition?;
    handleValueChanged(e: CustomEvent): void;
    handleSliderMoved(e: CustomEvent): void;
    protected render(): TemplateResult;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'demo-slider': DemoHaBarSlider;
    }
}
