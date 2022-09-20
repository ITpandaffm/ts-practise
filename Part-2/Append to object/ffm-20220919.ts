// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type test1 = {
    key: 'cat'
    value: 'green'
}

type testExpect1 = {
    key: 'cat'
    value: 'green'
    home: boolean
}

type test2 = {
    key: 'dog' | undefined
    value: 'white'
    sun: true
}

type testExpect2 = {
    key: 'dog' | undefined
    value: 'white'
    sun: true
    home: 1
}

type test3 = {
    key: 'cow'
    value: 'yellow'
    sun: false
}

type testExpect3 = {
    key: 'cow'
    value: 'yellow'
    sun: false
    isMotherRussia: false | undefined
}

type cases = [
    Expect<Equal<AppendToObject<test1, 'home', boolean>, testExpect1>>,
    Expect<Equal<AppendToObject<test2, 'home', 1>, testExpect2>>,
    Expect<Equal<AppendToObject<test3, 'isMotherRussia', false | undefined>, testExpect3>>,
]


// ============= Your Code Here =============

// 初始版本： 直接& 两个对象，实际返回的 是 { xx: xxx} & {xxx: xx}，而不是一个 { xxxxx: xxxx }
// type AppendToObject<T, U extends string, V> = Merge<{
//     [P in keyof T]: T[P]
// }, {
//         [Z in `${U}`]: V
//     }>

// TODO 两个对象合并

type Merge<F, S> = { [K in keyof F | keyof S]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never }

type AppendToObject<T, U extends string, V> = Merge<{
    [P in keyof T]: T[P]
}, {
        [Z in `${U}`]: V
    }>

// type AppendToObject<T, U extends string, V> = {
//     [P in keyof T | U]: P extends keyof T ? T[P] : V
// }

type a = AppendToObject<test1, 'home', boolean>