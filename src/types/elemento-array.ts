export type ElementoArray<T> =
    T extends readonly (infer Elemento)[] ? Elemento : never;