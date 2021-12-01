/**
 * Uppercase first letter in your string.
 * @param {string} val - your string.
 * @return {string}
 */
export function toUpperCaseFirstLetter(val: string): string {
  return val[0].toUpperCase() + val.substring(1);
}

/**
 * Detect prefers color scheme.
 * @param {string} scheme - it should be light or dark.
 * @default light
 * @return {boolean}
 */
export function detectScheme(scheme: 'light' | 'dark' = 'light'): boolean {
  return window.matchMedia(`(prefers-color-scheme: ${scheme})`).matches;
}