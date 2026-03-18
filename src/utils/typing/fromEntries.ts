type EntriesType = [PropertyKey, unknown][] | ReadonlyArray<readonly [PropertyKey, unknown]>;

type DeepWritable<ObjT> = { -readonly [P in keyof ObjT]: DeepWritable<ObjT[P]> };
type UnionToIntersection<UnionT>
    = (UnionT extends any ? (k: UnionT) => void : never) extends ((k: infer I) => void) ? I : never;

type UnionObjectFromArrayOfPairs<ArrayT extends EntriesType> =
    DeepWritable<ArrayT> extends (infer R)[]
        ? R extends [infer key, infer val] ? { [prop in key & PropertyKey]: val } : never : never;
type MergeIntersectingObjects<ObjT> = { [key in keyof ObjT]: ObjT[key] };
type EntriesToObject<ArrayT extends EntriesType> = MergeIntersectingObjects<
UnionToIntersection<UnionObjectFromArrayOfPairs<ArrayT>>>;

export function getTypedObjectFromEntries<ArrayT extends EntriesType>(
    arr: ArrayT,
): EntriesToObject<ArrayT> {
    return Object.fromEntries(arr) as EntriesToObject<ArrayT>;
}
