export function randomId(prefix = 'air'): string {
  return '_' + prefix + Math.random().toString(36).substr(2, 9);
}
