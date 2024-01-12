declare const _default: import("vue").DefineComponent<{
    callback: {
        default: void;
        type: FunctionConstructor;
    };
    delay: {
        default: string | number;
        type: (StringConstructor | NumberConstructor)[];
    };
    pattern: {
        default: () => string[];
        type: ArrayConstructor;
    };
    target: {
        default: string;
        type: StringConstructor;
    };
    type: {
        default: string;
        type: StringConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "triggered"[], "triggered", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    callback: {
        default: void;
        type: FunctionConstructor;
    };
    delay: {
        default: string | number;
        type: (StringConstructor | NumberConstructor)[];
    };
    pattern: {
        default: () => string[];
        type: ArrayConstructor;
    };
    target: {
        default: string;
        type: StringConstructor;
    };
    type: {
        default: string;
        type: StringConstructor;
    };
}>> & {
    onTriggered?: (...args: any[]) => any;
}, {
    pattern: unknown[];
    callback: Function;
    target: string;
    type: string;
    delay: string | number;
}, {}>;
export default _default;
