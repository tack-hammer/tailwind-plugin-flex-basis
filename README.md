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
      '0': '12.5%',
    }),
  },
  variants: {
    'flex-basis': ['responsive'],
  },
  plugins: [require('./flex-basis.js')()],
}
```

Use together with `.flex` and `.flex-wrap` to create a responsive grid.

```html
<div class="flex flex-wrap flex-basis-4">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```
