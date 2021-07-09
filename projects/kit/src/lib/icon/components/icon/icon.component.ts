import {ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, Input} from '@angular/core';
import {IconFormat} from '../../types';
import {ICON_MODULE_OPTIONS} from '../../options';
import {IconModuleOptions} from '../../options';
import {CanSizeCtor, HasElementRef, mixinSize} from '@airy-ui/cdk';

const IconBase: CanSizeCtor = mixinSize(HasElementRef);

@Component({
  selector: 'air-icon',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./icon.component.scss', 'icon-sizes.scss'],
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: ['size'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent extends IconBase {
  @Input() format: IconFormat = this.options.defaultFormat;

  @Input() name = '';

  @Input() folder = this.options.pathToStaticIcons;

  @HostBinding('style.background-image')
  get src(): string {
    if (!this.name) {
      return '';
    }

    return `url(${this.folder}/${this.name}.${this.format})`;
  }

  constructor(private elementRef: ElementRef, @Inject(ICON_MODULE_OPTIONS) readonly options: IconModuleOptions) {
    super(elementRef);
  }
}
