export abstract class AbstractOptionsService<T extends {}> {
  abstract options: T;
  abstract defaultOptions: Partial<T>;

  get<K extends keyof T>(key: K, defaultValue?: T[K]): T[K] {
    const value = this.options[key];
    if (value === undefined || value === null) {

      if (defaultValue) {
        return defaultValue;
      }

      if (key in this.defaultOptions) {
        return this.defaultOptions[key] as T[K];
      }
    }

    return value;
  }
}
