export interface IObjectKeys {
    [key: string] :
    | null
    | string
    | IObjectKeys
    | number
    | Date
    | boolean
    | IObjectKeys[]
    | string[]
    | number[]
    | (() => IObjectKeys)
    | (() => Promise<unknown>)
}