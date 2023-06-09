# next-mighty-image
[![npm version](https://badge.fury.io/js/next-mighty-image.svg)](https://badge.fury.io/js/next-mighty-image)

A Next.js component for [Mighty Image](https://www.mightyimage.io)

## Features
- Lazy loading
- Supports all mighty image tranformations
- Add labels to images
- Define different sizes based on screensizes
- Apply custom CSS classes

## How to use
1. Install the package via npm `npm i next-mighty-image@latest`

2. Add an environment variable: `MIGHTY_IMAGE_ID=**YOUR_ACCOUNT_ID**`. This ID can be found in the [Mighty Image dashboard ](https://app.mightyimage.io) for your account

3. Add `<MightyImage />` components with `src`, `alt`, `width` and `height` properties

````
            <div className="relative ">
                    <MightyImage
                      src={/products/red-chair-2022.png}
                      alt={"A product shot of a red chair"}
                      height={500}
                      width={500}
                    />
            </div>
````

4. Try it out by running your project with `next dev`

## Properties
Following properties are supported. 
`src`, `alt`, `width` and `height` are mandatory

````
{
    src: string,
    alt: string,
    width: number,
    height: number,
    tranformations: { 
            quality: number, 
            greyscale: boolean, 
            sepia: boolean, 
            boxfit: string,         // 'cover','contain', 'fill', 'inside', 'outside',
            gravity: string,        // 'top','right top','right','right bottom','bottom','left bottom','left','left top',
            croptop: number, 
            cropleft: number, 
            smartcrop: boolean, 
            format: string,         // 'jpeg', 'png', 'webp'
            progressive: boolean, 
    },
  sizes: {
    sm: { w: number, h: number },
    md: { w: number, h: number },
    lg: { w: number, h: number },
  },
  label: {
    text: string,
    top: number,
    left: number,
    color: string,      // Hex of a RGBA color without #
    width: number,
    height: number,
  };
  className: string, 
  onClick: any, 
  loading: string,      // 'lazy', 'eager'
}
  ````

## Sizing breakpoints
| Size | Breakpoint |
| ----------- | ----------- |
| sm | viewport width <= 768px | 
| md |  viewport width <= 1200px |
| lg | viewport width > 1200px |

## Examples

### Lazy loading, breakpoint sizeing and conversion to Webp

````
  <MightyImage
                src={/products/red-chair-2022.png}
                alt={"A product shot of a red chair"}
                height={500}
                width={500}
                loading={'lazy'}
                tranformations={{
                  quality: 100,
                  boxfit: 'contain',
                  format: 'webp',
                }}
                sizes={{
                  sm: { w: 200, h: 300 },
                  md: { w: 150, h: 230 },
                  lg: { w: 300, h: 455 },
                }}
              />
````
### Lazy loading, breakpoint sizeing and conversion to Webp

````
  <MightyImage
                src={/products/red-chair-2022.png}
                alt={"A product shot of a red chair"}
                height={500}
                width={500}
                sizes={{
                  sm: { w: 200, h: 300 },
                  md: { w: 150, h: 230 },
                  lg: { w: 300, h: 455 },
                }}
                label={{
                  text: '© Mighty Image',
                  left: 20,
                  top: 20,
                  width: 60,
                  height: 30,
                  color: 'F2F2F2',
                }}
              />
````