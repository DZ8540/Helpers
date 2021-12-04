type logTypes = 'log' | 'warn' | 'info' | 'error';
export function print(messages: any, type: logTypes, isApart: boolean): void {
  if (Array.isArray(messages)) {

    if (isApart) {
      for (let item of messages) {
        console[type](item);
      }
    } else {
      console[type](...messages);
    }

  } else {
    console[type](messages);
  }
}