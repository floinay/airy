import {ElementRef, Inject, Injectable} from '@angular/core';
import {CdkModuleOptions, CdkSizeOption} from '../../options/cdk-module.options';
import {CDK_MODULE_OPTIONS} from '../../options/cdk-module-options.provider';
import {IndentsDirective} from './indents.directive';
import {PROPERTIES_MAP, PROPERTIES_MAP_KEYS, PROPERTIES_MAP_VALUES} from './static/properties.map';


@Injectable()
export class IndentsService {


  private directive!: IndentsDirective;

  constructor(private elementRef: ElementRef<HTMLDivElement>,
              @Inject(CDK_MODULE_OPTIONS) readonly options: CdkModuleOptions) {
  }

  styles(directive: IndentsDirective): void {
    this.directive = directive;

    PROPERTIES_MAP_KEYS.filter(key => {
      return this.elementRef.nativeElement.hasAttribute(key);
    }).forEach((key) => {
      // @ts-ignore
      const property = PROPERTIES_MAP[key];
      this.elementRef.nativeElement.style.setProperty(property, this.value(key) + 'px');
    });
  }

  private clearStyles(): void {
    PROPERTIES_MAP_VALUES.forEach(style => {
      this.elementRef.nativeElement.style.removeProperty(style);
    });
  }

  private value(key: string): string {
    // @ts-ignore
    const size = this.directive[key];
    if (!size) {
      return this.getSizes(key).default;
    }

    // @ts-ignore
    return this.getSizes(key)[size];
  }

  private getSizes(key: string): CdkSizeOption {
    return this.isMargin(key) ? this.options.margins : this.options.paddings;
  }

  private isMargin(key: string): boolean {
    return key.includes('margin');
  }
}
