import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
<<<<<<< HEAD
  {
    rules: {
      "@typescript-eslint/no-non-null-asserted-optional-chain": "off"
    }
  }
=======
>>>>>>> daa1ba2 (Add your descriptive commit message here)
];

export default eslintConfig;
