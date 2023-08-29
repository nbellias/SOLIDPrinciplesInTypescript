import { User } from "../SingleResponsibility/User";

export class ACollection<T> implements ArrayOf<T>{
    private items: T[] = [];

    constructor(items: T[]) {
        this.items = items;
    };

    insertAt(item: T, index: number): void {
        this.items[index] = item;
    };

    deleteAt(index: number): T | undefined {
        const item = this.items[index];
        this.items = this.items.splice(index, 1);
        return item;
    };

    isEmpty(): boolean {
        return this.items.length === 0;
    };
    
}