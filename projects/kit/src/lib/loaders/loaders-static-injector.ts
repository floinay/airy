import {AbstractType, InjectFlags, InjectionToken, Injector, Type} from '@angular/core';

export class LoadersStaticInjector {
  private static injector: Injector;

  static get<T>(token: Type<T> | InjectionToken<T> | AbstractType<T>, notFoundValue?: T, flags?: InjectFlags): T {
    return this.injector.get(token, notFoundValue, flags);
  }

  static set(injector: Injector): void {
    if (!this.injector) {
      this.injector = injector;
    }
  }
}
