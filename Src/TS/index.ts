import { print } from './console';

/**
 * Logging your values with log method.
 * @param  {any} messages - logging value.
 * @param  {boolean=true} isApart - print separately or on one line.
 * @param  {string=''} timeName - output time compiling.
 * @returns void
 */
export function log(messages: any, isApart: boolean = true, timeName: string = ''): void {
  print(messages, 'log', isApart, timeName);
}

/**
 * Logging your values with warn method.
 * @param  {any} messages - logging value.
 * @param  {boolean=true} isApart - print separately or on one line.
 * @param  {string=''} timeName - output time compiling.
 * @returns void
 */
export function warn(messages: any, isApart: boolean = true, timeName: string = ''): void {
  print(messages, 'warn', isApart, timeName);
}

/**
 * Logging your values with info method.
 * @param  {any} messages - logging value.
 * @param  {boolean=true} isApart - print separately or on one line.
 * @param  {string=''} timeName - output time compiling.
 * @returns void
 */
export function info(messages: any, isApart: boolean = true, timeName: string = ''): void {
  print(messages, 'info', isApart, timeName);
}

/**
 * Logging your values with error method.
 * @param  {any} messages - logging value.
 * @param  {boolean=true} isApart - print separately or on one line.
 * @param  {string=''} timeName - output time compiling.
 * @returns void
 */
export function error(messages: any, isApart: boolean = true, timeName: string = ''): void {
  print(messages, 'error', isApart, timeName);
}

/**
 * Uppercase first letter in your string.
 * @param  {string} val - your string.
 * @returns string
 */
export function toUpperCaseFirstLetter(val: string): string {
  return val[0].toUpperCase() + val.substring(1);
}

/**
 * Detect prefers color scheme.
 * @param  {'light'|'dark'='light'} scheme - it should be light or dark.
 * @returns boolean
 */
export function detectScheme(scheme: 'light' | 'dark' = 'light'): boolean {
  return window.matchMedia(`(prefers-color-scheme: ${scheme})`).matches;
}

/**
 * Returns default value if the guard check fails.
 * @param  {any} val - your first value.
 * @param  {any} defaultVal - your default value.
 * @param  {boolean=false} strict - strict equality condition.
 * @param  {any[]=[false, null, undefined]} guards - array of validation.
 * @returns any
 */
export function getDefault(val: any, defaultVal: any, strict: boolean = false, guards: any[] = [false, null, undefined]): any {
  for (let item of guards) {
    if (strict) {

      if (val === item)
        return defaultVal;

    } else {

      if (val == item)
        return defaultVal;

    }
  }

  return val;
}