/**
 * Uppercase first letter in your string.
 * @param {string} val - your string.
 * @return {string}
 */
export function toUpperCaseFirstLetter(val: string): string {
  return val[0].toUpperCase() + val.substring(1);
}