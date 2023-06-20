# Polkadot Design Tokens

Design tokens used by the Parity Product Design team are synced to `/src/tokens/`

Output is then generated (Style Dictionary) and published as a package. Note that this is a manual process, to be automated later.

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

Implement in components

```
Button.tsx - variant="ghost"

...
<button className="bg-fill-ghost border-border-hint text-foreground-contrast">
    Press me!
</button>
...
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

---

## Generating Output and Publishing Package

0. push changes from Figma
1. `npm run generate-output`
2. bump version in `package.json`
3. `npm i`
4. `npm publish`
