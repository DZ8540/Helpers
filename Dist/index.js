"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperCaseFirstLetter = void 0;
/**
 * Uppercase first letter in your string.
 * @param {string} val - your string.
 * @return {string}
 */
function toUpperCaseFirstLetter(val) {
    return val[0].toUpperCase() + val.substring(1);
}
exports.toUpperCaseFirstLetter = toUpperCaseFirstLetter;
