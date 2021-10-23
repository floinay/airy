import {InjectionToken} from '@angular/core';

export interface PaginationOptions {
  previousButtonIcon: string;
  nextButtonIcon: string;
}

export const PAGINATION_OPTIONS = new InjectionToken<PaginationOptions>('Air Pagination Default Options');
