import { NgModule } from '@angular/core';
import { CloseModalButtonComponent, ModalComponent } from './components';
import { AirCdkModule } from '@airy-ui/cdk';
import { AirLayoutModule } from '@airy-ui/layout';
import { AirButtonModule } from '@airy-ui/button';
import { AirIconModule } from '@airy-ui/icon';
import { ModalWrapperComponent } from './components/modal-wrapper/modal-wrapper.component';
import { AIR_MODAL_DEFAULT_OPTIONS, DEFAULT_OPTIONS } from './modal-options.providers';

@NgModule({
  declarations: [ModalComponent, CloseModalButtonComponent, ModalWrapperComponent],
  imports: [AirCdkModule, AirLayoutModule, AirButtonModule, AirIconModule],
  exports: [ModalComponent, CloseModalButtonComponent, ModalWrapperComponent],
  providers: [
    {
      provide: AIR_MODAL_DEFAULT_OPTIONS,
      useValue: DEFAULT_OPTIONS
    }
  ]
})
export class AirModalModule {

}
