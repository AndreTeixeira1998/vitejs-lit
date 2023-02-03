/**
 * Broadcast haptic feedback requests
 */
import { HASSDomEvent } from '../common/dom/fire-event';
export type HapticType = 'success' | 'warning' | 'failure' | 'light' | 'medium' | 'heavy' | 'selection';
declare global {
    interface HASSDomEvents {
        haptic: HapticType;
    }
    interface GlobalEventHandlersEventMap {
        haptic: HASSDomEvent<HapticType>;
    }
}
export declare const forwardHaptic: (hapticType: HapticType) => void;
