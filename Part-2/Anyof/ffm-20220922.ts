// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
    Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>,
    Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
    Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
    Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
    Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
    Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
    Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
    Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>,
    Expect<Equal<AnyOf<[0, '', false, [], {}]>, false>>,
    Expect<Equal<AnyOf<[]>, false>>,
]


// ============= Your Code Here =============

// type isTrue<T extends any> = T extends 0 | '' | false | [] | Record<string, never> ? false : true;
// type AnyOf<T extends readonly any[], Flag extends boolean = true> = T extends [infer L, ...infer R] ? AnyOf<[...R], isTrue<L>> : Flag 

type AnyOf<T extends readonly any[]> = T extends Array<0 | '' | false | [] | Record<string, never>> ? false : true
