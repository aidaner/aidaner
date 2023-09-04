type AdvancedRecord<K extends string, T extends Check, Check = T extends object ? Record<K, any> : any > = Record<K, T> extends infer L ? {[M in keyof L]: T[M & keyof T]} : never
// from https://stackoverflow.com/questions/57571664/typescript-type-for-an-object-with-only-one-key-no-union-type-allowed-as-a-key but i updated to have other stuff                                                                                                                                           
type OneKey<K extends object> = {
  [P in keyof K]: (Record<P, K[P]> &
    Partial<SetObject<Omit<K, P>, never>>) extends infer O
    ? { [Q in keyof O]: O[Q] }
    : never
}[keyof K];
