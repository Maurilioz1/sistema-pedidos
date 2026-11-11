export type SomenteLeitura<T> = {
    readonly [K in keyof T]: T[K];
};