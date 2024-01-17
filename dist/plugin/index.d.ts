import type { App } from 'vue';
import type { Props } from './types';
import VEasterEggTrigger from './VEasterEggTrigger.vue';
export declare const globalOptions: unique symbol;
export declare function createVEasterEggTrigger(options?: Props): (app: App) => void;
export default VEasterEggTrigger;
declare const EasterEggTrigger: import("vue").DefineComponent<{
    pattern: {
        type: globalThis.PropType<string[]>;
        default: () => string[];
    };
    callback: {
        type: globalThis.PropType<(settings: Props) => void>;
    };
    type: {
        type: globalThis.PropType<string>;
        default: string;
    };
    destroy: {
        type: globalThis.PropType<boolean>;
    };
    delay: {
        type: globalThis.PropType<number>;
        default: number;
    };
    persist: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    target: {
        type: globalThis.PropType<string>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    triggered: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    pattern: {
        type: globalThis.PropType<string[]>;
        default: () => string[];
    };
    callback: {
        type: globalThis.PropType<(settings: Props) => void>;
    };
    type: {
        type: globalThis.PropType<string>;
        default: string;
    };
    destroy: {
        type: globalThis.PropType<boolean>;
    };
    delay: {
        type: globalThis.PropType<number>;
        default: number;
    };
    persist: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    target: {
        type: globalThis.PropType<string>;
        default: string;
    };
}>> & {
    onTriggered?: ((...args: any[]) => any) | undefined;
}, {
    pattern: string[];
    type: string;
    delay: number;
    persist: boolean;
    target: string;
}, {}>;
export { EasterEggTrigger, VEasterEggTrigger, };
