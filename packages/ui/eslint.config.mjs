import { config } from "@repo/eslint-config/react-internal";

/** @type {import("eslint").Linter.Config} */
export default {
    ...config,
    rules: {
        "@typescript-eslint/ban-ts-comment": "off",
    },
};
