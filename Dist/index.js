"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectScheme = exports.toUpperCaseFirstLetter = void 0;
/**
 * Uppercase first letter in your string.
 * @param {string} val - your string.
 * @return {string}
 */
function toUpperCaseFirstLetter(val) {
    return val[0].toUpperCase() + val.substring(1);
}
exports.toUpperCaseFirstLetter = toUpperCaseFirstLetter;
/**
 * Detect prefers color scheme.
 * @param {string} scheme - it should be light or dark.
 * @default light
 * @return {boolean}
 */
function detectScheme(scheme = 'light') {
    return window.matchMedia(`(prefers-color-scheme: ${scheme})`).matches;
}
exports.detectScheme = detectScheme;
