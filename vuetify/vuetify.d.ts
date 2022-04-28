import * as vue from 'vue';
import { Ref, PropType, VNodeChild, nextTick, ComponentInternalInstance, ComputedRef, ExtractPropTypes, JSXComponent, Prop, WritableComputedRef, InjectionKey, ObjectDirective, DirectiveBinding, ToRefs, App } from 'vue';
import * as vue_router from 'vue-router';
import { RouteLocationRaw } from 'vue-router';

declare type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
interface BaseColors {
    background: string;
    surface: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    info: string;
}
interface OnColors {
    'on-background': string;
    'on-surface': string;
    'on-primary': string;
    'on-secondary': string;
    'on-success': string;
    'on-warning': string;
    'on-error': string;
    'on-info': string;
}
interface Colors extends BaseColors, OnColors {
    [key: string]: string;
}
interface InternalThemeDefinition {
    dark: boolean;
    colors: Colors;
    variables: Record<string, string | number>;
}
interface VariationsOptions {
    colors: string[];
    lighten: number;
    darken: number;
}
declare type ThemeDefinition = DeepPartial<InternalThemeDefinition>;
declare type ThemeOptions = false | {
    defaultTheme?: string;
    variations?: false | VariationsOptions;
    themes?: Record<string, ThemeDefinition>;
};
interface ThemeInstance {
    isDisabled: boolean;
    themes: Ref<Record<string, InternalThemeDefinition>>;
    current: Ref<string>;
    themeClasses: Ref<string | undefined>;
    setTheme: (key: string, theme: InternalThemeDefinition) => void;
    getTheme: (key: string) => InternalThemeDefinition;
    styles: Ref<string>;
}
declare function useTheme(): ThemeInstance;

declare const VApp: vue.DefineComponent<{
    theme: StringConstructor;
    overlaps: vue.Prop<string[], string[]>;
    fullHeight: {
        type: vue.PropType<boolean>;
        default: boolean;
    };
}, {
    getLayoutItem: (id: string) => {
        size: number;
        top: number;
        left: number;
        right: number;
        bottom: number;
        id: string;
    } | undefined;
    items: vue.ComputedRef<{
        size: number;
        top: number;
        left: number;
        right: number;
        bottom: number;
        id: string;
    }[]>;
    theme: ThemeInstance;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    overlaps: vue.Prop<string[], string[]>;
    fullHeight: {
        type: vue.PropType<boolean>;
        default: boolean;
    };
}>>, {
    fullHeight: boolean;
}>;
declare type VApp = InstanceType<typeof VApp>;

declare const VAppBar: vue.DefineComponent<{
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: {
        type: StringConstructor;
    };
    priority: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string>;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    collapse: BooleanConstructor;
    color: StringConstructor;
    density: {
        type: PropType<"default" | "compact" | "prominent" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    extended: BooleanConstructor;
    extensionHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    flat: BooleanConstructor;
    floating: BooleanConstructor;
    image: StringConstructor;
    title: StringConstructor;
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: PropType<"top" | "bottom">;
        default: string;
        validator: (value: any) => boolean;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: boolean) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: {
        type: StringConstructor;
    };
    priority: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string>;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    collapse: BooleanConstructor;
    color: StringConstructor;
    density: {
        type: PropType<"default" | "compact" | "prominent" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    extended: BooleanConstructor;
    extensionHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    flat: BooleanConstructor;
    floating: BooleanConstructor;
    image: StringConstructor;
    title: StringConstructor;
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: PropType<"top" | "bottom">;
        default: string;
        validator: (value: any) => boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {
    flat: boolean;
    absolute: boolean;
    height: string | number;
    priority: string | number;
    position: "top" | "bottom";
    tag: string;
    collapse: boolean;
    rounded: string | number | boolean;
    density: "default" | "compact" | "prominent" | "comfortable" | null;
    extended: boolean;
    extensionHeight: string | number;
    floating: boolean;
    modelValue: boolean;
}>;
declare type VAppBar = InstanceType<typeof VAppBar>;

declare const VAppBarNavIcon: vue.DefineComponent<{
    icon: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    icon: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    icon: string;
}>;

declare type SlotsToProps<T extends Record<string, Slot>> = {
    $children: () => (T['default'] | VNodeChild | {
        [K in keyof T]?: T[K];
    });
    'v-slots': new () => {
        [K in keyof T]?: T[K] | false;
    };
};
declare type Slot<T extends any[] = any[]> = (...args: T) => VNodeChild;
declare type MakeSlots<T extends Record<string, any[]>> = {
    [K in keyof T]?: Slot<T[K]>;
};

declare function deepEqual(a: any, b: any): boolean;

declare const VAppBarTitle: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            tag: string;
        }> & Omit<Readonly<vue.ExtractPropTypes<{
            tag: {
                type: StringConstructor;
                default: string;
            };
            text: StringConstructor;
        } & SlotsToProps<MakeSlots<{
            default: [];
            text: [];
        }>>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "tag">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
            tag: {
                type: StringConstructor;
                default: string;
            };
            text: StringConstructor;
        } & SlotsToProps<MakeSlots<{
            default: [];
            text: [];
        }>>>>, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            tag: string;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<{
        tag: {
            type: StringConstructor;
            default: string;
        };
        text: StringConstructor;
    } & SlotsToProps<MakeSlots<{
        default: [];
        text: [];
    }>>>> & vue.ShallowUnwrapRef<{}> & {} & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    text: StringConstructor;
} & SlotsToProps<MakeSlots<{
    default: [];
    text: [];
}>>>>, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    tag: string;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $slots: MakeSlots<{
        default: [];
        text: [];
    }>;
});

declare const allowedTypes: readonly ["success", "info", "warning", "error"];
declare type ContextualType = typeof allowedTypes[number];
declare const VAlert: vue.DefineComponent<{
    color: StringConstructor;
    variant: Omit<{
        type: PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    absolute: BooleanConstructor;
    bottom: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    fixed: BooleanConstructor;
    left: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    position: {
        type: PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    right: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    top: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    density: {
        type: PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    border: {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (val: boolean | string) => boolean;
    };
    borderColor: StringConstructor;
    closable: BooleanConstructor;
    closeIcon: {
        type: StringConstructor;
        default: string;
    };
    closeLabel: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: PropType<string | false>;
        default: null;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    prominent: BooleanConstructor;
    title: StringConstructor;
    text: StringConstructor;
    type: {
        type: PropType<"error" | "success" | "warning" | "info">;
        validator: (val: ContextualType) => boolean;
    };
}, () => false | JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: boolean) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    color: StringConstructor;
    variant: Omit<{
        type: PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    absolute: BooleanConstructor;
    bottom: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    fixed: BooleanConstructor;
    left: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    position: {
        type: PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    right: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    top: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    density: {
        type: PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    border: {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (val: boolean | string) => boolean;
    };
    borderColor: StringConstructor;
    closable: BooleanConstructor;
    closeIcon: {
        type: StringConstructor;
        default: string;
    };
    closeLabel: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: PropType<string | false>;
        default: null;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    prominent: BooleanConstructor;
    title: StringConstructor;
    text: StringConstructor;
    type: {
        type: PropType<"error" | "success" | "warning" | "info">;
        validator: (val: ContextualType) => boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {
    fixed: boolean;
    absolute: boolean;
    tag: string;
    icon: string | false;
    rounded: string | number | boolean;
    prominent: boolean;
    density: "default" | "compact" | "comfortable" | null;
    variant: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
    modelValue: boolean;
    closable: boolean;
    closeIcon: string;
    closeLabel: string;
}>;
declare type VAlert = InstanceType<typeof VAlert>;

declare const VAlertTitle: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
}>;

declare type FilterFunction = (value: string, query: string, item?: any) => FilterMatch;
declare type FilterKeyFunctions = Record<string, FilterFunction>;
declare type FilterKeys = string | string[];
declare type FilterMatch = number | [number, number] | [number, number][] | boolean;
declare type FilterMode = 'some' | 'every' | 'union' | 'intersection';

interface LinkProps {
    href?: string;
    replace?: boolean;
    to?: RouteLocationRaw;
}

interface InternalSelectItem {
    title: string;
    value: any;
    index: number;
}
interface DefaultSelectionSlot {
    selection: InternalSelectItem;
}
interface DefaultChipSlot extends DefaultSelectionSlot {
    props: {
        'onClick:close': (e: Event) => void;
        modelValue: any;
    };
}
declare type SelectItem = string | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | (LinkProps & {
    text: string;
});
declare const VSelect: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            });
            eager: boolean;
            multiple: boolean;
            noDataText: string;
            items: SelectItem[];
            modelValue: string | number | unknown[];
            chips: boolean;
            closableChips: boolean;
            hideNoData: boolean;
            hideSelected: boolean;
            menuIcon: string;
            openOnClear: boolean;
        }> & Omit<Readonly<vue.ExtractPropTypes<{
            transition: Omit<{
                type: PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string;
                validator: (val: unknown) => boolean;
            }, "type" | "default"> & {
                type: PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                });
            };
            chips: BooleanConstructor;
            closableChips: BooleanConstructor;
            eager: BooleanConstructor;
            hideNoData: BooleanConstructor;
            hideSelected: BooleanConstructor;
            items: {
                type: PropType<SelectItem[]>;
                default: () => never[];
            };
            menuIcon: {
                type: StringConstructor;
                default: string;
            };
            modelValue: {
                type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
                default: () => never[];
            };
            multiple: BooleanConstructor;
            noDataText: {
                type: StringConstructor;
                default: string;
            };
            openOnClear: BooleanConstructor;
        } & SlotsToProps<MakeSlots<{
            chip: [DefaultChipSlot];
            default: [];
            selection: [DefaultSelectionSlot];
        }>>>> & {
            "onUpdate:modelValue"?: ((val: any) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "transition" | "eager" | "multiple" | "noDataText" | "items" | "modelValue" | "chips" | "closableChips" | "hideNoData" | "hideSelected" | "menuIcon" | "openOnClear">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "update:modelValue", val: any) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
            transition: Omit<{
                type: PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string;
                validator: (val: unknown) => boolean;
            }, "type" | "default"> & {
                type: PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                });
            };
            chips: BooleanConstructor;
            closableChips: BooleanConstructor;
            eager: BooleanConstructor;
            hideNoData: BooleanConstructor;
            hideSelected: BooleanConstructor;
            items: {
                type: PropType<SelectItem[]>;
                default: () => never[];
            };
            menuIcon: {
                type: StringConstructor;
                default: string;
            };
            modelValue: {
                type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
                default: () => never[];
            };
            multiple: BooleanConstructor;
            noDataText: {
                type: StringConstructor;
                default: string;
            };
            openOnClear: BooleanConstructor;
        } & SlotsToProps<MakeSlots<{
            chip: [DefaultChipSlot];
            default: [];
            selection: [DefaultSelectionSlot];
        }>>>> & {
            "onUpdate:modelValue"?: ((val: any) => any) | undefined;
        }, any, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (val: any) => boolean;
        }, string, {
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            });
            eager: boolean;
            multiple: boolean;
            noDataText: string;
            items: SelectItem[];
            modelValue: string | number | unknown[];
            chips: boolean;
            closableChips: boolean;
            hideNoData: boolean;
            hideSelected: boolean;
            menuIcon: string;
            openOnClear: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<{
        transition: Omit<{
            type: PropType<string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            })>;
            default: string;
            validator: (val: unknown) => boolean;
        }, "type" | "default"> & {
            type: PropType<string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            })>;
            default: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            });
        };
        chips: BooleanConstructor;
        closableChips: BooleanConstructor;
        eager: BooleanConstructor;
        hideNoData: BooleanConstructor;
        hideSelected: BooleanConstructor;
        items: {
            type: PropType<SelectItem[]>;
            default: () => never[];
        };
        menuIcon: {
            type: StringConstructor;
            default: string;
        };
        modelValue: {
            type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
            default: () => never[];
        };
        multiple: BooleanConstructor;
        noDataText: {
            type: StringConstructor;
            default: string;
        };
        openOnClear: BooleanConstructor;
    } & SlotsToProps<MakeSlots<{
        chip: [DefaultChipSlot];
        default: [];
        selection: [DefaultSelectionSlot];
    }>>>> & {
        "onUpdate:modelValue"?: ((val: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<any> & {} & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
    transition: Omit<{
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        });
    };
    chips: BooleanConstructor;
    closableChips: BooleanConstructor;
    eager: BooleanConstructor;
    hideNoData: BooleanConstructor;
    hideSelected: BooleanConstructor;
    items: {
        type: PropType<SelectItem[]>;
        default: () => never[];
    };
    menuIcon: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: () => never[];
    };
    multiple: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    openOnClear: BooleanConstructor;
} & SlotsToProps<MakeSlots<{
    chip: [DefaultChipSlot];
    default: [];
    selection: [DefaultSelectionSlot];
}>>>> & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
}, any, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (val: any) => boolean;
}, string, {
    transition: string | boolean | (vue.TransitionProps & {
        component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
    });
    eager: boolean;
    multiple: boolean;
    noDataText: string;
    items: SelectItem[];
    modelValue: string | number | unknown[];
    chips: boolean;
    closableChips: boolean;
    hideNoData: boolean;
    hideSelected: boolean;
    menuIcon: string;
    openOnClear: boolean;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T>() => {
    $slots: MakeSlots<{
        chip: [DefaultChipSlot];
        default: [];
        selection: [DefaultSelectionSlot];
    }>;
});
declare type VSelect = InstanceType<typeof VSelect>;

interface InternalAutocompleteItem extends InternalSelectItem {
}
interface DefaultAutocompleteSlot {
    selection: InternalAutocompleteItem;
}
declare const VAutocomplete: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            });
            eager: boolean;
            multiple: boolean;
            noDataText: string;
            items: SelectItem[];
            modelValue: string | number | unknown[];
            chips: boolean;
            closableChips: boolean;
            hideNoData: boolean;
            hideSelected: boolean;
            menuIcon: string;
            openOnClear: boolean;
            filterMode: FilterMode;
            noFilter: boolean;
            filterKeys: (string & {}) | FilterKeys;
        }> & Omit<Readonly<vue.ExtractPropTypes<{
            transition: Omit<{
                type: vue.PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string;
                validator: (val: unknown) => boolean;
            }, "type" | "default"> & {
                type: vue.PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                });
            };
            chips: BooleanConstructor;
            closableChips: BooleanConstructor;
            eager: BooleanConstructor;
            hideNoData: BooleanConstructor;
            hideSelected: BooleanConstructor;
            items: {
                type: vue.PropType<SelectItem[]>;
                default: () => never[];
            };
            menuIcon: {
                type: StringConstructor;
                default: string;
            };
            modelValue: {
                type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
                default: () => never[];
            };
            multiple: BooleanConstructor;
            noDataText: {
                type: StringConstructor;
                default: string;
            };
            openOnClear: BooleanConstructor;
            customFilter: vue.PropType<FilterFunction>;
            customKeyFilter: vue.PropType<FilterKeyFunctions>;
            filterKeys: {
                type: vue.PropType<(string & {}) | FilterKeys>;
                default: (string & {}) | FilterKeys;
            };
            filterMode: {
                type: vue.PropType<FilterMode>;
                default: string;
            };
            noFilter: BooleanConstructor;
            search: StringConstructor;
        } & SlotsToProps<MakeSlots<{
            chip: [DefaultChipSlot];
            default: [];
            selection: [DefaultAutocompleteSlot];
        }>>>> & {
            "onUpdate:modelValue"?: ((val: any) => any) | undefined;
            "onClick:clear"?: ((e: MouseEvent) => any) | undefined;
            "onUpdate:search"?: ((val: any) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "transition" | "eager" | "multiple" | "noDataText" | "items" | "modelValue" | "chips" | "closableChips" | "hideNoData" | "hideSelected" | "menuIcon" | "openOnClear" | "filterMode" | "noFilter" | "filterKeys">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: ((event: "update:modelValue", val: any) => void) & ((event: "click:clear", e: MouseEvent) => void) & ((event: "update:search", val: any) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
            transition: Omit<{
                type: vue.PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string;
                validator: (val: unknown) => boolean;
            }, "type" | "default"> & {
                type: vue.PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                });
            };
            chips: BooleanConstructor;
            closableChips: BooleanConstructor;
            eager: BooleanConstructor;
            hideNoData: BooleanConstructor;
            hideSelected: BooleanConstructor;
            items: {
                type: vue.PropType<SelectItem[]>;
                default: () => never[];
            };
            menuIcon: {
                type: StringConstructor;
                default: string;
            };
            modelValue: {
                type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
                default: () => never[];
            };
            multiple: BooleanConstructor;
            noDataText: {
                type: StringConstructor;
                default: string;
            };
            openOnClear: BooleanConstructor;
            customFilter: vue.PropType<FilterFunction>;
            customKeyFilter: vue.PropType<FilterKeyFunctions>;
            filterKeys: {
                type: vue.PropType<(string & {}) | FilterKeys>;
                default: (string & {}) | FilterKeys;
            };
            filterMode: {
                type: vue.PropType<FilterMode>;
                default: string;
            };
            noFilter: BooleanConstructor;
            search: StringConstructor;
        } & SlotsToProps<MakeSlots<{
            chip: [DefaultChipSlot];
            default: [];
            selection: [DefaultAutocompleteSlot];
        }>>>> & {
            "onUpdate:modelValue"?: ((val: any) => any) | undefined;
            "onClick:clear"?: ((e: MouseEvent) => any) | undefined;
            "onUpdate:search"?: ((val: any) => any) | undefined;
        }, any, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'click:clear': (e: MouseEvent) => boolean;
            'update:search': (val: any) => boolean;
            'update:modelValue': (val: any) => boolean;
        }, string, {
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            });
            eager: boolean;
            multiple: boolean;
            noDataText: string;
            items: SelectItem[];
            modelValue: string | number | unknown[];
            chips: boolean;
            closableChips: boolean;
            hideNoData: boolean;
            hideSelected: boolean;
            menuIcon: string;
            openOnClear: boolean;
            filterMode: FilterMode;
            noFilter: boolean;
            filterKeys: (string & {}) | FilterKeys;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<{
        transition: Omit<{
            type: vue.PropType<string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            })>;
            default: string;
            validator: (val: unknown) => boolean;
        }, "type" | "default"> & {
            type: vue.PropType<string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            })>;
            default: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            });
        };
        chips: BooleanConstructor;
        closableChips: BooleanConstructor;
        eager: BooleanConstructor;
        hideNoData: BooleanConstructor;
        hideSelected: BooleanConstructor;
        items: {
            type: vue.PropType<SelectItem[]>;
            default: () => never[];
        };
        menuIcon: {
            type: StringConstructor;
            default: string;
        };
        modelValue: {
            type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
            default: () => never[];
        };
        multiple: BooleanConstructor;
        noDataText: {
            type: StringConstructor;
            default: string;
        };
        openOnClear: BooleanConstructor;
        customFilter: vue.PropType<FilterFunction>;
        customKeyFilter: vue.PropType<FilterKeyFunctions>;
        filterKeys: {
            type: vue.PropType<(string & {}) | FilterKeys>;
            default: (string & {}) | FilterKeys;
        };
        filterMode: {
            type: vue.PropType<FilterMode>;
            default: string;
        };
        noFilter: BooleanConstructor;
        search: StringConstructor;
    } & SlotsToProps<MakeSlots<{
        chip: [DefaultChipSlot];
        default: [];
        selection: [DefaultAutocompleteSlot];
    }>>>> & {
        "onUpdate:modelValue"?: ((val: any) => any) | undefined;
        "onClick:clear"?: ((e: MouseEvent) => any) | undefined;
        "onUpdate:search"?: ((val: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<any> & {} & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        });
    };
    chips: BooleanConstructor;
    closableChips: BooleanConstructor;
    eager: BooleanConstructor;
    hideNoData: BooleanConstructor;
    hideSelected: BooleanConstructor;
    items: {
        type: vue.PropType<SelectItem[]>;
        default: () => never[];
    };
    menuIcon: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: () => never[];
    };
    multiple: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    openOnClear: BooleanConstructor;
    customFilter: vue.PropType<FilterFunction>;
    customKeyFilter: vue.PropType<FilterKeyFunctions>;
    filterKeys: {
        type: vue.PropType<(string & {}) | FilterKeys>;
        default: (string & {}) | FilterKeys;
    };
    filterMode: {
        type: vue.PropType<FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    search: StringConstructor;
} & SlotsToProps<MakeSlots<{
    chip: [DefaultChipSlot];
    default: [];
    selection: [DefaultAutocompleteSlot];
}>>>> & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
    "onClick:clear"?: ((e: MouseEvent) => any) | undefined;
    "onUpdate:search"?: ((val: any) => any) | undefined;
}, any, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'click:clear': (e: MouseEvent) => boolean;
    'update:search': (val: any) => boolean;
    'update:modelValue': (val: any) => boolean;
}, string, {
    transition: string | boolean | (vue.TransitionProps & {
        component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
    });
    eager: boolean;
    multiple: boolean;
    noDataText: string;
    items: SelectItem[];
    modelValue: string | number | unknown[];
    chips: boolean;
    closableChips: boolean;
    hideNoData: boolean;
    hideSelected: boolean;
    menuIcon: string;
    openOnClear: boolean;
    filterMode: FilterMode;
    noFilter: boolean;
    filterKeys: (string & {}) | FilterKeys;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T>() => {
    $slots: MakeSlots<{
        chip: [DefaultChipSlot];
        default: [];
        selection: [DefaultAutocompleteSlot];
    }>;
});
declare type VAutocomplete = InstanceType<typeof VAutocomplete>;

declare const VAvatar: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    color: StringConstructor;
    start: BooleanConstructor;
    end: BooleanConstructor;
    icon: StringConstructor;
    image: StringConstructor;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    color: StringConstructor;
    start: BooleanConstructor;
    end: BooleanConstructor;
    icon: StringConstructor;
    image: StringConstructor;
}>>, {
    end: boolean;
    start: boolean;
    size: string | number;
    tag: string;
    rounded: string | number | boolean;
    density: "default" | "compact" | "comfortable" | null;
}>;
declare type VAvatar = InstanceType<typeof VAvatar>;

declare const VBadge: vue.DefineComponent<{
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        });
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    bordered: BooleanConstructor;
    color: StringConstructor;
    content: (StringConstructor | NumberConstructor)[];
    dot: BooleanConstructor;
    floating: BooleanConstructor;
    icon: StringConstructor;
    inline: BooleanConstructor;
    label: {
        type: StringConstructor;
        default: string;
    };
    location: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    max: (StringConstructor | NumberConstructor)[];
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    offsetX: (StringConstructor | NumberConstructor)[];
    offsetY: (StringConstructor | NumberConstructor)[];
    textColor: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        });
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    bordered: BooleanConstructor;
    color: StringConstructor;
    content: (StringConstructor | NumberConstructor)[];
    dot: BooleanConstructor;
    floating: BooleanConstructor;
    icon: StringConstructor;
    inline: BooleanConstructor;
    label: {
        type: StringConstructor;
        default: string;
    };
    location: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    max: (StringConstructor | NumberConstructor)[];
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    offsetX: (StringConstructor | NumberConstructor)[];
    offsetY: (StringConstructor | NumberConstructor)[];
    textColor: StringConstructor;
}>>, {
    inline: boolean;
    location: string;
    transition: string | boolean | (vue.TransitionProps & {
        component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
    });
    label: string;
    tag: string;
    dot: boolean;
    rounded: string | number | boolean;
    floating: boolean;
    modelValue: boolean;
    bordered: boolean;
}>;
declare type VBadge = InstanceType<typeof VBadge>;

declare const VBanner: vue.DefineComponent<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    absolute: BooleanConstructor;
    bottom: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    fixed: BooleanConstructor;
    left: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    position: {
        type: PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    right: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    top: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    density: {
        type: PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    avatar: StringConstructor;
    color: StringConstructor;
    icon: StringConstructor;
    lines: PropType<"one" | "two" | "three">;
    stacked: BooleanConstructor;
    sticky: BooleanConstructor;
    text: StringConstructor;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    absolute: BooleanConstructor;
    bottom: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    fixed: BooleanConstructor;
    left: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    position: {
        type: PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    right: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    top: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    density: {
        type: PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    avatar: StringConstructor;
    color: StringConstructor;
    icon: StringConstructor;
    lines: PropType<"one" | "two" | "three">;
    stacked: BooleanConstructor;
    sticky: BooleanConstructor;
    text: StringConstructor;
}>>, {
    fixed: boolean;
    absolute: boolean;
    tag: string;
    sticky: boolean;
    rounded: string | number | boolean;
    density: "default" | "compact" | "comfortable" | null;
    stacked: boolean;
}>;
declare type VBanner = InstanceType<typeof VBanner>;

declare const VBannerActions: vue.DefineComponent<{
    color: StringConstructor;
    density: StringConstructor;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    color: StringConstructor;
    density: StringConstructor;
}>>, {}>;

declare const VBannerAvatar: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    color: StringConstructor;
    start: BooleanConstructor;
    end: BooleanConstructor;
    icon: StringConstructor;
    image: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    color: StringConstructor;
    start: BooleanConstructor;
    end: BooleanConstructor;
    icon: StringConstructor;
    image: StringConstructor;
}>>, {
    end: boolean;
    start: boolean;
    size: string | number;
    tag: string;
    rounded: string | number | boolean;
    density: "default" | "compact" | "comfortable" | null;
}>;

declare const VBannerIcon: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    color: StringConstructor;
    start: BooleanConstructor;
    end: BooleanConstructor;
    icon: StringConstructor;
    image: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    color: StringConstructor;
    start: BooleanConstructor;
    end: BooleanConstructor;
    icon: StringConstructor;
    image: StringConstructor;
}>>, {
    end: boolean;
    start: boolean;
    size: string | number;
    tag: string;
    rounded: string | number | boolean;
    density: "default" | "compact" | "comfortable" | null;
}>;

declare const VBannerText: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
}>;

declare const VBottomNavigation: vue.DefineComponent<{
    theme: StringConstructor;
    modelValue: Omit<{
        type: null;
        default: undefined;
    }, "type" | "default"> & {
        type: vue.PropType<any>;
        default: any;
    };
    multiple: BooleanConstructor;
    mandatory: vue.PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: {
        type: vue.PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    name: Omit<{
        type: StringConstructor;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    priority: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    bgColor: StringConstructor;
    color: StringConstructor;
    grow: BooleanConstructor;
    mode: {
        type: StringConstructor;
        validator: (v: any) => boolean;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: any) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    modelValue: Omit<{
        type: null;
        default: undefined;
    }, "type" | "default"> & {
        type: vue.PropType<any>;
        default: any;
    };
    multiple: BooleanConstructor;
    mandatory: vue.PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: {
        type: vue.PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    name: Omit<{
        type: StringConstructor;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    priority: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    bgColor: StringConstructor;
    color: StringConstructor;
    grow: BooleanConstructor;
    mode: {
        type: StringConstructor;
        validator: (v: any) => boolean;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
}, {
    absolute: boolean;
    height: string | number;
    priority: string | number;
    name: string;
    disabled: boolean;
    multiple: boolean;
    tag: string;
    rounded: string | number | boolean;
    density: "default" | "compact" | "comfortable" | null;
    modelValue: any;
    selectedClass: string;
    grow: boolean;
}>;
declare type VBottomNavigation = InstanceType<typeof VBottomNavigation>;

declare type BreadcrumbItem = string | (LinkProps & {
    text: string;
    disabled?: boolean;
});
declare const VBreadcrumbs: vue.DefineComponent<{
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string>;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    density: {
        type: PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    activeClass: StringConstructor;
    activeColor: StringConstructor;
    bgColor: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    divider: {
        type: StringConstructor;
        default: string;
    };
    icon: StringConstructor;
    items: {
        type: PropType<BreadcrumbItem[]>;
        default: () => never[];
    };
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string>;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    density: {
        type: PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    activeClass: StringConstructor;
    activeColor: StringConstructor;
    bgColor: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    divider: {
        type: StringConstructor;
        default: string;
    };
    icon: StringConstructor;
    items: {
        type: PropType<BreadcrumbItem[]>;
        default: () => never[];
    };
}>>, {
    disabled: boolean;
    tag: string;
    items: BreadcrumbItem[];
    rounded: string | number | boolean;
    density: "default" | "compact" | "comfortable" | null;
    divider: string;
}>;
declare type VBreadcrumbs = InstanceType<typeof VBreadcrumbs>;

declare const VBreadcrumbsItem: vue.DefineComponent<{
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: vue.PropType<vue_router.RouteLocationRaw>;
    active: BooleanConstructor;
    activeClass: StringConstructor;
    activeColor: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    text: StringConstructor;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: vue.PropType<vue_router.RouteLocationRaw>;
    active: BooleanConstructor;
    activeClass: StringConstructor;
    activeColor: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    text: StringConstructor;
}>>, {
    replace: boolean;
    active: boolean;
    disabled: boolean;
    tag: string;
}>;
declare type VBreadcrumbsItem = InstanceType<typeof VBreadcrumbsItem>;

declare const VBreadcrumbsDivider: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
}>;

interface GroupItem {
    id: number;
    value: Ref<unknown>;
    disabled: Ref<boolean | undefined>;
}
interface GroupProvide {
    register: (item: GroupItem, cmp: ComponentInternalInstance) => void;
    unregister: (id: number) => void;
    select: (id: number, value: boolean) => void;
    selected: Ref<any[]>;
    isSelected: (id: number) => boolean;
    prev: () => void;
    next: () => void;
    selectedClass: Ref<string | undefined>;
    items: ComputedRef<{
        id: number;
        value: unknown;
        disabled: boolean | undefined;
    }[]>;
    disabled: Ref<boolean | undefined>;
    getItemIndex: (value: unknown) => number;
}
interface GroupItemProvide {
    id: number;
    isSelected: Ref<boolean>;
    toggle: () => void;
    select: (value: boolean) => void;
    selectedClass: Ref<(string | undefined)[] | false>;
    value: Ref<unknown>;
    disabled: Ref<boolean | undefined>;
    group: GroupProvide;
}

declare const VBtn: vue.DefineComponent<{
    color: StringConstructor;
    variant: Omit<{
        type: vue.PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
    };
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: vue.PropType<vue_router.RouteLocationRaw>;
    absolute: BooleanConstructor;
    bottom: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    fixed: BooleanConstructor;
    left: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    position: {
        type: vue.PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    right: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    top: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    symbol: {
        type: null;
        default: vue.InjectionKey<GroupProvide>;
    };
    flat: BooleanConstructor;
    icon: (StringConstructor | BooleanConstructor)[];
    prependIcon: StringConstructor;
    appendIcon: StringConstructor;
    block: BooleanConstructor;
    stacked: BooleanConstructor;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    color: StringConstructor;
    variant: Omit<{
        type: vue.PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
    };
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: vue.PropType<vue_router.RouteLocationRaw>;
    absolute: BooleanConstructor;
    bottom: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    fixed: BooleanConstructor;
    left: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    position: {
        type: vue.PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    right: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    top: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    symbol: {
        type: null;
        default: vue.InjectionKey<GroupProvide>;
    };
    flat: BooleanConstructor;
    icon: (StringConstructor | BooleanConstructor)[];
    prependIcon: StringConstructor;
    appendIcon: StringConstructor;
    block: BooleanConstructor;
    stacked: BooleanConstructor;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    symbol: any;
    replace: boolean;
    fixed: boolean;
    flat: boolean;
    absolute: boolean;
    block: boolean;
    disabled: boolean;
    size: string | number;
    tag: string;
    rounded: string | number | boolean;
    density: "default" | "compact" | "comfortable" | null;
    variant: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
    stacked: boolean;
    ripple: boolean;
}>;
declare type VBtn = InstanceType<typeof VBtn>;

declare const VBtnGroup: vue.DefineComponent<{
    color: StringConstructor;
    variant: {
        type: vue.PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: string;
        validator: (v: any) => boolean;
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    divided: BooleanConstructor;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    color: StringConstructor;
    variant: {
        type: vue.PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: string;
        validator: (v: any) => boolean;
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    divided: BooleanConstructor;
}>>, {
    tag: string;
    rounded: string | number | boolean;
    density: "default" | "compact" | "comfortable" | null;
    variant: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
    divided: boolean;
}>;

declare type BtnToggleSlotProps = 'isSelected' | 'select' | 'selected' | 'next' | 'prev';
interface DefaultBtnToggleSlot extends Pick<GroupProvide, BtnToggleSlotProps> {
}
declare const VBtnToggle: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            multiple: boolean;
            modelValue: any;
            selectedClass: string;
        }> & Omit<Readonly<vue.ExtractPropTypes<{
            modelValue: {
                type: null;
                default: undefined;
            };
            multiple: BooleanConstructor;
            mandatory: vue.PropType<boolean | "force">;
            max: NumberConstructor;
            selectedClass: {
                type: vue.PropType<string>;
                default: string;
            };
            disabled: BooleanConstructor;
        } & SlotsToProps<MakeSlots<{
            default: [DefaultBtnToggleSlot];
        }>>>> & {
            "onUpdate:modelValue"?: ((value: any) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "disabled" | "multiple" | "modelValue" | "selectedClass">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "update:modelValue", value: any) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
            modelValue: {
                type: null;
                default: undefined;
            };
            multiple: BooleanConstructor;
            mandatory: vue.PropType<boolean | "force">;
            max: NumberConstructor;
            selectedClass: {
                type: vue.PropType<string>;
                default: string;
            };
            disabled: BooleanConstructor;
        } & SlotsToProps<MakeSlots<{
            default: [DefaultBtnToggleSlot];
        }>>>> & {
            "onUpdate:modelValue"?: ((value: any) => any) | undefined;
        }, {
            next: () => void;
            prev: () => void;
            select: (id: number, value: boolean) => void;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (value: any) => boolean;
        }, string, {
            disabled: boolean;
            multiple: boolean;
            modelValue: any;
            selectedClass: string;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<{
        modelValue: {
            type: null;
            default: undefined;
        };
        multiple: BooleanConstructor;
        mandatory: vue.PropType<boolean | "force">;
        max: NumberConstructor;
        selectedClass: {
            type: vue.PropType<string>;
            default: string;
        };
        disabled: BooleanConstructor;
    } & SlotsToProps<MakeSlots<{
        default: [DefaultBtnToggleSlot];
    }>>>> & {
        "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        next: () => void;
        prev: () => void;
        select: (id: number, value: boolean) => void;
    }> & {} & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: vue.PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: {
        type: vue.PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
} & SlotsToProps<MakeSlots<{
    default: [DefaultBtnToggleSlot];
}>>>> & {
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
}, {
    next: () => void;
    prev: () => void;
    select: (id: number, value: boolean) => void;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: any) => boolean;
}, string, {
    disabled: boolean;
    multiple: boolean;
    modelValue: any;
    selectedClass: string;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T>() => {
    $slots: MakeSlots<{
        default: [DefaultBtnToggleSlot];
    }>;
});

declare const VCard: vue.DefineComponent<{
    color: StringConstructor;
    variant: Omit<{
        type: vue.PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: vue.PropType<vue_router.RouteLocationRaw>;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    absolute: BooleanConstructor;
    bottom: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    fixed: BooleanConstructor;
    left: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    position: {
        type: vue.PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    right: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    top: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    theme: StringConstructor;
    appendAvatar: StringConstructor;
    appendIcon: StringConstructor;
    disabled: BooleanConstructor;
    flat: BooleanConstructor;
    hover: BooleanConstructor;
    image: StringConstructor;
    link: BooleanConstructor;
    prependAvatar: StringConstructor;
    prependIcon: StringConstructor;
    ripple: BooleanConstructor;
    subtitle: StringConstructor;
    text: StringConstructor;
    title: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    color: StringConstructor;
    variant: Omit<{
        type: vue.PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: vue.PropType<vue_router.RouteLocationRaw>;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    absolute: BooleanConstructor;
    bottom: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    fixed: BooleanConstructor;
    left: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    position: {
        type: vue.PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    right: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    top: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    theme: StringConstructor;
    appendAvatar: StringConstructor;
    appendIcon: StringConstructor;
    disabled: BooleanConstructor;
    flat: BooleanConstructor;
    hover: BooleanConstructor;
    image: StringConstructor;
    link: BooleanConstructor;
    prependAvatar: StringConstructor;
    prependIcon: StringConstructor;
    ripple: BooleanConstructor;
    subtitle: StringConstructor;
    text: StringConstructor;
    title: StringConstructor;
}>>, {
    replace: boolean;
    fixed: boolean;
    link: boolean;
    flat: boolean;
    absolute: boolean;
    disabled: boolean;
    tag: string;
    rounded: string | number | boolean;
    density: "default" | "compact" | "comfortable" | null;
    variant: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
    ripple: boolean;
    hover: boolean;
}>;
declare type VCard = InstanceType<typeof VCard>;

declare const VCardActions: vue.DefineComponent<{}, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, vue.EmitsOptions, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{}>>, {}>;

declare const VCardAvatar: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
}>;

declare const VCardContent: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
}>;

declare const VCardHeader: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
}>;

declare const VCardHeaderText: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
}>;

declare const VCardImg: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
}>;

declare const VCardSubtitle: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
}>;

declare const VCardText: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
}>;

declare const VCardTitle: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
}>;

declare const VCarousel: vue.DefineComponent<{
    color: StringConstructor;
    cycle: BooleanConstructor;
    delimiterIcon: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    hideDelimiters: BooleanConstructor;
    hideDelimiterBackground: BooleanConstructor;
    interval: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (value: string | number) => boolean;
    };
    modelValue: null;
    progress: (StringConstructor | BooleanConstructor)[];
    showArrows: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
        validator: (v: any) => boolean;
    };
    verticalDelimiters: PropType<boolean | "left" | "right">;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (val: any) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    color: StringConstructor;
    cycle: BooleanConstructor;
    delimiterIcon: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    hideDelimiters: BooleanConstructor;
    hideDelimiterBackground: BooleanConstructor;
    interval: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (value: string | number) => boolean;
    };
    modelValue: null;
    progress: (StringConstructor | BooleanConstructor)[];
    showArrows: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
        validator: (v: any) => boolean;
    };
    verticalDelimiters: PropType<boolean | "left" | "right">;
}>> & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
}, {
    interval: string | number;
    height: string | number;
    showArrows: string | boolean;
    cycle: boolean;
    delimiterIcon: string;
    hideDelimiters: boolean;
    hideDelimiterBackground: boolean;
}>;

