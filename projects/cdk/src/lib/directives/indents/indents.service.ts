import { ElementRef, Inject, Injectable } from '@angular/core';
import { CdkModuleOptions, CdkSizeOption } from '../../options/cdk-module.options';
import { CDK_MODULE_OPTIONS } from '../../options/cdk-module-options.provider';
import { IndentsDirective } from './indents.directive';

@Injectable()
export class IndentsService {
  private stylesMapping = {
    airPadding: 'padding',
    airPaddingTop: 'padding-top',
    airPaddingBottom: 'padding-bottom',
    airPaddingStart: 'padding-inline-start',
    airPaddingEnd: 'padding-inline-end',
    airMargin: 'margin',
    airMarginTop: 'margin-top',
    airMarginBottom: 'margin-bottom',
    airMarginStat: 'margin-inline-start',
    airMarginEnd: 'margin-inline-end'
  };

  private directive!: IndentsDirective;

  constructor(private elementRef: ElementRef, @Inject(CDK_MODULE_OPTIONS) readonly options: CdkModuleOptions) {
  }

  styles(directive: IndentsDirective): string {
    this.directive = directive;
    return Object.keys(this.stylesMapping).filter(key => {
      return this.elementRef.nativeElement.hasAttribute(key);
    }).map((key) => {
      return this.getStyle(key);
    }).join(';');
  }

  private getStyle(key: string): string {
    // @ts-ignore
    const style = this.stylesMapping[key];
    const styleValue = this.getStyleValue(key);

    return `${style}:${styleValue}px`;
  }

  private getStyleValue(key: string): number {
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
