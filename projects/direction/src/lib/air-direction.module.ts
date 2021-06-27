import {ModuleWithProviders, NgModule, Provider, Type} from '@angular/core';
import {BidiModule, Direction} from '@angular/cdk/bidi';
import {DEFAULT_DIRECTION} from './direction.providers';
import {DirectionDirective} from './directives';
import {DirectionService} from './services';

const declarations: Array<Type<any> | any[]> = [DirectionDirective];

@NgModule({
  declarations, exports: declarations,
  imports: [BidiModule],
  providers: [DirectionService]
})
export class AirDirectionModule {

  static forRoot(defaultDirection?: Direction): ModuleWithProviders<AirDirectionModule> {
    const providers: Provider[] = [DirectionService];

    if (defaultDirection) {
      providers.push({provide: DEFAULT_DIRECTION, useValue: defaultDirection});
    }

    return {
      ngModule: AirDirectionModule,
      providers
    };
  }


}
