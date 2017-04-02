module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jquery": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
	"jquery"
    ],
    "rules": {
        "react/jsx-uses-vars": 2,
        "react/jsx-uses-react": 2,
        "react/react-in-jsx-scope": 2,
        "no-redeclare": [
            "off",
            {"builtinGlobals": true}
        ],
        "no-case-declarations": "off",
        "indent": [
            "error",
            4,
            {"SwitchCase": 1}
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        // "quotes": [
        //     "error",
        //     "single"
        // ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": [
            "warn",
            {
                allow: ["warn", "error", "info"]
            }
        ]
    }
};
