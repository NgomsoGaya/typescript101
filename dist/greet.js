"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const language_1 = require("./language");
const greetIn_1 = require("./greetIn");
const greetIn_2 = require("./greetIn");
function greet(person) {
    if (!person.email) {
        return `Hello, ${person.firstName} ${person.lastName} we can't contact you.`;
    }
    else
        return `Hello, ${person.firstName} ${person.lastName} we will be in touch at ${person.email}`;
}
exports.default = greet;
// export function greet(name: string, chosenLanguage: language) {
//     let greetIn : GreetIn = new GreetInEnglish();
//     if (chosenLanguage === language.afr) {
//         greetIn = new GreetInAfrikaans();
//     }
//     if (chosenLanguage === language.xhosa) {
//         greetIn = new GreetInXhosa();
//     }
//     return greetIn.greet(name);
// }
let theGreetInMap = new Map();
theGreetInMap.set(language_1.language.eng, new greetIn_1.GreetInEnglish());
theGreetInMap.set(language_1.language.afr, new greetIn_2.GreetInAfrikaans());
// theGreetInMap.set(language.xhosa, new GreetInXhosa());
// export class Greeter {
//      create a Map that has a languages enum as a key and a GreetIn interface instance as a value
//     private greetLanguages:Map<language, GreetIn>
//     constructor(greetLanguages:Map<language, GreetIn>){
//         this.greetLanguages = greetLanguages;
//     }
//     greet(name: string, chosenLanguage:language) {
//         let greetIn = this.greetLanguages.get(chosenLanguage);
//         if (greetIn) {
//             return greetIn.greet(name);
//         }
//         return "";
//     }
//   }
