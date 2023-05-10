const StyleDictionaryModule = require("style-dictionary");
const StyleDictionary = require("style-dictionary");
const { makeSdTailwindConfig } = require("sd-tw-transformer");
const { registerTransforms } = require("@tokens-studio/sd-transforms");

// generate tailwind config
const sdConfig = makeSdTailwindConfig({
  type: "all",
  isVariables: true,
  source: [
    `src/tokens/dark.json`,
    `src/tokens/light.json`,
    `src/tokens/global.json`,
  ],
  transforms: ["name/cti/kebab", "attribute/cti"],
  buildPath: `./`,
  tailwind: {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    plugins: ["forms"],
  },
});

// to-do:
// add plugin: 'prettier-plugin-tailwindcss',

// set formats and transforms for style dictionary
const StyleDictionaryWithTailwind = StyleDictionaryModule.extend(sdConfig);
StyleDictionaryWithTailwind.buildAllPlatforms();

registerTransforms(StyleDictionary);

StyleDictionary.registerFormat({
  name: "css/variables",
  formatter: function (dictionary) {
    return `${this.selector} {\n${dictionary.allProperties
      .map((prop) => `  --${prop.name}: ${prop.value};`)
      .join("\n")}\n}`;
  },
});

// generate css for each token set
["light", "dark", "global"].map((theme) => {
  const themeVariables = StyleDictionary.extend({
    source: [`src/tokens/${theme}.json`],
    include: [`src/tokens/global.json`],
    platforms: {
      web: {
        transformGroup: "tokens-studio",
        transforms: [
          "ts/descriptionToComment",
          "ts/size/px",
          "ts/size/css/letterspacing",
          "ts/size/lineheight",
          "ts/type/fontWeight",
          "ts/resolveMath",
          "ts/typography/css/shorthand",
          "ts/border/css/shorthand",
          "ts/shadow/css/shorthand",
          "ts/color/css/hexrgba",
          "ts/color/modifiers",
          "name/cti/kebab",
        ],
        buildPath: "./",
        files: [
          {
            destination: `${theme}.css`,
            format: "css/variables",
            selector:
              theme === "dark" ? `:root[data-theme="${theme}"]` : `:root`,
            filter: ({ isSource }) => {
              return isSource;
            },
          },
        ],
      },
    },
  });
  themeVariables.cleanAllPlatforms();
  themeVariables.buildAllPlatforms();
});

const globalVariables = StyleDictionary.extend({
  source: [`src/tokens/global.json`],
  include: [`src/tokens/global.json`],
  platforms: {
    web: {
      transformGroup: "tokens-studio",
      transforms: [
        "ts/descriptionToComment",
        "ts/size/px",
        "ts/size/css/letterspacing",
        "ts/size/lineheight",
        "ts/type/fontWeight",
        "ts/resolveMath",
        "ts/typography/css/shorthand",
        "ts/border/css/shorthand",
        "ts/shadow/css/shorthand",
        "ts/color/css/hexrgba",
        "ts/color/modifiers",
        "name/cti/kebab",
      ],
      buildPath: "./",
      files: [
        {
          destination: `global.css`,
          format: "css/variables",
          selector: `:root`,
        },
      ],
    },
  },
});
globalVariables.cleanAllPlatforms();
globalVariables.buildAllPlatforms();