declare const VCarouselItem: vue.DefineComponent<{
    value: null;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    value: null;
}>>, {}>;
declare type VCarouselItem = InstanceType<typeof VCarouselItem>;

declare type ValidationResult = string | true;
declare type ValidationRule = ValidationResult | PromiseLike<ValidationResult> | ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>);

declare const VCheckbox: vue.DefineComponent<{
    falseIcon: {
        type: StringConstructor;
        default: string;
    };
    trueIcon: {
        type: StringConstructor;
        default: string;
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    theme: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    inline: BooleanConstructor;
    label: StringConstructor;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    trueValue: null;
    falseValue: null;
    modelValue: null;
    type: StringConstructor;
    value: null;
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    errorMessages: {
        type: vue.PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    rules: {
        type: vue.PropType<ValidationRule[]>;
        default: () => never[];
    };
    appendIcon: StringConstructor;
    prependIcon: StringConstructor;
    hideDetails: vue.PropType<boolean | "auto">;
    messages: {
        type: vue.PropType<string | string[]>;
        default: () => never[];
    };
    direction: {
        type: vue.PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    indeterminate: BooleanConstructor;
    indeterminateIcon: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:indeterminate': (val: boolean) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    falseIcon: {
        type: StringConstructor;
        default: string;
    };
    trueIcon: {
        type: StringConstructor;
        default: string;
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    theme: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    inline: BooleanConstructor;
    label: StringConstructor;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    trueValue: null;
    falseValue: null;
    modelValue: null;
    type: StringConstructor;
    value: null;
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    errorMessages: {
        type: vue.PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    rules: {
        type: vue.PropType<ValidationRule[]>;
        default: () => never[];
    };
    appendIcon: StringConstructor;
    prependIcon: StringConstructor;
    hideDetails: vue.PropType<boolean | "auto">;
    messages: {
        type: vue.PropType<string | string[]>;
        default: () => never[];
    };
    direction: {
        type: vue.PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    indeterminate: BooleanConstructor;
    indeterminateIcon: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:indeterminate"?: ((val: boolean) => any) | undefined;
}, {
    inline: boolean;
    error: boolean;
    direction: "horizontal" | "vertical";
    disabled: boolean;
    multiple: boolean | null;
    readonly: boolean;
    messages: string | string[];
    density: "default" | "compact" | "comfortable" | null;
    ripple: boolean;
    valueComparator: typeof deepEqual;
    indeterminate: boolean;
    errorMessages: string | string[];
    maxErrors: string | number;
    rules: ValidationRule[];
    falseIcon: string;
    trueIcon: string;
    indeterminateIcon: string;
}>;
declare type VCheckbox = InstanceType<typeof VCheckbox>;

declare const VChip: vue.DefineComponent<{
    color: StringConstructor;
    variant: Omit<{
        type: vue.PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
    };
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: vue.PropType<vue_router.RouteLocationRaw>;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    activeClass: StringConstructor;
    appendAvatar: StringConstructor;
    appendIcon: StringConstructor;
    closable: BooleanConstructor;
    closeIcon: {
        type: StringConstructor;
        default: string;
    };
    closeLabel: {
        type: StringConstructor;
        default: string;
    };
    draggable: BooleanConstructor;
    filter: BooleanConstructor;
    filterIcon: {
        type: StringConstructor;
        default: string;
    };
    label: BooleanConstructor;
    link: BooleanConstructor;
    pill: BooleanConstructor;
    prependAvatar: StringConstructor;
    prependIcon: StringConstructor;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    text: StringConstructor;
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => false | JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'click:close': (e: Event) => true;
    'update:active': (value: Boolean) => true;
    'update:modelValue': (value: Boolean) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    color: StringConstructor;
    variant: Omit<{
        type: vue.PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
    };
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: vue.PropType<vue_router.RouteLocationRaw>;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    activeClass: StringConstructor;
    appendAvatar: StringConstructor;
    appendIcon: StringConstructor;
    closable: BooleanConstructor;
    closeIcon: {
        type: StringConstructor;
        default: string;
    };
    closeLabel: {
        type: StringConstructor;
        default: string;
    };
    draggable: BooleanConstructor;
    filter: BooleanConstructor;
    filterIcon: {
        type: StringConstructor;
        default: string;
    };
    label: BooleanConstructor;
    link: BooleanConstructor;
    pill: BooleanConstructor;
    prependAvatar: StringConstructor;
    prependIcon: StringConstructor;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    text: StringConstructor;
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: Boolean) => any) | undefined;
    "onClick:close"?: ((e: Event) => any) | undefined;
    "onUpdate:active"?: ((value: Boolean) => any) | undefined;
}, {
    replace: boolean;
    link: boolean;
    filter: boolean;
    label: boolean;
    draggable: boolean;
    disabled: boolean;
    size: string | number;
    tag: string;
    rounded: string | number | boolean;
    density: "default" | "compact" | "comfortable" | null;
    variant: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
    modelValue: boolean;
    ripple: boolean;
    closable: boolean;
    closeIcon: string;
    closeLabel: string;
    filterIcon: string;
    pill: boolean;
}>;
declare type VChip = InstanceType<typeof VChip>;

declare const VChipGroup: vue.DefineComponent<{
    color: StringConstructor;
    variant: Omit<{
        type: PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    column: BooleanConstructor;
    filter: BooleanConstructor;
    valueComparator: {
        type: PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: any) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    color: StringConstructor;
    variant: Omit<{
        type: PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    column: BooleanConstructor;
    filter: BooleanConstructor;
    valueComparator: {
        type: PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
}, {
    filter: boolean;
    disabled: boolean;
    multiple: boolean;
    tag: string;
    column: boolean;
    variant: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
    modelValue: any;
    selectedClass: string;
    valueComparator: typeof deepEqual;
}>;
declare type VChipGroup = InstanceType<typeof VChipGroup>;

declare const VCode: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
}>;

declare const VColorPicker: vue.DefineComponent<{
    theme: StringConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    canvasHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    disabled: BooleanConstructor;
    dotSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    hideCanvas: BooleanConstructor;
    hideSliders: BooleanConstructor;
    hideInputs: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    modes: {
        type: PropType<string[]>;
        default: () => string[];
        validator: (v: any) => boolean;
    };
    showSwatches: BooleanConstructor;
    swatches: PropType<string[][]>;
    swatchesMaxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: PropType<string | Record<string, unknown> | null | undefined>;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (color: any) => true;
    'update:mode': (mode: string) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    canvasHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    disabled: BooleanConstructor;
    dotSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    hideCanvas: BooleanConstructor;
    hideSliders: BooleanConstructor;
    hideInputs: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    modes: {
        type: PropType<string[]>;
        default: () => string[];
        validator: (v: any) => boolean;
    };
    showSwatches: BooleanConstructor;
    swatches: PropType<string[][]>;
    swatchesMaxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: PropType<string | Record<string, unknown> | null | undefined>;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((color: any) => any) | undefined;
    "onUpdate:mode"?: ((mode: string) => any) | undefined;
}, {
    width: string | number;
    disabled: boolean;
    mode: string;
    rounded: string | number | boolean;
    dotSize: string | number;
    modes: string[];
    canvasHeight: string | number;
    hideCanvas: boolean;
    hideSliders: boolean;
    hideInputs: boolean;
    showSwatches: boolean;
    swatchesMaxHeight: string | number;
}>;
declare type VColorPicker = InstanceType<typeof VColorPicker>;

interface InternalComboboxItem extends InternalSelectItem {
    selected: boolean;
}
interface DefaultComboboxSlot {
    selection: InternalComboboxItem;
}
declare const VCombobox: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            });
            eager: boolean;
            multiple: boolean;
            noDataText: string;
            items: SelectItem[];
            modelValue: string | number | unknown[];
            chips: boolean;
            closableChips: boolean;
            hideNoData: boolean;
            hideSelected: boolean;
            menuIcon: string;
            openOnClear: boolean;
            filterMode: FilterMode;
            noFilter: boolean;
            filterKeys: (string & {}) | FilterKeys;
        }> & Omit<Readonly<vue.ExtractPropTypes<{
            transition: Omit<{
                type: PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string;
                validator: (val: unknown) => boolean;
            }, "type" | "default"> & {
                type: PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                });
            };
            chips: BooleanConstructor;
            closableChips: BooleanConstructor;
            eager: BooleanConstructor;
            hideNoData: {
                type: PropType<boolean>;
                default: boolean;
            };
            hideSelected: BooleanConstructor;
            items: {
                type: PropType<SelectItem[]>;
                default: () => never[];
            };
            menuIcon: {
                type: StringConstructor;
                default: string;
            };
            modelValue: {
                type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
                default: () => never[];
            };
            multiple: BooleanConstructor;
            noDataText: {
                type: StringConstructor;
                default: string;
            };
            openOnClear: BooleanConstructor;
            customFilter: PropType<FilterFunction>;
            customKeyFilter: PropType<FilterKeyFunctions>;
            filterKeys: {
                type: PropType<(string & {}) | FilterKeys>;
                default: (string & {}) | FilterKeys;
            };
            filterMode: {
                type: PropType<FilterMode>;
                default: string;
            };
            noFilter: BooleanConstructor;
            delimiters: PropType<string[]>;
        } & SlotsToProps<MakeSlots<{
            chip: [DefaultChipSlot];
            default: [];
            selection: [DefaultComboboxSlot];
        }>>>> & {
            "onUpdate:modelValue"?: ((val: any) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "transition" | "eager" | "multiple" | "noDataText" | "items" | "modelValue" | "chips" | "closableChips" | "hideNoData" | "hideSelected" | "menuIcon" | "openOnClear" | "filterMode" | "noFilter" | "filterKeys">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "update:modelValue", val: any) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
            transition: Omit<{
                type: PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string;
                validator: (val: unknown) => boolean;
            }, "type" | "default"> & {
                type: PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                });
            };
            chips: BooleanConstructor;
            closableChips: BooleanConstructor;
            eager: BooleanConstructor;
            hideNoData: {
                type: PropType<boolean>;
                default: boolean;
            };
            hideSelected: BooleanConstructor;
            items: {
                type: PropType<SelectItem[]>;
                default: () => never[];
            };
            menuIcon: {
                type: StringConstructor;
                default: string;
            };
            modelValue: {
                type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
                default: () => never[];
            };
            multiple: BooleanConstructor;
            noDataText: {
                type: StringConstructor;
                default: string;
            };
            openOnClear: BooleanConstructor;
            customFilter: PropType<FilterFunction>;
            customKeyFilter: PropType<FilterKeyFunctions>;
            filterKeys: {
                type: PropType<(string & {}) | FilterKeys>;
                default: (string & {}) | FilterKeys;
            };
            filterMode: {
                type: PropType<FilterMode>;
                default: string;
            };
            noFilter: BooleanConstructor;
            delimiters: PropType<string[]>;
        } & SlotsToProps<MakeSlots<{
            chip: [DefaultChipSlot];
            default: [];
            selection: [DefaultComboboxSlot];
        }>>>> & {
            "onUpdate:modelValue"?: ((val: any) => any) | undefined;
        }, any, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (val: any) => boolean;
        }, string, {
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            });
            eager: boolean;
            multiple: boolean;
            noDataText: string;
            items: SelectItem[];
            modelValue: string | number | unknown[];
            chips: boolean;
            closableChips: boolean;
            hideNoData: boolean;
            hideSelected: boolean;
            menuIcon: string;
            openOnClear: boolean;
            filterMode: FilterMode;
            noFilter: boolean;
            filterKeys: (string & {}) | FilterKeys;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<{
        transition: Omit<{
            type: PropType<string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            })>;
            default: string;
            validator: (val: unknown) => boolean;
        }, "type" | "default"> & {
            type: PropType<string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            })>;
            default: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            });
        };
        chips: BooleanConstructor;
        closableChips: BooleanConstructor;
        eager: BooleanConstructor;
        hideNoData: {
            type: PropType<boolean>;
            default: boolean;
        };
        hideSelected: BooleanConstructor;
        items: {
            type: PropType<SelectItem[]>;
            default: () => never[];
        };
        menuIcon: {
            type: StringConstructor;
            default: string;
        };
        modelValue: {
            type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
            default: () => never[];
        };
        multiple: BooleanConstructor;
        noDataText: {
            type: StringConstructor;
            default: string;
        };
        openOnClear: BooleanConstructor;
        customFilter: PropType<FilterFunction>;
        customKeyFilter: PropType<FilterKeyFunctions>;
        filterKeys: {
            type: PropType<(string & {}) | FilterKeys>;
            default: (string & {}) | FilterKeys;
        };
        filterMode: {
            type: PropType<FilterMode>;
            default: string;
        };
        noFilter: BooleanConstructor;
        delimiters: PropType<string[]>;
    } & SlotsToProps<MakeSlots<{
        chip: [DefaultChipSlot];
        default: [];
        selection: [DefaultComboboxSlot];
    }>>>> & {
        "onUpdate:modelValue"?: ((val: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<any> & {} & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
    transition: Omit<{
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        });
    };
    chips: BooleanConstructor;
    closableChips: BooleanConstructor;
    eager: BooleanConstructor;
    hideNoData: {
        type: PropType<boolean>;
        default: boolean;
    };
    hideSelected: BooleanConstructor;
    items: {
        type: PropType<SelectItem[]>;
        default: () => never[];
    };
    menuIcon: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: () => never[];
    };
    multiple: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    openOnClear: BooleanConstructor;
    customFilter: PropType<FilterFunction>;
    customKeyFilter: PropType<FilterKeyFunctions>;
    filterKeys: {
        type: PropType<(string & {}) | FilterKeys>;
        default: (string & {}) | FilterKeys;
    };
    filterMode: {
        type: PropType<FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    delimiters: PropType<string[]>;
} & SlotsToProps<MakeSlots<{
    chip: [DefaultChipSlot];
    default: [];
    selection: [DefaultComboboxSlot];
}>>>> & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
}, any, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (val: any) => boolean;
}, string, {
    transition: string | boolean | (vue.TransitionProps & {
        component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
    });
    eager: boolean;
    multiple: boolean;
    noDataText: string;
    items: SelectItem[];
    modelValue: string | number | unknown[];
    chips: boolean;
    closableChips: boolean;
    hideNoData: boolean;
    hideSelected: boolean;
    menuIcon: string;
    openOnClear: boolean;
    filterMode: FilterMode;
    noFilter: boolean;
    filterKeys: (string & {}) | FilterKeys;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T>() => {
    $slots: MakeSlots<{
        chip: [DefaultChipSlot];
        default: [];
        selection: [DefaultComboboxSlot];
    }>;
});
declare type VCombobox = InstanceType<typeof VCombobox>;

declare const VCounter: vue.DefineComponent<{
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        }) | {
            component: vue.DefineComponent<{
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: StringConstructor;
                    default: string | undefined;
                };
                origin: {
                    type: StringConstructor;
                    default: string;
                };
            }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: StringConstructor;
                    default: string | undefined;
                };
                origin: {
                    type: StringConstructor;
                    default: string;
                };
            }>>, {
                origin: string;
                group: boolean;
                mode: string;
                hideOnLeave: boolean;
                leaveAbsolute: boolean;
            }>;
        }>;
        default: string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        }) | {
            component: vue.DefineComponent<{
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: StringConstructor;
                    default: string | undefined;
                };
                origin: {
                    type: StringConstructor;
                    default: string;
                };
            }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: StringConstructor;
                    default: string | undefined;
                };
                origin: {
                    type: StringConstructor;
                    default: string;
                };
            }>>, {
                origin: string;
                group: boolean;
                mode: string;
                hideOnLeave: boolean;
                leaveAbsolute: boolean;
            }>;
        };
    };
    active: BooleanConstructor;
    max: (StringConstructor | NumberConstructor)[];
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        }) | {
            component: vue.DefineComponent<{
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: StringConstructor;
                    default: string | undefined;
                };
                origin: {
                    type: StringConstructor;
                    default: string;
                };
            }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: StringConstructor;
                    default: string | undefined;
                };
                origin: {
                    type: StringConstructor;
                    default: string;
                };
            }>>, {
                origin: string;
                group: boolean;
                mode: string;
                hideOnLeave: boolean;
                leaveAbsolute: boolean;
            }>;
        }>;
        default: string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        }) | {
            component: vue.DefineComponent<{
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: StringConstructor;
                    default: string | undefined;
                };
                origin: {
                    type: StringConstructor;
                    default: string;
                };
            }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: StringConstructor;
                    default: string | undefined;
                };
                origin: {
                    type: StringConstructor;
                    default: string;
                };
            }>>, {
                origin: string;
                group: boolean;
                mode: string;
                hideOnLeave: boolean;
                leaveAbsolute: boolean;
            }>;
        };
    };
    active: BooleanConstructor;
    max: (StringConstructor | NumberConstructor)[];
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>>, {
    active: boolean;
    transition: string | boolean | (vue.TransitionProps & {
        component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
    }) | {
        component: vue.DefineComponent<{
            group: BooleanConstructor;
            hideOnLeave: BooleanConstructor;
            leaveAbsolute: BooleanConstructor;
            mode: {
                type: StringConstructor;
                default: string | undefined;
            };
            origin: {
                type: StringConstructor;
                default: string;
            };
        }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
            group: BooleanConstructor;
            hideOnLeave: BooleanConstructor;
            leaveAbsolute: BooleanConstructor;
            mode: {
                type: StringConstructor;
                default: string | undefined;
            };
            origin: {
                type: StringConstructor;
                default: string;
            };
        }>>, {
            origin: string;
            group: boolean;
            mode: string;
            hideOnLeave: boolean;
            leaveAbsolute: boolean;
        }>;
    };
    value: string | number;
}>;

interface DefaultsInstance {
    [key: string]: undefined | Record<string, unknown>;
    global?: Record<string, unknown>;
}
declare type DefaultsOptions = Partial<DefaultsInstance>;

declare const VDefaultsProvider: vue.DefineComponent<{
    defaults: PropType<Partial<DefaultsInstance>>;
    reset: (StringConstructor | NumberConstructor)[];
    root: BooleanConstructor;
    scoped: BooleanConstructor;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    defaults: PropType<Partial<DefaultsInstance>>;
    reset: (StringConstructor | NumberConstructor)[];
    root: BooleanConstructor;
    scoped: BooleanConstructor;
}>>, {
    root: boolean;
    scoped: boolean;
}>;

interface ScrollStrategyData {
    root: Ref<HTMLElement | undefined>;
    contentEl: Ref<HTMLElement | undefined>;
    activatorEl: Ref<HTMLElement | undefined>;
    isActive: Ref<boolean>;
    updatePosition: Ref<((e: Event) => void) | undefined>;
}

declare const block: readonly ["top", "bottom"];
declare const inline: readonly ["start", "end"];
declare type Tblock = typeof block[number];
declare type Tinline = typeof inline[number];
declare type Anchor = Tblock | Tinline | 'center' | 'center center' | `${Tblock} ${Tinline | 'center'}` | `${Tinline} ${Tblock | 'center'}`;

interface PositionStrategyData {
    contentEl: Ref<HTMLElement | undefined>;
    activatorEl: Ref<HTMLElement | undefined>;
    isActive: Ref<boolean>;
}
declare const positionStrategies: {
    static: typeof staticPositionStrategy;
    connected: typeof connectedPositionStrategy;
};
interface StrategyProps {
    positionStrategy: keyof typeof positionStrategies | ((data: PositionStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => undefined | {
        updatePosition: (e: Event) => void;
    });
    anchor: Anchor;
    origin: Anchor | 'auto' | 'overlap';
    offset?: number | string;
    maxHeight?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
}
declare function staticPositionStrategy(): void;
declare function connectedPositionStrategy(data: PositionStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>): {
    updatePosition: () => void;
};

declare type OverlaySlots = MakeSlots<{
    default: [{
        isActive: Ref<boolean>;
    }];
    activator: [{
        isActive: boolean;
        props: Record<string, any>;
    }];
}>;
declare const VOverlay: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            anchor: Anchor;
            absolute: boolean;
            origin: "auto" | Anchor | "overlap";
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            });
            eager: boolean;
            modelValue: boolean;
            contained: boolean;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            positionStrategy: "connected" | "static" | ((data: PositionStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
                updatePosition: (e: Event) => void;
            } | undefined);
            scrollStrategy: "none" | "block" | "close" | "reposition" | ((data: ScrollStrategyData) => void);
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
        }> & Omit<Readonly<vue.ExtractPropTypes<{
            eager: BooleanConstructor;
            transition: {
                type: PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string;
                validator: (val: unknown) => boolean;
            };
            theme: StringConstructor;
            scrollStrategy: {
                type: PropType<"none" | "block" | "close" | "reposition" | ((data: ScrollStrategyData) => void)>;
                default: string;
                validator: (val: any) => boolean;
            };
            positionStrategy: {
                type: PropType<"connected" | "static" | ((data: PositionStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
                    updatePosition: (e: Event) => void;
                } | undefined)>;
                default: string;
                validator: (val: any) => boolean;
            };
            anchor: {
                type: PropType<Anchor>;
                default: string;
            };
            origin: {
                type: PropType<"auto" | Anchor | "overlap">;
                default: string;
            };
            offset: (StringConstructor | NumberConstructor)[];
            height: (StringConstructor | NumberConstructor)[];
            maxHeight: (StringConstructor | NumberConstructor)[];
            maxWidth: (StringConstructor | NumberConstructor)[];
            minHeight: (StringConstructor | NumberConstructor)[];
            minWidth: (StringConstructor | NumberConstructor)[];
            width: (StringConstructor | NumberConstructor)[];
            closeDelay: (StringConstructor | NumberConstructor)[];
            openDelay: (StringConstructor | NumberConstructor)[];
            activator: PropType<string | Element | vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | undefined>;
            activatorProps: {
                type: PropType<Record<string, any>>;
                default: () => {};
            };
            openOnClick: {
                type: BooleanConstructor;
                default: undefined;
            };
            openOnHover: BooleanConstructor;
            openOnFocus: {
                type: BooleanConstructor;
                default: undefined;
            };
            absolute: BooleanConstructor;
            attach: PropType<string | boolean | Element>;
            contained: BooleanConstructor;
            contentClass: null;
            noClickAnimation: BooleanConstructor;
            modelValue: BooleanConstructor;
            persistent: BooleanConstructor;
            scrim: {
                type: (StringConstructor | BooleanConstructor)[];
                default: boolean;
            };
        } & SlotsToProps<MakeSlots<{
            default: [{
                isActive: Ref<boolean>;
            }];
            activator: [{
                isActive: boolean;
                props: Record<string, any>;
            }];
        }>>>> & {
            onAfterLeave?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "anchor" | "absolute" | "origin" | "transition" | "eager" | "modelValue" | "contained" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "positionStrategy" | "scrollStrategy" | "noClickAnimation" | "persistent" | "scrim">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: ((event: "update:modelValue", value: boolean) => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "afterLeave") => void);
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
            eager: BooleanConstructor;
            transition: {
                type: PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string;
                validator: (val: unknown) => boolean;
            };
            theme: StringConstructor;
            scrollStrategy: {
                type: PropType<"none" | "block" | "close" | "reposition" | ((data: ScrollStrategyData) => void)>;
                default: string;
                validator: (val: any) => boolean;
            };
            positionStrategy: {
                type: PropType<"connected" | "static" | ((data: PositionStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
                    updatePosition: (e: Event) => void;
                } | undefined)>;
                default: string;
                validator: (val: any) => boolean;
            };
            anchor: {
                type: PropType<Anchor>;
                default: string;
            };
            origin: {
                type: PropType<"auto" | Anchor | "overlap">;
                default: string;
            };
            offset: (StringConstructor | NumberConstructor)[];
            height: (StringConstructor | NumberConstructor)[];
            maxHeight: (StringConstructor | NumberConstructor)[];
            maxWidth: (StringConstructor | NumberConstructor)[];
            minHeight: (StringConstructor | NumberConstructor)[];
            minWidth: (StringConstructor | NumberConstructor)[];
            width: (StringConstructor | NumberConstructor)[];
            closeDelay: (StringConstructor | NumberConstructor)[];
            openDelay: (StringConstructor | NumberConstructor)[];
            activator: PropType<string | Element | vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | undefined>;
            activatorProps: {
                type: PropType<Record<string, any>>;
                default: () => {};
            };
            openOnClick: {
                type: BooleanConstructor;
                default: undefined;
            };
            openOnHover: BooleanConstructor;
            openOnFocus: {
                type: BooleanConstructor;
                default: undefined;
            };
            absolute: BooleanConstructor;
            attach: PropType<string | boolean | Element>;
            contained: BooleanConstructor;
            contentClass: null;
            noClickAnimation: BooleanConstructor;
            modelValue: BooleanConstructor;
            persistent: BooleanConstructor;
            scrim: {
                type: (StringConstructor | BooleanConstructor)[];
                default: boolean;
            };
        } & SlotsToProps<MakeSlots<{
            default: [{
                isActive: Ref<boolean>;
            }];
            activator: [{
                isActive: boolean;
                props: Record<string, any>;
            }];
        }>>>> & {
            onAfterLeave?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        }, {
            animateClick: () => void;
            contentEl: Ref<HTMLElement | undefined>;
            activatorEl: Ref<HTMLElement | undefined>;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'click:outside': (e: MouseEvent) => boolean;
            'update:modelValue': (value: boolean) => boolean;
            afterLeave: () => boolean;
        }, string, {
            anchor: Anchor;
            absolute: boolean;
            origin: "auto" | Anchor | "overlap";
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            });
            eager: boolean;
            modelValue: boolean;
            contained: boolean;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            positionStrategy: "connected" | "static" | ((data: PositionStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
                updatePosition: (e: Event) => void;
            } | undefined);
            scrollStrategy: "none" | "block" | "close" | "reposition" | ((data: ScrollStrategyData) => void);
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<{
        eager: BooleanConstructor;
        transition: {
            type: PropType<string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            })>;
            default: string;
            validator: (val: unknown) => boolean;
        };
        theme: StringConstructor;
        scrollStrategy: {
            type: PropType<"none" | "block" | "close" | "reposition" | ((data: ScrollStrategyData) => void)>;
            default: string;
            validator: (val: any) => boolean;
        };
        positionStrategy: {
            type: PropType<"connected" | "static" | ((data: PositionStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
                updatePosition: (e: Event) => void;
            } | undefined)>;
            default: string;
            validator: (val: any) => boolean;
        };
        anchor: {
            type: PropType<Anchor>;
            default: string;
        };
        origin: {
            type: PropType<"auto" | Anchor | "overlap">;
            default: string;
        };
        offset: (StringConstructor | NumberConstructor)[];
        height: (StringConstructor | NumberConstructor)[];
        maxHeight: (StringConstructor | NumberConstructor)[];
        maxWidth: (StringConstructor | NumberConstructor)[];
        minHeight: (StringConstructor | NumberConstructor)[];
        minWidth: (StringConstructor | NumberConstructor)[];
        width: (StringConstructor | NumberConstructor)[];
        closeDelay: (StringConstructor | NumberConstructor)[];
        openDelay: (StringConstructor | NumberConstructor)[];
        activator: PropType<string | Element | vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | undefined>;
        activatorProps: {
            type: PropType<Record<string, any>>;
            default: () => {};
        };
        openOnClick: {
            type: BooleanConstructor;
            default: undefined;
        };
        openOnHover: BooleanConstructor;
        openOnFocus: {
            type: BooleanConstructor;
            default: undefined;
        };
        absolute: BooleanConstructor;
        attach: PropType<string | boolean | Element>;
        contained: BooleanConstructor;
        contentClass: null;
        noClickAnimation: BooleanConstructor;
        modelValue: BooleanConstructor;
        persistent: BooleanConstructor;
        scrim: {
            type: (StringConstructor | BooleanConstructor)[];
            default: boolean;
        };
    } & SlotsToProps<MakeSlots<{
        default: [{
            isActive: Ref<boolean>;
        }];
        activator: [{
            isActive: boolean;
            props: Record<string, any>;
        }];
    }>>>> & {
        onAfterLeave?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        animateClick: () => void;
        contentEl: Ref<HTMLElement | undefined>;
        activatorEl: Ref<HTMLElement | undefined>;
    }> & {} & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
    eager: BooleanConstructor;
    transition: {
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    };
    theme: StringConstructor;
    scrollStrategy: {
        type: PropType<"none" | "block" | "close" | "reposition" | ((data: ScrollStrategyData) => void)>;
        default: string;
        validator: (val: any) => boolean;
    };
    positionStrategy: {
        type: PropType<"connected" | "static" | ((data: PositionStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
            updatePosition: (e: Event) => void;
        } | undefined)>;
        default: string;
        validator: (val: any) => boolean;
    };
    anchor: {
        type: PropType<Anchor>;
        default: string;
    };
    origin: {
        type: PropType<"auto" | Anchor | "overlap">;
        default: string;
    };
    offset: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    activator: PropType<string | Element | vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | undefined>;
    activatorProps: {
        type: PropType<Record<string, any>>;
        default: () => {};
    };
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    openOnHover: BooleanConstructor;
    openOnFocus: {
        type: BooleanConstructor;
        default: undefined;
    };
    absolute: BooleanConstructor;
    attach: PropType<string | boolean | Element>;
    contained: BooleanConstructor;
    contentClass: null;
    noClickAnimation: BooleanConstructor;
    modelValue: BooleanConstructor;
    persistent: BooleanConstructor;
    scrim: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
} & SlotsToProps<MakeSlots<{
    default: [{
        isActive: Ref<boolean>;
    }];
    activator: [{
        isActive: boolean;
        props: Record<string, any>;
    }];
}>>>> & {
    onAfterLeave?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
}, {
    animateClick: () => void;
    contentEl: Ref<HTMLElement | undefined>;
    activatorEl: Ref<HTMLElement | undefined>;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'click:outside': (e: MouseEvent) => boolean;
    'update:modelValue': (value: boolean) => boolean;
    afterLeave: () => boolean;
}, string, {
    anchor: Anchor;
    absolute: boolean;
    origin: "auto" | Anchor | "overlap";
    transition: string | boolean | (vue.TransitionProps & {
        component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
    });
    eager: boolean;
    modelValue: boolean;
    contained: boolean;
    activatorProps: Record<string, any>;
    openOnClick: boolean;
    openOnHover: boolean;
    openOnFocus: boolean;
    positionStrategy: "connected" | "static" | ((data: PositionStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
        updatePosition: (e: Event) => void;
    } | undefined);
    scrollStrategy: "none" | "block" | "close" | "reposition" | ((data: ScrollStrategyData) => void);
    noClickAnimation: boolean;
    persistent: boolean;
    scrim: string | boolean;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $slots: OverlaySlots;
});
declare type VOverlay = InstanceType<typeof VOverlay>;

