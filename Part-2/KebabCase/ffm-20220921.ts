// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
    Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
    Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
    Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
    Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
    Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
    Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
    Expect<Equal<KebabCase<'-'>, '-'>>,
    Expect<Equal<KebabCase<''>, ''>>,
    Expect<Equal<KebabCase<'😎'>, '😎'>>,
]


// ============= Your Code Here =============
// type KebabCase<S extends string> = S extends `${infer L}${infer R}` ? R extends Uncapitalize<R> ? `${Lowercase<L>}${KebabCase<R>}` : `${Lowercase<L>}-${KebabCase<R>}` : S

// type KebabCase<S extends string> = S extends `${infer L}${infer R}` ? L extends Capitalize<L> ? `${Uppercase<L>}${KebabCase<R>}` : `-${Capitalize<L>}${KebabCase<R>}` : S

type a = KebabCase<'Foo-Bar'>

type UpToLow<S extends string> = S extends `${infer F}${infer R}`
    ? Equal<F, Lowercase<F>> extends false
    ? `-${Lowercase<F>}${UpToLow<R>}`
    : `${F}${UpToLow<R>}`
    : S

type RemoveFirst<S extends string> = S extends `-${infer R}` ? R : S

type KebabCase<S extends string> = Equal<S, Lowercase<S>> extends true
    ? S
    : RemoveFirst<UpToLow<S>>