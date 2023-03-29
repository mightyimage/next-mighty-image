/// <reference types="react" />
declare const VALID_LOADING_VALUES: readonly ['lazy', 'eager', undefined];
declare type LoadingValue = typeof VALID_LOADING_VALUES[number];
declare const VALID_BOXFIT_VALUES: readonly [
    'cover',
    'contain',
    'fill',
    'inside',
    'outside',
    undefined
];
declare type BoxFitValue = typeof VALID_BOXFIT_VALUES[number];
declare const VALID_GRAVITY_VALUES: readonly [
    'top',
    'right top',
    'right',
    'right bottom',
    'bottom',
    'left bottom',
    'left',
    ' left top',
    undefined
];
declare type GravityValue = typeof VALID_GRAVITY_VALUES[number];
declare const VALID_FORMAT_VALUES: readonly ['jpeg', 'png', 'webp', undefined];
declare type FormatValue = typeof VALID_FORMAT_VALUES[number];
type IProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    tranformations?: {
        quality?: number;
        greyscale?: boolean;
        sepia?: boolean;
        boxfit?: BoxFitValue;
        gravity?: GravityValue;
        croptop?: number;
        cropleft?: number;
        smartcrop?: boolean;
        format?: FormatValue;
        progressive?: boolean;
    };
    sizes?: {
        sm?: {
            w: number;
            h: number;
        };
        md?: {
            w: number;
            h: number;
        };
        lg?: {
            w: number;
            h: number;
        };
    };
    label?: {
        text?: string;
        top?: number;
        left?: number;
        color?: string;
        width?: number;
        height?: number;
    };
    className: string;
    onClick?: any;
    loading?: LoadingValue;
};
export declare const MightyImage: (props: IProps) => JSX.Element;
export {};