declare const VDialog: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            origin: string;
            width: string | number;
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            }) | {
                component: vue.DefineComponent<{
                    target: vue.PropType<HTMLElement>;
                }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                    target: vue.PropType<HTMLElement>;
                }>>, {}>;
            };
            modelValue: boolean;
            fullscreen: boolean;
            scrollable: boolean;
            retainFocus: boolean;
        }> & Omit<Readonly<vue.ExtractPropTypes<{
            transition: Omit<{
                type: vue.PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string;
                validator: (val: unknown) => boolean;
            }, "type" | "default"> & {
                type: vue.PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                }) | {
                    component: vue.DefineComponent<{
                        target: vue.PropType<HTMLElement>;
                    }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                        target: vue.PropType<HTMLElement>;
                    }>>, {}>;
                }>;
                default: string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                }) | {
                    component: vue.DefineComponent<{
                        target: vue.PropType<HTMLElement>;
                    }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                        target: vue.PropType<HTMLElement>;
                    }>>, {}>;
                };
            };
            height: (StringConstructor | NumberConstructor)[];
            maxHeight: (StringConstructor | NumberConstructor)[];
            maxWidth: (StringConstructor | NumberConstructor)[];
            minHeight: (StringConstructor | NumberConstructor)[];
            minWidth: (StringConstructor | NumberConstructor)[];
            width: {
                type: vue.PropType<string | number>;
                default: string | number;
            };
            fullscreen: BooleanConstructor;
            origin: {
                type: StringConstructor;
                default: string;
            };
            retainFocus: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollable: BooleanConstructor;
            modelValue: BooleanConstructor;
        } & SlotsToProps<MakeSlots<{
            default: [{
                isActive: vue.Ref<boolean>;
            }];
            activator: [{
                isActive: boolean;
                props: Record<string, any>;
            }];
        }>>>> & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "origin" | "width" | "transition" | "modelValue" | "fullscreen" | "scrollable" | "retainFocus">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "update:modelValue", value: boolean) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
            transition: Omit<{
                type: vue.PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string;
                validator: (val: unknown) => boolean;
            }, "type" | "default"> & {
                type: vue.PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                }) | {
                    component: vue.DefineComponent<{
                        target: vue.PropType<HTMLElement>;
                    }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                        target: vue.PropType<HTMLElement>;
                    }>>, {}>;
                }>;
                default: string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                }) | {
                    component: vue.DefineComponent<{
                        target: vue.PropType<HTMLElement>;
                    }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                        target: vue.PropType<HTMLElement>;
                    }>>, {}>;
                };
            };
            height: (StringConstructor | NumberConstructor)[];
            maxHeight: (StringConstructor | NumberConstructor)[];
            maxWidth: (StringConstructor | NumberConstructor)[];
            minHeight: (StringConstructor | NumberConstructor)[];
            minWidth: (StringConstructor | NumberConstructor)[];
            width: {
                type: vue.PropType<string | number>;
                default: string | number;
            };
            fullscreen: BooleanConstructor;
            origin: {
                type: StringConstructor;
                default: string;
            };
            retainFocus: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollable: BooleanConstructor;
            modelValue: BooleanConstructor;
        } & SlotsToProps<MakeSlots<{
            default: [{
                isActive: vue.Ref<boolean>;
            }];
            activator: [{
                isActive: boolean;
                props: Record<string, any>;
            }];
        }>>>> & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (value: boolean) => boolean;
        }, string, {
            origin: string;
            width: string | number;
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            }) | {
                component: vue.DefineComponent<{
                    target: vue.PropType<HTMLElement>;
                }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                    target: vue.PropType<HTMLElement>;
                }>>, {}>;
            };
            modelValue: boolean;
            fullscreen: boolean;
            scrollable: boolean;
            retainFocus: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<{
        transition: Omit<{
            type: vue.PropType<string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            })>;
            default: string;
            validator: (val: unknown) => boolean;
        }, "type" | "default"> & {
            type: vue.PropType<string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            }) | {
                component: vue.DefineComponent<{
                    target: vue.PropType<HTMLElement>;
                }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                    target: vue.PropType<HTMLElement>;
                }>>, {}>;
            }>;
            default: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            }) | {
                component: vue.DefineComponent<{
                    target: vue.PropType<HTMLElement>;
                }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                    target: vue.PropType<HTMLElement>;
                }>>, {}>;
            };
        };
        height: (StringConstructor | NumberConstructor)[];
        maxHeight: (StringConstructor | NumberConstructor)[];
        maxWidth: (StringConstructor | NumberConstructor)[];
        minHeight: (StringConstructor | NumberConstructor)[];
        minWidth: (StringConstructor | NumberConstructor)[];
        width: {
            type: vue.PropType<string | number>;
            default: string | number;
        };
        fullscreen: BooleanConstructor;
        origin: {
            type: StringConstructor;
            default: string;
        };
        retainFocus: {
            type: BooleanConstructor;
            default: boolean;
        };
        scrollable: BooleanConstructor;
        modelValue: BooleanConstructor;
    } & SlotsToProps<MakeSlots<{
        default: [{
            isActive: vue.Ref<boolean>;
        }];
        activator: [{
            isActive: boolean;
            props: Record<string, any>;
        }];
    }>>>> & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    } & vue.ShallowUnwrapRef<() => JSX.Element> & {} & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        }) | {
            component: vue.DefineComponent<{
                target: vue.PropType<HTMLElement>;
            }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                target: vue.PropType<HTMLElement>;
            }>>, {}>;
        }>;
        default: string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        }) | {
            component: vue.DefineComponent<{
                target: vue.PropType<HTMLElement>;
            }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                target: vue.PropType<HTMLElement>;
            }>>, {}>;
        };
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: {
        type: vue.PropType<string | number>;
        default: string | number;
    };
    fullscreen: BooleanConstructor;
    origin: {
        type: StringConstructor;
        default: string;
    };
    retainFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollable: BooleanConstructor;
    modelValue: BooleanConstructor;
} & SlotsToProps<MakeSlots<{
    default: [{
        isActive: vue.Ref<boolean>;
    }];
    activator: [{
        isActive: boolean;
        props: Record<string, any>;
    }];
}>>>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: boolean) => boolean;
}, string, {
    origin: string;
    width: string | number;
    transition: string | boolean | (vue.TransitionProps & {
        component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
    }) | {
        component: vue.DefineComponent<{
            target: vue.PropType<HTMLElement>;
        }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
            target: vue.PropType<HTMLElement>;
        }>>, {}>;
    };
    modelValue: boolean;
    fullscreen: boolean;
    scrollable: boolean;
    retainFocus: boolean;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $slots: OverlaySlots;
});
declare type VDialog = InstanceType<typeof VDialog>;

declare const VDivider: vue.DefineComponent<{
    theme: StringConstructor;
    color: StringConstructor;
    inset: BooleanConstructor;
    length: (StringConstructor | NumberConstructor)[];
    thickness: (StringConstructor | NumberConstructor)[];
    vertical: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    color: StringConstructor;
    inset: BooleanConstructor;
    length: (StringConstructor | NumberConstructor)[];
    thickness: (StringConstructor | NumberConstructor)[];
    vertical: BooleanConstructor;
}>>, {
    inset: boolean;
    vertical: boolean;
}>;

declare const VExpansionPanels: vue.DefineComponent<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: StringConstructor;
    disabled: BooleanConstructor;
    color: StringConstructor;
    variant: {
        type: PropType<"default" | "inset" | "accordion" | "popout">;
        default: string;
        validator: (v: any) => boolean;
    };
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (val: unknown) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: StringConstructor;
    disabled: BooleanConstructor;
    color: StringConstructor;
    variant: {
        type: PropType<"default" | "inset" | "accordion" | "popout">;
        default: string;
        validator: (v: any) => boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((val: unknown) => any) | undefined;
}, {
    disabled: boolean;
    multiple: boolean;
    tag: string;
    variant: "default" | "inset" | "accordion" | "popout";
    modelValue: any;
}>;
declare type VExpansionPanels = InstanceType<typeof VExpansionPanels>;

declare const VExpansionPanel: vue.DefineComponent<{
    color: StringConstructor;
    expandIcon: {
        type: StringConstructor;
        default: string;
    };
    collapseIcon: {
        type: StringConstructor;
        default: string;
    };
    hideActions: BooleanConstructor;
    ripple: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    eager: BooleanConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    title: StringConstructor;
    text: StringConstructor;
    bgColor: StringConstructor;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    color: StringConstructor;
    expandIcon: {
        type: StringConstructor;
        default: string;
    };
    collapseIcon: {
        type: StringConstructor;
        default: string;
    };
    hideActions: BooleanConstructor;
    ripple: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    eager: BooleanConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    title: StringConstructor;
    text: StringConstructor;
    bgColor: StringConstructor;
}>>, {
    eager: boolean;
    disabled: boolean;
    tag: string;
    rounded: string | number | boolean;
    ripple: boolean | Record<string, any>;
    collapseIcon: string;
    expandIcon: string;
    hideActions: boolean;
}>;
declare type VExpansionPanel = InstanceType<typeof VExpansionPanel>;

declare const VExpansionPanelText: vue.DefineComponent<{
    eager: BooleanConstructor;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    eager: BooleanConstructor;
}>>, {
    eager: boolean;
}>;
declare type VExpansionPanelText = InstanceType<typeof VExpansionPanelText>;

declare const VExpansionPanelTitle: vue.DefineComponent<{
    color: StringConstructor;
    expandIcon: {
        type: StringConstructor;
        default: string;
    };
    collapseIcon: {
        type: StringConstructor;
        default: string;
    };
    hideActions: BooleanConstructor;
    ripple: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    color: StringConstructor;
    expandIcon: {
        type: StringConstructor;
        default: string;
    };
    collapseIcon: {
        type: StringConstructor;
        default: string;
    };
    hideActions: BooleanConstructor;
    ripple: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
}>>, {
    ripple: boolean | Record<string, any>;
    collapseIcon: string;
    expandIcon: string;
    hideActions: boolean;
}>;
declare type VExpansionPanelTitle = InstanceType<typeof VExpansionPanelTitle>;

interface VInputSlot {
    id: ComputedRef<string>;
    isDirty: ComputedRef<boolean>;
    isDisabled: ComputedRef<boolean>;
    isReadonly: ComputedRef<boolean>;
    isPristine: Ref<boolean>;
    isValid: ComputedRef<boolean | null>;
    isValidating: Ref<boolean>;
    reset: () => void;
    resetValidation: () => void;
    validate: () => void;
}
declare type VInputSlots = MakeSlots<{
    default: [VInputSlot];
    prepend: [VInputSlot];
    append: [VInputSlot];
    details: [VInputSlot];
}>;
declare const VInput: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            error: boolean;
            direction: "horizontal" | "vertical";
            disabled: boolean;
            readonly: boolean;
            messages: string | string[];
            density: "default" | "compact" | "comfortable" | null;
            errorMessages: string | string[];
            maxErrors: string | number;
            rules: ValidationRule[];
        }> & Omit<Readonly<ExtractPropTypes<{
            disabled: BooleanConstructor;
            error: BooleanConstructor;
            errorMessages: {
                type: PropType<string | string[]>;
                default: () => never[];
            };
            maxErrors: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            name: StringConstructor;
            readonly: BooleanConstructor;
            rules: {
                type: PropType<ValidationRule[]>;
                default: () => never[];
            };
            modelValue: null;
            density: {
                type: PropType<"default" | "compact" | "comfortable" | null>;
                default: string;
                validator: (v: any) => boolean;
            };
            id: StringConstructor;
            appendIcon: StringConstructor;
            prependIcon: StringConstructor;
            hideDetails: PropType<boolean | "auto">;
            messages: {
                type: PropType<string | string[]>;
                default: () => never[];
            };
            direction: {
                type: PropType<"horizontal" | "vertical">;
                default: string;
                validator: (v: any) => boolean;
            };
        } & SlotsToProps<MakeSlots<{
            default: [VInputSlot];
            prepend: [VInputSlot];
            append: [VInputSlot];
            details: [VInputSlot];
        }>>>> & {
            "onUpdate:modelValue"?: ((val: any) => any) | undefined;
            "onClick:prepend"?: ((e: MouseEvent) => any) | undefined;
            "onClick:append"?: ((e: MouseEvent) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "error" | "direction" | "disabled" | "readonly" | "messages" | "density" | "errorMessages" | "maxErrors" | "rules">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: ((event: "update:modelValue", val: any) => void) & ((event: "click:prepend", e: MouseEvent) => void) & ((event: "click:append", e: MouseEvent) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<ExtractPropTypes<{
            disabled: BooleanConstructor;
            error: BooleanConstructor;
            errorMessages: {
                type: PropType<string | string[]>;
                default: () => never[];
            };
            maxErrors: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            name: StringConstructor;
            readonly: BooleanConstructor;
            rules: {
                type: PropType<ValidationRule[]>;
                default: () => never[];
            };
            modelValue: null;
            density: {
                type: PropType<"default" | "compact" | "comfortable" | null>;
                default: string;
                validator: (v: any) => boolean;
            };
            id: StringConstructor;
            appendIcon: StringConstructor;
            prependIcon: StringConstructor;
            hideDetails: PropType<boolean | "auto">;
            messages: {
                type: PropType<string | string[]>;
                default: () => never[];
            };
            direction: {
                type: PropType<"horizontal" | "vertical">;
                default: string;
                validator: (v: any) => boolean;
            };
        } & SlotsToProps<MakeSlots<{
            default: [VInputSlot];
            prepend: [VInputSlot];
            append: [VInputSlot];
            details: [VInputSlot];
        }>>>> & {
            "onUpdate:modelValue"?: ((val: any) => any) | undefined;
            "onClick:prepend"?: ((e: MouseEvent) => any) | undefined;
            "onClick:append"?: ((e: MouseEvent) => any) | undefined;
        }, {
            reset: () => void;
            resetValidation: () => void;
            validate: () => Promise<string[]>;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'click:prepend': (e: MouseEvent) => boolean;
            'click:append': (e: MouseEvent) => boolean;
            'update:modelValue': (val: any) => boolean;
        }, string, {
            error: boolean;
            direction: "horizontal" | "vertical";
            disabled: boolean;
            readonly: boolean;
            messages: string | string[];
            density: "default" | "compact" | "comfortable" | null;
            errorMessages: string | string[];
            maxErrors: string | number;
            rules: ValidationRule[];
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<ExtractPropTypes<{
        disabled: BooleanConstructor;
        error: BooleanConstructor;
        errorMessages: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        maxErrors: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        name: StringConstructor;
        readonly: BooleanConstructor;
        rules: {
            type: PropType<ValidationRule[]>;
            default: () => never[];
        };
        modelValue: null;
        density: {
            type: PropType<"default" | "compact" | "comfortable" | null>;
            default: string;
            validator: (v: any) => boolean;
        };
        id: StringConstructor;
        appendIcon: StringConstructor;
        prependIcon: StringConstructor;
        hideDetails: PropType<boolean | "auto">;
        messages: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        direction: {
            type: PropType<"horizontal" | "vertical">;
            default: string;
            validator: (v: any) => boolean;
        };
    } & SlotsToProps<MakeSlots<{
        default: [VInputSlot];
        prepend: [VInputSlot];
        append: [VInputSlot];
        details: [VInputSlot];
    }>>>> & {
        "onUpdate:modelValue"?: ((val: any) => any) | undefined;
        "onClick:prepend"?: ((e: MouseEvent) => any) | undefined;
        "onClick:append"?: ((e: MouseEvent) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        reset: () => void;
        resetValidation: () => void;
        validate: () => Promise<string[]>;
    }> & {} & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<ExtractPropTypes<{
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    errorMessages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    rules: {
        type: PropType<ValidationRule[]>;
        default: () => never[];
    };
    modelValue: null;
    density: {
        type: PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: StringConstructor;
    prependIcon: StringConstructor;
    hideDetails: PropType<boolean | "auto">;
    messages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
} & SlotsToProps<MakeSlots<{
    default: [VInputSlot];
    prepend: [VInputSlot];
    append: [VInputSlot];
    details: [VInputSlot];
}>>>> & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
    "onClick:prepend"?: ((e: MouseEvent) => any) | undefined;
    "onClick:append"?: ((e: MouseEvent) => any) | undefined;
}, {
    reset: () => void;
    resetValidation: () => void;
    validate: () => Promise<string[]>;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'click:prepend': (e: MouseEvent) => boolean;
    'click:append': (e: MouseEvent) => boolean;
    'update:modelValue': (val: any) => boolean;
}, string, {
    error: boolean;
    direction: "horizontal" | "vertical";
    disabled: boolean;
    readonly: boolean;
    messages: string | string[];
    density: "default" | "compact" | "comfortable" | null;
    errorMessages: string | string[];
    maxErrors: string | number;
    rules: ValidationRule[];
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T>() => {
    $slots: VInputSlots;
});
declare type VInput = InstanceType<typeof VInput>;

interface LoaderSlotProps {
    color: string | undefined;
    isActive: boolean;
}

interface DefaultInputSlot {
    isActive: Ref<boolean>;
    isFocused: Ref<boolean>;
    controlRef: Ref<HTMLElement | undefined>;
    focus: () => void;
    blur: () => void;
}
interface VFieldSlot extends DefaultInputSlot {
    props: Record<string, unknown>;
}
declare type VFieldSlots = MakeSlots<{
    clear: [];
    prependInner: [DefaultInputSlot & VInputSlot];
    appendInner: [DefaultInputSlot & VInputSlot];
    label: [DefaultInputSlot & VInputSlot];
    loader: [LoaderSlotProps];
    default: [VFieldSlot];
}>;
declare const VField: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            reverse: boolean;
            error: boolean;
            active: boolean;
            loading: boolean;
            disabled: boolean;
            variant: "filled" | "outlined" | "plain" | "contained" | "underlined";
            focused: boolean;
            clearable: boolean;
            clearIcon: string;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }> & Omit<Readonly<vue.ExtractPropTypes<Omit<{
            loading: BooleanConstructor;
            theme: StringConstructor;
            appendInnerIcon: StringConstructor;
            bgColor: StringConstructor;
            clearable: BooleanConstructor;
            clearIcon: {
                type: StringConstructor;
                default: string;
            };
            active: BooleanConstructor;
            color: StringConstructor;
            dirty: BooleanConstructor;
            disabled: BooleanConstructor;
            error: BooleanConstructor;
            label: StringConstructor;
            persistentClear: BooleanConstructor;
            prependInnerIcon: StringConstructor;
            reverse: BooleanConstructor;
            singleLine: BooleanConstructor;
            variant: {
                type: PropType<"filled" | "outlined" | "plain" | "contained" | "underlined">;
                default: string;
                validator: (v: any) => boolean;
            };
            focused: BooleanConstructor;
            id: StringConstructor;
        }, "onUpdate:modelValue" | "modelValue"> & SlotsToProps<MakeSlots<{
            clear: [];
            prependInner: [DefaultInputSlot & VInputSlot];
            appendInner: [DefaultInputSlot & VInputSlot];
            label: [DefaultInputSlot & VInputSlot];
            loader: [LoaderSlotProps];
            default: [VFieldSlot];
        }>>>> & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "onClick:clear"?: ((e: MouseEvent) => any) | undefined;
            "onClick:prepend-inner"?: ((e: MouseEvent) => any) | undefined;
            "onClick:append-inner"?: ((e: MouseEvent) => any) | undefined;
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "reverse" | "error" | "active" | "loading" | "disabled" | "variant" | "focused" | "clearable" | "clearIcon" | "dirty" | "persistentClear" | "singleLine">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: ((event: "click:clear", e: MouseEvent) => void) & ((event: "click:prepend-inner", e: MouseEvent) => void) & ((event: "click:append-inner", e: MouseEvent) => void) & ((event: "click:control", e: MouseEvent) => void) & ((event: "update:focused", focused: boolean) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
            loading: BooleanConstructor;
            theme: StringConstructor;
            appendInnerIcon: StringConstructor;
            bgColor: StringConstructor;
            clearable: BooleanConstructor;
            clearIcon: {
                type: StringConstructor;
                default: string;
            };
            active: BooleanConstructor;
            color: StringConstructor;
            dirty: BooleanConstructor;
            disabled: BooleanConstructor;
            error: BooleanConstructor;
            label: StringConstructor;
            persistentClear: BooleanConstructor;
            prependInnerIcon: StringConstructor;
            reverse: BooleanConstructor;
            singleLine: BooleanConstructor;
            variant: {
                type: PropType<"filled" | "outlined" | "plain" | "contained" | "underlined">;
                default: string;
                validator: (v: any) => boolean;
            };
            focused: BooleanConstructor;
            id: StringConstructor;
        }, "onUpdate:modelValue" | "modelValue"> & SlotsToProps<MakeSlots<{
            clear: [];
            prependInner: [DefaultInputSlot & VInputSlot];
            appendInner: [DefaultInputSlot & VInputSlot];
            label: [DefaultInputSlot & VInputSlot];
            loader: [LoaderSlotProps];
            default: [VFieldSlot];
        }>>>> & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "onClick:clear"?: ((e: MouseEvent) => any) | undefined;
            "onClick:prepend-inner"?: ((e: MouseEvent) => any) | undefined;
            "onClick:append-inner"?: ((e: MouseEvent) => any) | undefined;
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
        }, {
            controlRef: Ref<HTMLElement | undefined>;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
            'click:clear': (e: MouseEvent) => boolean;
            'click:prepend-inner': (e: MouseEvent) => boolean;
            'click:append-inner': (e: MouseEvent) => boolean;
            'click:control': (e: MouseEvent) => boolean;
            'update:focused': (focused: boolean) => boolean;
            'update:modelValue': (val: any) => boolean;
        }, "update:modelValue" | "modelValue">, string, {
            reverse: boolean;
            error: boolean;
            active: boolean;
            loading: boolean;
            disabled: boolean;
            variant: "filled" | "outlined" | "plain" | "contained" | "underlined";
            focused: boolean;
            clearable: boolean;
            clearIcon: string;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<Omit<{
        loading: BooleanConstructor;
        theme: StringConstructor;
        appendInnerIcon: StringConstructor;
        bgColor: StringConstructor;
        clearable: BooleanConstructor;
        clearIcon: {
            type: StringConstructor;
            default: string;
        };
        active: BooleanConstructor;
        color: StringConstructor;
        dirty: BooleanConstructor;
        disabled: BooleanConstructor;
        error: BooleanConstructor;
        label: StringConstructor;
        persistentClear: BooleanConstructor;
        prependInnerIcon: StringConstructor;
        reverse: BooleanConstructor;
        singleLine: BooleanConstructor;
        variant: {
            type: PropType<"filled" | "outlined" | "plain" | "contained" | "underlined">;
            default: string;
            validator: (v: any) => boolean;
        };
        focused: BooleanConstructor;
        id: StringConstructor;
    }, "onUpdate:modelValue" | "modelValue"> & SlotsToProps<MakeSlots<{
        clear: [];
        prependInner: [DefaultInputSlot & VInputSlot];
        appendInner: [DefaultInputSlot & VInputSlot];
        label: [DefaultInputSlot & VInputSlot];
        loader: [LoaderSlotProps];
        default: [VFieldSlot];
    }>>>> & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onClick:clear"?: ((e: MouseEvent) => any) | undefined;
        "onClick:prepend-inner"?: ((e: MouseEvent) => any) | undefined;
        "onClick:append-inner"?: ((e: MouseEvent) => any) | undefined;
        "onClick:control"?: ((e: MouseEvent) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        controlRef: Ref<HTMLElement | undefined>;
    }> & {} & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
    loading: BooleanConstructor;
    theme: StringConstructor;
    appendInnerIcon: StringConstructor;
    bgColor: StringConstructor;
    clearable: BooleanConstructor;
    clearIcon: {
        type: StringConstructor;
        default: string;
    };
    active: BooleanConstructor;
    color: StringConstructor;
    dirty: BooleanConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    label: StringConstructor;
    persistentClear: BooleanConstructor;
    prependInnerIcon: StringConstructor;
    reverse: BooleanConstructor;
    singleLine: BooleanConstructor;
    variant: {
        type: PropType<"filled" | "outlined" | "plain" | "contained" | "underlined">;
        default: string;
        validator: (v: any) => boolean;
    };
    focused: BooleanConstructor;
    id: StringConstructor;
}, "onUpdate:modelValue" | "modelValue"> & SlotsToProps<MakeSlots<{
    clear: [];
    prependInner: [DefaultInputSlot & VInputSlot];
    appendInner: [DefaultInputSlot & VInputSlot];
    label: [DefaultInputSlot & VInputSlot];
    loader: [LoaderSlotProps];
    default: [VFieldSlot];
}>>>> & {
    "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    "onClick:clear"?: ((e: MouseEvent) => any) | undefined;
    "onClick:prepend-inner"?: ((e: MouseEvent) => any) | undefined;
    "onClick:append-inner"?: ((e: MouseEvent) => any) | undefined;
    "onClick:control"?: ((e: MouseEvent) => any) | undefined;
}, {
    controlRef: Ref<HTMLElement | undefined>;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'click:clear': (e: MouseEvent) => boolean;
    'click:prepend-inner': (e: MouseEvent) => boolean;
    'click:append-inner': (e: MouseEvent) => boolean;
    'click:control': (e: MouseEvent) => boolean;
    'update:focused': (focused: boolean) => boolean;
    'update:modelValue': (val: any) => boolean;
}, "update:modelValue" | "modelValue">, string, {
    reverse: boolean;
    error: boolean;
    active: boolean;
    loading: boolean;
    disabled: boolean;
    variant: "filled" | "outlined" | "plain" | "contained" | "underlined";
    focused: boolean;
    clearable: boolean;
    clearIcon: string;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T>() => {
    $props: {
        modelValue?: T | undefined;
        'onUpdate:modelValue'?: ((val: T) => any) | undefined;
    };
    $slots: VFieldSlots;
});
declare type VField = InstanceType<typeof VField>;

declare const VFieldLabel: vue.DefineComponent<{
    floating: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    floating: BooleanConstructor;
}>>, {
    floating: boolean;
}>;
declare type VFieldLabel = InstanceType<typeof VFieldLabel>;

declare const VFileInput: vue.DefineComponent<{
    loading: BooleanConstructor;
    theme: StringConstructor;
    appendInnerIcon: StringConstructor;
    bgColor: StringConstructor;
    clearable: {
        type: PropType<boolean>;
        default: boolean;
    };
    clearIcon: {
        type: StringConstructor;
        default: string;
    };
    active: BooleanConstructor;
    color: StringConstructor;
    dirty: BooleanConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    label: StringConstructor;
    persistentClear: BooleanConstructor;
    prependInnerIcon: StringConstructor;
    reverse: BooleanConstructor;
    singleLine: BooleanConstructor;
    variant: {
        type: PropType<"filled" | "outlined" | "plain" | "contained" | "underlined">;
        default: string;
        validator: (v: any) => boolean;
    };
    prependIcon: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: PropType<File[]>;
        default: () => never[];
        validator: (val: any) => boolean;
    };
    errorMessages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    rules: {
        type: PropType<ValidationRule[]>;
        default: () => never[];
    };
    density: {
        type: PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: StringConstructor;
    hideDetails: PropType<boolean | "auto">;
    messages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    chips: BooleanConstructor;
    counter: BooleanConstructor;
    counterSizeString: {
        type: StringConstructor;
        default: string;
    };
    counterString: {
        type: StringConstructor;
        default: string;
    };
    multiple: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    placeholder: StringConstructor;
    showSize: {
        type: PropType<boolean | 1000 | 1024>;
        default: boolean;
        validator: (v: boolean | number) => boolean;
    };
}, {
    $: vue.ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        error: boolean;
        direction: "horizontal" | "vertical";
        disabled: boolean;
        readonly: boolean;
        messages: string | string[];
        density: "default" | "compact" | "comfortable" | null;
        errorMessages: string | string[];
        maxErrors: string | number;
        rules: ValidationRule[];
    }> & Omit<Readonly<vue.ExtractPropTypes<{
        disabled: BooleanConstructor;
        error: BooleanConstructor;
        errorMessages: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        maxErrors: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        name: StringConstructor;
        readonly: BooleanConstructor;
        rules: {
            type: PropType<ValidationRule[]>;
            default: () => never[];
        };
        modelValue: null;
        density: {
            type: PropType<"default" | "compact" | "comfortable" | null>;
            default: string;
            validator: (v: any) => boolean;
        };
        id: StringConstructor;
        appendIcon: StringConstructor;
        prependIcon: StringConstructor;
        hideDetails: PropType<boolean | "auto">;
        messages: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        direction: {
            type: PropType<"horizontal" | "vertical">;
            default: string;
            validator: (v: any) => boolean;
        };
    } & SlotsToProps<MakeSlots<{
        default: [VInputSlot];
        prepend: [VInputSlot];
        append: [VInputSlot];
        details: [VInputSlot];
    }>>>> & {
        "onUpdate:modelValue"?: ((val: any) => any) | undefined;
        "onClick:prepend"?: ((e: MouseEvent) => any) | undefined;
        "onClick:append"?: ((e: MouseEvent) => any) | undefined;
    } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "error" | "direction" | "disabled" | "readonly" | "messages" | "density" | "errorMessages" | "maxErrors" | "rules">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        [name: string]: vue.Slot | undefined;
    }>;
    $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
    $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
    $emit: ((event: "update:modelValue", val: any) => void) & ((event: "click:prepend", e: MouseEvent) => void) & ((event: "click:append", e: MouseEvent) => void);
    $el: any;
    $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
        disabled: BooleanConstructor;
        error: BooleanConstructor;
        errorMessages: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        maxErrors: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        name: StringConstructor;
        readonly: BooleanConstructor;
        rules: {
            type: PropType<ValidationRule[]>;
            default: () => never[];
        };
        modelValue: null;
        density: {
            type: PropType<"default" | "compact" | "comfortable" | null>;
            default: string;
            validator: (v: any) => boolean;
        };
        id: StringConstructor;
        appendIcon: StringConstructor;
        prependIcon: StringConstructor;
        hideDetails: PropType<boolean | "auto">;
        messages: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        direction: {
            type: PropType<"horizontal" | "vertical">;
            default: string;
            validator: (v: any) => boolean;
        };
    } & SlotsToProps<MakeSlots<{
        default: [VInputSlot];
        prepend: [VInputSlot];
        append: [VInputSlot];
        details: [VInputSlot];
    }>>>> & {
        "onUpdate:modelValue"?: ((val: any) => any) | undefined;
        "onClick:prepend"?: ((e: MouseEvent) => any) | undefined;
        "onClick:append"?: ((e: MouseEvent) => any) | undefined;
    }, {
        reset: () => void;
        resetValidation: () => void;
        validate: () => Promise<string[]>;
    }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'click:prepend': (e: MouseEvent) => boolean;
        'click:append': (e: MouseEvent) => boolean;
        'update:modelValue': (val: any) => boolean;
    }, string, {
        error: boolean;
        direction: "horizontal" | "vertical";
        disabled: boolean;
        readonly: boolean;
        messages: string | string[];
        density: "default" | "compact" | "comfortable" | null;
        errorMessages: string | string[];
        maxErrors: string | number;
        rules: ValidationRule[];
    }> & {
        beforeCreate?: ((() => void) | (() => void)[]) | undefined;
        created?: ((() => void) | (() => void)[]) | undefined;
        beforeMount?: ((() => void) | (() => void)[]) | undefined;
        mounted?: ((() => void) | (() => void)[]) | undefined;
        beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
        updated?: ((() => void) | (() => void)[]) | undefined;
        activated?: ((() => void) | (() => void)[]) | undefined;
        deactivated?: ((() => void) | (() => void)[]) | undefined;
        beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
        beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
        destroyed?: ((() => void) | (() => void)[]) | undefined;
        unmounted?: ((() => void) | (() => void)[]) | undefined;
        renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
        renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
        errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
    };
    $forceUpdate: () => void;
    $nextTick: typeof nextTick;
    $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
} & Readonly<vue.ExtractPropTypes<{
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    errorMessages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    rules: {
        type: PropType<ValidationRule[]>;
        default: () => never[];
    };
    modelValue: null;
    density: {
        type: PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: StringConstructor;
    prependIcon: StringConstructor;
    hideDetails: PropType<boolean | "auto">;
    messages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
} & SlotsToProps<MakeSlots<{
    default: [VInputSlot];
    prepend: [VInputSlot];
    append: [VInputSlot];
    details: [VInputSlot];
}>>>> & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
    "onClick:prepend"?: ((e: MouseEvent) => any) | undefined;
    "onClick:append"?: ((e: MouseEvent) => any) | undefined;
} & vue.ShallowUnwrapRef<{
    reset: () => void;
    resetValidation: () => void;
    validate: () => Promise<string[]>;
}> & {} & {} & vue.ComponentCustomProperties & {
    $slots: MakeSlots<{
        default: [VInputSlot];
        prepend: [VInputSlot];
        append: [VInputSlot];
        details: [VInputSlot];
    }>;
} & HTMLInputElement, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'click:clear': (e: MouseEvent) => true;
    'click:control': (e: MouseEvent) => true;
    'update:modelValue': (files: File[]) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    loading: BooleanConstructor;
    theme: StringConstructor;
    appendInnerIcon: StringConstructor;
    bgColor: StringConstructor;
    clearable: {
        type: PropType<boolean>;
        default: boolean;
    };
    clearIcon: {
        type: StringConstructor;
        default: string;
    };
    active: BooleanConstructor;
    color: StringConstructor;
    dirty: BooleanConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    label: StringConstructor;
    persistentClear: BooleanConstructor;
    prependInnerIcon: StringConstructor;
    reverse: BooleanConstructor;
    singleLine: BooleanConstructor;
    variant: {
        type: PropType<"filled" | "outlined" | "plain" | "contained" | "underlined">;
        default: string;
        validator: (v: any) => boolean;
    };
    prependIcon: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: PropType<File[]>;
        default: () => never[];
        validator: (val: any) => boolean;
    };
    errorMessages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    rules: {
        type: PropType<ValidationRule[]>;
        default: () => never[];
    };
    density: {
        type: PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: StringConstructor;
    hideDetails: PropType<boolean | "auto">;
    messages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    chips: BooleanConstructor;
    counter: BooleanConstructor;
    counterSizeString: {
        type: StringConstructor;
        default: string;
    };
    counterString: {
        type: StringConstructor;
        default: string;
    };
    multiple: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    placeholder: StringConstructor;
    showSize: {
        type: PropType<boolean | 1000 | 1024>;
        default: boolean;
        validator: (v: boolean | number) => boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((files: File[]) => any) | undefined;
    "onClick:clear"?: ((e: MouseEvent) => any) | undefined;
    "onClick:control"?: ((e: MouseEvent) => any) | undefined;
}, {
    reverse: boolean;
    error: boolean;
    active: boolean;
    direction: "horizontal" | "vertical";
    loading: boolean;
    disabled: boolean;
    multiple: boolean;
    readonly: boolean;
    messages: string | string[];
    counter: boolean;
    density: "default" | "compact" | "comfortable" | null;
    variant: "filled" | "outlined" | "plain" | "contained" | "underlined";
    modelValue: File[];
    prependIcon: string;
    errorMessages: string | string[];
    maxErrors: string | number;
    rules: ValidationRule[];
    clearable: boolean;
    clearIcon: string;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentHint: boolean;
    chips: boolean;
    counterSizeString: string;
    counterString: string;
    showSize: boolean | 1000 | 1024;
}>;
declare type VFileInput = InstanceType<typeof VFileInput>;

declare const VFooter: vue.DefineComponent<{
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    absolute: BooleanConstructor;
    bottom: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    fixed: BooleanConstructor;
    left: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    position: {
        type: vue.PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    right: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    top: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    absolute: BooleanConstructor;
    bottom: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    fixed: BooleanConstructor;
    left: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    position: {
        type: vue.PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    right: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    top: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
}>>, {
    fixed: boolean;
    absolute: boolean;
    tag: string;
    rounded: string | number | boolean;
}>;

declare const VForm: vue.DefineComponent<{
    disabled: BooleanConstructor;
    fastFail: BooleanConstructor;
    lazyValidation: BooleanConstructor;
    readonly: BooleanConstructor;
    modelValue: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
}, {
    errorMessages: vue.Ref<{
        id: string | number;
        errorMessages: string[];
    }[]>;
    isDisabled: vue.ComputedRef<boolean>;
    isReadonly: vue.ComputedRef<boolean>;
    isValidating: vue.Ref<boolean>;
    items: vue.Ref<{
        id: string | number;
        validate: () => Promise<string[]>;
        reset: () => void;
        resetValidation: () => void;
    }[]>;
    validate: () => Promise<{
        valid: boolean;
        errorMessages: {
            id: string | number;
            errorMessages: string[];
        }[];
    }>;
    reset: () => void;
    resetValidation: () => void;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (val: boolean | null) => true;
    submit: (e: Event) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    disabled: BooleanConstructor;
    fastFail: BooleanConstructor;
    lazyValidation: BooleanConstructor;
    readonly: BooleanConstructor;
    modelValue: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
}>> & {
    onSubmit?: ((e: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((val: boolean | null) => any) | undefined;
}, {
    disabled: boolean;
    readonly: boolean;
    modelValue: boolean | null;
    fastFail: boolean;
    lazyValidation: boolean;
}>;
declare type VForm = InstanceType<typeof VForm>;

declare const VContainer: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    fluid: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    fluid: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    tag: string;
    fluid: boolean;
}>;

declare const VCol: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    alignSelf: {
        type: StringConstructor;
        default: null;
        validator: (str: any) => boolean;
    };
    order: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    offset: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    cols: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    alignSelf: {
        type: StringConstructor;
        default: null;
        validator: (str: any) => boolean;
    };
    order: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    offset: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    cols: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
}>>, {
    offset: string | number;
    alignSelf: string;
    order: string | number;
    tag: string;
    cols: string | number | boolean;
}>;

declare const VRow: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    alignContent: {
        type: StringConstructor;
        default: null;
        validator: (str: any) => boolean;
    };
    justify: {
        type: StringConstructor;
        default: null;
        validator: (str: any) => boolean;
    };
    dense: BooleanConstructor;
    noGutters: BooleanConstructor;
    align: {
        type: StringConstructor;
        default: null;
        validator: (str: any) => boolean;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    alignContent: {
        type: StringConstructor;
        default: null;
        validator: (str: any) => boolean;
    };
    justify: {
        type: StringConstructor;
        default: null;
        validator: (str: any) => boolean;
    };
    dense: BooleanConstructor;
    noGutters: BooleanConstructor;
    align: {
        type: StringConstructor;
        default: null;
        validator: (str: any) => boolean;
    };
}>>, {
    alignContent: string;
    tag: string;
    dense: boolean;
    justify: string;
    align: string;
    noGutters: boolean;
}>;

declare const VSpacer: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
}>;

declare const VHover: vue.DefineComponent<{
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    disabled: BooleanConstructor;
    modelValue: {
        type: BooleanConstructor;
        default: undefined;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: boolean) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    disabled: BooleanConstructor;
    modelValue: {
        type: BooleanConstructor;
        default: undefined;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: boolean;
}>;

declare type IconValue = string | JSXComponent;
interface IconAliases {
    [name: string]: IconValue;
    complete: IconValue;
    cancel: IconValue;
    close: IconValue;
    delete: IconValue;
    clear: IconValue;
    success: IconValue;
    info: IconValue;
    warning: IconValue;
    error: IconValue;
    prev: IconValue;
    next: IconValue;
    checkboxOn: IconValue;
    checkboxOff: IconValue;
    checkboxIndeterminate: IconValue;
    delimiter: IconValue;
    sort: IconValue;
    expand: IconValue;
    menu: IconValue;
    subgroup: IconValue;
    dropdown: IconValue;
    radioOn: IconValue;
    radioOff: IconValue;
    edit: IconValue;
    ratingEmpty: IconValue;
    ratingFull: IconValue;
    ratingHalf: IconValue;
    loading: IconValue;
    first: IconValue;
    last: IconValue;
    unfold: IconValue;
    file: IconValue;
    plus: IconValue;
    minus: IconValue;
}
interface IconProps {
    tag: string;
    icon: IconValue;
    disabled?: Boolean;
}
declare type IconComponent = JSXComponent<IconProps>;
interface IconSet {
    component: IconComponent;
}
declare type IconOptions = {
    defaultSet: string;
    aliases?: Partial<IconAliases>;
    sets: Record<string, IconSet>;
};
declare const VComponentIcon: vue.DefineComponent<{
    icon: {
        type: PropType<IconValue>;
        required: true;
    };
    tag: {
        type: StringConstructor;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    icon: {
        type: PropType<IconValue>;
        required: true;
    };
    tag: {
        type: StringConstructor;
        required: true;
    };
}>>, {}>;
declare const VSvgIcon: vue.DefineComponent<{
    icon: {
        type: PropType<IconValue>;
        required: true;
    };
    tag: {
        type: StringConstructor;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    icon: {
        type: PropType<IconValue>;
        required: true;
    };
    tag: {
        type: StringConstructor;
        required: true;
    };
}>>, {}>;
declare const VLigatureIcon: vue.DefineComponent<{
    icon: {
        type: PropType<IconValue>;
        required: true;
    };
    tag: {
        type: StringConstructor;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    icon: {
        type: PropType<IconValue>;
        required: true;
    };
    tag: {
        type: StringConstructor;
        required: true;
    };
}>>, {}>;
declare const VClassIcon: vue.DefineComponent<{
    icon: {
        type: PropType<IconValue>;
        required: true;
    };
    tag: {
        type: StringConstructor;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    icon: {
        type: PropType<IconValue>;
        required: true;
    };
    tag: {
        type: StringConstructor;
        required: true;
    };
}>>, {}>;

declare const VIcon: vue.DefineComponent<{
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
    start: BooleanConstructor;
    end: BooleanConstructor;
    icon: {
        type: PropType<IconValue>;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
    start: BooleanConstructor;
    end: BooleanConstructor;
    icon: {
        type: PropType<IconValue>;
    };
}>>, {
    end: boolean;
    start: boolean;
    size: string | number;
    tag: string;
}>;

interface srcObject {
    src?: string;
    srcset?: string;
    lazySrc?: string;
    aspect: number;
}
declare const VImg: vue.DefineComponent<{
    transition: {
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    };
    aspectRatio: (StringConstructor | NumberConstructor)[];
    alt: StringConstructor;
    cover: BooleanConstructor;
    eager: BooleanConstructor;
    gradient: StringConstructor;
    lazySrc: StringConstructor;
    options: {
        type: PropType<IntersectionObserverInit>;
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    };
    sizes: StringConstructor;
    src: {
        type: PropType<string | srcObject>;
        default: string;
    };
    srcset: StringConstructor;
    width: (StringConstructor | NumberConstructor)[];
}, {
    currentSrc: vue.Ref<string>;
    image: vue.Ref<HTMLImageElement | undefined>;
    state: vue.Ref<"error" | "loaded" | "idle" | "loading">;
    naturalWidth: vue.Ref<number | undefined>;
    naturalHeight: vue.Ref<number | undefined>;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, ("error" | "load" | "loadstart")[], "error" | "load" | "loadstart", vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    transition: {
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    };
    aspectRatio: (StringConstructor | NumberConstructor)[];
    alt: StringConstructor;
    cover: BooleanConstructor;
    eager: BooleanConstructor;
    gradient: StringConstructor;
    lazySrc: StringConstructor;
    options: {
        type: PropType<IntersectionObserverInit>;
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    };
    sizes: StringConstructor;
    src: {
        type: PropType<string | srcObject>;
        default: string;
    };
    srcset: StringConstructor;
    width: (StringConstructor | NumberConstructor)[];
}>> & {
    onError?: ((...args: any[]) => any) | undefined;
    onLoad?: ((...args: any[]) => any) | undefined;
    onLoadstart?: ((...args: any[]) => any) | undefined;
}, {
    transition: string | boolean | (vue.TransitionProps & {
        component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
    });
    eager: boolean;
    options: IntersectionObserverInit;
    cover: boolean;
    src: string | srcObject;
}>;
declare type VImg = InstanceType<typeof VImg>;

declare const VItemGroup: vue.DefineComponent<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: vue.PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: {
        type: vue.PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: any) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: vue.PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: {
        type: vue.PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
}, {
    disabled: boolean;
    multiple: boolean;
    tag: string;
    modelValue: any;
    selectedClass: string;
}>;
declare type VItemGroup = InstanceType<typeof VItemGroup>;

declare const VItem: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
        }> & Omit<Readonly<vue.ExtractPropTypes<{
            value: null;
            disabled: BooleanConstructor;
            selectedClass: StringConstructor;
        } & SlotsToProps<MakeSlots<{
            default: [GroupItemProvide];
        }>>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "disabled">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
            value: null;
            disabled: BooleanConstructor;
            selectedClass: StringConstructor;
        } & SlotsToProps<MakeSlots<{
            default: [GroupItemProvide];
        }>>>>, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[] | undefined, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            disabled: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<{
        value: null;
        disabled: BooleanConstructor;
        selectedClass: StringConstructor;
    } & SlotsToProps<MakeSlots<{
        default: [GroupItemProvide];
    }>>>> & vue.ShallowUnwrapRef<() => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[] | undefined> & {} & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
} & SlotsToProps<MakeSlots<{
    default: [GroupItemProvide];
}>>>>, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    disabled: boolean;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $slots: MakeSlots<{
        default: [GroupItemProvide];
    }>;
});
declare type VItem = InstanceType<typeof VItem>;

declare const VKbd: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
}>;

declare const VLabel: vue.DefineComponent<{
    theme: StringConstructor;
    text: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    text: StringConstructor;
}>>, {}>;
declare type VLabel = InstanceType<typeof VLabel>;

declare const VLayout: vue.DefineComponent<{
    overlaps: vue.Prop<string[], string[]>;
    fullHeight: BooleanConstructor;
}, {
    getLayoutItem: (id: string) => {
        size: number;
        top: number;
        left: number;
        right: number;
        bottom: number;
        id: string;
    } | undefined;
    items: vue.ComputedRef<{
        size: number;
        top: number;
        left: number;
        right: number;
        bottom: number;
        id: string;
    }[]>;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    overlaps: vue.Prop<string[], string[]>;
    fullHeight: BooleanConstructor;
}>>, {
    fullHeight: boolean;
}>;
declare type VLayout = InstanceType<typeof VLayout>;

declare const VLayoutItem: vue.DefineComponent<{
    name: {
        type: StringConstructor;
    };
    priority: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
    position: {
        type: PropType<"left" | "top" | "bottom" | "right">;
        required: true;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    name: {
        type: StringConstructor;
    };
    priority: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
    position: {
        type: PropType<"left" | "top" | "bottom" | "right">;
        required: true;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: BooleanConstructor;
}>>, {
    absolute: boolean;
    priority: string | number;
    size: string | number;
    modelValue: boolean;
}>;

declare const VLazy: vue.DefineComponent<{
    transition: Omit<{
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        });
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    modelValue: BooleanConstructor;
    options: {
        type: PropType<IntersectionObserverInit>;
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: boolean) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    transition: Omit<{
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        });
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    modelValue: BooleanConstructor;
    options: {
        type: PropType<IntersectionObserverInit>;
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    };
}>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {
    transition: string | boolean | (vue.TransitionProps & {
        component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
    });
    options: IntersectionObserverInit;
    tag: string;
    modelValue: boolean;
}>;

declare type SelectStrategyFn = (data: {
    id: string;
    value: boolean;
    selected: Map<string, 'on' | 'off' | 'indeterminate'>;
    children: Map<string, string[]>;
    parents: Map<string, string>;
    event?: Event;
}) => Map<string, 'on' | 'off' | 'indeterminate'>;

declare type OpenStrategyFn = (data: {
    id: string;
    value: boolean;
    opened: Set<string>;
    children: Map<string, string[]>;
    parents: Map<string, string>;
    event?: Event;
}) => Set<string>;

declare type SelectStrategy = 'single-leaf' | 'leaf' | 'independent' | 'single-independent' | 'classic' | SelectStrategyFn;
declare type OpenStrategy = 'single' | 'multiple' | OpenStrategyFn;

declare type ListGroupActivatorSlot = {
    props: {
        onClick: (e: Event) => void;
        appendIcon: string;
        class: string;
        color?: string;
    };
};
declare const VListGroup: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            tag: string;
            collapseIcon: string;
            expandIcon: string;
        }> & Omit<Readonly<vue.ExtractPropTypes<Omit<{
            tag: {
                type: StringConstructor;
                default: string;
            };
            activeColor: StringConstructor;
            color: StringConstructor;
            collapseIcon: {
                type: StringConstructor;
                default: string;
            };
            expandIcon: {
                type: StringConstructor;
                default: string;
            };
            value: null;
        }, "items"> & SlotsToProps<MakeSlots<{
            activator: [ListGroupActivatorSlot];
            default: [];
        }>>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "tag" | "collapseIcon" | "expandIcon">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
            tag: {
                type: StringConstructor;
                default: string;
            };
            activeColor: StringConstructor;
            color: StringConstructor;
            collapseIcon: {
                type: StringConstructor;
                default: string;
            };
            expandIcon: {
                type: StringConstructor;
                default: string;
            };
            value: null;
        }, "items"> & SlotsToProps<MakeSlots<{
            activator: [ListGroupActivatorSlot];
            default: [];
        }>>>>, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<Record<string, any>, "items">, string, {
            tag: string;
            collapseIcon: string;
            expandIcon: string;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<Omit<{
        tag: {
            type: StringConstructor;
            default: string;
        };
        activeColor: StringConstructor;
        color: StringConstructor;
        collapseIcon: {
            type: StringConstructor;
            default: string;
        };
        expandIcon: {
            type: StringConstructor;
            default: string;
        };
        value: null;
    }, "items"> & SlotsToProps<MakeSlots<{
        activator: [ListGroupActivatorSlot];
        default: [];
    }>>>> & vue.ShallowUnwrapRef<() => JSX.Element> & {} & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    activeColor: StringConstructor;
    color: StringConstructor;
    collapseIcon: {
        type: StringConstructor;
        default: string;
    };
    expandIcon: {
        type: StringConstructor;
        default: string;
    };
    value: null;
}, "items"> & SlotsToProps<MakeSlots<{
    activator: [ListGroupActivatorSlot];
    default: [];
}>>>>, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<Record<string, any>, "items">, string, {
    tag: string;
    collapseIcon: string;
    expandIcon: string;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T extends InternalListItem>() => {
    $props: {
        items?: T[] | undefined;
    };
    $slots: MakeSlots<{
        activator: [ListGroupActivatorSlot];
        default: [];
    }>;
});

