import {ModuleWithProviders, NgModule, Provider, Type} from '@angular/core';
import {Direction, Directionality} from '@angular/cdk/bidi';
import {DEFAULT_DIRECTION} from './direction.providers';
import {DirectionDirective} from './directives';

const declarations: Array<Type<any> | any[]> = [DirectionDirective];

@NgModule({
  declarations, exports: declarations
})
export class AirDirectionModule {

  static forRoot(defaultDirection?: Direction): ModuleWithProviders<AirDirectionModule> {
    return {
      ngModule: AirDirectionModule,
      providers: [
        this.defaultDirectionProvider(defaultDirection)
      ]
    };
  }

  private static defaultDirectionProvider(defaultDirection?: Direction): Provider {
    if (defaultDirection) {
      return {provide: DEFAULT_DIRECTION, useValue: defaultDirection};
    }

    return {provide: DEFAULT_DIRECTION, useExisting: Directionality};
  }

}
