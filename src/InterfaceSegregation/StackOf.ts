interface AnotherStack<T> extends Collection<T> {
    pushFront(item: T): void;
    popFront(): T;
}