declare type ListItem = {
    [key: string]: any;
    $type?: 'item' | 'subheader' | 'divider';
    $children?: (string | ListItem)[];
};
declare type InternalListItem = {
    type?: 'item' | 'subheader' | 'divider';
    props?: Record<string, any>;
    children?: InternalListItem[];
};
declare const VList: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            nav: boolean;
            disabled: boolean;
            tag: string;
            mandatory: boolean;
            rounded: string | number | boolean;
            density: "default" | "compact" | "comfortable" | null;
            variant: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
            selectStrategy: SelectStrategy | ("classic" & {}) | ("single-leaf" & {}) | ("leaf" & {}) | ("independent" & {}) | ("single-independent" & {});
            openStrategy: OpenStrategy | ("multiple" & {}) | ("single" & {});
            lines: false | "one" | "two" | "three";
        }> & Omit<Readonly<vue.ExtractPropTypes<Omit<{
            color: StringConstructor;
            variant: Omit<{
                type: PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
                default: string;
                validator: (v: any) => boolean;
            }, "type" | "default"> & {
                type: PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
                default: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
            };
            theme: StringConstructor;
            tag: {
                type: StringConstructor;
                default: string;
            };
            rounded: {
                type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                default: undefined;
            };
            elevation: {
                type: (StringConstructor | NumberConstructor)[];
                validator(v: any): boolean;
            };
            height: (StringConstructor | NumberConstructor)[];
            maxHeight: (StringConstructor | NumberConstructor)[];
            maxWidth: (StringConstructor | NumberConstructor)[];
            minHeight: (StringConstructor | NumberConstructor)[];
            minWidth: (StringConstructor | NumberConstructor)[];
            width: (StringConstructor | NumberConstructor)[];
            density: {
                type: PropType<"default" | "compact" | "comfortable" | null>;
                default: string;
                validator: (v: any) => boolean;
            };
            border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            selectStrategy: {
                type: PropType<SelectStrategy | ("classic" & {}) | ("single-leaf" & {}) | ("leaf" & {}) | ("independent" & {}) | ("single-independent" & {})>;
                default: SelectStrategy | ("classic" & {}) | ("single-leaf" & {}) | ("leaf" & {}) | ("independent" & {}) | ("single-independent" & {});
            };
            openStrategy: {
                type: PropType<OpenStrategy | ("multiple" & {}) | ("single" & {})>;
                default: OpenStrategy | ("multiple" & {}) | ("single" & {});
            };
            opened: Prop<string[], string[]>;
            selected: Prop<string[], string[]>;
            mandatory: BooleanConstructor;
            activeColor: StringConstructor;
            activeClass: StringConstructor;
            bgColor: StringConstructor;
            disabled: BooleanConstructor;
            lines: {
                type: PropType<false | "one" | "two" | "three">;
                default: string;
            };
            nav: BooleanConstructor;
            items: Prop<ListItem[], ListItem[]>;
        }, "items"> & SlotsToProps<MakeSlots<{
            subheader: [];
            header: [ListGroupActivatorSlot];
            item: [unknown];
        }>>>> & {
            "onUpdate:selected"?: ((val: string[]) => any) | undefined;
            "onUpdate:opened"?: ((val: string[]) => any) | undefined;
            "onClick:open"?: ((value: {
                id: string;
                value: boolean;
                path: string[];
            }) => any) | undefined;
            "onClick:select"?: ((value: {
                id: string;
                value: boolean;
                path: string[];
            }) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "nav" | "disabled" | "tag" | "mandatory" | "rounded" | "density" | "variant" | "selectStrategy" | "openStrategy" | "lines">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: ((event: "click:open", value: {
            id: string;
            value: boolean;
            path: string[];
        }) => void) & ((event: "click:select", value: {
            id: string;
            value: boolean;
            path: string[];
        }) => void) & ((event: "update:selected", val: string[]) => void) & ((event: "update:opened", val: string[]) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
            color: StringConstructor;
            variant: Omit<{
                type: PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
                default: string;
                validator: (v: any) => boolean;
            }, "type" | "default"> & {
                type: PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
                default: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
            };
            theme: StringConstructor;
            tag: {
                type: StringConstructor;
                default: string;
            };
            rounded: {
                type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                default: undefined;
            };
            elevation: {
                type: (StringConstructor | NumberConstructor)[];
                validator(v: any): boolean;
            };
            height: (StringConstructor | NumberConstructor)[];
            maxHeight: (StringConstructor | NumberConstructor)[];
            maxWidth: (StringConstructor | NumberConstructor)[];
            minHeight: (StringConstructor | NumberConstructor)[];
            minWidth: (StringConstructor | NumberConstructor)[];
            width: (StringConstructor | NumberConstructor)[];
            density: {
                type: PropType<"default" | "compact" | "comfortable" | null>;
                default: string;
                validator: (v: any) => boolean;
            };
            border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            selectStrategy: {
                type: PropType<SelectStrategy | ("classic" & {}) | ("single-leaf" & {}) | ("leaf" & {}) | ("independent" & {}) | ("single-independent" & {})>;
                default: SelectStrategy | ("classic" & {}) | ("single-leaf" & {}) | ("leaf" & {}) | ("independent" & {}) | ("single-independent" & {});
            };
            openStrategy: {
                type: PropType<OpenStrategy | ("multiple" & {}) | ("single" & {})>;
                default: OpenStrategy | ("multiple" & {}) | ("single" & {});
            };
            opened: Prop<string[], string[]>;
            selected: Prop<string[], string[]>;
            mandatory: BooleanConstructor;
            activeColor: StringConstructor;
            activeClass: StringConstructor;
            bgColor: StringConstructor;
            disabled: BooleanConstructor;
            lines: {
                type: PropType<false | "one" | "two" | "three">;
                default: string;
            };
            nav: BooleanConstructor;
            items: Prop<ListItem[], ListItem[]>;
        }, "items"> & SlotsToProps<MakeSlots<{
            subheader: [];
            header: [ListGroupActivatorSlot];
            item: [unknown];
        }>>>> & {
            "onUpdate:selected"?: ((val: string[]) => any) | undefined;
            "onUpdate:opened"?: ((val: string[]) => any) | undefined;
            "onClick:open"?: ((value: {
                id: string;
                value: boolean;
                path: string[];
            }) => any) | undefined;
            "onClick:select"?: ((value: {
                id: string;
                value: boolean;
                path: string[];
            }) => any) | undefined;
        }, {
            open: (id: string, value: boolean, event?: Event | undefined) => void;
            select: (id: string, value: boolean, event?: Event | undefined) => void;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
            'update:selected': (val: string[]) => boolean;
            'update:opened': (val: string[]) => boolean;
            'click:open': (value: {
                id: string;
                value: boolean;
                path: string[];
            }) => boolean;
            'click:select': (value: {
                id: string;
                value: boolean;
                path: string[];
            }) => boolean;
        }, "items">, string, {
            nav: boolean;
            disabled: boolean;
            tag: string;
            mandatory: boolean;
            rounded: string | number | boolean;
            density: "default" | "compact" | "comfortable" | null;
            variant: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
            selectStrategy: SelectStrategy | ("classic" & {}) | ("single-leaf" & {}) | ("leaf" & {}) | ("independent" & {}) | ("single-independent" & {});
            openStrategy: OpenStrategy | ("multiple" & {}) | ("single" & {});
            lines: false | "one" | "two" | "three";
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<Omit<{
        color: StringConstructor;
        variant: Omit<{
            type: PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
            default: string;
            validator: (v: any) => boolean;
        }, "type" | "default"> & {
            type: PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
            default: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
        };
        theme: StringConstructor;
        tag: {
            type: StringConstructor;
            default: string;
        };
        rounded: {
            type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            default: undefined;
        };
        elevation: {
            type: (StringConstructor | NumberConstructor)[];
            validator(v: any): boolean;
        };
        height: (StringConstructor | NumberConstructor)[];
        maxHeight: (StringConstructor | NumberConstructor)[];
        maxWidth: (StringConstructor | NumberConstructor)[];
        minHeight: (StringConstructor | NumberConstructor)[];
        minWidth: (StringConstructor | NumberConstructor)[];
        width: (StringConstructor | NumberConstructor)[];
        density: {
            type: PropType<"default" | "compact" | "comfortable" | null>;
            default: string;
            validator: (v: any) => boolean;
        };
        border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        selectStrategy: {
            type: PropType<SelectStrategy | ("classic" & {}) | ("single-leaf" & {}) | ("leaf" & {}) | ("independent" & {}) | ("single-independent" & {})>;
            default: SelectStrategy | ("classic" & {}) | ("single-leaf" & {}) | ("leaf" & {}) | ("independent" & {}) | ("single-independent" & {});
        };
        openStrategy: {
            type: PropType<OpenStrategy | ("multiple" & {}) | ("single" & {})>;
            default: OpenStrategy | ("multiple" & {}) | ("single" & {});
        };
        opened: Prop<string[], string[]>;
        selected: Prop<string[], string[]>;
        mandatory: BooleanConstructor;
        activeColor: StringConstructor;
        activeClass: StringConstructor;
        bgColor: StringConstructor;
        disabled: BooleanConstructor;
        lines: {
            type: PropType<false | "one" | "two" | "three">;
            default: string;
        };
        nav: BooleanConstructor;
        items: Prop<ListItem[], ListItem[]>;
    }, "items"> & SlotsToProps<MakeSlots<{
        subheader: [];
        header: [ListGroupActivatorSlot];
        item: [unknown];
    }>>>> & {
        "onUpdate:selected"?: ((val: string[]) => any) | undefined;
        "onUpdate:opened"?: ((val: string[]) => any) | undefined;
        "onClick:open"?: ((value: {
            id: string;
            value: boolean;
            path: string[];
        }) => any) | undefined;
        "onClick:select"?: ((value: {
            id: string;
            value: boolean;
            path: string[];
        }) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        open: (id: string, value: boolean, event?: Event | undefined) => void;
        select: (id: string, value: boolean, event?: Event | undefined) => void;
    }> & {} & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
    color: StringConstructor;
    variant: Omit<{
        type: PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    density: {
        type: PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    selectStrategy: {
        type: PropType<SelectStrategy | ("classic" & {}) | ("single-leaf" & {}) | ("leaf" & {}) | ("independent" & {}) | ("single-independent" & {})>;
        default: SelectStrategy | ("classic" & {}) | ("single-leaf" & {}) | ("leaf" & {}) | ("independent" & {}) | ("single-independent" & {});
    };
    openStrategy: {
        type: PropType<OpenStrategy | ("multiple" & {}) | ("single" & {})>;
        default: OpenStrategy | ("multiple" & {}) | ("single" & {});
    };
    opened: Prop<string[], string[]>;
    selected: Prop<string[], string[]>;
    mandatory: BooleanConstructor;
    activeColor: StringConstructor;
    activeClass: StringConstructor;
    bgColor: StringConstructor;
    disabled: BooleanConstructor;
    lines: {
        type: PropType<false | "one" | "two" | "three">;
        default: string;
    };
    nav: BooleanConstructor;
    items: Prop<ListItem[], ListItem[]>;
}, "items"> & SlotsToProps<MakeSlots<{
    subheader: [];
    header: [ListGroupActivatorSlot];
    item: [unknown];
}>>>> & {
    "onUpdate:selected"?: ((val: string[]) => any) | undefined;
    "onUpdate:opened"?: ((val: string[]) => any) | undefined;
    "onClick:open"?: ((value: {
        id: string;
        value: boolean;
        path: string[];
    }) => any) | undefined;
    "onClick:select"?: ((value: {
        id: string;
        value: boolean;
        path: string[];
    }) => any) | undefined;
}, {
    open: (id: string, value: boolean, event?: Event | undefined) => void;
    select: (id: string, value: boolean, event?: Event | undefined) => void;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'update:selected': (val: string[]) => boolean;
    'update:opened': (val: string[]) => boolean;
    'click:open': (value: {
        id: string;
        value: boolean;
        path: string[];
    }) => boolean;
    'click:select': (value: {
        id: string;
        value: boolean;
        path: string[];
    }) => boolean;
}, "items">, string, {
    nav: boolean;
    disabled: boolean;
    tag: string;
    mandatory: boolean;
    rounded: string | number | boolean;
    density: "default" | "compact" | "comfortable" | null;
    variant: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
    selectStrategy: SelectStrategy | ("classic" & {}) | ("single-leaf" & {}) | ("leaf" & {}) | ("independent" & {}) | ("single-independent" & {});
    openStrategy: OpenStrategy | ("multiple" & {}) | ("single" & {});
    lines: false | "one" | "two" | "three";
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T>() => {
    $props: {
        items?: T[] | undefined;
    };
    $slots: MakeSlots<{
        subheader: [];
        header: [ListGroupActivatorSlot];
        item: [T];
    }>;
});
declare type VList = InstanceType<typeof VList>;

declare const VListSubheader: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    color: StringConstructor;
    inset: BooleanConstructor;
    sticky: BooleanConstructor;
    text: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    color: StringConstructor;
    inset: BooleanConstructor;
    sticky: BooleanConstructor;
    text: StringConstructor;
}>>, {
    inset: boolean;
    tag: string;
    sticky: boolean;
}>;

declare const VListImg: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
}>;

declare type ListItemSlot = {
    isActive: boolean;
    activate: (value: boolean) => void;
    isSelected: boolean;
    select: (value: boolean) => void;
};
declare type ListItemTitleSlot = {
    title?: string;
};
declare type ListItemSubtitleSlot = {
    subtitle?: string;
};
declare const VListItem: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            replace: boolean;
            active: boolean;
            nav: boolean;
            disabled: boolean;
            tag: string;
            rounded: string | number | boolean;
            density: "default" | "compact" | "comfortable" | null;
            variant: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
        }> & Omit<Readonly<vue.ExtractPropTypes<{
            color: StringConstructor;
            variant: Omit<{
                type: PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
                default: string;
                validator: (v: any) => boolean;
            }, "type" | "default"> & {
                type: PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
                default: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
            };
            theme: StringConstructor;
            tag: {
                type: StringConstructor;
                default: string;
            };
            href: StringConstructor;
            replace: BooleanConstructor;
            to: PropType<vue_router.RouteLocationRaw>;
            rounded: {
                type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                default: undefined;
            };
            elevation: {
                type: (StringConstructor | NumberConstructor)[];
                validator(v: any): boolean;
            };
            height: (StringConstructor | NumberConstructor)[];
            maxHeight: (StringConstructor | NumberConstructor)[];
            maxWidth: (StringConstructor | NumberConstructor)[];
            minHeight: (StringConstructor | NumberConstructor)[];
            minWidth: (StringConstructor | NumberConstructor)[];
            width: (StringConstructor | NumberConstructor)[];
            density: {
                type: PropType<"default" | "compact" | "comfortable" | null>;
                default: string;
                validator: (v: any) => boolean;
            };
            border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            active: BooleanConstructor;
            activeColor: StringConstructor;
            activeClass: StringConstructor;
            appendAvatar: StringConstructor;
            appendIcon: StringConstructor;
            disabled: BooleanConstructor;
            lines: PropType<"one" | "two" | "three">;
            nav: BooleanConstructor;
            prependAvatar: StringConstructor;
            prependIcon: StringConstructor;
            subtitle: StringConstructor;
            title: StringConstructor;
            value: null;
        } & SlotsToProps<MakeSlots<{
            prepend: [ListItemSlot];
            append: [ListItemSlot];
            default: [ListItemSlot];
            title: [ListItemTitleSlot];
            subtitle: [ListItemSubtitleSlot];
        }>>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "replace" | "active" | "nav" | "disabled" | "tag" | "rounded" | "density" | "variant">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
            color: StringConstructor;
            variant: Omit<{
                type: PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
                default: string;
                validator: (v: any) => boolean;
            }, "type" | "default"> & {
                type: PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
                default: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
            };
            theme: StringConstructor;
            tag: {
                type: StringConstructor;
                default: string;
            };
            href: StringConstructor;
            replace: BooleanConstructor;
            to: PropType<vue_router.RouteLocationRaw>;
            rounded: {
                type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                default: undefined;
            };
            elevation: {
                type: (StringConstructor | NumberConstructor)[];
                validator(v: any): boolean;
            };
            height: (StringConstructor | NumberConstructor)[];
            maxHeight: (StringConstructor | NumberConstructor)[];
            maxWidth: (StringConstructor | NumberConstructor)[];
            minHeight: (StringConstructor | NumberConstructor)[];
            minWidth: (StringConstructor | NumberConstructor)[];
            width: (StringConstructor | NumberConstructor)[];
            density: {
                type: PropType<"default" | "compact" | "comfortable" | null>;
                default: string;
                validator: (v: any) => boolean;
            };
            border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            active: BooleanConstructor;
            activeColor: StringConstructor;
            activeClass: StringConstructor;
            appendAvatar: StringConstructor;
            appendIcon: StringConstructor;
            disabled: BooleanConstructor;
            lines: PropType<"one" | "two" | "three">;
            nav: BooleanConstructor;
            prependAvatar: StringConstructor;
            prependIcon: StringConstructor;
            subtitle: StringConstructor;
            title: StringConstructor;
            value: null;
        } & SlotsToProps<MakeSlots<{
            prepend: [ListItemSlot];
            append: [ListItemSlot];
            default: [ListItemSlot];
            title: [ListItemTitleSlot];
            subtitle: [ListItemSubtitleSlot];
        }>>>>, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            replace: boolean;
            active: boolean;
            nav: boolean;
            disabled: boolean;
            tag: string;
            rounded: string | number | boolean;
            density: "default" | "compact" | "comfortable" | null;
            variant: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<{
        color: StringConstructor;
        variant: Omit<{
            type: PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
            default: string;
            validator: (v: any) => boolean;
        }, "type" | "default"> & {
            type: PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
            default: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
        };
        theme: StringConstructor;
        tag: {
            type: StringConstructor;
            default: string;
        };
        href: StringConstructor;
        replace: BooleanConstructor;
        to: PropType<vue_router.RouteLocationRaw>;
        rounded: {
            type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            default: undefined;
        };
        elevation: {
            type: (StringConstructor | NumberConstructor)[];
            validator(v: any): boolean;
        };
        height: (StringConstructor | NumberConstructor)[];
        maxHeight: (StringConstructor | NumberConstructor)[];
        maxWidth: (StringConstructor | NumberConstructor)[];
        minHeight: (StringConstructor | NumberConstructor)[];
        minWidth: (StringConstructor | NumberConstructor)[];
        width: (StringConstructor | NumberConstructor)[];
        density: {
            type: PropType<"default" | "compact" | "comfortable" | null>;
            default: string;
            validator: (v: any) => boolean;
        };
        border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        active: BooleanConstructor;
        activeColor: StringConstructor;
        activeClass: StringConstructor;
        appendAvatar: StringConstructor;
        appendIcon: StringConstructor;
        disabled: BooleanConstructor;
        lines: PropType<"one" | "two" | "three">;
        nav: BooleanConstructor;
        prependAvatar: StringConstructor;
        prependIcon: StringConstructor;
        subtitle: StringConstructor;
        title: StringConstructor;
        value: null;
    } & SlotsToProps<MakeSlots<{
        prepend: [ListItemSlot];
        append: [ListItemSlot];
        default: [ListItemSlot];
        title: [ListItemTitleSlot];
        subtitle: [ListItemSubtitleSlot];
    }>>>> & vue.ShallowUnwrapRef<{}> & {} & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
    color: StringConstructor;
    variant: Omit<{
        type: PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: PropType<vue_router.RouteLocationRaw>;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    density: {
        type: PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    active: BooleanConstructor;
    activeColor: StringConstructor;
    activeClass: StringConstructor;
    appendAvatar: StringConstructor;
    appendIcon: StringConstructor;
    disabled: BooleanConstructor;
    lines: PropType<"one" | "two" | "three">;
    nav: BooleanConstructor;
    prependAvatar: StringConstructor;
    prependIcon: StringConstructor;
    subtitle: StringConstructor;
    title: StringConstructor;
    value: null;
} & SlotsToProps<MakeSlots<{
    prepend: [ListItemSlot];
    append: [ListItemSlot];
    default: [ListItemSlot];
    title: [ListItemTitleSlot];
    subtitle: [ListItemSubtitleSlot];
}>>>>, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    replace: boolean;
    active: boolean;
    nav: boolean;
    disabled: boolean;
    tag: string;
    rounded: string | number | boolean;
    density: "default" | "compact" | "comfortable" | null;
    variant: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $slots: MakeSlots<{
        prepend: [ListItemSlot];
        append: [ListItemSlot];
        default: [ListItemSlot];
        title: [ListItemTitleSlot];
        subtitle: [ListItemSubtitleSlot];
    }>;
});
declare type VListItem = InstanceType<typeof VListItem>;

