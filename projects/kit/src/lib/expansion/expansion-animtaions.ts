import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';

export const indicatorRotate = trigger('indicatorRotate', [
  state('collapsed, void', style({transform: 'rotate(0deg)'})),
  state('expanded', style({transform: 'rotate(180deg)'})),
  transition('expanded <=> collapsed, void => collapsed',
    animate(EXPANSION_PANEL_ANIMATION_TIMING)),
]);

export const bodyExpansion = trigger('bodyExpansion', [
  state('collapsed, void', style({height: '0px', visibility: 'hidden'})),
  state('expanded', style({height: '*', visibility: 'visible'})),
  transition('expanded <=> collapsed, void => collapsed',
    animate(EXPANSION_PANEL_ANIMATION_TIMING)),
]);

