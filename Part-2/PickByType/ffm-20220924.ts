// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

interface Model {
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
}

type cases = [
    Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean; isEnable: boolean }>>,
    Expect<Equal<PickByType<Model, string>, { name: string }>>,
    Expect<Equal<PickByType<Model, number>, { count: number }>>,
]


// ============= Your Code Here =============
type PickByType<T, U> = {
    [Key in keyof T as T[Key] extends U ? Key : never]: T[Key]
}
