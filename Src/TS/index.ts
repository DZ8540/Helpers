import { print } from './console';

/**
 * Logging your values with log method.
 * @param {any} messages - logging value.
 * @param {boolean} [isApart=true] - print separately or on one line.
 * @param {string} [withTime=] - output time compiling.
 * @return {void}
 */
export function log(messages: any, isApart: boolean = true, withTime: string = ''): void {
  print(messages, 'log', isApart, withTime);
}

/**
 * Logging your values with warn method.
 * @param {any} messages - logging value.
 * @param {boolean} [isApart=true] - print separately or on one line.
 * @param {string} [withTime=] - output time compiling.
 * @return {void}
 */
export function warn(messages: any, isApart: boolean = true, withTime: string = ''): void {
  print(messages, 'warn', isApart, withTime);
}

/**
 * Logging your values with info method.
 * @param {any} messages - logging value.
 * @param {boolean} [isApart=true] - print separately or on one line.
 * @param {string} [withTime=] - output time compiling.
 * @return {void}
 */
export function info(messages: any, isApart: boolean = true, withTime: string = ''): void {
  print(messages, 'info', isApart, withTime);
}

/**
 * Logging your values with error method.
 * @param {any} messages - logging value.
 * @param {boolean} [isApart=true] - print separately or on one line.
 * @param {string} [withTime=] - output time compiling.
 * @return {void}
 */
export function error(messages: any, isApart: boolean = true, withTime: string = ''): void {
  print(messages, 'error', isApart, withTime);
}

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