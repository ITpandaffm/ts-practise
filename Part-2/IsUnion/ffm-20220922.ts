// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
    Expect<Equal<IsUnion<string>, false>>,
    Expect<Equal<IsUnion<string | number>, true>>,
    Expect<Equal<IsUnion<'a' | 'b' | 'c' | 'd'>, true>>,
    Expect<Equal<IsUnion<undefined | null | void | ''>, true>>,
    Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
    Expect<Equal<IsUnion<{ a: string | number }>, false>>,
    Expect<Equal<IsUnion<[string | number]>, false>>,
    // Cases where T resolves to a non-union type.
    Expect<Equal<IsUnion<string | never>, false>>,
    Expect<Equal<IsUnion<string | unknown>, false>>,
    Expect<Equal<IsUnion<string | any>, false>>,
    Expect<Equal<IsUnion<string | 'a'>, false>>,
]


// ============= Your Code Here =============

/**
 * 思路：
 * 
 * 联合类型的特征有两个：
 *   1. 在 TS 处理泛型为联合类型时进行分发处理，即将联合类型拆解为独立项一一进行判定，最后再用 | 连接。
 *   2. 用 [] 包裹联合类型可以规避分发的特性。
 *
 *   所以，如果泛型进行了分发，就可以反推出它是联合类型。
 */
type IsUnion<A, B = A> = A extends A ? ([B] extends [A] ? false : true) : false;