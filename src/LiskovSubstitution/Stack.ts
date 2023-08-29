import { Bag } from "./Bag";

// class Stack<T> implements Bag<T> {

//     constructor(private items = []) { }

//     push<T>(item: T) { }

//     pop(): T | undefined {
//         if (this.items.length > 0) {
//             return this.items.pop();
//         }
//         return undefined;
//     }

//     isEmpty(): boolean {
//         return this.items.length === 0;
//     }

// }

export class Stack<T> implements Bag<T> {

    private tag: any = Symbol();

    constructor(private items: T[] = []) {
      if (this.items.length == 0) {
        this.items.push(this.tag);
      }
    }

    push(item: T) {
      this.items.push(item);
    }

    pop(): T | undefined {
      if (this.items.length === 1) {
        const item = this.items.pop();
        this.items.push(this.tag);
        return item;
      }

      if (this.items.length > 1) {
        return this.items.pop();
      }

      return undefined;
    }

    isEmpty(): boolean {
      return this.items.length === 0;
    }

  }