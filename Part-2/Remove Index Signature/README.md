Implement RemoveIndexSignature<T> , exclude the index signature from object types.

For example:


```ts
type Foo = {
  [key: string]: any;
  foo(): void;
}

type A = RemoveIndexSignature<Foo>  // expected { foo(): void }
