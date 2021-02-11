export function clone<T extends {}>(obj: T): T {
  return {...obj};
}
