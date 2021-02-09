import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {BREAKPOINTS_STYLES_PROVIDERS} from '../../../cdk/services/styles/providers/providers';
import {BreakpointsStylesManager, ChangesState} from '../../../cdk';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

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
  @Input('xs.airFlex') xsAirLayout?: string;
  @Input('sm.airFlex') smAirLayout?: string;
  @Input('md.airFlex') mdAirLayout?: string;
  @Input('lg.airFlex') lgAirLayout?: string;
  @Input('xl.airFlex') xlAirLayout?: string;
  @Input('ltSm.airFlex') ltSmAirLayout?: string;
  @Input('ltMd.airFlex') ltMdAirLayout?: string;
  @Input('ltLg.airFlex') ltLgAirLayout?: string;
  @Input('ltXl.airFlex') ltXlAirLayout?: string;
  @Input('gtSm.airFlex') gtSmAirLayout?: string;
  @Input('gtMd.airFlex') gtMdAirLayout?: string;
  @Input('gtLg.airFlex') gtLgAirLayout?: string;
  @Input('gtXs.airFlex') gtXsAirLayout?: string;

  constructor(private changesState: ChangesState<string, string>, breakpointsStylesManager: BreakpointsStylesManager) {
    breakpointsStylesManager.watch().pipe(untilDestroyed(this)).subscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changesState.patch(changes);
  }

}
