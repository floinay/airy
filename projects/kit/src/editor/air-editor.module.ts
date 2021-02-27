import {NgModule} from '@angular/core';
import {EditorComponent} from './components';

const declarations = [EditorComponent];

@NgModule({
  declarations,
  exports: declarations
})
export class AirEditorModule {

}
