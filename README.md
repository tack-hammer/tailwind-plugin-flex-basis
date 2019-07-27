# @tkh/tailwind-plugin-flex-basis

Tailwindcss plugin for flex-basis css rules

## Install

```sh
npm install @tkh/tailwind-plugin-flex-basis
```

## Usage

Merge the plugin configuration with your `tailwind.config.js`

```js
const pluginConfiguration = {
  theme: {
    'flex-basis': theme => ({
      '1': '100%',
      '2': '50%',
      '3': '33.333333%',
      '4': '25%',
      '5': '20%',
      '6': '16.666666%',
      '7': '14.285714%',
      '8': '12.5%',
    }),
  },
  variants: {
    'flex-basis': ['responsive'],
  },
  plugins: [require('@tkh/tailwind-plugin-flex-basis')()],
}
```

Use together with `.flex` and `.flex-wrap` to create a responsive grid. It works best if you do not set min-width on the grid-grid-items.

```html
<div class="flex flex-wrap max-w-lg mx-auto">
  <div class="grid-items flex-basis-2 sm:flex-basis-4"></div>
  <div class="grid-items flex-basis-2 sm:flex-basis-4"></div>
  <div class="grid-items flex-basis-2 sm:flex-basis-4"></div>
  <div class="grid-items flex-basis-2 sm:flex-basis-4"></div>
</div>
```
