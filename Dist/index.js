"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectScheme = exports.toUpperCaseFirstLetter = exports.error = exports.info = exports.warn = exports.log = void 0;
const console_1 = require("./console");
/**
 * Logging your values.
 * @param {any} messages - logging value.
 * @param {boolean} [isApart=true] - print separately or on one line.
 * @return {void}
 */
function log(messages, isApart = true) {
    console_1.print(messages, 'log', isApart);
}
exports.log = log;
/**
 * Logging your values with warn method.
 * @param {any} messages - logging value.
 * @param {boolean} [isApart=true] - print separately or on one line.
 * @return {void}
 */
function warn(messages, isApart = true) {
    console_1.print(messages, 'warn', isApart);
}
exports.warn = warn;
/**
 * Logging your values with info method.
 * @param {any} messages - logging value.
 * @param {boolean} [isApart=true] - print separately or on one line.
 * @return {void}
 */
function info(messages, isApart = true) {
    console_1.print(messages, 'info', isApart);
}
exports.info = info;
/**
 * Logging your values with error method.
 * @param {any} messages - logging value.
 * @param {boolean} [isApart=true] - print separately or on one line.
 * @return {void}
 */
function error(messages, isApart = true) {
    console_1.print(messages, 'error', isApart);
}
exports.error = error;
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
