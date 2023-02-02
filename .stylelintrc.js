module.exports = {
  defaultSeverity: "warning",
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-scss"],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "no-descending-specificity": null,
    "length-zero-no-unit": null,
    "rule-empty-line-before": null,
    "color-hex-length": null,
    "at-rule-empty-line-before": null,
    "block-opening-brace-space-before": null,
    "declaration-colon-newline-after": null
  },
};
