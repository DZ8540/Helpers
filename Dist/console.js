"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.print = void 0;
function print(messages, type, isApart, timeName) {
    if (timeName)
        console.time(timeName);
    if (Array.isArray(messages)) {
        if (isApart) {
            for (let item of messages) {
                console[type](item);
            }
        }
        else {
            console[type](...messages);
        }
    }
    else {
        console[type](messages);
    }
    if (timeName)
        console.timeEnd(timeName);
}
exports.print = print;
