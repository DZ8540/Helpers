"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.print = void 0;
function print(messages, type, isApart, withTime) {
    if (withTime)
        console.time(withTime);
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
    if (withTime)
        console.timeEnd(withTime);
}
exports.print = print;
