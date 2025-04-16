// import dolmios
import dolmios from "eslint-config-dolmios";

export default [
    ...dolmios,
   {
    rules: {
        "react-hooks/exhaustive-deps": "off",
        "perfectionist/sort-objects": "off"
    }
   }
];

