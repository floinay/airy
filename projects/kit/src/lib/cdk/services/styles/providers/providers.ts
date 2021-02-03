import {ChangesState} from '../../changes-state';
import {BreakpointsStylesState} from '../breakpoints-styles.state';
import {BreakpointsStylesParser} from '../breakpoints-styles.parser';
import {BreakpointsStylesManager} from '../breakpoints-styles.manager';
import {StylesService} from '../styles.service';

export const BREAKPOINTS_STYLES_PROVIDERS = [
  StylesService,
  ChangesState,
  BreakpointsStylesState,
  BreakpointsStylesParser,
  BreakpointsStylesManager
];
