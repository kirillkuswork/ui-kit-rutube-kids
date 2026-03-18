export const getTypedKeys = <T extends Record<string, unknown>>(
    obj: T,
) => Object.keys(obj) as Array<keyof T>;

export const getTypedObjectEntries = <T extends Record<string, unknown>>(
    obj: T,
) => Object.entries(obj) as Entries<T>;