declare const VListItemAction: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    start: BooleanConstructor;
    end: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    start: BooleanConstructor;
    end: BooleanConstructor;
}>>, {
    end: boolean;
    start: boolean;
    tag: string;
}>;

declare const VListItemAvatar: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    color: StringConstructor;
    start: BooleanConstructor;
    end: BooleanConstructor;
    icon: StringConstructor;
    image: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    color: StringConstructor;
    start: BooleanConstructor;
    end: BooleanConstructor;
    icon: StringConstructor;
    image: StringConstructor;
}>>, {
    end: boolean;
    start: boolean;
    size: string | number;
    tag: string;
    rounded: string | number | boolean;
    density: "default" | "compact" | "comfortable" | null;
}>;

declare const VListItemHeader: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
}>;

declare const VListItemIcon: vue.DefineComponent<{
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
    start: BooleanConstructor;
    end: BooleanConstructor;
    icon: {
        type: vue.PropType<IconValue>;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
    start: BooleanConstructor;
    end: BooleanConstructor;
    icon: {
        type: vue.PropType<IconValue>;
    };
}>>, {
    end: boolean;
    start: boolean;
    size: string | number;
    tag: string;
}>;

declare const VListItemMedia: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    start: BooleanConstructor;
    end: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    start: BooleanConstructor;
    end: BooleanConstructor;
}>>, {
    end: boolean;
    start: boolean;
    tag: string;
}>;

declare const VListItemSubtitle: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
}>;

declare const VListItemTitle: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
}>;

declare const VLocaleProvider: vue.DefineComponent<{
    locale: StringConstructor;
    fallbackLocale: StringConstructor;
    messages: ObjectConstructor;
    rtl: {
        type: BooleanConstructor;
        default: undefined;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    locale: StringConstructor;
    fallbackLocale: StringConstructor;
    messages: ObjectConstructor;
    rtl: {
        type: BooleanConstructor;
        default: undefined;
    };
}>>, {
    rtl: boolean;
}>;

declare const VMain: vue.DefineComponent<{
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
}>>, {
    tag: string;
}>;

declare const VMenu: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            }) | {
                readonly component: vue.DefineComponent<{
                    target: vue.PropType<HTMLElement>;
                }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                    target: vue.PropType<HTMLElement>;
                }>>, {}>;
            };
            modelValue: boolean;
            disableKeys: boolean;
        }> & Omit<Readonly<vue.ExtractPropTypes<{
            transition: Omit<{
                type: vue.PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string;
                validator: (val: unknown) => boolean;
            }, "type" | "default"> & {
                type: vue.PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                }) | {
                    readonly component: vue.DefineComponent<{
                        target: vue.PropType<HTMLElement>;
                    }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                        target: vue.PropType<HTMLElement>;
                    }>>, {}>;
                }>;
                default: string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                }) | {
                    readonly component: vue.DefineComponent<{
                        target: vue.PropType<HTMLElement>;
                    }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                        target: vue.PropType<HTMLElement>;
                    }>>, {}>;
                };
            };
            disableKeys: BooleanConstructor;
            modelValue: BooleanConstructor;
            id: StringConstructor;
        } & SlotsToProps<MakeSlots<{
            default: [{
                isActive: vue.Ref<boolean>;
            }];
            activator: [{
                isActive: boolean;
                props: Record<string, any>;
            }];
        }>>>> & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "transition" | "modelValue" | "disableKeys">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "update:modelValue", value: boolean) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
            transition: Omit<{
                type: vue.PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string;
                validator: (val: unknown) => boolean;
            }, "type" | "default"> & {
                type: vue.PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                }) | {
                    readonly component: vue.DefineComponent<{
                        target: vue.PropType<HTMLElement>;
                    }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                        target: vue.PropType<HTMLElement>;
                    }>>, {}>;
                }>;
                default: string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                }) | {
                    readonly component: vue.DefineComponent<{
                        target: vue.PropType<HTMLElement>;
                    }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                        target: vue.PropType<HTMLElement>;
                    }>>, {}>;
                };
            };
            disableKeys: BooleanConstructor;
            modelValue: BooleanConstructor;
            id: StringConstructor;
        } & SlotsToProps<MakeSlots<{
            default: [{
                isActive: vue.Ref<boolean>;
            }];
            activator: [{
                isActive: boolean;
                props: Record<string, any>;
            }];
        }>>>> & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (value: boolean) => boolean;
        }, string, {
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            }) | {
                readonly component: vue.DefineComponent<{
                    target: vue.PropType<HTMLElement>;
                }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                    target: vue.PropType<HTMLElement>;
                }>>, {}>;
            };
            modelValue: boolean;
            disableKeys: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<{
        transition: Omit<{
            type: vue.PropType<string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            })>;
            default: string;
            validator: (val: unknown) => boolean;
        }, "type" | "default"> & {
            type: vue.PropType<string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            }) | {
                readonly component: vue.DefineComponent<{
                    target: vue.PropType<HTMLElement>;
                }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                    target: vue.PropType<HTMLElement>;
                }>>, {}>;
            }>;
            default: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            }) | {
                readonly component: vue.DefineComponent<{
                    target: vue.PropType<HTMLElement>;
                }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                    target: vue.PropType<HTMLElement>;
                }>>, {}>;
            };
        };
        disableKeys: BooleanConstructor;
        modelValue: BooleanConstructor;
        id: StringConstructor;
    } & SlotsToProps<MakeSlots<{
        default: [{
            isActive: vue.Ref<boolean>;
        }];
        activator: [{
            isActive: boolean;
            props: Record<string, any>;
        }];
    }>>>> & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    } & vue.ShallowUnwrapRef<() => JSX.Element> & {} & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        }) | {
            readonly component: vue.DefineComponent<{
                target: vue.PropType<HTMLElement>;
            }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                target: vue.PropType<HTMLElement>;
            }>>, {}>;
        }>;
        default: string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        }) | {
            readonly component: vue.DefineComponent<{
                target: vue.PropType<HTMLElement>;
            }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                target: vue.PropType<HTMLElement>;
            }>>, {}>;
        };
    };
    disableKeys: BooleanConstructor;
    modelValue: BooleanConstructor;
    id: StringConstructor;
} & SlotsToProps<MakeSlots<{
    default: [{
        isActive: vue.Ref<boolean>;
    }];
    activator: [{
        isActive: boolean;
        props: Record<string, any>;
    }];
}>>>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: boolean) => boolean;
}, string, {
    transition: string | boolean | (vue.TransitionProps & {
        component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
    }) | {
        readonly component: vue.DefineComponent<{
            target: vue.PropType<HTMLElement>;
        }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
            target: vue.PropType<HTMLElement>;
        }>>, {}>;
    };
    modelValue: boolean;
    disableKeys: boolean;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $slots: OverlaySlots;
});
declare type VMenu = InstanceType<typeof VMenu>;

declare const VMessages: vue.DefineComponent<{
    transition: Omit<{
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        }) | {
            component: vue.DefineComponent<{
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: StringConstructor;
                    default: string | undefined;
                };
                origin: {
                    type: StringConstructor;
                    default: string;
                };
            }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: StringConstructor;
                    default: string | undefined;
                };
                origin: {
                    type: StringConstructor;
                    default: string;
                };
            }>>, {
                origin: string;
                group: boolean;
                mode: string;
                hideOnLeave: boolean;
                leaveAbsolute: boolean;
            }>;
            leaveAbsolute: boolean;
            group: boolean;
        }>;
        default: string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        }) | {
            component: vue.DefineComponent<{
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: StringConstructor;
                    default: string | undefined;
                };
                origin: {
                    type: StringConstructor;
                    default: string;
                };
            }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: StringConstructor;
                    default: string | undefined;
                };
                origin: {
                    type: StringConstructor;
                    default: string;
                };
            }>>, {
                origin: string;
                group: boolean;
                mode: string;
                hideOnLeave: boolean;
                leaveAbsolute: boolean;
            }>;
            leaveAbsolute: boolean;
            group: boolean;
        };
    };
    active: BooleanConstructor;
    color: StringConstructor;
    messages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    transition: Omit<{
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        }) | {
            component: vue.DefineComponent<{
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: StringConstructor;
                    default: string | undefined;
                };
                origin: {
                    type: StringConstructor;
                    default: string;
                };
            }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: StringConstructor;
                    default: string | undefined;
                };
                origin: {
                    type: StringConstructor;
                    default: string;
                };
            }>>, {
                origin: string;
                group: boolean;
                mode: string;
                hideOnLeave: boolean;
                leaveAbsolute: boolean;
            }>;
            leaveAbsolute: boolean;
            group: boolean;
        }>;
        default: string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        }) | {
            component: vue.DefineComponent<{
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: StringConstructor;
                    default: string | undefined;
                };
                origin: {
                    type: StringConstructor;
                    default: string;
                };
            }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: StringConstructor;
                    default: string | undefined;
                };
                origin: {
                    type: StringConstructor;
                    default: string;
                };
            }>>, {
                origin: string;
                group: boolean;
                mode: string;
                hideOnLeave: boolean;
                leaveAbsolute: boolean;
            }>;
            leaveAbsolute: boolean;
            group: boolean;
        };
    };
    active: BooleanConstructor;
    color: StringConstructor;
    messages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
}>>, {
    active: boolean;
    transition: string | boolean | (vue.TransitionProps & {
        component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
    }) | {
        component: vue.DefineComponent<{
            group: BooleanConstructor;
            hideOnLeave: BooleanConstructor;
            leaveAbsolute: BooleanConstructor;
            mode: {
                type: StringConstructor;
                default: string | undefined;
            };
            origin: {
                type: StringConstructor;
                default: string;
            };
        }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
            group: BooleanConstructor;
            hideOnLeave: BooleanConstructor;
            leaveAbsolute: BooleanConstructor;
            mode: {
                type: StringConstructor;
                default: string | undefined;
            };
            origin: {
                type: StringConstructor;
                default: string;
            };
        }>>, {
            origin: string;
            group: boolean;
            mode: string;
            hideOnLeave: boolean;
            leaveAbsolute: boolean;
        }>;
        leaveAbsolute: boolean;
        group: boolean;
    };
    messages: string | string[];
}>;

declare const VNavigationDrawer: vue.DefineComponent<{
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string>;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    name: {
        type: StringConstructor;
    };
    priority: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    disableResizeWatcher: BooleanConstructor;
    disableRouteWatcher: BooleanConstructor;
    expandOnHover: BooleanConstructor;
    floating: BooleanConstructor;
    modelValue: {
        type: PropType<boolean | null>;
        default: null;
    };
    permanent: BooleanConstructor;
    rail: BooleanConstructor;
    railWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    image: StringConstructor;
    temporary: BooleanConstructor;
    touchless: BooleanConstructor;
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    position: {
        type: PropType<"left" | "bottom" | "right">;
        default: string;
        validator: (value: any) => boolean;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (val: boolean) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string>;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    name: {
        type: StringConstructor;
    };
    priority: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    disableResizeWatcher: BooleanConstructor;
    disableRouteWatcher: BooleanConstructor;
    expandOnHover: BooleanConstructor;
    floating: BooleanConstructor;
    modelValue: {
        type: PropType<boolean | null>;
        default: null;
    };
    permanent: BooleanConstructor;
    rail: BooleanConstructor;
    railWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    image: StringConstructor;
    temporary: BooleanConstructor;
    touchless: BooleanConstructor;
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    position: {
        type: PropType<"left" | "bottom" | "right">;
        default: string;
        validator: (value: any) => boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((val: boolean) => any) | undefined;
}, {
    absolute: boolean;
    width: string | number;
    priority: string | number;
    position: "left" | "bottom" | "right";
    temporary: boolean;
    tag: string;
    rounded: string | number | boolean;
    floating: boolean;
    modelValue: boolean | null;
    touchless: boolean;
    disableResizeWatcher: boolean;
    disableRouteWatcher: boolean;
    expandOnHover: boolean;
    permanent: boolean;
    rail: boolean;
    railWidth: string | number;
}>;
declare type VNavigationDrawer = InstanceType<typeof VNavigationDrawer>;

declare const VNoSsr: vue.DefineComponent<{}, () => false | vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[] | undefined, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, vue.EmitsOptions, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{}>>, {}>;

declare const VPagination: vue.DefineComponent<{
    color: StringConstructor;
    variant: Omit<{
        type: vue.PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
    };
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    start: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: NumberConstructor;
        default: (props: any) => any;
    };
    disabled: BooleanConstructor;
    length: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (val: number) => boolean;
    };
    totalVisible: (StringConstructor | NumberConstructor)[];
    firstIcon: {
        type: StringConstructor;
        default: string;
    };
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    lastIcon: {
        type: StringConstructor;
        default: string;
    };
    ariaLabel: {
        type: StringConstructor;
        default: string;
    };
    pageAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    currentPageAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    firstAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    previousAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    nextAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    lastAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    ellipsis: {
        type: StringConstructor;
        default: string;
    };
    showFirstLastPage: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: number) => true;
    first: (value: number) => true;
    prev: (value: number) => true;
    next: (value: number) => true;
    last: (value: number) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    color: StringConstructor;
    variant: Omit<{
        type: vue.PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
    };
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    start: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: NumberConstructor;
        default: (props: any) => any;
    };
    disabled: BooleanConstructor;
    length: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (val: number) => boolean;
    };
    totalVisible: (StringConstructor | NumberConstructor)[];
    firstIcon: {
        type: StringConstructor;
        default: string;
    };
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    lastIcon: {
        type: StringConstructor;
        default: string;
    };
    ariaLabel: {
        type: StringConstructor;
        default: string;
    };
    pageAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    currentPageAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    firstAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    previousAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    nextAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    lastAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    ellipsis: {
        type: StringConstructor;
        default: string;
    };
    showFirstLastPage: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    onNext?: ((value: number) => any) | undefined;
    onPrev?: ((value: number) => any) | undefined;
    onFirst?: ((value: number) => any) | undefined;
    onLast?: ((value: number) => any) | undefined;
}, {
    length: string | number;
    start: string | number;
    ariaLabel: string;
    disabled: boolean;
    size: string | number;
    tag: string;
    ellipsis: string;
    rounded: string | number | boolean;
    density: "default" | "compact" | "comfortable" | null;
    variant: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
    modelValue: number;
    nextIcon: string;
    prevIcon: string;
    firstIcon: string;
    lastIcon: string;
    pageAriaLabel: string;
    currentPageAriaLabel: string;
    firstAriaLabel: string;
    previousAriaLabel: string;
    nextAriaLabel: string;
    lastAriaLabel: string;
    showFirstLastPage: boolean;
}>;
declare type VPagination = InstanceType<typeof VPagination>;

declare const VParallax: vue.DefineComponent<{
    scale: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    scale: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>>, {
    scale: string | number;
}>;
declare type VParallax = InstanceType<typeof VParallax>;

declare const VProgressCircular: vue.DefineComponent<{
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    bgColor: StringConstructor;
    color: StringConstructor;
    indeterminate: PropType<boolean | "disable-shrink">;
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    rotate: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    bgColor: StringConstructor;
    color: StringConstructor;
    indeterminate: PropType<boolean | "disable-shrink">;
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    rotate: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>>, {
    width: string | number;
    rotate: string | number;
    size: string | number;
    tag: string;
    modelValue: string | number;
}>;

declare const VProgressLinear: vue.DefineComponent<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgColor: StringConstructor;
    bgOpacity: (StringConstructor | NumberConstructor)[];
    bufferValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    clickable: BooleanConstructor;
    color: StringConstructor;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    indeterminate: BooleanConstructor;
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    reverse: BooleanConstructor;
    stream: BooleanConstructor;
    striped: BooleanConstructor;
    roundedBar: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: number) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgColor: StringConstructor;
    bgOpacity: (StringConstructor | NumberConstructor)[];
    bufferValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    clickable: BooleanConstructor;
    color: StringConstructor;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    indeterminate: BooleanConstructor;
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    reverse: BooleanConstructor;
    stream: BooleanConstructor;
    striped: BooleanConstructor;
    roundedBar: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}, {
    reverse: boolean;
    max: string | number;
    height: string | number;
    active: boolean;
    tag: string;
    rounded: string | number | boolean;
    modelValue: string | number;
    indeterminate: boolean;
    bufferValue: string | number;
    clickable: boolean;
    stream: boolean;
    striped: boolean;
    roundedBar: boolean;
}>;

declare const VRadio: vue.DefineComponent<{
    falseIcon: {
        type: StringConstructor;
        default: string;
    };
    trueIcon: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    falseIcon: {
        type: StringConstructor;
        default: string;
    };
    trueIcon: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    falseIcon: string;
    trueIcon: string;
}>;
declare type VRadio = InstanceType<typeof VRadio>;

