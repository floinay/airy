import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {BREAKPOINTS_STYLES_PROVIDERS, BreakpointsStylesManager} from '@airy-ui/cdk';
import {ChangesState} from '@airy-ui/cdk';

@Directive({
  selector: `
  [airFlex],
  [xs.airFlex],
  [sm.airFlex],
  [md.airFlex],
  [lg.airFlex],
  [xl.airFlex],
  [ltSm.airFlex],
  [ltMd.airFlex],
  [ltLg.airFlex],
  [ltXl.airFlex],
  [gtSm.airFlex],
  [gtMd.airFlex],
  [gtLg.airFlex],
  [gtXs.airFlex],
  `,
  providers: BREAKPOINTS_STYLES_PROVIDERS
})
@UntilDestroy()
export class FlexDirective implements OnChanges {
  @Input() airFlex?: string;
  @Input('xs.airFlex') xsAirFlex?: string;
  @Input('sm.airFlex') smAirFlex?: string;
  @Input('md.airFlex') mdAirFlex?: string;
  @Input('lg.airFlex') lgAirFlex?: string;
  @Input('xl.airFlex') xlAirFlex?: string;
  @Input('ltSm.airFlex') ltSmAirFlex?: string;
  @Input('ltMd.airFlex') ltMdAirFlex?: string;
  @Input('ltLg.airFlex') ltLgAirFlex?: string;
  @Input('ltXl.airFlex') ltXlAirFlex?: string;
  @Input('gtSm.airFlex') gtSmAirFlex?: string;
  @Input('gtMd.airFlex') gtMdAirFlex?: string;
  @Input('gtLg.airFlex') gtLgAirFlex?: string;
  @Input('gtXs.airFlex') gtXsAirFlex?: string;

  constructor(private changesState: ChangesState<string, string>, breakpointsStylesManager: BreakpointsStylesManager) {
    breakpointsStylesManager.watch().pipe(untilDestroyed(this)).subscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changesState.patch(changes);
  }

}
