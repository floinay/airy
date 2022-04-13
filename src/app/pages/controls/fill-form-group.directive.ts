import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Directive({
  selector: 'form[fill]',
  exportAs: 'fill'
})
export class FillFormGroupDirective implements OnChanges {
  @Input() formGroup?: FormGroup;
  @Input() fill?: { [key: string]: unknown };
  @Input() fillChild?: string;
  @Input() fillableStrategy: 'once' | 'always' = 'once';

  private needFill = true;

  private get fillValue(): any {
    if (this.fillChild && this.fill) {
      return this.fill[this.fillChild];
    }

    return this.fill;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.info('fill form changes:', changes);
    if (this.formGroup && this.fillValue && (this.needFill || this.fillableStrategy === 'always')) {
      this.formGroup.patchValue(this.fillValue, {emitEvent: false});
      this.needFill = false;
    }
  }

}
