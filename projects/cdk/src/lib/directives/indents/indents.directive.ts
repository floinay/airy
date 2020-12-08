import { Directive, HostBinding, Input, OnInit } from '@angular/core';
import { ThemeSizes } from '../../size/size';
import { IndentsService } from './indents.service';

@Directive({
  selector: '[airPadding], [airPaddingTop], [airPaddingBottom],  [airPaddingStart], [airPaddingEnd], [airMargin], [airMarginStart], [airMarginEnd], [airMarginTop], [airMarginBottom]',
  providers: [IndentsService]
})
export class IndentsDirective implements OnInit {
  @Input() airPadding: ThemeSizes;
  @Input() airPaddingTop: ThemeSizes;
  @Input() airPaddingBottom: ThemeSizes;
  @Input() airPaddingStart: ThemeSizes;
  @Input() airPaddingEnd: ThemeSizes;

  @Input() airMargin: ThemeSizes;
  @Input() airMarginTop: ThemeSizes;
  @Input() airMarginBottom: ThemeSizes;
  @Input() airMarginStart: ThemeSizes;
  @Input() airMarginEnd: ThemeSizes;

  @HostBinding('style')
  styles = '';

  constructor(private indentsService: IndentsService) {

  }

  ngOnInit(): void {
    this.styles = this.indentsService.styles(this);
  }


}
