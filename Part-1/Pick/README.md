### Pick


[原题链接](https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md)

[playground]()

Implement the built-in Pick<T, K> generic without using it.

Constructs a type by picking the set of properties K from T

For example:

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
