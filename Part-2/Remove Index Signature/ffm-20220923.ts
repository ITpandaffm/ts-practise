// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type Foo = {
    [key: string]: any
    foo(): void
}

type Bar = {
    [key: number]: any
    bar(): void
}

type FooBar = {
    [key: symbol]: any
    foobar(): void
}

type Baz = {
    bar(): void
    baz: string
}

type cases = [
    Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
    Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void }>>,
    Expect<Equal<RemoveIndexSignature<FooBar>, { foobar(): void }>>,
    Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>,
]


// ============= Your Code Here =============
/**
  // keyof {[key: string]: any} 得到 string | number
  // keyof {[key: number]: any} 得到 numebr
  // keyof {[key: symbol]: any} 得到 symbol
  // 关键点是区分上述的索引签名(string | number | symbol)和普通的key(都是string)
  // 👉 重点：区分索引签名和确定的key，索引签名返回 string | number | symbol，普通的key就是个字符串可用 'K extends `{infer newKey}`' 确定

  // Mapped Types，means oldTypes as newTypes to transform oldKey to newKey
  // according: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#:~:text=You%20can%20filter%20out%20keys%20by%20producing%20never%20via%20a%20conditional%20type:
  // 如下写法可以删除key
  // {
  //   [xx as never]: any
  // }

 */
type DeleteAllKey<T> = {
    [K in keyof T as never]: T[K]
}
type t8 = DeleteAllKey<Foo>

type RemoveIndexSignature<T> = {
    // [K in Omit<keyof T, string | number | symbol>]: T[K]
    [K in keyof T as K extends `${infer newKey}` ? newKey : never]: T[K]
}
