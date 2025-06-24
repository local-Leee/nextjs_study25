import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    json.configs.recommended,
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        languageOptions: {
            globals: {
                ...globals.browser, // 브라우저 전역 변수
                ...globals.node, // 노드 전역 변수
            },
        },
        rules: {
            "no-unused-vars": "warn", // 사용하지 않는 변수 경고
            // "no-console": "warn", // console.log 사용 시 경고
        },
    },
    eslintConfigPrettier, // prettier 적용
];

export default eslintConfig;
