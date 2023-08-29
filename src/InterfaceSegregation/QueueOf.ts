interface Queue<T> extends Collection<T> {
    pushBack(item: T): void;
    popFront(): T;
}