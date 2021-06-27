import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {AIR_LOADER_OPTIONS} from '../../air-loaders.providers';
import {LoaderOptions} from '../../interfaces/loader.options';

@Component({
  selector: 'air-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {
  constructor(@Inject(AIR_LOADER_OPTIONS) readonly options: LoaderOptions) {
  }
}