declare const VRadioGroup: vue.DefineComponent<{
    trueIcon: {
        type: StringConstructor;
        default: string;
    };
    falseIcon: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    theme: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    inline: BooleanConstructor;
    label: StringConstructor;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    trueValue: null;
    falseValue: null;
    modelValue: null;
    value: null;
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    errorMessages: {
        type: vue.PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    rules: {
        type: vue.PropType<ValidationRule[]>;
        default: () => never[];
    };
    appendIcon: StringConstructor;
    prependIcon: StringConstructor;
    hideDetails: vue.PropType<boolean | "auto">;
    messages: {
        type: vue.PropType<string | string[]>;
        default: () => never[];
    };
    direction: {
        type: vue.PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    trueIcon: {
        type: StringConstructor;
        default: string;
    };
    falseIcon: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    theme: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    inline: BooleanConstructor;
    label: StringConstructor;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    trueValue: null;
    falseValue: null;
    modelValue: null;
    value: null;
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    errorMessages: {
        type: vue.PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    rules: {
        type: vue.PropType<ValidationRule[]>;
        default: () => never[];
    };
    appendIcon: StringConstructor;
    prependIcon: StringConstructor;
    hideDetails: vue.PropType<boolean | "auto">;
    messages: {
        type: vue.PropType<string | string[]>;
        default: () => never[];
    };
    direction: {
        type: vue.PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}>>, {
    type: string;
    inline: boolean;
    error: boolean;
    height: string | number;
    direction: "horizontal" | "vertical";
    disabled: boolean;
    multiple: boolean | null;
    readonly: boolean;
    messages: string | string[];
    density: "default" | "compact" | "comfortable" | null;
    ripple: boolean;
    valueComparator: typeof deepEqual;
    errorMessages: string | string[];
    maxErrors: string | number;
    rules: ValidationRule[];
    falseIcon: string;
    trueIcon: string;
}>;

declare const VRangeSlider: vue.DefineComponent<{
    strict: BooleanConstructor;
    modelValue: {
        type: PropType<number[]>;
        default: () => number[];
    };
    elevation: Omit<{
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    }, "type" | "default"> & {
        type: PropType<string | number>;
        default: string | number;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    readonly: BooleanConstructor;
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    min: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    step: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    thumbColor: StringConstructor;
    thumbLabel: {
        type: PropType<boolean | "always" | undefined>;
        default: undefined;
        validator: (v: any) => boolean;
    };
    thumbSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    showTicks: {
        type: PropType<boolean | "always">;
        default: boolean;
        validator: (v: any) => boolean;
    };
    ticks: {
        type: PropType<number[] | Record<number, string>>;
    };
    tickSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    color: StringConstructor;
    trackColor: StringConstructor;
    trackFillColor: StringConstructor;
    trackSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    reverse: BooleanConstructor;
    errorMessages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    rules: {
        type: PropType<ValidationRule[]>;
        default: () => never[];
    };
    density: {
        type: PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: StringConstructor;
    prependIcon: StringConstructor;
    hideDetails: PropType<boolean | "auto">;
    messages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    focused: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:focused': (value: boolean) => true;
    'update:modelValue': (value: [number, number]) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    strict: BooleanConstructor;
    modelValue: {
        type: PropType<number[]>;
        default: () => number[];
    };
    elevation: Omit<{
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    }, "type" | "default"> & {
        type: PropType<string | number>;
        default: string | number;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    readonly: BooleanConstructor;
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    min: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    step: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    thumbColor: StringConstructor;
    thumbLabel: {
        type: PropType<boolean | "always" | undefined>;
        default: undefined;
        validator: (v: any) => boolean;
    };
    thumbSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    showTicks: {
        type: PropType<boolean | "always">;
        default: boolean;
        validator: (v: any) => boolean;
    };
    ticks: {
        type: PropType<number[] | Record<number, string>>;
    };
    tickSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    color: StringConstructor;
    trackColor: StringConstructor;
    trackFillColor: StringConstructor;
    trackSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    reverse: BooleanConstructor;
    errorMessages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    rules: {
        type: PropType<ValidationRule[]>;
        default: () => never[];
    };
    density: {
        type: PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: StringConstructor;
    prependIcon: StringConstructor;
    hideDetails: PropType<boolean | "auto">;
    messages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    focused: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: ((value: [number, number]) => any) | undefined;
    "onUpdate:focused"?: ((value: boolean) => any) | undefined;
}, {
    reverse: boolean;
    max: string | number;
    error: boolean;
    direction: "horizontal" | "vertical";
    disabled: boolean;
    readonly: boolean;
    strict: boolean;
    step: string | number;
    min: string | number;
    elevation: string | number;
    messages: string | string[];
    rounded: string | number | boolean;
    density: "default" | "compact" | "comfortable" | null;
    modelValue: number[];
    errorMessages: string | string[];
    maxErrors: string | number;
    rules: ValidationRule[];
    focused: boolean;
    tickSize: string | number;
    showTicks: boolean | "always";
    trackSize: string | number;
    thumbLabel: boolean | "always" | undefined;
    thumbSize: string | number;
}>;
declare type VRangeSlider = InstanceType<typeof VRangeSlider>;

declare type VRatingItemSlot = {
    value: number;
    index: number;
    isFilled: boolean;
    isHovered: boolean;
    icon: string;
    color?: string;
    props: Record<string, unknown>;
};
declare type VRatingItemLabelSlot = {
    value: number;
    index: number;
    label?: string;
};
declare const VRating: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            length: string | number;
            disabled: boolean;
            size: string | number;
            readonly: boolean;
            tag: string;
            density: "default" | "compact" | "comfortable" | null;
            modelValue: number;
            ripple: boolean;
            clearable: boolean;
            hover: boolean;
            halfIncrements: boolean;
            itemAriaLabel: string;
            emptyIcon: string;
            fullIcon: string;
            itemLabelPosition: string;
        }> & Omit<Readonly<vue.ExtractPropTypes<{
            theme: StringConstructor;
            tag: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            density: {
                type: vue.PropType<"default" | "compact" | "comfortable" | null>;
                default: string;
                validator: (v: any) => boolean;
            };
            name: StringConstructor;
            itemAriaLabel: {
                type: StringConstructor;
                default: string;
            };
            activeColor: StringConstructor;
            color: StringConstructor;
            clearable: BooleanConstructor;
            disabled: BooleanConstructor;
            emptyIcon: {
                type: StringConstructor;
                default: string;
            };
            fullIcon: {
                type: StringConstructor;
                default: string;
            };
            halfIncrements: BooleanConstructor;
            hover: BooleanConstructor;
            length: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            readonly: BooleanConstructor;
            modelValue: {
                type: NumberConstructor;
                default: number;
            };
            itemLabels: Prop<string[], string[]>;
            itemLabelPosition: {
                type: StringConstructor;
                default: string;
                validator: (v: any) => boolean;
            };
            ripple: BooleanConstructor;
        } & SlotsToProps<MakeSlots<{
            item: [VRatingItemSlot];
            'item-label': [VRatingItemLabelSlot];
        }>>>> & {
            "onUpdate:modelValue"?: ((value: number) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "length" | "disabled" | "size" | "readonly" | "tag" | "density" | "modelValue" | "ripple" | "clearable" | "hover" | "halfIncrements" | "itemAriaLabel" | "emptyIcon" | "fullIcon" | "itemLabelPosition">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "update:modelValue", value: number) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
            theme: StringConstructor;
            tag: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            density: {
                type: vue.PropType<"default" | "compact" | "comfortable" | null>;
                default: string;
                validator: (v: any) => boolean;
            };
            name: StringConstructor;
            itemAriaLabel: {
                type: StringConstructor;
                default: string;
            };
            activeColor: StringConstructor;
            color: StringConstructor;
            clearable: BooleanConstructor;
            disabled: BooleanConstructor;
            emptyIcon: {
                type: StringConstructor;
                default: string;
            };
            fullIcon: {
                type: StringConstructor;
                default: string;
            };
            halfIncrements: BooleanConstructor;
            hover: BooleanConstructor;
            length: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            readonly: BooleanConstructor;
            modelValue: {
                type: NumberConstructor;
                default: number;
            };
            itemLabels: Prop<string[], string[]>;
            itemLabelPosition: {
                type: StringConstructor;
                default: string;
                validator: (v: any) => boolean;
            };
            ripple: BooleanConstructor;
        } & SlotsToProps<MakeSlots<{
            item: [VRatingItemSlot];
            'item-label': [VRatingItemLabelSlot];
        }>>>> & {
            "onUpdate:modelValue"?: ((value: number) => any) | undefined;
        }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (value: number) => boolean;
        }, string, {
            length: string | number;
            disabled: boolean;
            size: string | number;
            readonly: boolean;
            tag: string;
            density: "default" | "compact" | "comfortable" | null;
            modelValue: number;
            ripple: boolean;
            clearable: boolean;
            hover: boolean;
            halfIncrements: boolean;
            itemAriaLabel: string;
            emptyIcon: string;
            fullIcon: string;
            itemLabelPosition: string;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<{
        theme: StringConstructor;
        tag: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        density: {
            type: vue.PropType<"default" | "compact" | "comfortable" | null>;
            default: string;
            validator: (v: any) => boolean;
        };
        name: StringConstructor;
        itemAriaLabel: {
            type: StringConstructor;
            default: string;
        };
        activeColor: StringConstructor;
        color: StringConstructor;
        clearable: BooleanConstructor;
        disabled: BooleanConstructor;
        emptyIcon: {
            type: StringConstructor;
            default: string;
        };
        fullIcon: {
            type: StringConstructor;
            default: string;
        };
        halfIncrements: BooleanConstructor;
        hover: BooleanConstructor;
        length: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        readonly: BooleanConstructor;
        modelValue: {
            type: NumberConstructor;
            default: number;
        };
        itemLabels: Prop<string[], string[]>;
        itemLabelPosition: {
            type: StringConstructor;
            default: string;
            validator: (v: any) => boolean;
        };
        ripple: BooleanConstructor;
    } & SlotsToProps<MakeSlots<{
        item: [VRatingItemSlot];
        'item-label': [VRatingItemLabelSlot];
    }>>>> & {
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    } & vue.ShallowUnwrapRef<() => JSX.Element> & {} & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    name: StringConstructor;
    itemAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    activeColor: StringConstructor;
    color: StringConstructor;
    clearable: BooleanConstructor;
    disabled: BooleanConstructor;
    emptyIcon: {
        type: StringConstructor;
        default: string;
    };
    fullIcon: {
        type: StringConstructor;
        default: string;
    };
    halfIncrements: BooleanConstructor;
    hover: BooleanConstructor;
    length: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    readonly: BooleanConstructor;
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    itemLabels: Prop<string[], string[]>;
    itemLabelPosition: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
    ripple: BooleanConstructor;
} & SlotsToProps<MakeSlots<{
    item: [VRatingItemSlot];
    'item-label': [VRatingItemLabelSlot];
}>>>> & {
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: number) => boolean;
}, string, {
    length: string | number;
    disabled: boolean;
    size: string | number;
    readonly: boolean;
    tag: string;
    density: "default" | "compact" | "comfortable" | null;
    modelValue: number;
    ripple: boolean;
    clearable: boolean;
    hover: boolean;
    halfIncrements: boolean;
    itemAriaLabel: string;
    emptyIcon: string;
    fullIcon: string;
    itemLabelPosition: string;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T>() => {
    $slots: MakeSlots<{
        item: [VRatingItemSlot];
        'item-label': [VRatingItemLabelSlot];
    }>;
});
declare type VRating = InstanceType<typeof VRating>;

declare const VResponsive: vue.DefineComponent<{
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    aspectRatio: (StringConstructor | NumberConstructor)[];
    contentClass: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    aspectRatio: (StringConstructor | NumberConstructor)[];
    contentClass: StringConstructor;
}>>, {}>;

declare const VSelectionControlGroup: vue.DefineComponent<{
    disabled: BooleanConstructor;
    id: StringConstructor;
    inline: BooleanConstructor;
    name: StringConstructor;
    falseIcon: StringConstructor;
    trueIcon: StringConstructor;
    multiple: {
        type: PropType<boolean | null>;
        default: null;
    };
    readonly: BooleanConstructor;
    type: StringConstructor;
    modelValue: null;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (val: any) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    disabled: BooleanConstructor;
    id: StringConstructor;
    inline: BooleanConstructor;
    name: StringConstructor;
    falseIcon: StringConstructor;
    trueIcon: StringConstructor;
    multiple: {
        type: PropType<boolean | null>;
        default: null;
    };
    readonly: BooleanConstructor;
    type: StringConstructor;
    modelValue: null;
}>> & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
}, {
    inline: boolean;
    disabled: boolean;
    multiple: boolean | null;
    readonly: boolean;
}>;
declare type VSelectionControlGroup = InstanceType<typeof VSelectionControlGroup>;

declare type SelectionControlSlot = {
    model: WritableComputedRef<any>;
    isReadonly: ComputedRef<boolean>;
    isDisabled: ComputedRef<boolean>;
    textColorClasses: Ref<string[]>;
    props: {
        onBlur: (e: Event) => void;
        onFocus: (e: FocusEvent) => void;
        id: string;
    };
};
declare const VSelectionControl: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            inline: boolean;
            error: boolean;
            disabled: boolean;
            multiple: boolean | null;
            readonly: boolean;
            density: "default" | "compact" | "comfortable" | null;
            ripple: boolean;
            valueComparator: typeof deepEqual;
        }> & Omit<Readonly<ExtractPropTypes<Omit<{
            density: {
                type: PropType<"default" | "compact" | "comfortable" | null>;
                default: string;
                validator: (v: any) => boolean;
            };
            theme: StringConstructor;
            color: StringConstructor;
            disabled: BooleanConstructor;
            error: BooleanConstructor;
            id: StringConstructor;
            inline: BooleanConstructor;
            label: StringConstructor;
            falseIcon: StringConstructor;
            trueIcon: StringConstructor;
            ripple: {
                type: BooleanConstructor;
                default: boolean;
            };
            multiple: {
                type: PropType<boolean | null>;
                default: null;
            };
            name: StringConstructor;
            readonly: BooleanConstructor;
            trueValue: null;
            falseValue: null;
            modelValue: null;
            type: StringConstructor;
            value: null;
            valueComparator: {
                type: PropType<typeof deepEqual>;
                default: typeof deepEqual;
            };
        }, "onUpdate:modelValue" | "modelValue"> & SlotsToProps<MakeSlots<{
            default: [];
            input: [SelectionControlSlot];
        }>>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "inline" | "error" | "disabled" | "multiple" | "readonly" | "density" | "ripple" | "valueComparator">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<ExtractPropTypes<Omit<{
            density: {
                type: PropType<"default" | "compact" | "comfortable" | null>;
                default: string;
                validator: (v: any) => boolean;
            };
            theme: StringConstructor;
            color: StringConstructor;
            disabled: BooleanConstructor;
            error: BooleanConstructor;
            id: StringConstructor;
            inline: BooleanConstructor;
            label: StringConstructor;
            falseIcon: StringConstructor;
            trueIcon: StringConstructor;
            ripple: {
                type: BooleanConstructor;
                default: boolean;
            };
            multiple: {
                type: PropType<boolean | null>;
                default: null;
            };
            name: StringConstructor;
            readonly: BooleanConstructor;
            trueValue: null;
            falseValue: null;
            modelValue: null;
            type: StringConstructor;
            value: null;
            valueComparator: {
                type: PropType<typeof deepEqual>;
                default: typeof deepEqual;
            };
        }, "onUpdate:modelValue" | "modelValue"> & SlotsToProps<MakeSlots<{
            default: [];
            input: [SelectionControlSlot];
        }>>>>, {
            isFocused: Ref<boolean>;
            input: Ref<HTMLInputElement | undefined>;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
            'update:modelValue': (val: any) => boolean;
        }, "update:modelValue" | "modelValue">, string, {
            inline: boolean;
            error: boolean;
            disabled: boolean;
            multiple: boolean | null;
            readonly: boolean;
            density: "default" | "compact" | "comfortable" | null;
            ripple: boolean;
            valueComparator: typeof deepEqual;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<ExtractPropTypes<Omit<{
        density: {
            type: PropType<"default" | "compact" | "comfortable" | null>;
            default: string;
            validator: (v: any) => boolean;
        };
        theme: StringConstructor;
        color: StringConstructor;
        disabled: BooleanConstructor;
        error: BooleanConstructor;
        id: StringConstructor;
        inline: BooleanConstructor;
        label: StringConstructor;
        falseIcon: StringConstructor;
        trueIcon: StringConstructor;
        ripple: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: PropType<boolean | null>;
            default: null;
        };
        name: StringConstructor;
        readonly: BooleanConstructor;
        trueValue: null;
        falseValue: null;
        modelValue: null;
        type: StringConstructor;
        value: null;
        valueComparator: {
            type: PropType<typeof deepEqual>;
            default: typeof deepEqual;
        };
    }, "onUpdate:modelValue" | "modelValue"> & SlotsToProps<MakeSlots<{
        default: [];
        input: [SelectionControlSlot];
    }>>>> & vue.ShallowUnwrapRef<{
        isFocused: Ref<boolean>;
        input: Ref<HTMLInputElement | undefined>;
    }> & {} & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<ExtractPropTypes<Omit<{
    density: {
        type: PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    theme: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    inline: BooleanConstructor;
    label: StringConstructor;
    falseIcon: StringConstructor;
    trueIcon: StringConstructor;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: PropType<boolean | null>;
        default: null;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    trueValue: null;
    falseValue: null;
    modelValue: null;
    type: StringConstructor;
    value: null;
    valueComparator: {
        type: PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
}, "onUpdate:modelValue" | "modelValue"> & SlotsToProps<MakeSlots<{
    default: [];
    input: [SelectionControlSlot];
}>>>>, {
    isFocused: Ref<boolean>;
    input: Ref<HTMLInputElement | undefined>;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'update:modelValue': (val: any) => boolean;
}, "update:modelValue" | "modelValue">, string, {
    inline: boolean;
    error: boolean;
    disabled: boolean;
    multiple: boolean | null;
    readonly: boolean;
    density: "default" | "compact" | "comfortable" | null;
    ripple: boolean;
    valueComparator: typeof deepEqual;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T>() => {
    $props: {
        modelValue?: T | undefined;
        'onUpdate:modelValue'?: ((val: T) => any) | undefined;
    };
    $slots: MakeSlots<{
        default: [];
        input: [SelectionControlSlot];
    }>;
});
declare type VSelectionControl = InstanceType<typeof VSelectionControl>;

declare const VSheet: vue.DefineComponent<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    absolute: BooleanConstructor;
    bottom: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    fixed: BooleanConstructor;
    left: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    position: {
        type: vue.PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    right: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    top: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    absolute: BooleanConstructor;
    bottom: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    fixed: BooleanConstructor;
    left: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    position: {
        type: vue.PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    right: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    top: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
}>>, {
    fixed: boolean;
    absolute: boolean;
    tag: string;
    rounded: string | number | boolean;
}>;

declare const VSlideGroupSymbol: InjectionKey<GroupProvide>;
declare const VSlideGroup: vue.DefineComponent<{
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: vue.PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: {
        type: vue.PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    centerActive: BooleanConstructor;
    direction: {
        type: StringConstructor;
        default: string;
    };
    symbol: {
        type: null;
        default: InjectionKey<GroupProvide>;
    };
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    showArrows: {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    };
}, {
    selected: vue.Ref<any[]>;
    scrollTo: (location: 'prev' | 'next') => void;
    scrollOffset: vue.Ref<number>;
    focus: (location?: "next" | "prev" | "first" | "last" | undefined) => void;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: any) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: vue.PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: {
        type: vue.PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    centerActive: BooleanConstructor;
    direction: {
        type: StringConstructor;
        default: string;
    };
    symbol: {
        type: null;
        default: InjectionKey<GroupProvide>;
    };
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    showArrows: {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
}, {
    symbol: any;
    direction: string;
    disabled: boolean;
    multiple: boolean;
    tag: string;
    modelValue: any;
    selectedClass: string;
    nextIcon: string;
    prevIcon: string;
    centerActive: boolean;
}>;
declare type VSlideGroup = InstanceType<typeof VSlideGroup>;

declare const VSlideGroupItem: vue.DefineComponent<{
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
}>>, {
    disabled: boolean;
}>;

declare const VSlider: vue.DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    errorMessages: {
        type: vue.PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    rules: {
        type: vue.PropType<ValidationRule[]>;
        default: () => never[];
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: StringConstructor;
    prependIcon: StringConstructor;
    hideDetails: vue.PropType<boolean | "auto">;
    messages: {
        type: vue.PropType<string | string[]>;
        default: () => never[];
    };
    direction: {
        type: vue.PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    elevation: Omit<{
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    }, "type" | "default"> & {
        type: vue.PropType<string | number>;
        default: string | number;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    min: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    step: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    thumbColor: StringConstructor;
    thumbLabel: {
        type: vue.PropType<boolean | "always" | undefined>;
        default: undefined;
        validator: (v: any) => boolean;
    };
    thumbSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    showTicks: {
        type: vue.PropType<boolean | "always">;
        default: boolean;
        validator: (v: any) => boolean;
    };
    ticks: {
        type: vue.PropType<number[] | Record<number, string>>;
    };
    tickSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    color: StringConstructor;
    trackColor: StringConstructor;
    trackFillColor: StringConstructor;
    trackSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    reverse: BooleanConstructor;
    focused: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:focused': (value: boolean) => true;
    'update:modelValue': (v: number) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    errorMessages: {
        type: vue.PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    rules: {
        type: vue.PropType<ValidationRule[]>;
        default: () => never[];
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: StringConstructor;
    prependIcon: StringConstructor;
    hideDetails: vue.PropType<boolean | "auto">;
    messages: {
        type: vue.PropType<string | string[]>;
        default: () => never[];
    };
    direction: {
        type: vue.PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    elevation: Omit<{
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    }, "type" | "default"> & {
        type: vue.PropType<string | number>;
        default: string | number;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    min: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    step: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    thumbColor: StringConstructor;
    thumbLabel: {
        type: vue.PropType<boolean | "always" | undefined>;
        default: undefined;
        validator: (v: any) => boolean;
    };
    thumbSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    showTicks: {
        type: vue.PropType<boolean | "always">;
        default: boolean;
        validator: (v: any) => boolean;
    };
    ticks: {
        type: vue.PropType<number[] | Record<number, string>>;
    };
    tickSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    color: StringConstructor;
    trackColor: StringConstructor;
    trackFillColor: StringConstructor;
    trackSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    reverse: BooleanConstructor;
    focused: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: ((v: number) => any) | undefined;
    "onUpdate:focused"?: ((value: boolean) => any) | undefined;
}, {
    reverse: boolean;
    max: string | number;
    error: boolean;
    direction: "horizontal" | "vertical";
    disabled: boolean;
    readonly: boolean;
    step: string | number;
    min: string | number;
    elevation: string | number;
    messages: string | string[];
    rounded: string | number | boolean;
    density: "default" | "compact" | "comfortable" | null;
    modelValue: string | number;
    errorMessages: string | string[];
    maxErrors: string | number;
    rules: ValidationRule[];
    focused: boolean;
    tickSize: string | number;
    showTicks: boolean | "always";
    trackSize: string | number;
    thumbLabel: boolean | "always" | undefined;
    thumbSize: string | number;
}>;
declare type VSlider = InstanceType<typeof VSlider>;

declare const VSnackbar: vue.DefineComponent<{
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        });
    };
    color: StringConstructor;
    variant: {
        type: vue.PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: string;
        validator: (v: any) => boolean;
    };
    absolute: BooleanConstructor;
    bottom: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    fixed: BooleanConstructor;
    left: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    position: {
        type: vue.PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    right: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    top: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    app: BooleanConstructor;
    centered: BooleanConstructor;
    contentClass: {
        type: StringConstructor;
        default: string;
    };
    multiLine: BooleanConstructor;
    timeout: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    vertical: BooleanConstructor;
    modelValue: BooleanConstructor;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (v: boolean) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        });
    };
    color: StringConstructor;
    variant: {
        type: vue.PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: string;
        validator: (v: any) => boolean;
    };
    absolute: BooleanConstructor;
    bottom: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    fixed: BooleanConstructor;
    left: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    position: {
        type: vue.PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    right: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    top: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    app: BooleanConstructor;
    centered: BooleanConstructor;
    contentClass: {
        type: StringConstructor;
        default: string;
    };
    multiLine: BooleanConstructor;
    timeout: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    vertical: BooleanConstructor;
    modelValue: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
}, {
    fixed: boolean;
    absolute: boolean;
    transition: string | boolean | (vue.TransitionProps & {
        component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
    });
    timeout: string | number;
    vertical: boolean;
    contentClass: string;
    variant: "text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text";
    modelValue: boolean;
    centered: boolean;
    app: boolean;
    multiLine: boolean;
}>;
declare type VSnackbar = InstanceType<typeof VSnackbar>;

declare const VSwitch: vue.DefineComponent<{
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    theme: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    inline: BooleanConstructor;
    label: StringConstructor;
    falseIcon: StringConstructor;
    trueIcon: StringConstructor;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    trueValue: null;
    falseValue: null;
    modelValue: null;
    type: StringConstructor;
    value: null;
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    errorMessages: {
        type: vue.PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    rules: {
        type: vue.PropType<ValidationRule[]>;
        default: () => never[];
    };
    appendIcon: StringConstructor;
    prependIcon: StringConstructor;
    hideDetails: vue.PropType<boolean | "auto">;
    messages: {
        type: vue.PropType<string | string[]>;
        default: () => never[];
    };
    direction: {
        type: vue.PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    indeterminate: BooleanConstructor;
    inset: BooleanConstructor;
    flat: BooleanConstructor;
    loading: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:indeterminate': (val: boolean) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    theme: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    inline: BooleanConstructor;
    label: StringConstructor;
    falseIcon: StringConstructor;
    trueIcon: StringConstructor;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    trueValue: null;
    falseValue: null;
    modelValue: null;
    type: StringConstructor;
    value: null;
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    errorMessages: {
        type: vue.PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    rules: {
        type: vue.PropType<ValidationRule[]>;
        default: () => never[];
    };
    appendIcon: StringConstructor;
    prependIcon: StringConstructor;
    hideDetails: vue.PropType<boolean | "auto">;
    messages: {
        type: vue.PropType<string | string[]>;
        default: () => never[];
    };
    direction: {
        type: vue.PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    indeterminate: BooleanConstructor;
    inset: BooleanConstructor;
    flat: BooleanConstructor;
    loading: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
}>> & {
    "onUpdate:indeterminate"?: ((val: boolean) => any) | undefined;
}, {
    flat: boolean;
    inline: boolean;
    error: boolean;
    direction: "horizontal" | "vertical";
    inset: boolean;
    loading: string | boolean;
    disabled: boolean;
    multiple: boolean | null;
    readonly: boolean;
    messages: string | string[];
    density: "default" | "compact" | "comfortable" | null;
    ripple: boolean;
    valueComparator: typeof deepEqual;
    indeterminate: boolean;
    errorMessages: string | string[];
    maxErrors: string | number;
    rules: ValidationRule[];
}>;
declare type VSwitch = InstanceType<typeof VSwitch>;

declare const VSystemBar: vue.DefineComponent<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    name: {
        type: StringConstructor;
    };
    priority: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    color: StringConstructor;
    height: (StringConstructor | NumberConstructor)[];
    window: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    name: {
        type: StringConstructor;
    };
    priority: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    color: StringConstructor;
    height: (StringConstructor | NumberConstructor)[];
    window: BooleanConstructor;
}>>, {
    window: boolean;
    absolute: boolean;
    priority: string | number;
    tag: string;
    rounded: string | number | boolean;
}>;

declare type TabItem = string | Record<string, any>;
declare const VTabs: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    density: {
        type: PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    alignWithTitle: BooleanConstructor;
    color: StringConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    fixedTabs: BooleanConstructor;
    items: {
        type: PropType<TabItem[]>;
        default: () => never[];
    };
    stacked: BooleanConstructor;
    backgroundColor: StringConstructor;
    centered: BooleanConstructor;
    grow: BooleanConstructor;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    hideSlider: BooleanConstructor;
    optional: BooleanConstructor;
    right: BooleanConstructor;
    sliderColor: StringConstructor;
    modelValue: null;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (v: unknown) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    density: {
        type: PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    alignWithTitle: BooleanConstructor;
    color: StringConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    fixedTabs: BooleanConstructor;
    items: {
        type: PropType<TabItem[]>;
        default: () => never[];
    };
    stacked: BooleanConstructor;
    backgroundColor: StringConstructor;
    centered: BooleanConstructor;
    grow: BooleanConstructor;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    hideSlider: BooleanConstructor;
    optional: BooleanConstructor;
    right: BooleanConstructor;
    sliderColor: StringConstructor;
    modelValue: null;
}>> & {
    "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
}, {
    optional: boolean;
    height: string | number;
    direction: "horizontal" | "vertical";
    right: boolean;
    tag: string;
    items: TabItem[];
    density: "default" | "compact" | "comfortable" | null;
    centered: boolean;
    stacked: boolean;
    grow: boolean;
    hideSlider: boolean;
    alignWithTitle: boolean;
    fixedTabs: boolean;
}>;
declare type VTabs = InstanceType<typeof VTabs>;

declare const VTab: vue.DefineComponent<{
    theme: StringConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: PropType<vue_router.RouteLocationRaw>;
    tag: {
        type: StringConstructor;
        default: string;
    };
    fixed: BooleanConstructor;
    icon: (StringConstructor | BooleanConstructor)[];
    prependIcon: StringConstructor;
    appendIcon: StringConstructor;
    stacked: BooleanConstructor;
    title: StringConstructor;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: StringConstructor;
    sliderColor: StringConstructor;
    hideSlider: BooleanConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: PropType<vue_router.RouteLocationRaw>;
    tag: {
        type: StringConstructor;
        default: string;
    };
    fixed: BooleanConstructor;
    icon: (StringConstructor | BooleanConstructor)[];
    prependIcon: StringConstructor;
    appendIcon: StringConstructor;
    stacked: BooleanConstructor;
    title: StringConstructor;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: StringConstructor;
    sliderColor: StringConstructor;
    hideSlider: BooleanConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
}>>, {
    replace: boolean;
    fixed: boolean;
    direction: "horizontal" | "vertical";
    disabled: boolean;
    tag: string;
    selectedClass: string;
    stacked: boolean;
    ripple: boolean;
    hideSlider: boolean;
}>;
declare type VTab = InstanceType<typeof VTab>;

declare const VTable: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    theme: StringConstructor;
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    theme: StringConstructor;
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
}>>, {
    tag: string;
    density: "default" | "compact" | "comfortable" | null;
    fixedHeader: boolean;
    fixedFooter: boolean;
}>;

declare const VTextarea: vue.DefineComponent<{
    loading: BooleanConstructor;
    theme: StringConstructor;
    appendInnerIcon: StringConstructor;
    bgColor: StringConstructor;
    clearable: BooleanConstructor;
    clearIcon: {
        type: StringConstructor;
        default: string;
    };
    active: BooleanConstructor;
    color: StringConstructor;
    dirty: BooleanConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    label: StringConstructor;
    persistentClear: BooleanConstructor;
    prependInnerIcon: StringConstructor;
    reverse: BooleanConstructor;
    singleLine: BooleanConstructor;
    variant: {
        type: PropType<"filled" | "outlined" | "plain" | "contained" | "underlined">;
        default: string;
        validator: (v: any) => boolean;
    };
    errorMessages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    rules: {
        type: PropType<ValidationRule[]>;
        default: () => never[];
    };
    modelValue: null;
    density: {
        type: PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: StringConstructor;
    prependIcon: StringConstructor;
    hideDetails: PropType<boolean | "auto">;
    messages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    autoGrow: BooleanConstructor;
    autofocus: BooleanConstructor;
    counter: PropType<string | number | true>;
    counterValue: PropType<(value: any) => number>;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    prefix: StringConstructor;
    placeholder: StringConstructor;
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    noResize: BooleanConstructor;
    rows: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (v: any) => boolean;
    };
    maxRows: {
        type: (StringConstructor | NumberConstructor)[];
        validator: (v: any) => boolean;
    };
    suffix: StringConstructor;
}, {
    $: vue.ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        error: boolean;
        direction: "horizontal" | "vertical";
        disabled: boolean;
        readonly: boolean;
        messages: string | string[];
        density: "default" | "compact" | "comfortable" | null;
        errorMessages: string | string[];
        maxErrors: string | number;
        rules: ValidationRule[];
    }> & Omit<Readonly<vue.ExtractPropTypes<{
        disabled: BooleanConstructor;
        error: BooleanConstructor;
        errorMessages: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        maxErrors: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        name: StringConstructor;
        readonly: BooleanConstructor;
        rules: {
            type: PropType<ValidationRule[]>;
            default: () => never[];
        };
        modelValue: null;
        density: {
            type: PropType<"default" | "compact" | "comfortable" | null>;
            default: string;
            validator: (v: any) => boolean;
        };
        id: StringConstructor;
        appendIcon: StringConstructor;
        prependIcon: StringConstructor;
        hideDetails: PropType<boolean | "auto">;
        messages: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        direction: {
            type: PropType<"horizontal" | "vertical">;
            default: string;
            validator: (v: any) => boolean;
        };
    } & SlotsToProps<MakeSlots<{
        default: [VInputSlot];
        prepend: [VInputSlot];
        append: [VInputSlot];
        details: [VInputSlot];
    }>>>> & {
        "onUpdate:modelValue"?: ((val: any) => any) | undefined;
        "onClick:prepend"?: ((e: MouseEvent) => any) | undefined;
        "onClick:append"?: ((e: MouseEvent) => any) | undefined;
    } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "error" | "direction" | "disabled" | "readonly" | "messages" | "density" | "errorMessages" | "maxErrors" | "rules">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        [name: string]: vue.Slot | undefined;
    }>;
    $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
    $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
    $emit: ((event: "update:modelValue", val: any) => void) & ((event: "click:prepend", e: MouseEvent) => void) & ((event: "click:append", e: MouseEvent) => void);
    $el: any;
    $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
        disabled: BooleanConstructor;
        error: BooleanConstructor;
        errorMessages: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        maxErrors: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        name: StringConstructor;
        readonly: BooleanConstructor;
        rules: {
            type: PropType<ValidationRule[]>;
            default: () => never[];
        };
        modelValue: null;
        density: {
            type: PropType<"default" | "compact" | "comfortable" | null>;
            default: string;
            validator: (v: any) => boolean;
        };
        id: StringConstructor;
        appendIcon: StringConstructor;
        prependIcon: StringConstructor;
        hideDetails: PropType<boolean | "auto">;
        messages: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        direction: {
            type: PropType<"horizontal" | "vertical">;
            default: string;
            validator: (v: any) => boolean;
        };
    } & SlotsToProps<MakeSlots<{
        default: [VInputSlot];
        prepend: [VInputSlot];
        append: [VInputSlot];
        details: [VInputSlot];
    }>>>> & {
        "onUpdate:modelValue"?: ((val: any) => any) | undefined;
        "onClick:prepend"?: ((e: MouseEvent) => any) | undefined;
        "onClick:append"?: ((e: MouseEvent) => any) | undefined;
    }, {
        reset: () => void;
        resetValidation: () => void;
        validate: () => Promise<string[]>;
    }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'click:prepend': (e: MouseEvent) => boolean;
        'click:append': (e: MouseEvent) => boolean;
        'update:modelValue': (val: any) => boolean;
    }, string, {
        error: boolean;
        direction: "horizontal" | "vertical";
        disabled: boolean;
        readonly: boolean;
        messages: string | string[];
        density: "default" | "compact" | "comfortable" | null;
        errorMessages: string | string[];
        maxErrors: string | number;
        rules: ValidationRule[];
    }> & {
        beforeCreate?: ((() => void) | (() => void)[]) | undefined;
        created?: ((() => void) | (() => void)[]) | undefined;
        beforeMount?: ((() => void) | (() => void)[]) | undefined;
        mounted?: ((() => void) | (() => void)[]) | undefined;
        beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
        updated?: ((() => void) | (() => void)[]) | undefined;
        activated?: ((() => void) | (() => void)[]) | undefined;
        deactivated?: ((() => void) | (() => void)[]) | undefined;
        beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
        beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
        destroyed?: ((() => void) | (() => void)[]) | undefined;
        unmounted?: ((() => void) | (() => void)[]) | undefined;
        renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
        renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
        errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
    };
    $forceUpdate: () => void;
    $nextTick: typeof nextTick;
    $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
} & Readonly<vue.ExtractPropTypes<{
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    errorMessages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    rules: {
        type: PropType<ValidationRule[]>;
        default: () => never[];
    };
    modelValue: null;
    density: {
        type: PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: StringConstructor;
    prependIcon: StringConstructor;
    hideDetails: PropType<boolean | "auto">;
    messages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
} & SlotsToProps<MakeSlots<{
    default: [VInputSlot];
    prepend: [VInputSlot];
    append: [VInputSlot];
    details: [VInputSlot];
}>>>> & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
    "onClick:prepend"?: ((e: MouseEvent) => any) | undefined;
    "onClick:append"?: ((e: MouseEvent) => any) | undefined;
} & vue.ShallowUnwrapRef<{
    reset: () => void;
    resetValidation: () => void;
    validate: () => Promise<string[]>;
}> & {} & {} & vue.ComponentCustomProperties & {
    $slots: MakeSlots<{
        default: [VInputSlot];
        prepend: [VInputSlot];
        append: [VInputSlot];
        details: [VInputSlot];
    }>;
} & HTMLInputElement, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'click:clear': (e: MouseEvent) => true;
    'click:control': (e: MouseEvent) => true;
    'update:modelValue': (val: string) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    loading: BooleanConstructor;
    theme: StringConstructor;
    appendInnerIcon: StringConstructor;
    bgColor: StringConstructor;
    clearable: BooleanConstructor;
    clearIcon: {
        type: StringConstructor;
        default: string;
    };
    active: BooleanConstructor;
    color: StringConstructor;
    dirty: BooleanConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    label: StringConstructor;
    persistentClear: BooleanConstructor;
    prependInnerIcon: StringConstructor;
    reverse: BooleanConstructor;
    singleLine: BooleanConstructor;
    variant: {
        type: PropType<"filled" | "outlined" | "plain" | "contained" | "underlined">;
        default: string;
        validator: (v: any) => boolean;
    };
    errorMessages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    rules: {
        type: PropType<ValidationRule[]>;
        default: () => never[];
    };
    modelValue: null;
    density: {
        type: PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: StringConstructor;
    prependIcon: StringConstructor;
    hideDetails: PropType<boolean | "auto">;
    messages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    autoGrow: BooleanConstructor;
    autofocus: BooleanConstructor;
    counter: PropType<string | number | true>;
    counterValue: PropType<(value: any) => number>;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    prefix: StringConstructor;
    placeholder: StringConstructor;
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    noResize: BooleanConstructor;
    rows: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (v: any) => boolean;
    };
    maxRows: {
        type: (StringConstructor | NumberConstructor)[];
        validator: (v: any) => boolean;
    };
    suffix: StringConstructor;
}>> & {
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    "onClick:clear"?: ((e: MouseEvent) => any) | undefined;
    "onClick:control"?: ((e: MouseEvent) => any) | undefined;
}, {
    reverse: boolean;
    error: boolean;
    active: boolean;
    direction: "horizontal" | "vertical";
    loading: boolean;
    autofocus: boolean;
    disabled: boolean;
    readonly: boolean;
    messages: string | string[];
    density: "default" | "compact" | "comfortable" | null;
    variant: "filled" | "outlined" | "plain" | "contained" | "underlined";
    errorMessages: string | string[];
    maxErrors: string | number;
    rules: ValidationRule[];
    clearable: boolean;
    clearIcon: string;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentHint: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    autoGrow: boolean;
    noResize: boolean;
    rows: string | number;
}>;
declare type VTextarea = InstanceType<typeof VTextarea>;

declare const VTextField: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            reverse: boolean;
            type: string;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            loading: boolean;
            autofocus: boolean;
            disabled: boolean;
            readonly: boolean;
            messages: string | string[];
            density: "default" | "compact" | "comfortable" | null;
            variant: "filled" | "outlined" | "plain" | "contained" | "underlined";
            errorMessages: string | string[];
            maxErrors: string | number;
            rules: ValidationRule[];
            clearable: boolean;
            clearIcon: string;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            persistentHint: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
        }> & Omit<Readonly<vue.ExtractPropTypes<{
            loading: BooleanConstructor;
            theme: StringConstructor;
            appendInnerIcon: StringConstructor;
            bgColor: StringConstructor;
            clearable: BooleanConstructor;
            clearIcon: {
                type: StringConstructor;
                default: string;
            };
            active: BooleanConstructor;
            color: StringConstructor;
            dirty: BooleanConstructor;
            disabled: BooleanConstructor;
            error: BooleanConstructor;
            label: StringConstructor;
            persistentClear: BooleanConstructor;
            prependInnerIcon: StringConstructor;
            reverse: BooleanConstructor;
            singleLine: BooleanConstructor;
            variant: {
                type: PropType<"filled" | "outlined" | "plain" | "contained" | "underlined">;
                default: string;
                validator: (v: any) => boolean;
            };
            errorMessages: {
                type: PropType<string | string[]>;
                default: () => never[];
            };
            maxErrors: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            name: StringConstructor;
            readonly: BooleanConstructor;
            rules: {
                type: PropType<ValidationRule[]>;
                default: () => never[];
            };
            modelValue: null;
            density: {
                type: PropType<"default" | "compact" | "comfortable" | null>;
                default: string;
                validator: (v: any) => boolean;
            };
            id: StringConstructor;
            appendIcon: StringConstructor;
            prependIcon: StringConstructor;
            hideDetails: PropType<boolean | "auto">;
            messages: {
                type: PropType<string | string[]>;
                default: () => never[];
            };
            direction: {
                type: PropType<"horizontal" | "vertical">;
                default: string;
                validator: (v: any) => boolean;
            };
            autofocus: BooleanConstructor;
            counter: PropType<string | number | true>;
            counterValue: PropType<(value: any) => number>;
            hint: StringConstructor;
            persistentHint: BooleanConstructor;
            prefix: StringConstructor;
            placeholder: StringConstructor;
            persistentPlaceholder: BooleanConstructor;
            persistentCounter: BooleanConstructor;
            suffix: StringConstructor;
            type: {
                type: StringConstructor;
                default: string;
            };
        } & SlotsToProps<MakeSlots<{
            default: [VInputSlot];
            prepend: [VInputSlot];
            append: [VInputSlot];
            details: [VInputSlot];
        }> & MakeSlots<{
            clear: [];
            prependInner: [DefaultInputSlot & VInputSlot];
            appendInner: [DefaultInputSlot & VInputSlot];
            label: [DefaultInputSlot & VInputSlot];
            loader: [LoaderSlotProps];
            default: [VFieldSlot];
        }>>>> & {
            "onUpdate:modelValue"?: ((val: string) => any) | undefined;
            "onClick:prepend"?: ((e: MouseEvent) => any) | undefined;
            "onClick:append"?: ((e: MouseEvent) => any) | undefined;
            "onClick:clear"?: ((e: MouseEvent) => any) | undefined;
            "onClick:prepend-inner"?: ((e: MouseEvent) => any) | undefined;
            "onClick:append-inner"?: ((e: MouseEvent) => any) | undefined;
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
            "onClick:input"?: ((e: MouseEvent) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "reverse" | "type" | "error" | "active" | "direction" | "loading" | "autofocus" | "disabled" | "readonly" | "messages" | "density" | "variant" | "errorMessages" | "maxErrors" | "rules" | "clearable" | "clearIcon" | "dirty" | "persistentClear" | "singleLine" | "persistentHint" | "persistentPlaceholder" | "persistentCounter">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: ((event: "update:modelValue", val: string) => void) & ((event: "click:prepend", e: MouseEvent) => void) & ((event: "click:append", e: MouseEvent) => void) & ((event: "click:clear", e: MouseEvent) => void) & ((event: "click:prepend-inner", e: MouseEvent) => void) & ((event: "click:append-inner", e: MouseEvent) => void) & ((event: "click:control", e: MouseEvent) => void) & ((event: "click:input", e: MouseEvent) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
            loading: BooleanConstructor;
            theme: StringConstructor;
            appendInnerIcon: StringConstructor;
            bgColor: StringConstructor;
            clearable: BooleanConstructor;
            clearIcon: {
                type: StringConstructor;
                default: string;
            };
            active: BooleanConstructor;
            color: StringConstructor;
            dirty: BooleanConstructor;
            disabled: BooleanConstructor;
            error: BooleanConstructor;
            label: StringConstructor;
            persistentClear: BooleanConstructor;
            prependInnerIcon: StringConstructor;
            reverse: BooleanConstructor;
            singleLine: BooleanConstructor;
            variant: {
                type: PropType<"filled" | "outlined" | "plain" | "contained" | "underlined">;
                default: string;
                validator: (v: any) => boolean;
            };
            errorMessages: {
                type: PropType<string | string[]>;
                default: () => never[];
            };
            maxErrors: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            name: StringConstructor;
            readonly: BooleanConstructor;
            rules: {
                type: PropType<ValidationRule[]>;
                default: () => never[];
            };
            modelValue: null;
            density: {
                type: PropType<"default" | "compact" | "comfortable" | null>;
                default: string;
                validator: (v: any) => boolean;
            };
            id: StringConstructor;
            appendIcon: StringConstructor;
            prependIcon: StringConstructor;
            hideDetails: PropType<boolean | "auto">;
            messages: {
                type: PropType<string | string[]>;
                default: () => never[];
            };
            direction: {
                type: PropType<"horizontal" | "vertical">;
                default: string;
                validator: (v: any) => boolean;
            };
            autofocus: BooleanConstructor;
            counter: PropType<string | number | true>;
            counterValue: PropType<(value: any) => number>;
            hint: StringConstructor;
            persistentHint: BooleanConstructor;
            prefix: StringConstructor;
            placeholder: StringConstructor;
            persistentPlaceholder: BooleanConstructor;
            persistentCounter: BooleanConstructor;
            suffix: StringConstructor;
            type: {
                type: StringConstructor;
                default: string;
            };
        } & SlotsToProps<MakeSlots<{
            default: [VInputSlot];
            prepend: [VInputSlot];
            append: [VInputSlot];
            details: [VInputSlot];
        }> & MakeSlots<{
            clear: [];
            prependInner: [DefaultInputSlot & VInputSlot];
            appendInner: [DefaultInputSlot & VInputSlot];
            label: [DefaultInputSlot & VInputSlot];
            loader: [LoaderSlotProps];
            default: [VFieldSlot];
        }>>>> & {
            "onUpdate:modelValue"?: ((val: string) => any) | undefined;
            "onClick:prepend"?: ((e: MouseEvent) => any) | undefined;
            "onClick:append"?: ((e: MouseEvent) => any) | undefined;
            "onClick:clear"?: ((e: MouseEvent) => any) | undefined;
            "onClick:prepend-inner"?: ((e: MouseEvent) => any) | undefined;
            "onClick:append-inner"?: ((e: MouseEvent) => any) | undefined;
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
            "onClick:input"?: ((e: MouseEvent) => any) | undefined;
        }, {
            $: vue.ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                error: boolean;
                direction: "horizontal" | "vertical";
                disabled: boolean;
                readonly: boolean;
                messages: string | string[];
                density: "default" | "compact" | "comfortable" | null;
                errorMessages: string | string[];
                maxErrors: string | number;
                rules: ValidationRule[];
            }> & Omit<Readonly<vue.ExtractPropTypes<{
                disabled: BooleanConstructor;
                error: BooleanConstructor;
                errorMessages: {
                    type: PropType<string | string[]>;
                    default: () => never[];
                };
                maxErrors: {
                    type: (StringConstructor | NumberConstructor)[];
                    default: number;
                };
                name: StringConstructor;
                readonly: BooleanConstructor;
                rules: {
                    type: PropType<ValidationRule[]>;
                    default: () => never[];
                };
                modelValue: null;
                density: {
                    type: PropType<"default" | "compact" | "comfortable" | null>;
                    default: string;
                    validator: (v: any) => boolean;
                };
                id: StringConstructor;
                appendIcon: StringConstructor;
                prependIcon: StringConstructor;
                hideDetails: PropType<boolean | "auto">;
                messages: {
                    type: PropType<string | string[]>;
                    default: () => never[];
                };
                direction: {
                    type: PropType<"horizontal" | "vertical">;
                    default: string;
                    validator: (v: any) => boolean;
                };
            } & SlotsToProps<MakeSlots<{
                default: [VInputSlot];
                prepend: [VInputSlot];
                append: [VInputSlot];
                details: [VInputSlot];
            }>>>> & {
                "onUpdate:modelValue"?: ((val: any) => any) | undefined;
                "onClick:prepend"?: ((e: MouseEvent) => any) | undefined;
                "onClick:append"?: ((e: MouseEvent) => any) | undefined;
            } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "error" | "direction" | "disabled" | "readonly" | "messages" | "density" | "errorMessages" | "maxErrors" | "rules">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: vue.Slot | undefined;
            }>;
            $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $emit: ((event: "update:modelValue", val: any) => void) & ((event: "click:prepend", e: MouseEvent) => void) & ((event: "click:append", e: MouseEvent) => void);
            $el: any;
            $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
                disabled: BooleanConstructor;
                error: BooleanConstructor;
                errorMessages: {
                    type: PropType<string | string[]>;
                    default: () => never[];
                };
                maxErrors: {
                    type: (StringConstructor | NumberConstructor)[];
                    default: number;
                };
                name: StringConstructor;
                readonly: BooleanConstructor;
                rules: {
                    type: PropType<ValidationRule[]>;
                    default: () => never[];
                };
                modelValue: null;
                density: {
                    type: PropType<"default" | "compact" | "comfortable" | null>;
                    default: string;
                    validator: (v: any) => boolean;
                };
                id: StringConstructor;
                appendIcon: StringConstructor;
                prependIcon: StringConstructor;
                hideDetails: PropType<boolean | "auto">;
                messages: {
                    type: PropType<string | string[]>;
                    default: () => never[];
                };
                direction: {
                    type: PropType<"horizontal" | "vertical">;
                    default: string;
                    validator: (v: any) => boolean;
                };
            } & SlotsToProps<MakeSlots<{
                default: [VInputSlot];
                prepend: [VInputSlot];
                append: [VInputSlot];
                details: [VInputSlot];
            }>>>> & {
                "onUpdate:modelValue"?: ((val: any) => any) | undefined;
                "onClick:prepend"?: ((e: MouseEvent) => any) | undefined;
                "onClick:append"?: ((e: MouseEvent) => any) | undefined;
            }, {
                reset: () => void;
                resetValidation: () => void;
                validate: () => Promise<string[]>;
            }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
                'click:prepend': (e: MouseEvent) => boolean;
                'click:append': (e: MouseEvent) => boolean;
                'update:modelValue': (val: any) => boolean;
            }, string, {
                error: boolean;
                direction: "horizontal" | "vertical";
                disabled: boolean;
                readonly: boolean;
                messages: string | string[];
                density: "default" | "compact" | "comfortable" | null;
                errorMessages: string | string[];
                maxErrors: string | number;
                rules: ValidationRule[];
            }> & {
                beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                created?: ((() => void) | (() => void)[]) | undefined;
                beforeMount?: ((() => void) | (() => void)[]) | undefined;
                mounted?: ((() => void) | (() => void)[]) | undefined;
                beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                updated?: ((() => void) | (() => void)[]) | undefined;
                activated?: ((() => void) | (() => void)[]) | undefined;
                deactivated?: ((() => void) | (() => void)[]) | undefined;
                beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                destroyed?: ((() => void) | (() => void)[]) | undefined;
                unmounted?: ((() => void) | (() => void)[]) | undefined;
                renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
                renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
                errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof nextTick;
            $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
        } & Readonly<vue.ExtractPropTypes<{
            disabled: BooleanConstructor;
            error: BooleanConstructor;
            errorMessages: {
                type: PropType<string | string[]>;
                default: () => never[];
            };
            maxErrors: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            name: StringConstructor;
            readonly: BooleanConstructor;
            rules: {
                type: PropType<ValidationRule[]>;
                default: () => never[];
            };
            modelValue: null;
            density: {
                type: PropType<"default" | "compact" | "comfortable" | null>;
                default: string;
                validator: (v: any) => boolean;
            };
            id: StringConstructor;
            appendIcon: StringConstructor;
            prependIcon: StringConstructor;
            hideDetails: PropType<boolean | "auto">;
            messages: {
                type: PropType<string | string[]>;
                default: () => never[];
            };
            direction: {
                type: PropType<"horizontal" | "vertical">;
                default: string;
                validator: (v: any) => boolean;
            };
        } & SlotsToProps<MakeSlots<{
            default: [VInputSlot];
            prepend: [VInputSlot];
            append: [VInputSlot];
            details: [VInputSlot];
        }>>>> & {
            "onUpdate:modelValue"?: ((val: any) => any) | undefined;
            "onClick:prepend"?: ((e: MouseEvent) => any) | undefined;
            "onClick:append"?: ((e: MouseEvent) => any) | undefined;
        } & vue.ShallowUnwrapRef<{
            reset: () => void;
            resetValidation: () => void;
            validate: () => Promise<string[]>;
        }> & {} & {} & vue.ComponentCustomProperties & {
            $slots: MakeSlots<{
                default: [VInputSlot];
                prepend: [VInputSlot];
                append: [VInputSlot];
                details: [VInputSlot];
            }>;
        } & HTMLInputElement, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'click:append': (e: MouseEvent) => boolean;
            'click:append-inner': (e: MouseEvent) => boolean;
            'click:clear': (e: MouseEvent) => boolean;
            'click:control': (e: MouseEvent) => boolean;
            'click:input': (e: MouseEvent) => boolean;
            'click:prepend': (e: MouseEvent) => boolean;
            'click:prepend-inner': (e: MouseEvent) => boolean;
            'update:modelValue': (val: string) => boolean;
        }, string, {
            reverse: boolean;
            type: string;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            loading: boolean;
            autofocus: boolean;
            disabled: boolean;
            readonly: boolean;
            messages: string | string[];
            density: "default" | "compact" | "comfortable" | null;
            variant: "filled" | "outlined" | "plain" | "contained" | "underlined";
            errorMessages: string | string[];
            maxErrors: string | number;
            rules: ValidationRule[];
            clearable: boolean;
            clearIcon: string;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            persistentHint: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<{
        loading: BooleanConstructor;
        theme: StringConstructor;
        appendInnerIcon: StringConstructor;
        bgColor: StringConstructor;
        clearable: BooleanConstructor;
        clearIcon: {
            type: StringConstructor;
            default: string;
        };
        active: BooleanConstructor;
        color: StringConstructor;
        dirty: BooleanConstructor;
        disabled: BooleanConstructor;
        error: BooleanConstructor;
        label: StringConstructor;
        persistentClear: BooleanConstructor;
        prependInnerIcon: StringConstructor;
        reverse: BooleanConstructor;
        singleLine: BooleanConstructor;
        variant: {
            type: PropType<"filled" | "outlined" | "plain" | "contained" | "underlined">;
            default: string;
            validator: (v: any) => boolean;
        };
        errorMessages: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        maxErrors: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        name: StringConstructor;
        readonly: BooleanConstructor;
        rules: {
            type: PropType<ValidationRule[]>;
            default: () => never[];
        };
        modelValue: null;
        density: {
            type: PropType<"default" | "compact" | "comfortable" | null>;
            default: string;
            validator: (v: any) => boolean;
        };
        id: StringConstructor;
        appendIcon: StringConstructor;
        prependIcon: StringConstructor;
        hideDetails: PropType<boolean | "auto">;
        messages: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        direction: {
            type: PropType<"horizontal" | "vertical">;
            default: string;
            validator: (v: any) => boolean;
        };
        autofocus: BooleanConstructor;
        counter: PropType<string | number | true>;
        counterValue: PropType<(value: any) => number>;
        hint: StringConstructor;
        persistentHint: BooleanConstructor;
        prefix: StringConstructor;
        placeholder: StringConstructor;
        persistentPlaceholder: BooleanConstructor;
        persistentCounter: BooleanConstructor;
        suffix: StringConstructor;
        type: {
            type: StringConstructor;
            default: string;
        };
    } & SlotsToProps<MakeSlots<{
        default: [VInputSlot];
        prepend: [VInputSlot];
        append: [VInputSlot];
        details: [VInputSlot];
    }> & MakeSlots<{
        clear: [];
        prependInner: [DefaultInputSlot & VInputSlot];
        appendInner: [DefaultInputSlot & VInputSlot];
        label: [DefaultInputSlot & VInputSlot];
        loader: [LoaderSlotProps];
        default: [VFieldSlot];
    }>>>> & {
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        "onClick:prepend"?: ((e: MouseEvent) => any) | undefined;
        "onClick:append"?: ((e: MouseEvent) => any) | undefined;
        "onClick:clear"?: ((e: MouseEvent) => any) | undefined;
        "onClick:prepend-inner"?: ((e: MouseEvent) => any) | undefined;
        "onClick:append-inner"?: ((e: MouseEvent) => any) | undefined;
        "onClick:control"?: ((e: MouseEvent) => any) | undefined;
        "onClick:input"?: ((e: MouseEvent) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            error: boolean;
            direction: "horizontal" | "vertical";
            disabled: boolean;
            readonly: boolean;
            messages: string | string[];
            density: "default" | "compact" | "comfortable" | null;
            errorMessages: string | string[];
            maxErrors: string | number;
            rules: ValidationRule[];
        }> & Omit<Readonly<vue.ExtractPropTypes<{
            disabled: BooleanConstructor;
            error: BooleanConstructor;
            errorMessages: {
                type: PropType<string | string[]>;
                default: () => never[];
            };
            maxErrors: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            name: StringConstructor;
            readonly: BooleanConstructor;
            rules: {
                type: PropType<ValidationRule[]>;
                default: () => never[];
            };
            modelValue: null;
            density: {
                type: PropType<"default" | "compact" | "comfortable" | null>;
                default: string;
                validator: (v: any) => boolean;
            };
            id: StringConstructor;
            appendIcon: StringConstructor;
            prependIcon: StringConstructor;
            hideDetails: PropType<boolean | "auto">;
            messages: {
                type: PropType<string | string[]>;
                default: () => never[];
            };
            direction: {
                type: PropType<"horizontal" | "vertical">;
                default: string;
                validator: (v: any) => boolean;
            };
        } & SlotsToProps<MakeSlots<{
            default: [VInputSlot];
            prepend: [VInputSlot];
            append: [VInputSlot];
            details: [VInputSlot];
        }>>>> & {
            "onUpdate:modelValue"?: ((val: any) => any) | undefined;
            "onClick:prepend"?: ((e: MouseEvent) => any) | undefined;
            "onClick:append"?: ((e: MouseEvent) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "error" | "direction" | "disabled" | "readonly" | "messages" | "density" | "errorMessages" | "maxErrors" | "rules">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: ((event: "update:modelValue", val: any) => void) & ((event: "click:prepend", e: MouseEvent) => void) & ((event: "click:append", e: MouseEvent) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
            disabled: BooleanConstructor;
            error: BooleanConstructor;
            errorMessages: {
                type: PropType<string | string[]>;
                default: () => never[];
            };
            maxErrors: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            name: StringConstructor;
            readonly: BooleanConstructor;
            rules: {
                type: PropType<ValidationRule[]>;
                default: () => never[];
            };
            modelValue: null;
            density: {
                type: PropType<"default" | "compact" | "comfortable" | null>;
                default: string;
                validator: (v: any) => boolean;
            };
            id: StringConstructor;
            appendIcon: StringConstructor;
            prependIcon: StringConstructor;
            hideDetails: PropType<boolean | "auto">;
            messages: {
                type: PropType<string | string[]>;
                default: () => never[];
            };
            direction: {
                type: PropType<"horizontal" | "vertical">;
                default: string;
                validator: (v: any) => boolean;
            };
        } & SlotsToProps<MakeSlots<{
            default: [VInputSlot];
            prepend: [VInputSlot];
            append: [VInputSlot];
            details: [VInputSlot];
        }>>>> & {
            "onUpdate:modelValue"?: ((val: any) => any) | undefined;
            "onClick:prepend"?: ((e: MouseEvent) => any) | undefined;
            "onClick:append"?: ((e: MouseEvent) => any) | undefined;
        }, {
            reset: () => void;
            resetValidation: () => void;
            validate: () => Promise<string[]>;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'click:prepend': (e: MouseEvent) => boolean;
            'click:append': (e: MouseEvent) => boolean;
            'update:modelValue': (val: any) => boolean;
        }, string, {
            error: boolean;
            direction: "horizontal" | "vertical";
            disabled: boolean;
            readonly: boolean;
            messages: string | string[];
            density: "default" | "compact" | "comfortable" | null;
            errorMessages: string | string[];
            maxErrors: string | number;
            rules: ValidationRule[];
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<{
        disabled: BooleanConstructor;
        error: BooleanConstructor;
        errorMessages: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        maxErrors: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        name: StringConstructor;
        readonly: BooleanConstructor;
        rules: {
            type: PropType<ValidationRule[]>;
            default: () => never[];
        };
        modelValue: null;
        density: {
            type: PropType<"default" | "compact" | "comfortable" | null>;
            default: string;
            validator: (v: any) => boolean;
        };
        id: StringConstructor;
        appendIcon: StringConstructor;
        prependIcon: StringConstructor;
        hideDetails: PropType<boolean | "auto">;
        messages: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        direction: {
            type: PropType<"horizontal" | "vertical">;
            default: string;
            validator: (v: any) => boolean;
        };
    } & SlotsToProps<MakeSlots<{
        default: [VInputSlot];
        prepend: [VInputSlot];
        append: [VInputSlot];
        details: [VInputSlot];
    }>>>> & {
        "onUpdate:modelValue"?: ((val: any) => any) | undefined;
        "onClick:prepend"?: ((e: MouseEvent) => any) | undefined;
        "onClick:append"?: ((e: MouseEvent) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        reset: () => void;
        resetValidation: () => void;
        validate: () => Promise<string[]>;
    }> & {} & {} & vue.ComponentCustomProperties & {
        $slots: MakeSlots<{
            default: [VInputSlot];
            prepend: [VInputSlot];
            append: [VInputSlot];
            details: [VInputSlot];
        }>;
    } & HTMLInputElement> & {} & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
    loading: BooleanConstructor;
    theme: StringConstructor;
    appendInnerIcon: StringConstructor;
    bgColor: StringConstructor;
    clearable: BooleanConstructor;
    clearIcon: {
        type: StringConstructor;
        default: string;
    };
    active: BooleanConstructor;
    color: StringConstructor;
    dirty: BooleanConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    label: StringConstructor;
    persistentClear: BooleanConstructor;
    prependInnerIcon: StringConstructor;
    reverse: BooleanConstructor;
    singleLine: BooleanConstructor;
    variant: {
        type: PropType<"filled" | "outlined" | "plain" | "contained" | "underlined">;
        default: string;
        validator: (v: any) => boolean;
    };
    errorMessages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    rules: {
        type: PropType<ValidationRule[]>;
        default: () => never[];
    };
    modelValue: null;
    density: {
        type: PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: StringConstructor;
    prependIcon: StringConstructor;
    hideDetails: PropType<boolean | "auto">;
    messages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    autofocus: BooleanConstructor;
    counter: PropType<string | number | true>;
    counterValue: PropType<(value: any) => number>;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    prefix: StringConstructor;
    placeholder: StringConstructor;
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    suffix: StringConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
} & SlotsToProps<MakeSlots<{
    default: [VInputSlot];
    prepend: [VInputSlot];
    append: [VInputSlot];
    details: [VInputSlot];
}> & MakeSlots<{
    clear: [];
    prependInner: [DefaultInputSlot & VInputSlot];
    appendInner: [DefaultInputSlot & VInputSlot];
    label: [DefaultInputSlot & VInputSlot];
    loader: [LoaderSlotProps];
    default: [VFieldSlot];
}>>>> & {
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    "onClick:prepend"?: ((e: MouseEvent) => any) | undefined;
    "onClick:append"?: ((e: MouseEvent) => any) | undefined;
    "onClick:clear"?: ((e: MouseEvent) => any) | undefined;
    "onClick:prepend-inner"?: ((e: MouseEvent) => any) | undefined;
    "onClick:append-inner"?: ((e: MouseEvent) => any) | undefined;
    "onClick:control"?: ((e: MouseEvent) => any) | undefined;
    "onClick:input"?: ((e: MouseEvent) => any) | undefined;
}, {
    $: vue.ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        error: boolean;
        direction: "horizontal" | "vertical";
        disabled: boolean;
        readonly: boolean;
        messages: string | string[];
        density: "default" | "compact" | "comfortable" | null;
        errorMessages: string | string[];
        maxErrors: string | number;
        rules: ValidationRule[];
    }> & Omit<Readonly<vue.ExtractPropTypes<{
        disabled: BooleanConstructor;
        error: BooleanConstructor;
        errorMessages: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        maxErrors: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        name: StringConstructor;
        readonly: BooleanConstructor;
        rules: {
            type: PropType<ValidationRule[]>;
            default: () => never[];
        };
        modelValue: null;
        density: {
            type: PropType<"default" | "compact" | "comfortable" | null>;
            default: string;
            validator: (v: any) => boolean;
        };
        id: StringConstructor;
        appendIcon: StringConstructor;
        prependIcon: StringConstructor;
        hideDetails: PropType<boolean | "auto">;
        messages: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        direction: {
            type: PropType<"horizontal" | "vertical">;
            default: string;
            validator: (v: any) => boolean;
        };
    } & SlotsToProps<MakeSlots<{
        default: [VInputSlot];
        prepend: [VInputSlot];
        append: [VInputSlot];
        details: [VInputSlot];
    }>>>> & {
        "onUpdate:modelValue"?: ((val: any) => any) | undefined;
        "onClick:prepend"?: ((e: MouseEvent) => any) | undefined;
        "onClick:append"?: ((e: MouseEvent) => any) | undefined;
    } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "error" | "direction" | "disabled" | "readonly" | "messages" | "density" | "errorMessages" | "maxErrors" | "rules">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        [name: string]: vue.Slot | undefined;
    }>;
    $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
    $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
    $emit: ((event: "update:modelValue", val: any) => void) & ((event: "click:prepend", e: MouseEvent) => void) & ((event: "click:append", e: MouseEvent) => void);
    $el: any;
    $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
        disabled: BooleanConstructor;
        error: BooleanConstructor;
        errorMessages: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        maxErrors: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        name: StringConstructor;
        readonly: BooleanConstructor;
        rules: {
            type: PropType<ValidationRule[]>;
            default: () => never[];
        };
        modelValue: null;
        density: {
            type: PropType<"default" | "compact" | "comfortable" | null>;
            default: string;
            validator: (v: any) => boolean;
        };
        id: StringConstructor;
        appendIcon: StringConstructor;
        prependIcon: StringConstructor;
        hideDetails: PropType<boolean | "auto">;
        messages: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        direction: {
            type: PropType<"horizontal" | "vertical">;
            default: string;
            validator: (v: any) => boolean;
        };
    } & SlotsToProps<MakeSlots<{
        default: [VInputSlot];
        prepend: [VInputSlot];
        append: [VInputSlot];
        details: [VInputSlot];
    }>>>> & {
        "onUpdate:modelValue"?: ((val: any) => any) | undefined;
        "onClick:prepend"?: ((e: MouseEvent) => any) | undefined;
        "onClick:append"?: ((e: MouseEvent) => any) | undefined;
    }, {
        reset: () => void;
        resetValidation: () => void;
        validate: () => Promise<string[]>;
    }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'click:prepend': (e: MouseEvent) => boolean;
        'click:append': (e: MouseEvent) => boolean;
        'update:modelValue': (val: any) => boolean;
    }, string, {
        error: boolean;
        direction: "horizontal" | "vertical";
        disabled: boolean;
        readonly: boolean;
        messages: string | string[];
        density: "default" | "compact" | "comfortable" | null;
        errorMessages: string | string[];
        maxErrors: string | number;
        rules: ValidationRule[];
    }> & {
        beforeCreate?: ((() => void) | (() => void)[]) | undefined;
        created?: ((() => void) | (() => void)[]) | undefined;
        beforeMount?: ((() => void) | (() => void)[]) | undefined;
        mounted?: ((() => void) | (() => void)[]) | undefined;
        beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
        updated?: ((() => void) | (() => void)[]) | undefined;
        activated?: ((() => void) | (() => void)[]) | undefined;
        deactivated?: ((() => void) | (() => void)[]) | undefined;
        beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
        beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
        destroyed?: ((() => void) | (() => void)[]) | undefined;
        unmounted?: ((() => void) | (() => void)[]) | undefined;
        renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
        renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
        errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
    };
    $forceUpdate: () => void;
    $nextTick: typeof nextTick;
    $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
} & Readonly<vue.ExtractPropTypes<{
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    errorMessages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    rules: {
        type: PropType<ValidationRule[]>;
        default: () => never[];
    };
    modelValue: null;
    density: {
        type: PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: StringConstructor;
    prependIcon: StringConstructor;
    hideDetails: PropType<boolean | "auto">;
    messages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
} & SlotsToProps<MakeSlots<{
    default: [VInputSlot];
    prepend: [VInputSlot];
    append: [VInputSlot];
    details: [VInputSlot];
}>>>> & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
    "onClick:prepend"?: ((e: MouseEvent) => any) | undefined;
    "onClick:append"?: ((e: MouseEvent) => any) | undefined;
} & vue.ShallowUnwrapRef<{
    reset: () => void;
    resetValidation: () => void;
    validate: () => Promise<string[]>;
}> & {} & {} & vue.ComponentCustomProperties & {
    $slots: MakeSlots<{
        default: [VInputSlot];
        prepend: [VInputSlot];
        append: [VInputSlot];
        details: [VInputSlot];
    }>;
} & HTMLInputElement, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'click:append': (e: MouseEvent) => boolean;
    'click:append-inner': (e: MouseEvent) => boolean;
    'click:clear': (e: MouseEvent) => boolean;
    'click:control': (e: MouseEvent) => boolean;
    'click:input': (e: MouseEvent) => boolean;
    'click:prepend': (e: MouseEvent) => boolean;
    'click:prepend-inner': (e: MouseEvent) => boolean;
    'update:modelValue': (val: string) => boolean;
}, string, {
    reverse: boolean;
    type: string;
    error: boolean;
    active: boolean;
    direction: "horizontal" | "vertical";
    loading: boolean;
    autofocus: boolean;
    disabled: boolean;
    readonly: boolean;
    messages: string | string[];
    density: "default" | "compact" | "comfortable" | null;
    variant: "filled" | "outlined" | "plain" | "contained" | "underlined";
    errorMessages: string | string[];
    maxErrors: string | number;
    rules: ValidationRule[];
    clearable: boolean;
    clearIcon: string;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentHint: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T>() => {
    $slots: VInputSlots & VFieldSlots;
});
declare type VTextField = InstanceType<typeof VTextField>;

declare const VThemeProvider: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    theme: StringConstructor;
    withBackground: BooleanConstructor;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[] | JSX.Element | undefined, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    theme: StringConstructor;
    withBackground: BooleanConstructor;
}>>, {
    tag: string;
    withBackground: boolean;
}>;

declare type TimelineDirection = 'vertical' | 'horizontal';
declare type TimelineSide = 'before' | 'after' | undefined;
declare const VTimeline: vue.DefineComponent<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    direction: Prop<TimelineDirection, TimelineDirection>;
    side: Prop<TimelineSide, TimelineSide>;
    lineInset: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    lineThickness: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    lineColor: StringConstructor;
    truncateLine: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    density: {
        type: vue.PropType<"default" | "compact" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    direction: Prop<TimelineDirection, TimelineDirection>;
    side: Prop<TimelineSide, TimelineSide>;
    lineInset: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    lineThickness: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    lineColor: StringConstructor;
    truncateLine: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
}>>, {
    tag: string;
    density: "default" | "compact" | "comfortable" | null;
    lineInset: string | number;
    lineThickness: string | number;
    truncateLine: string;
}>;

declare const VTimelineItem: vue.DefineComponent<{
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    tag: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    dotColor: StringConstructor;
    fillDot: BooleanConstructor;
    hideDot: BooleanConstructor;
    hideOpposite: {
        type: BooleanConstructor;
        default: undefined;
    };
    icon: StringConstructor;
    iconColor: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    tag: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    dotColor: StringConstructor;
    fillDot: BooleanConstructor;
    hideDot: BooleanConstructor;
    hideOpposite: {
        type: BooleanConstructor;
        default: undefined;
    };
    icon: StringConstructor;
    iconColor: StringConstructor;
}>>, {
    size: string | number;
    tag: string;
    rounded: string | number | boolean;
    hideDot: boolean;
    fillDot: boolean;
    hideOpposite: boolean;
}>;

declare const VToolbar: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            flat: boolean;
            absolute: boolean;
            height: string | number;
            tag: string;
            collapse: boolean;
            rounded: string | number | boolean;
            density: "default" | "compact" | "prominent" | "comfortable" | null;
            extended: boolean;
            extensionHeight: string | number;
            floating: boolean;
        }> & Omit<Readonly<ExtractPropTypes<{
            theme: StringConstructor;
            tag: Omit<{
                type: StringConstructor;
                default: string;
            }, "type" | "default"> & {
                type: PropType<string>;
                default: string;
            };
            rounded: {
                type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                default: undefined;
            };
            elevation: {
                type: (StringConstructor | NumberConstructor)[];
                validator(v: any): boolean;
            };
            border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            absolute: BooleanConstructor;
            collapse: BooleanConstructor;
            color: StringConstructor;
            density: {
                type: PropType<"default" | "compact" | "prominent" | "comfortable" | null>;
                default: string;
                validator: (v: any) => boolean;
            };
            extended: BooleanConstructor;
            extensionHeight: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            flat: BooleanConstructor;
            floating: BooleanConstructor;
            height: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            image: StringConstructor;
            title: StringConstructor;
        } & SlotsToProps<MakeSlots<{
            default: [];
            image: [{
                image: string;
            }];
            prepend: [];
            append: [];
            title: [];
            extension: [];
        }>>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "flat" | "absolute" | "height" | "tag" | "collapse" | "rounded" | "density" | "extended" | "extensionHeight" | "floating">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<ExtractPropTypes<{
            theme: StringConstructor;
            tag: Omit<{
                type: StringConstructor;
                default: string;
            }, "type" | "default"> & {
                type: PropType<string>;
                default: string;
            };
            rounded: {
                type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                default: undefined;
            };
            elevation: {
                type: (StringConstructor | NumberConstructor)[];
                validator(v: any): boolean;
            };
            border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            absolute: BooleanConstructor;
            collapse: BooleanConstructor;
            color: StringConstructor;
            density: {
                type: PropType<"default" | "compact" | "prominent" | "comfortable" | null>;
                default: string;
                validator: (v: any) => boolean;
            };
            extended: BooleanConstructor;
            extensionHeight: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            flat: BooleanConstructor;
            floating: BooleanConstructor;
            height: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            image: StringConstructor;
            title: StringConstructor;
        } & SlotsToProps<MakeSlots<{
            default: [];
            image: [{
                image: string;
            }];
            prepend: [];
            append: [];
            title: [];
            extension: [];
        }>>>>, {
            contentHeight: vue.ComputedRef<number>;
            extensionHeight: vue.ComputedRef<number>;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            flat: boolean;
            absolute: boolean;
            height: string | number;
            tag: string;
            collapse: boolean;
            rounded: string | number | boolean;
            density: "default" | "compact" | "prominent" | "comfortable" | null;
            extended: boolean;
            extensionHeight: string | number;
            floating: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<ExtractPropTypes<{
        theme: StringConstructor;
        tag: Omit<{
            type: StringConstructor;
            default: string;
        }, "type" | "default"> & {
            type: PropType<string>;
            default: string;
        };
        rounded: {
            type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            default: undefined;
        };
        elevation: {
            type: (StringConstructor | NumberConstructor)[];
            validator(v: any): boolean;
        };
        border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        absolute: BooleanConstructor;
        collapse: BooleanConstructor;
        color: StringConstructor;
        density: {
            type: PropType<"default" | "compact" | "prominent" | "comfortable" | null>;
            default: string;
            validator: (v: any) => boolean;
        };
        extended: BooleanConstructor;
        extensionHeight: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        flat: BooleanConstructor;
        floating: BooleanConstructor;
        height: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        image: StringConstructor;
        title: StringConstructor;
    } & SlotsToProps<MakeSlots<{
        default: [];
        image: [{
            image: string;
        }];
        prepend: [];
        append: [];
        title: [];
        extension: [];
    }>>>> & vue.ShallowUnwrapRef<{
        contentHeight: vue.ComputedRef<number>;
        extensionHeight: vue.ComputedRef<number>;
    }> & {} & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<ExtractPropTypes<{
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string>;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    absolute: BooleanConstructor;
    collapse: BooleanConstructor;
    color: StringConstructor;
    density: {
        type: PropType<"default" | "compact" | "prominent" | "comfortable" | null>;
        default: string;
        validator: (v: any) => boolean;
    };
    extended: BooleanConstructor;
    extensionHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    flat: BooleanConstructor;
    floating: BooleanConstructor;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    image: StringConstructor;
    title: StringConstructor;
} & SlotsToProps<MakeSlots<{
    default: [];
    image: [{
        image: string;
    }];
    prepend: [];
    append: [];
    title: [];
    extension: [];
}>>>>, {
    contentHeight: vue.ComputedRef<number>;
    extensionHeight: vue.ComputedRef<number>;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    flat: boolean;
    absolute: boolean;
    height: string | number;
    tag: string;
    collapse: boolean;
    rounded: string | number | boolean;
    density: "default" | "compact" | "prominent" | "comfortable" | null;
    extended: boolean;
    extensionHeight: string | number;
    floating: boolean;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $slots: MakeSlots<{
        default: [];
        image: [{
            image: string;
        }];
        prepend: [];
        append: [];
        title: [];
        extension: [];
    }>;
});
declare type VToolbar = InstanceType<typeof VToolbar>;

declare const VToolbarTitle: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            tag: string;
        }> & Omit<Readonly<vue.ExtractPropTypes<{
            tag: {
                type: StringConstructor;
                default: string;
            };
            text: StringConstructor;
        } & SlotsToProps<MakeSlots<{
            default: [];
            text: [];
        }>>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "tag">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
            tag: {
                type: StringConstructor;
                default: string;
            };
            text: StringConstructor;
        } & SlotsToProps<MakeSlots<{
            default: [];
            text: [];
        }>>>>, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            tag: string;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<{
        tag: {
            type: StringConstructor;
            default: string;
        };
        text: StringConstructor;
    } & SlotsToProps<MakeSlots<{
        default: [];
        text: [];
    }>>>> & vue.ShallowUnwrapRef<{}> & {} & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    text: StringConstructor;
} & SlotsToProps<MakeSlots<{
    default: [];
    text: [];
}>>>>, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    tag: string;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $slots: MakeSlots<{
        default: [];
        text: [];
    }>;
});
declare type VToolbarTitle = InstanceType<typeof VToolbarTitle>;

