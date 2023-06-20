# Polkadot Design Tokens

Design tokens used by the Parity Product Design team are synced to `/src/tokens/`
Output is then generated (Style Dictionary) and pubished as a package.

Current outputs: CSS variables (global, light, dark) + Tailwind config

## Use (Tailwind)

Install package
`npm i polkadot-theme`

Copy tailwind config to root folder
`cp -r ./node_modules/polkadot-theme/tailwind.config.cjs ./`

Import css

```
App.tsx

import "polkadot-theme/global.css"
import "polkadot-theme/light.css"
import "polkadot-theme/dark.css"
```

## Token API

### Global Colors

Entire range of colors used in the Polkadot theme.
Semantic always reference global colors.

### Semantic Colors

Background: for everything that is full screen and serves as a background for an interface
Fill: for UI elements that sit on top of the backgrounds
Border: for borders of UI elements
Foreground: for texts and icons

### Typography [WIP]

```

```
