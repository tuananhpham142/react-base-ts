type ArrayLengthMutationKeys = 'splice' | 'push' | 'pop' | 'shift' | 'unshift' | number;
type ArrayItems<T extends Array<any>> = T extends Array<infer TItems> ? TItems : never;
export type FixedLengthArray<T extends any[]> = Pick<T, Exclude<keyof T, ArrayLengthMutationKeys>> & {
    [Symbol.iterator]: () => IterableIterator<ArrayItems<T>>;
};

type BuildArrayMinLength<
    T,
    N extends number,
    Current extends T[]
    > = Current['length'] extends N
    ? [...Current, ...T[]]
    : BuildArrayMinLength<T, N, [...Current, T]>;

export type ArrayMinLength<T, N extends number> = BuildArrayMinLength<T, N, []>;