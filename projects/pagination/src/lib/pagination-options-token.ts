import {InjectionToken} from '@angular/core';

export interface PaginationOptions {
  arrowStartIcon: string;
  arrowEndIcon: string;
}

export const PAGINATION_OPTIONS = new InjectionToken<PaginationOptions>('Air Pagination Default Options');
