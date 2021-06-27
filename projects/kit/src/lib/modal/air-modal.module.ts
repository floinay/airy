import {NgModule} from '@angular/core';
import {CloseModalButtonComponent, ModalComponent} from '@airy-ui/kit/modal/components';
import {AirCdkModule} from '../../../../cdk/src/lib';
import {AirButtonModule, AirIconModule, AirLayoutModule} from '@airy-ui/kit';

@NgModule({
  declarations: [ModalComponent, CloseModalButtonComponent],
  imports: [AirCdkModule, AirLayoutModule, AirButtonModule, AirIconModule],
  exports: [ModalComponent, CloseModalButtonComponent]
})
export class AirModalModule {

}
