export function mapObjectKeys<T extends { [key: string]: unknown }>(object: T, callback: (key: string, value: unknown) => string): T {
  const newObject: { [key: string]: unknown } = {};
  for (const key of Object.keys(object)) {
    const value = object[key];
    const newKey = callback(key, value);
    newObject[newKey] = value;
  }

  return newObject as T;
}
