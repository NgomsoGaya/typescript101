import Person from "./person";
import { language } from "./language";
import { GreetIn } from "./greetIn";
import { GreetInXhosa } from "./greetIn";
import { GreetInEnglish } from "./greetIn";
import { GreetInAfrikaans } from "./greetIn";

export default function greet(person: Person) {
    if (!person.email) {
        return `Hello, ${person.firstName} ${person.lastName} we can't contact you.`
    }
     else return `Hello, ${person.firstName} ${person.lastName} we will be in touch at ${person.email}`;
  }

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

let theGreetInMap : Map<language, GreetIn>  = new Map();

theGreetInMap.set(language.eng, new GreetInEnglish());
theGreetInMap.set(language.afr, new GreetInAfrikaans());
theGreetInMap.set(language.xhosa, new GreetInXhosa());

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