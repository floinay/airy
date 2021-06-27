export function throwIf(test: boolean, message: string): void {
  if (test) {
    throw new Error(message);
  }
}
