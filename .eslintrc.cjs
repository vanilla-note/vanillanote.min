module.exports = {
    root: true,
    env: {
        node: true
    },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-this-alias": "off",
        "@typescript-eslint/ban-types": "off",
        "no-useless-escape": "off",
        "prefer-const": "off",
        "no-prototype-builtins": "off",
        "no-empty": "off",
        "no-case-declarations": "off",
        "no-mixed-spaces-and-tabs": "off",
        "no-var": "off",
        "prefer-rest-params": "off"
    }
};
