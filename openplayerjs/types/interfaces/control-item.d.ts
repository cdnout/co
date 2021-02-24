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
    subitems?: Array<{
        id: string;
        label: string;
        title?: string;
        icon?: string;
        click(): void;
    }>;
    click(event: any): void;
}
