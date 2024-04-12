export interface GreetIn {
    greet(name: string) : string
}

export class GreetInXhosa implements GreetIn {
      greet (name: string) {
      return `Molo, ${name}`;
    }
  }

export  class GreetInEnglish implements GreetIn {
    greet (name: string) {
    return "Hello, " + name;
  }
}

export class GreetInAfrikaans implements GreetIn {
  greet (name: string) {
  return "Goeie more, " + name;
}
}