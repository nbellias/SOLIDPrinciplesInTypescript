interface Array<T> extends Collection<T> {

    insertAt(item: T, index: number): void;

    deleteAt(index: number): T | undefined;

  }