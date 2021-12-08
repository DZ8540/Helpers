type logTypes = 'log' | 'warn' | 'info' | 'error';
export function print(messages: any, type: logTypes, isApart: boolean, timeName: string): void {
  if (timeName)
    console.time(timeName);

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

  if (timeName)
    console.timeEnd(timeName);
}