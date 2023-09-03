type AdvancedRecord<K extends string, T extends Check, Check = T extends object ? Record<K, any> : any > = Record<K, T> extends infer L ? {[M in keyof L]: T[M & keyof T]} : never
// from https://stackoverflow.com/questions/57571664/typescript-type-for-an-object-with-only-one-key-no-union-type-allowed-as-a-key but i updated to have other stuff                                                                                                                                           
type OneKey<K extends string, V extends Check = any, Check = V extends object ? Record<K, any> : any > = {
  [P in K]: (AdvancedRecord<P, V, Check> &
    Partial<AdvancedRecord<Exclude<K, P>, never>>) extends infer O
    ? { [Q in keyof O]: O[Q] }
    : never
}[K];
