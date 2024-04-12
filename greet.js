"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
// import Person from "./person";
const language_1 = require("./language");
const greetIn_1 = require("./greetIn");
const greetIn_2 = require("./greetIn");
const greetIn_3 = require("./greetIn");
// export default function greet(person: Person) {
//     if (!person.email) {
//         return `Hello, ${person.firstName} ${person.lastName} we can't contact you.`
//     }
//      else return `Hello, ${person.firstName} ${person.lastName} we will be in touch at ${person.email}`;
//   }
function greet(name, chosenLanguage) {
    let greetIn = new greetIn_2.GreetInEnglish();
    if (chosenLanguage === language_1.language.afr) {
        greetIn = new greetIn_3.GreetInAfrikaans();
    }
    if (chosenLanguage === language_1.language.xhosa) {
        greetIn = new greetIn_1.GreetInXhosa();
    }
    return greetIn.greet(name);
}
exports.greet = greet;
