import VEasterEggTrigger from '../VEasterEggTrigger.vue';
export * from '../index';
export type Entry<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T];
export interface Props {
    callback?: (settings: Props) => void;
    destroy?: boolean | undefined;
    delay?: number;
    pattern?: string[];
    persist?: boolean;
    target?: string;
    type?: string;
}
export interface Targets {
    nodes: string[];
    ids: string[];
    classNames: string[];
}
declare module "vue" {
    interface ComponentCustomProperties {
    }
    interface GlobalComponents {
        EasterEggTrigger: typeof VEasterEggTrigger;
        VEasterEggTrigger: typeof VEasterEggTrigger;
    }
}
