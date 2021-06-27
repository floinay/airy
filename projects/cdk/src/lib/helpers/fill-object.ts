export function fillObject(object: { [key: string]: any }, secondObject: { [key: string]: any }): void {
  Object.entries(secondObject).forEach(([key, value]) => {
    object[key] = value;
  });
}
