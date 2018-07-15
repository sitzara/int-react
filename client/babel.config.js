module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "entry"
            }
        ],
        [
            "@babel/preset-stage-3"
        ],
        "@babel/preset-react"
    ],
    plugins: [
        [
            "@babel/plugin-transform-runtime",
            {
                "helpers": false,
                "polyfill": false,
                "regenerator": true,
                "moduleName": "@babel/runtime"
            }
        ],
        "@babel/plugin-proposal-export-default-from"
    ],
};
