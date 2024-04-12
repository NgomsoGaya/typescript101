"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetInAfrikaans = exports.GreetInEnglish = exports.GreetInXhosa = void 0;
class GreetInXhosa {
    greet(name) {
        return `Molo, ${name}`;
    }
}
exports.GreetInXhosa = GreetInXhosa;
class GreetInEnglish {
    greet(name) {
        return "Hello, " + name;
    }
}
exports.GreetInEnglish = GreetInEnglish;
class GreetInAfrikaans {
    greet(name) {
        return "Goeie more, " + name;
    }
}
exports.GreetInAfrikaans = GreetInAfrikaans;
