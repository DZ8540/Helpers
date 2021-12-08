"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefault = exports.detectScheme = exports.toUpperCaseFirstLetter = exports.error = exports.info = exports.warn = exports.log = void 0;
const console_1 = require("./console");
/**
 * Logging your values with log method.
 * @param  {any} messages - logging value.
 * @param  {boolean=true} isApart - print separately or on one line.
 * @param  {string=''} timeName - output time compiling.
 * @returns void
 */
function log(messages, isApart = true, timeName = '') {
    console_1.print(messages, 'log', isApart, timeName);
}
exports.log = log;
/**
 * Logging your values with warn method.
 * @param  {any} messages - logging value.
 * @param  {boolean=true} isApart - print separately or on one line.
 * @param  {string=''} timeName - output time compiling.
 * @returns void
 */
function warn(messages, isApart = true, timeName = '') {
    console_1.print(messages, 'warn', isApart, timeName);
}
exports.warn = warn;
/**
 * Logging your values with info method.
 * @param  {any} messages - logging value.
 * @param  {boolean=true} isApart - print separately or on one line.
 * @param  {string=''} timeName - output time compiling.
 * @returns void
 */
function info(messages, isApart = true, timeName = '') {
    console_1.print(messages, 'info', isApart, timeName);
}
exports.info = info;
/**
 * Logging your values with error method.
 * @param  {any} messages - logging value.
 * @param  {boolean=true} isApart - print separately or on one line.
 * @param  {string=''} timeName - output time compiling.
 * @returns void
 */
function error(messages, isApart = true, timeName = '') {
    console_1.print(messages, 'error', isApart, timeName);
}
exports.error = error;
/**
 * Uppercase first letter in your string.
 * @param  {string} val - your string.
 * @returns string
 */
function toUpperCaseFirstLetter(val) {
    return val[0].toUpperCase() + val.substring(1);
}
exports.toUpperCaseFirstLetter = toUpperCaseFirstLetter;
/**
 * Detect prefers color scheme.
 * @param  {'light'|'dark'='light'} scheme - it should be light or dark.
 * @returns boolean
 */
function detectScheme(scheme = 'light') {
    return window.matchMedia(`(prefers-color-scheme: ${scheme})`).matches;
}
exports.detectScheme = detectScheme;
/**
 * Returns default value if the guard check fails.
 * @param  {any} val - your first value.
 * @param  {any} defaultVal - your default value.
 * @param  {boolean=false} strict - strict equality condition.
 * @param  {any[]=[false, null, undefined]} guards - array of validation.
 * @returns any
 */
function getDefault(val, defaultVal, strict = false, guards = [false, null, undefined]) {
    for (let item of guards) {
        if (strict) {
            if (val === item)
                return defaultVal;
        }
        else {
            if (val == item)
                return defaultVal;
        }
    }
    return val;
}
exports.getDefault = getDefault;
