export function toNumber(value: unknown, defaultValue: number): number {
  return !isNaN(Number(value)) ? Number(value) : defaultValue;
}