declare const VToolbarItems: vue.DefineComponent<{
    color: StringConstructor;
    variant: Omit<{
        type: vue.PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    color: StringConstructor;
    variant: Omit<{
        type: vue.PropType<"text" | "outlined" | "plain" | "contained" | "contained-flat" | "contained-text">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
}>>, {
    variant: string;
}>;
declare type VToolbarItems = InstanceType<typeof VToolbarItems>;

declare const VTooltip: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            anchor: Anchor;
            origin: "auto" | Anchor | "overlap";
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            });
            modelValue: boolean;
        }> & Omit<Readonly<vue.ExtractPropTypes<{
            transition: Omit<{
                type: PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string;
                validator: (val: unknown) => boolean;
            }, "type" | "default"> & {
                type: PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                });
            };
            id: StringConstructor;
            modelValue: BooleanConstructor;
            text: StringConstructor;
            anchor: {
                type: PropType<Anchor>;
                default: string;
            };
            origin: {
                type: PropType<"auto" | Anchor | "overlap">;
                default: string;
            };
        } & SlotsToProps<MakeSlots<{
            default: [{
                isActive: vue.Ref<boolean>;
            }];
            activator: [{
                isActive: boolean;
                props: Record<string, any>;
            }];
        }>>>> & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "anchor" | "origin" | "transition" | "modelValue">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "update:modelValue", value: boolean) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
            transition: Omit<{
                type: PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string;
                validator: (val: unknown) => boolean;
            }, "type" | "default"> & {
                type: PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                });
            };
            id: StringConstructor;
            modelValue: BooleanConstructor;
            text: StringConstructor;
            anchor: {
                type: PropType<Anchor>;
                default: string;
            };
            origin: {
                type: PropType<"auto" | Anchor | "overlap">;
                default: string;
            };
        } & SlotsToProps<MakeSlots<{
            default: [{
                isActive: vue.Ref<boolean>;
            }];
            activator: [{
                isActive: boolean;
                props: Record<string, any>;
            }];
        }>>>> & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (value: boolean) => boolean;
        }, string, {
            anchor: Anchor;
            origin: "auto" | Anchor | "overlap";
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            });
            modelValue: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<{
        transition: Omit<{
            type: PropType<string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            })>;
            default: string;
            validator: (val: unknown) => boolean;
        }, "type" | "default"> & {
            type: PropType<string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            })>;
            default: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            });
        };
        id: StringConstructor;
        modelValue: BooleanConstructor;
        text: StringConstructor;
        anchor: {
            type: PropType<Anchor>;
            default: string;
        };
        origin: {
            type: PropType<"auto" | Anchor | "overlap">;
            default: string;
        };
    } & SlotsToProps<MakeSlots<{
        default: [{
            isActive: vue.Ref<boolean>;
        }];
        activator: [{
            isActive: boolean;
            props: Record<string, any>;
        }];
    }>>>> & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    } & vue.ShallowUnwrapRef<() => JSX.Element> & {} & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
    transition: Omit<{
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        });
    };
    id: StringConstructor;
    modelValue: BooleanConstructor;
    text: StringConstructor;
    anchor: {
        type: PropType<Anchor>;
        default: string;
    };
    origin: {
        type: PropType<"auto" | Anchor | "overlap">;
        default: string;
    };
} & SlotsToProps<MakeSlots<{
    default: [{
        isActive: vue.Ref<boolean>;
    }];
    activator: [{
        isActive: boolean;
        props: Record<string, any>;
    }];
}>>>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: boolean) => boolean;
}, string, {
    anchor: Anchor;
    origin: "auto" | Anchor | "overlap";
    transition: string | boolean | (vue.TransitionProps & {
        component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
    });
    modelValue: boolean;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $slots: OverlaySlots;
});
declare type VTooltip = InstanceType<typeof VTooltip>;

