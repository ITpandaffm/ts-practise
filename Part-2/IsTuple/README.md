Implement a type IsTuple, which takes an input type T and returns whether T is tuple type.

For example:

```ts
type case1 = IsTuple<[number]> // true
type case2 = IsTuple<readonly [number]> // true
type case3 = IsTuple<number[]> // false
```
