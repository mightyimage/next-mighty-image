import * as React from 'react';


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
  'left top',
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
    sm?: { w: number; h: number };
    md?: { w: number; h: number };
    lg?: { w: number; h: number };
  };
  label?: {
    text?: string;
    top?: number;
    left?: number;
    color?: string; // String, hex of a RGBA color without #
    width?: number;
    height?: number;
  };
  className: string;
  onClick?: any;
  loading?: LoadingValue;
};

 function pushParameter(
  params: URLSearchParams,
  key: string,
  value?: string | number | boolean
) {
  if (value) {
    params.set(key, value as string);
  }
}

export function MightyImage(props: IProps) {
  const mightyAccountId = process.env.NEXT_PUBLIC_MIGHTY_IMAGE_ID;

  const url = new URL(props.src);

  url.hostname = 'media.mightyimage.io';
  url.pathname = `/image/${mightyAccountId}${url.pathname}`; // TODO check if / are correct?

  let screenWidth = 0;

  if (typeof window !== 'undefined') {
    screenWidth = window.innerWidth;
  }

  // Sizing and cropping
  // If no sizes were set, we use the width and height props directly;
  if (!props.sizes) {
    pushParameter(url.searchParams, 'w', props.width);
    pushParameter(url.searchParams, 'h', props.height);
  }
  // Check if we are 'sm' w <= 768px
  else if (screenWidth <= 768 && props.sizes.sm) {
    pushParameter(url.searchParams, 'w', props.sizes.sm?.w ?? props.width);
    pushParameter(url.searchParams, 'h', props.sizes.sm?.h ?? props.height);
  }
  // Check if we are 'md' w <= 1200px
  else if (screenWidth <= 1200 && props.sizes.md) {
    pushParameter(url.searchParams, 'w', props.sizes.md?.w ?? props.width);
    pushParameter(url.searchParams, 'h', props.sizes.md?.h ?? props.height);
  }
  // Otherwise we are 'lg'
  else if (props.sizes.lg) {
    pushParameter(url.searchParams, 'w', props.sizes.lg?.w ?? props.width);
    pushParameter(url.searchParams, 'h', props.sizes.lg?.h ?? props.height);
  }
  // default to width and height props;
  else {
    pushParameter(url.searchParams, 'w', props.width);
    pushParameter(url.searchParams, 'h', props.height);
  }

  pushParameter(url.searchParams, 'bf', props.tranformations?.boxfit);
  pushParameter(url.searchParams, 'g', props.tranformations?.gravity);
  pushParameter(url.searchParams, 'ct', props.tranformations?.croptop);
  pushParameter(url.searchParams, 'cl', props.tranformations?.cropleft);
  pushParameter(url.searchParams, 'sc', props.tranformations?.smartcrop);

  // Format and quality
  pushParameter(url.searchParams, 'q', props.tranformations?.quality);
  pushParameter(url.searchParams, 'f', props.tranformations?.format);
  pushParameter(url.searchParams, 'p', props.tranformations?.progressive);

  // Filters
  pushParameter(url.searchParams, 'gs', props.tranformations?.greyscale);
  pushParameter(url.searchParams, 'sp', props.tranformations?.sepia);

  // Labels
  pushParameter(url.searchParams, 'ltxt', props.label?.text);
  pushParameter(url.searchParams, 'll', props.label?.left);
  pushParameter(url.searchParams, 'lt', props.label?.top);
  pushParameter(url.searchParams, 'lw', props.label?.width);
  pushParameter(url.searchParams, 'lh', props.label?.height);
  pushParameter(url.searchParams, 'lc', props.label?.color);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={url.href}
      alt={props.alt}
      width={props.width}
      height={props.height}
      className={props.className}
      onClick={props.onClick}
      loading={props.loading}
    />
  );
}

