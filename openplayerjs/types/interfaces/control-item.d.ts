/**
 * Control item
 *
 * @description An object that stores the definition for custom controls
 * @interface ControlItem
 * @export
 */
export default interface ControlItem {
    readonly icon: string;
    readonly title: string;
    readonly id: string;
    readonly showInAds: boolean;
    position: 'right' | 'left' | 'middle' | string;
    layer?: 'top' | 'center' | 'bottom' | 'main' | string;
    custom?: boolean;
    click(): void;
}
