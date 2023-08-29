export interface Bag<T> {
    push(item: T): void;
    pop(): T | undefined;
    isEmpty(): boolean;
}