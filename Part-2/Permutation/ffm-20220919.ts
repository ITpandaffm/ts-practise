// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
    Expect<Equal<Permutation<'A'>, ['A']>>,

    Expect<Equal<Permutation<'A' | 'B' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
    Expect<Equal<Permutation<'B' | 'A' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,

    Expect<Equal<Permutation<never>, []>>,
]


type Permutation3<T, C = T> =
    [T] extends [never]
    ? []
    : T extends C
    ? [T, ...Permutation3<Exclude<C, T>>]
    : []


type Permutation<T extends keyof any> = [T] extends [never]
    ? []
    : {
        [K in T]: [K, ...Permutation<Exclude<T, K>>]
    }[T]


// ============= Your Code Here =============
type Permutation2<T, C = T> = [T] extends [never]
    ? []
    : C extends infer U // ??
    ? [U, ...Permutation2<Exclude<T, U>>]
    : [T];


type a = ['a' | 'b']