declare const VValidation: vue.DefineComponent<{
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    errorMessages: {
        type: vue.PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    rules: {
        type: vue.PropType<ValidationRule[]>;
        default: () => never[];
    };
    modelValue: null;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (val: any) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    errorMessages: {
        type: vue.PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    rules: {
        type: vue.PropType<ValidationRule[]>;
        default: () => never[];
    };
    modelValue: null;
}>> & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
}, {
    error: boolean;
    disabled: boolean;
    readonly: boolean;
    errorMessages: string | string[];
    maxErrors: string | number;
    rules: ValidationRule[];
}>;

interface TouchHandlers {
    start?: (wrapperEvent: {
        originalEvent: TouchEvent;
    } & TouchWrapper) => void;
    end?: (wrapperEvent: {
        originalEvent: TouchEvent;
    } & TouchWrapper) => void;
    move?: (wrapperEvent: {
        originalEvent: TouchEvent;
    } & TouchWrapper) => void;
    left?: (wrapper: TouchWrapper) => void;
    right?: (wrapper: TouchWrapper) => void;
    up?: (wrapper: TouchWrapper) => void;
    down?: (wrapper: TouchWrapper) => void;
}
interface TouchWrapper extends TouchHandlers {
    touchstartX: number;
    touchstartY: number;
    touchmoveX: number;
    touchmoveY: number;
    touchendX: number;
    touchendY: number;
    offsetX: number;
    offsetY: number;
}
declare const Touch: ObjectDirective;

declare type ControlProps = {
    icon: string;
    class: string;
    onClick: () => void;
    ariaLabel: string;
};
declare const VWindow: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            reverse: boolean;
            direction: string;
            disabled: boolean;
            tag: string;
            mandatory: "force";
            touch: boolean | TouchHandlers;
            selectedClass: string;
            continuous: boolean;
            nextIcon: string | boolean;
            prevIcon: string | boolean;
        }> & Omit<Readonly<vue.ExtractPropTypes<{
            theme: StringConstructor;
            tag: {
                type: StringConstructor;
                default: string;
            };
            continuous: BooleanConstructor;
            nextIcon: {
                type: (StringConstructor | BooleanConstructor)[];
                default: string;
            };
            prevIcon: {
                type: (StringConstructor | BooleanConstructor)[];
                default: string;
            };
            reverse: BooleanConstructor;
            showArrows: {
                type: (StringConstructor | BooleanConstructor)[];
                validator: (v: any) => boolean;
            };
            touch: {
                type: PropType<boolean | TouchHandlers>;
                default: undefined;
            };
            direction: {
                type: StringConstructor;
                default: string;
            };
            modelValue: null;
            disabled: BooleanConstructor;
            selectedClass: {
                type: StringConstructor;
                default: string;
            };
            mandatory: {
                default: "force";
            };
        } & SlotsToProps<MakeSlots<{
            default: [{
                group: GroupProvide;
            }];
            additional: [{
                group: GroupProvide;
            }];
            prev: [{
                props: ControlProps;
            }];
            next: [{
                props: ControlProps;
            }];
        }>>>> & {
            "onUpdate:modelValue"?: ((v: any) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "reverse" | "direction" | "disabled" | "tag" | "mandatory" | "touch" | "selectedClass" | "continuous" | "nextIcon" | "prevIcon">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "update:modelValue", v: any) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
            theme: StringConstructor;
            tag: {
                type: StringConstructor;
                default: string;
            };
            continuous: BooleanConstructor;
            nextIcon: {
                type: (StringConstructor | BooleanConstructor)[];
                default: string;
            };
            prevIcon: {
                type: (StringConstructor | BooleanConstructor)[];
                default: string;
            };
            reverse: BooleanConstructor;
            showArrows: {
                type: (StringConstructor | BooleanConstructor)[];
                validator: (v: any) => boolean;
            };
            touch: {
                type: PropType<boolean | TouchHandlers>;
                default: undefined;
            };
            direction: {
                type: StringConstructor;
                default: string;
            };
            modelValue: null;
            disabled: BooleanConstructor;
            selectedClass: {
                type: StringConstructor;
                default: string;
            };
            mandatory: {
                default: "force";
            };
        } & SlotsToProps<MakeSlots<{
            default: [{
                group: GroupProvide;
            }];
            additional: [{
                group: GroupProvide;
            }];
            prev: [{
                props: ControlProps;
            }];
            next: [{
                props: ControlProps;
            }];
        }>>>> & {
            "onUpdate:modelValue"?: ((v: any) => any) | undefined;
        }, {
            group: GroupProvide;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (v: any) => boolean;
        }, string, {
            reverse: boolean;
            direction: string;
            disabled: boolean;
            tag: string;
            mandatory: "force";
            touch: boolean | TouchHandlers;
            selectedClass: string;
            continuous: boolean;
            nextIcon: string | boolean;
            prevIcon: string | boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<{
        theme: StringConstructor;
        tag: {
            type: StringConstructor;
            default: string;
        };
        continuous: BooleanConstructor;
        nextIcon: {
            type: (StringConstructor | BooleanConstructor)[];
            default: string;
        };
        prevIcon: {
            type: (StringConstructor | BooleanConstructor)[];
            default: string;
        };
        reverse: BooleanConstructor;
        showArrows: {
            type: (StringConstructor | BooleanConstructor)[];
            validator: (v: any) => boolean;
        };
        touch: {
            type: PropType<boolean | TouchHandlers>;
            default: undefined;
        };
        direction: {
            type: StringConstructor;
            default: string;
        };
        modelValue: null;
        disabled: BooleanConstructor;
        selectedClass: {
            type: StringConstructor;
            default: string;
        };
        mandatory: {
            default: "force";
        };
    } & SlotsToProps<MakeSlots<{
        default: [{
            group: GroupProvide;
        }];
        additional: [{
            group: GroupProvide;
        }];
        prev: [{
            props: ControlProps;
        }];
        next: [{
            props: ControlProps;
        }];
    }>>>> & {
        "onUpdate:modelValue"?: ((v: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        group: GroupProvide;
    }> & {} & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    continuous: BooleanConstructor;
    nextIcon: {
        type: (StringConstructor | BooleanConstructor)[];
        default: string;
    };
    prevIcon: {
        type: (StringConstructor | BooleanConstructor)[];
        default: string;
    };
    reverse: BooleanConstructor;
    showArrows: {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    };
    touch: {
        type: PropType<boolean | TouchHandlers>;
        default: undefined;
    };
    direction: {
        type: StringConstructor;
        default: string;
    };
    modelValue: null;
    disabled: BooleanConstructor;
    selectedClass: {
        type: StringConstructor;
        default: string;
    };
    mandatory: {
        default: "force";
    };
} & SlotsToProps<MakeSlots<{
    default: [{
        group: GroupProvide;
    }];
    additional: [{
        group: GroupProvide;
    }];
    prev: [{
        props: ControlProps;
    }];
    next: [{
        props: ControlProps;
    }];
}>>>> & {
    "onUpdate:modelValue"?: ((v: any) => any) | undefined;
}, {
    group: GroupProvide;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (v: any) => boolean;
}, string, {
    reverse: boolean;
    direction: string;
    disabled: boolean;
    tag: string;
    mandatory: "force";
    touch: boolean | TouchHandlers;
    selectedClass: string;
    continuous: boolean;
    nextIcon: string | boolean;
    prevIcon: string | boolean;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $slots: MakeSlots<{
        default: [{
            group: GroupProvide;
        }];
        additional: [{
            group: GroupProvide;
        }];
        prev: [{
            props: ControlProps;
        }];
        next: [{
            props: ControlProps;
        }];
    }>;
});
declare type VWindow = InstanceType<typeof VWindow>;

declare const VWindowItem: vue.DefineComponent<{
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    eager: BooleanConstructor;
    reverseTransition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
    transition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    eager: BooleanConstructor;
    reverseTransition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
    transition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
}>>, {
    transition: string | boolean;
    eager: boolean;
    disabled: boolean;
    reverseTransition: string | boolean;
}>;
declare type VWindowItem = InstanceType<typeof VWindowItem>;

declare const VDialogTransition: vue.DefineComponent<{
    target: PropType<HTMLElement>;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    target: PropType<HTMLElement>;
}>>, {}>;

declare const VCarouselTransition: vue.DefineComponent<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    origin: string;
    group: boolean;
    mode: string;
    hideOnLeave: boolean;
    leaveAbsolute: boolean;
}>;
declare const VCarouselReverseTransition: vue.DefineComponent<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    origin: string;
    group: boolean;
    mode: string;
    hideOnLeave: boolean;
    leaveAbsolute: boolean;
}>;
declare const VTabTransition: vue.DefineComponent<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    origin: string;
    group: boolean;
    mode: string;
    hideOnLeave: boolean;
    leaveAbsolute: boolean;
}>;
declare const VTabReverseTransition: vue.DefineComponent<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    origin: string;
    group: boolean;
    mode: string;
    hideOnLeave: boolean;
    leaveAbsolute: boolean;
}>;
declare const VMenuTransition: vue.DefineComponent<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    origin: string;
    group: boolean;
    mode: string;
    hideOnLeave: boolean;
    leaveAbsolute: boolean;
}>;
declare const VFabTransition: vue.DefineComponent<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    origin: string;
    group: boolean;
    mode: string;
    hideOnLeave: boolean;
    leaveAbsolute: boolean;
}>;
declare const VDialogBottomTransition: vue.DefineComponent<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    origin: string;
    group: boolean;
    mode: string;
    hideOnLeave: boolean;
    leaveAbsolute: boolean;
}>;
declare const VDialogTopTransition: vue.DefineComponent<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    origin: string;
    group: boolean;
    mode: string;
    hideOnLeave: boolean;
    leaveAbsolute: boolean;
}>;
declare const VFadeTransition: vue.DefineComponent<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    origin: string;
    group: boolean;
    mode: string;
    hideOnLeave: boolean;
    leaveAbsolute: boolean;
}>;
declare const VScaleTransition: vue.DefineComponent<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    origin: string;
    group: boolean;
    mode: string;
    hideOnLeave: boolean;
    leaveAbsolute: boolean;
}>;
declare const VScrollXTransition: vue.DefineComponent<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    origin: string;
    group: boolean;
    mode: string;
    hideOnLeave: boolean;
    leaveAbsolute: boolean;
}>;
declare const VScrollXReverseTransition: vue.DefineComponent<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    origin: string;
    group: boolean;
    mode: string;
    hideOnLeave: boolean;
    leaveAbsolute: boolean;
}>;
declare const VScrollYTransition: vue.DefineComponent<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    origin: string;
    group: boolean;
    mode: string;
    hideOnLeave: boolean;
    leaveAbsolute: boolean;
}>;
declare const VScrollYReverseTransition: vue.DefineComponent<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    origin: string;
    group: boolean;
    mode: string;
    hideOnLeave: boolean;
    leaveAbsolute: boolean;
}>;
declare const VSlideXTransition: vue.DefineComponent<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    origin: string;
    group: boolean;
    mode: string;
    hideOnLeave: boolean;
    leaveAbsolute: boolean;
}>;
declare const VSlideXReverseTransition: vue.DefineComponent<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    origin: string;
    group: boolean;
    mode: string;
    hideOnLeave: boolean;
    leaveAbsolute: boolean;
}>;
declare const VSlideYTransition: vue.DefineComponent<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    origin: string;
    group: boolean;
    mode: string;
    hideOnLeave: boolean;
    leaveAbsolute: boolean;
}>;
declare const VSlideYReverseTransition: vue.DefineComponent<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string | undefined;
    };
    origin: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    origin: string;
    group: boolean;
    mode: string;
    hideOnLeave: boolean;
    leaveAbsolute: boolean;
}>;
declare const VExpandTransition: vue.DefineComponent<{
    mode: vue.Prop<"default" | "in-out" | "out-in", "default" | "in-out" | "out-in">;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    mode: vue.Prop<"default" | "in-out" | "out-in", "default" | "in-out" | "out-in">;
}>>, {}>;
declare const VExpandXTransition: vue.DefineComponent<{
    mode: vue.Prop<"default" | "in-out" | "out-in", "default" | "in-out" | "out-in">;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    mode: vue.Prop<"default" | "in-out" | "out-in", "default" | "in-out" | "out-in">;
}>>, {}>;

//# sourceMappingURL=index.d.ts.map

type index_d$1_VApp = VApp;
type index_d$1_VAppBar = VAppBar;
declare const index_d$1_VAppBarNavIcon: typeof VAppBarNavIcon;
declare const index_d$1_VAppBarTitle: typeof VAppBarTitle;
type index_d$1_VAlert = VAlert;
declare const index_d$1_VAlertTitle: typeof VAlertTitle;
type index_d$1_VAutocomplete = VAutocomplete;
type index_d$1_VAvatar = VAvatar;
type index_d$1_VBadge = VBadge;
type index_d$1_VBanner = VBanner;
declare const index_d$1_VBannerActions: typeof VBannerActions;
declare const index_d$1_VBannerAvatar: typeof VBannerAvatar;
declare const index_d$1_VBannerIcon: typeof VBannerIcon;
declare const index_d$1_VBannerText: typeof VBannerText;
type index_d$1_VBottomNavigation = VBottomNavigation;
type index_d$1_VBreadcrumbs = VBreadcrumbs;
type index_d$1_VBreadcrumbsItem = VBreadcrumbsItem;
declare const index_d$1_VBreadcrumbsDivider: typeof VBreadcrumbsDivider;
type index_d$1_VBtn = VBtn;
declare const index_d$1_VBtnGroup: typeof VBtnGroup;
declare const index_d$1_VBtnToggle: typeof VBtnToggle;
type index_d$1_VCard = VCard;
declare const index_d$1_VCardActions: typeof VCardActions;
declare const index_d$1_VCardAvatar: typeof VCardAvatar;
declare const index_d$1_VCardContent: typeof VCardContent;
declare const index_d$1_VCardHeader: typeof VCardHeader;
declare const index_d$1_VCardHeaderText: typeof VCardHeaderText;
declare const index_d$1_VCardImg: typeof VCardImg;
declare const index_d$1_VCardSubtitle: typeof VCardSubtitle;
declare const index_d$1_VCardText: typeof VCardText;
declare const index_d$1_VCardTitle: typeof VCardTitle;
declare const index_d$1_VCarousel: typeof VCarousel;
type index_d$1_VCarouselItem = VCarouselItem;
type index_d$1_VCheckbox = VCheckbox;
type index_d$1_VChip = VChip;
type index_d$1_VChipGroup = VChipGroup;
declare const index_d$1_VCode: typeof VCode;
type index_d$1_VColorPicker = VColorPicker;
type index_d$1_VCombobox = VCombobox;
declare const index_d$1_VCounter: typeof VCounter;
declare const index_d$1_VDefaultsProvider: typeof VDefaultsProvider;
type index_d$1_VDialog = VDialog;
declare const index_d$1_VDivider: typeof VDivider;
type index_d$1_VExpansionPanels = VExpansionPanels;
type index_d$1_VExpansionPanel = VExpansionPanel;
type index_d$1_VExpansionPanelText = VExpansionPanelText;
type index_d$1_VExpansionPanelTitle = VExpansionPanelTitle;
type index_d$1_VField = VField;
type index_d$1_VFieldLabel = VFieldLabel;
type index_d$1_VFileInput = VFileInput;
declare const index_d$1_VFooter: typeof VFooter;
type index_d$1_VForm = VForm;
declare const index_d$1_VContainer: typeof VContainer;
declare const index_d$1_VCol: typeof VCol;
declare const index_d$1_VRow: typeof VRow;
declare const index_d$1_VSpacer: typeof VSpacer;
declare const index_d$1_VHover: typeof VHover;
declare const index_d$1_VIcon: typeof VIcon;
declare const index_d$1_VComponentIcon: typeof VComponentIcon;
declare const index_d$1_VSvgIcon: typeof VSvgIcon;
declare const index_d$1_VLigatureIcon: typeof VLigatureIcon;
declare const index_d$1_VClassIcon: typeof VClassIcon;
type index_d$1_VImg = VImg;
type index_d$1_VInput = VInput;
type index_d$1_VItemGroup = VItemGroup;
type index_d$1_VItem = VItem;
declare const index_d$1_VKbd: typeof VKbd;
type index_d$1_VLabel = VLabel;
type index_d$1_VLayout = VLayout;
declare const index_d$1_VLayoutItem: typeof VLayoutItem;
declare const index_d$1_VLazy: typeof VLazy;
type index_d$1_VList = VList;
declare const index_d$1_VListSubheader: typeof VListSubheader;
declare const index_d$1_VListImg: typeof VListImg;
type index_d$1_VListItem = VListItem;
declare const index_d$1_VListItemAction: typeof VListItemAction;
declare const index_d$1_VListItemAvatar: typeof VListItemAvatar;
declare const index_d$1_VListItemHeader: typeof VListItemHeader;
declare const index_d$1_VListItemIcon: typeof VListItemIcon;
declare const index_d$1_VListItemMedia: typeof VListItemMedia;
declare const index_d$1_VListItemSubtitle: typeof VListItemSubtitle;
declare const index_d$1_VListItemTitle: typeof VListItemTitle;
declare const index_d$1_VListGroup: typeof VListGroup;
declare const index_d$1_VLocaleProvider: typeof VLocaleProvider;
declare const index_d$1_VMain: typeof VMain;
type index_d$1_VMenu = VMenu;
declare const index_d$1_VMessages: typeof VMessages;
type index_d$1_VNavigationDrawer = VNavigationDrawer;
declare const index_d$1_VNoSsr: typeof VNoSsr;
type index_d$1_VOverlay = VOverlay;
type index_d$1_VPagination = VPagination;
type index_d$1_VParallax = VParallax;
declare const index_d$1_VProgressCircular: typeof VProgressCircular;
declare const index_d$1_VProgressLinear: typeof VProgressLinear;
type index_d$1_VRadio = VRadio;
declare const index_d$1_VRadioGroup: typeof VRadioGroup;
type index_d$1_VRangeSlider = VRangeSlider;
type index_d$1_VRating = VRating;
declare const index_d$1_VResponsive: typeof VResponsive;
type index_d$1_VSelect = VSelect;
type index_d$1_VSelectionControl = VSelectionControl;
type index_d$1_VSelectionControlGroup = VSelectionControlGroup;
declare const index_d$1_VSheet: typeof VSheet;
declare const index_d$1_VSlideGroupSymbol: typeof VSlideGroupSymbol;
type index_d$1_VSlideGroup = VSlideGroup;
declare const index_d$1_VSlideGroupItem: typeof VSlideGroupItem;
type index_d$1_VSlider = VSlider;
type index_d$1_VSnackbar = VSnackbar;
type index_d$1_VSwitch = VSwitch;
declare const index_d$1_VSystemBar: typeof VSystemBar;
type index_d$1_VTabs = VTabs;
type index_d$1_VTab = VTab;
declare const index_d$1_VTable: typeof VTable;
type index_d$1_VTextarea = VTextarea;
type index_d$1_VTextField = VTextField;
declare const index_d$1_VThemeProvider: typeof VThemeProvider;
declare const index_d$1_VTimeline: typeof VTimeline;
declare const index_d$1_VTimelineItem: typeof VTimelineItem;
type index_d$1_VToolbar = VToolbar;
type index_d$1_VToolbarTitle = VToolbarTitle;
type index_d$1_VToolbarItems = VToolbarItems;
type index_d$1_VTooltip = VTooltip;
declare const index_d$1_VValidation: typeof VValidation;
type index_d$1_VWindow = VWindow;
type index_d$1_VWindowItem = VWindowItem;
declare const index_d$1_VDialogTransition: typeof VDialogTransition;
declare const index_d$1_VCarouselTransition: typeof VCarouselTransition;
declare const index_d$1_VCarouselReverseTransition: typeof VCarouselReverseTransition;
declare const index_d$1_VTabTransition: typeof VTabTransition;
declare const index_d$1_VTabReverseTransition: typeof VTabReverseTransition;
declare const index_d$1_VMenuTransition: typeof VMenuTransition;
declare const index_d$1_VFabTransition: typeof VFabTransition;
declare const index_d$1_VDialogBottomTransition: typeof VDialogBottomTransition;
declare const index_d$1_VDialogTopTransition: typeof VDialogTopTransition;
declare const index_d$1_VFadeTransition: typeof VFadeTransition;
declare const index_d$1_VScaleTransition: typeof VScaleTransition;
declare const index_d$1_VScrollXTransition: typeof VScrollXTransition;
declare const index_d$1_VScrollXReverseTransition: typeof VScrollXReverseTransition;
declare const index_d$1_VScrollYTransition: typeof VScrollYTransition;
declare const index_d$1_VScrollYReverseTransition: typeof VScrollYReverseTransition;
declare const index_d$1_VSlideXTransition: typeof VSlideXTransition;
declare const index_d$1_VSlideXReverseTransition: typeof VSlideXReverseTransition;
declare const index_d$1_VSlideYTransition: typeof VSlideYTransition;
declare const index_d$1_VSlideYReverseTransition: typeof VSlideYReverseTransition;
declare const index_d$1_VExpandTransition: typeof VExpandTransition;
declare const index_d$1_VExpandXTransition: typeof VExpandXTransition;
declare namespace index_d$1 {
  export {
    index_d$1_VApp as VApp,
    index_d$1_VAppBar as VAppBar,
    index_d$1_VAppBarNavIcon as VAppBarNavIcon,
    index_d$1_VAppBarTitle as VAppBarTitle,
    index_d$1_VAlert as VAlert,
    index_d$1_VAlertTitle as VAlertTitle,
    index_d$1_VAutocomplete as VAutocomplete,
    index_d$1_VAvatar as VAvatar,
    index_d$1_VBadge as VBadge,
    index_d$1_VBanner as VBanner,
    index_d$1_VBannerActions as VBannerActions,
    index_d$1_VBannerAvatar as VBannerAvatar,
    index_d$1_VBannerIcon as VBannerIcon,
    index_d$1_VBannerText as VBannerText,
    index_d$1_VBottomNavigation as VBottomNavigation,
    index_d$1_VBreadcrumbs as VBreadcrumbs,
    index_d$1_VBreadcrumbsItem as VBreadcrumbsItem,
    index_d$1_VBreadcrumbsDivider as VBreadcrumbsDivider,
    index_d$1_VBtn as VBtn,
    index_d$1_VBtnGroup as VBtnGroup,
    index_d$1_VBtnToggle as VBtnToggle,
    index_d$1_VCard as VCard,
    index_d$1_VCardActions as VCardActions,
    index_d$1_VCardAvatar as VCardAvatar,
    index_d$1_VCardContent as VCardContent,
    index_d$1_VCardHeader as VCardHeader,
    index_d$1_VCardHeaderText as VCardHeaderText,
    index_d$1_VCardImg as VCardImg,
    index_d$1_VCardSubtitle as VCardSubtitle,
    index_d$1_VCardText as VCardText,
    index_d$1_VCardTitle as VCardTitle,
    index_d$1_VCarousel as VCarousel,
    index_d$1_VCarouselItem as VCarouselItem,
    index_d$1_VCheckbox as VCheckbox,
    index_d$1_VChip as VChip,
    index_d$1_VChipGroup as VChipGroup,
    index_d$1_VCode as VCode,
    index_d$1_VColorPicker as VColorPicker,
    index_d$1_VCombobox as VCombobox,
    index_d$1_VCounter as VCounter,
    index_d$1_VDefaultsProvider as VDefaultsProvider,
    index_d$1_VDialog as VDialog,
    index_d$1_VDivider as VDivider,
    index_d$1_VExpansionPanels as VExpansionPanels,
    index_d$1_VExpansionPanel as VExpansionPanel,
    index_d$1_VExpansionPanelText as VExpansionPanelText,
    index_d$1_VExpansionPanelTitle as VExpansionPanelTitle,
    index_d$1_VField as VField,
    index_d$1_VFieldLabel as VFieldLabel,
    index_d$1_VFileInput as VFileInput,
    index_d$1_VFooter as VFooter,
    index_d$1_VForm as VForm,
    index_d$1_VContainer as VContainer,
    index_d$1_VCol as VCol,
    index_d$1_VRow as VRow,
    index_d$1_VSpacer as VSpacer,
    index_d$1_VHover as VHover,
    index_d$1_VIcon as VIcon,
    index_d$1_VComponentIcon as VComponentIcon,
    index_d$1_VSvgIcon as VSvgIcon,
    index_d$1_VLigatureIcon as VLigatureIcon,
    index_d$1_VClassIcon as VClassIcon,
    index_d$1_VImg as VImg,
    index_d$1_VInput as VInput,
    index_d$1_VItemGroup as VItemGroup,
    index_d$1_VItem as VItem,
    index_d$1_VKbd as VKbd,
    index_d$1_VLabel as VLabel,
    index_d$1_VLayout as VLayout,
    index_d$1_VLayoutItem as VLayoutItem,
    index_d$1_VLazy as VLazy,
    index_d$1_VList as VList,
    index_d$1_VListSubheader as VListSubheader,
    index_d$1_VListImg as VListImg,
    index_d$1_VListItem as VListItem,
    index_d$1_VListItemAction as VListItemAction,
    index_d$1_VListItemAvatar as VListItemAvatar,
    index_d$1_VListItemHeader as VListItemHeader,
    index_d$1_VListItemIcon as VListItemIcon,
    index_d$1_VListItemMedia as VListItemMedia,
    index_d$1_VListItemSubtitle as VListItemSubtitle,
    index_d$1_VListItemTitle as VListItemTitle,
    index_d$1_VListGroup as VListGroup,
    index_d$1_VLocaleProvider as VLocaleProvider,
    index_d$1_VMain as VMain,
    index_d$1_VMenu as VMenu,
    index_d$1_VMessages as VMessages,
    index_d$1_VNavigationDrawer as VNavigationDrawer,
    index_d$1_VNoSsr as VNoSsr,
    index_d$1_VOverlay as VOverlay,
    index_d$1_VPagination as VPagination,
    index_d$1_VParallax as VParallax,
    index_d$1_VProgressCircular as VProgressCircular,
    index_d$1_VProgressLinear as VProgressLinear,
    index_d$1_VRadio as VRadio,
    index_d$1_VRadioGroup as VRadioGroup,
    index_d$1_VRangeSlider as VRangeSlider,
    index_d$1_VRating as VRating,
    index_d$1_VResponsive as VResponsive,
    index_d$1_VSelect as VSelect,
    index_d$1_VSelectionControl as VSelectionControl,
    index_d$1_VSelectionControlGroup as VSelectionControlGroup,
    index_d$1_VSheet as VSheet,
    index_d$1_VSlideGroupSymbol as VSlideGroupSymbol,
    index_d$1_VSlideGroup as VSlideGroup,
    index_d$1_VSlideGroupItem as VSlideGroupItem,
    index_d$1_VSlider as VSlider,
    index_d$1_VSnackbar as VSnackbar,
    index_d$1_VSwitch as VSwitch,
    index_d$1_VSystemBar as VSystemBar,
    index_d$1_VTabs as VTabs,
    index_d$1_VTab as VTab,
    index_d$1_VTable as VTable,
    index_d$1_VTextarea as VTextarea,
    index_d$1_VTextField as VTextField,
    index_d$1_VThemeProvider as VThemeProvider,
    index_d$1_VTimeline as VTimeline,
    index_d$1_VTimelineItem as VTimelineItem,
    index_d$1_VToolbar as VToolbar,
    index_d$1_VToolbarTitle as VToolbarTitle,
    index_d$1_VToolbarItems as VToolbarItems,
    index_d$1_VTooltip as VTooltip,
    index_d$1_VValidation as VValidation,
    index_d$1_VWindow as VWindow,
    index_d$1_VWindowItem as VWindowItem,
    index_d$1_VDialogTransition as VDialogTransition,
    index_d$1_VCarouselTransition as VCarouselTransition,
    index_d$1_VCarouselReverseTransition as VCarouselReverseTransition,
    index_d$1_VTabTransition as VTabTransition,
    index_d$1_VTabReverseTransition as VTabReverseTransition,
    index_d$1_VMenuTransition as VMenuTransition,
    index_d$1_VFabTransition as VFabTransition,
    index_d$1_VDialogBottomTransition as VDialogBottomTransition,
    index_d$1_VDialogTopTransition as VDialogTopTransition,
    index_d$1_VFadeTransition as VFadeTransition,
    index_d$1_VScaleTransition as VScaleTransition,
    index_d$1_VScrollXTransition as VScrollXTransition,
    index_d$1_VScrollXReverseTransition as VScrollXReverseTransition,
    index_d$1_VScrollYTransition as VScrollYTransition,
    index_d$1_VScrollYReverseTransition as VScrollYReverseTransition,
    index_d$1_VSlideXTransition as VSlideXTransition,
    index_d$1_VSlideXReverseTransition as VSlideXReverseTransition,
    index_d$1_VSlideYTransition as VSlideYTransition,
    index_d$1_VSlideYReverseTransition as VSlideYReverseTransition,
    index_d$1_VExpandTransition as VExpandTransition,
    index_d$1_VExpandXTransition as VExpandXTransition,
  };
}

interface ClickOutsideBindingArgs {
    handler: (e: MouseEvent) => void;
    closeConditional?: (e: Event) => boolean;
    include?: () => HTMLElement[];
}
interface ClickOutsideDirectiveBinding extends DirectiveBinding {
    value: ((e: MouseEvent) => void) | ClickOutsideBindingArgs;
}
declare const ClickOutside: {
    mounted(el: HTMLElement, binding: ClickOutsideDirectiveBinding): void;
    unmounted(el: HTMLElement, binding: ClickOutsideDirectiveBinding): void;
};

declare const Intersect: ObjectDirective<HTMLElement>;

declare const Mutate: ObjectDirective<HTMLElement>;

interface ResizeDirectiveBinding extends Omit<DirectiveBinding, 'modifiers'> {
    value: () => void;
    modifiers?: {
        active?: boolean;
        quiet?: boolean;
    };
}
declare function mounted$1(el: HTMLElement, binding: ResizeDirectiveBinding): void;
declare function unmounted$1(el: HTMLElement, binding: ResizeDirectiveBinding): void;
declare const Resize: {
    mounted: typeof mounted$1;
    unmounted: typeof unmounted$1;
};

declare const Ripple: ObjectDirective;

interface ScrollDirectiveBinding extends Omit<DirectiveBinding, 'modifiers'> {
    value: EventListener | {
        handler: EventListener;
        options?: AddEventListenerOptions;
    } | EventListenerObject & {
        options?: AddEventListenerOptions;
    };
    modifiers?: {
        self?: boolean;
    };
}
declare function mounted(el: HTMLElement, binding: ScrollDirectiveBinding): void;
declare function unmounted(el: HTMLElement, binding: ScrollDirectiveBinding): void;
declare function updated(el: HTMLElement, binding: ScrollDirectiveBinding): void;
declare const Scroll: {
    mounted: typeof mounted;
    unmounted: typeof unmounted;
    updated: typeof updated;
};

//# sourceMappingURL=index.d.ts.map

declare const index_d_ClickOutside: typeof ClickOutside;
declare const index_d_Intersect: typeof Intersect;
declare const index_d_Mutate: typeof Mutate;
declare const index_d_Resize: typeof Resize;
declare const index_d_Ripple: typeof Ripple;
declare const index_d_Scroll: typeof Scroll;
declare const index_d_Touch: typeof Touch;
declare namespace index_d {
  export {
    index_d_ClickOutside as ClickOutside,
    index_d_Intersect as Intersect,
    index_d_Mutate as Mutate,
    index_d_Resize as Resize,
    index_d_Ripple as Ripple,
    index_d_Scroll as Scroll,
    index_d_Touch as Touch,
  };
}

declare type DisplayBreakpoint = keyof DisplayThresholds;
interface DisplayThresholds {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
}
interface DisplayOptions {
    mobileBreakpoint?: number | DisplayBreakpoint;
    thresholds?: Partial<DisplayThresholds>;
}
interface DisplayPlatform {
    android: boolean;
    ios: boolean;
    cordova: boolean;
    electron: boolean;
    chrome: boolean;
    edge: boolean;
    firefox: boolean;
    opera: boolean;
    win: boolean;
    mac: boolean;
    linux: boolean;
    touch: boolean;
    ssr: boolean;
}
interface DisplayInstance {
    xs: boolean;
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
    xxl: boolean;
    smAndUp: boolean;
    mdAndUp: boolean;
    lgAndUp: boolean;
    xlAndUp: boolean;
    smAndDown: boolean;
    mdAndDown: boolean;
    lgAndDown: boolean;
    xlAndDown: boolean;
    name: DisplayBreakpoint;
    height: number;
    width: number;
    mobile: boolean;
    mobileBreakpoint: number | DisplayBreakpoint;
    platform: DisplayPlatform;
    thresholds: DisplayThresholds;
}
declare function useDisplay(): ToRefs<DisplayInstance>;

interface LocaleMessages {
    [key: string]: LocaleMessages | string;
}
interface LocaleOptions {
    defaultLocale?: string;
    fallbackLocale?: string;
    messages?: LocaleMessages;
}
interface LocaleProps {
    locale?: string;
    fallbackLocale?: string;
    messages?: LocaleMessages;
}
interface LocaleInstance {
    current: Ref<string>;
    fallback: Ref<string>;
    messages: Ref<LocaleMessages>;
    t: (key: string, ...params: unknown[]) => string;
    n: (value: number) => string;
}
interface LocaleAdapter {
    createRoot: (app: App) => LocaleInstance;
    getScope: () => LocaleInstance;
    createScope: (options?: LocaleProps) => LocaleInstance;
}

interface RtlOptions {
    defaultRtl?: boolean;
    rtl?: Record<string, boolean>;
}
interface RtlProps {
    rtl?: boolean;
}
interface RtlInstance {
    isRtl: Ref<boolean>;
    rtl: Record<string, boolean>;
    rtlClasses: Ref<string>;
}
declare function provideRtl(props: RtlProps, localeScope: LocaleInstance): RtlInstance;
declare function useRtl(): RtlInstance;

declare type Position = 'top' | 'left' | 'right' | 'bottom';
declare type LayoutItem = {
    id: string;
    top: number;
    bottom: number;
    left: number;
    right: number;
    size: number;
};
interface LayoutProvide {
    register: (vm: ComponentInternalInstance, options: {
        id: string;
        priority: Ref<number>;
        position: Ref<Position>;
        layoutSize: Ref<number | string>;
        elementSize: Ref<number | string>;
        active: Ref<boolean>;
        disableTransitions?: Ref<boolean>;
        absolute: Ref<boolean | undefined>;
    }) => {
        layoutItemStyles: Ref<Record<string, unknown>>;
        layoutItemScrimStyles: Ref<Record<string, unknown>>;
        zIndex: Ref<number>;
    };
    unregister: (id: string) => void;
    mainStyles: Ref<Record<string, unknown>>;
    getLayoutItem: (id: string) => LayoutItem | undefined;
    items: Ref<LayoutItem[]>;
    layoutRect: Ref<DOMRectReadOnly | undefined>;
    rootZIndex: Ref<number>;
}
declare function useLayout(): LayoutProvide;

interface VuetifyOptions {
    aliases?: Record<string, any>;
    components?: Record<string, any>;
    directives?: Record<string, any>;
    defaults?: DefaultsOptions;
    display?: DisplayOptions;
    theme?: ThemeOptions;
    icons?: IconOptions;
    locale?: (LocaleOptions & RtlOptions) | (LocaleAdapter & RtlOptions);
}

declare const createVuetify: (options?: VuetifyOptions) => {
    install: (app: vue.App<any>) => void;
};
declare const version: string;

export { DefaultsInstance, DisplayBreakpoint, DisplayInstance, DisplayThresholds, IconAliases, IconOptions, IconProps, IconSet, LocaleAdapter, RtlInstance, ThemeDefinition, ThemeInstance, index_d$1 as components, createVuetify, index_d as directives, provideRtl, useDisplay, useLayout, useRtl, useTheme, version };
