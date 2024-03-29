import {ChangeDetectionStrategy, Component, ElementRef, Inject, Input} from '@angular/core';
import {Pagination, PaginationCamel} from './pagination';
import {ActivatedRoute} from '@angular/router';
import {CanColorCtor, HasElementRef, mixinColor} from '@airy-ui/cdk';
import {PAGINATION_OPTIONS, PaginationOptions} from './pagination-options-token';
import {take} from 'rxjs/operators';
import {clone, isEmpty} from 'lodash-es';

const PaginationBase: CanColorCtor = mixinColor(HasElementRef, 'accent');
const MIN_CURRENT_PAGE = 3;

interface PageOrDelimiter {
  url: string[];
  delimiter?: true;
  page: number;
  queryParams?: {};
}

@Component({
  selector: 'air-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent extends PaginationBase {
  private _link: string[] = [];
  private _pagination!: PaginationCamel;
  pages: PageOrDelimiter[] = [];
  @Input() hideFirst = true;

  @Input() set pagination(value: Pagination | PaginationCamel) {
    if ('per_page' in value) {
      this._pagination = value;
    } else {
      this._pagination = {total: value.total, per_page: value.perPage, current_page: value.currentPage};
    }

    this.generatePages();
  }

  get pagination(): PaginationCamel {
    return this._pagination;
  }

  get currentPage(): number {
    return this.pagination.current_page;
  }

  get showNextButton() {
    return this.currentPage < this.pagesCount && this.pagesCount > MIN_CURRENT_PAGE;
  }

  get showPreviousButton() {
    return this.currentPage > 1 && this.pagesCount > MIN_CURRENT_PAGE;
  }

  @Input() set link(value: string[]) {
    this._link = value;
  }

  get link(): string[] {
    return this._link;
  }

  get pagesCount() {
    return Math.ceil(this.pagination.total / this.pagination.per_page);
  }

  get queryParams() {
    let queryParams;

    this.route.queryParams.pipe(take(1)).subscribe(params => {
      params = clone(params);

      for (let key in params) {
        if (isEmpty(params[key])) {
          delete params[key];
        }
      }

      queryParams = params;
    });

    return queryParams;
  }

  constructor(private route: ActivatedRoute, elementRef: ElementRef, @Inject(PAGINATION_OPTIONS) readonly options: PaginationOptions) {
    super(elementRef);
  }

  getLink(page: number) {
    if (page === 1 && this.hideFirst) {
      return this.link;
    }

    return [...this.link, String(page)];
  }

  getLinkContext(page: PageOrDelimiter): { url: string[], page: number, active: boolean } {
    return {...page, active: this.currentPage === page.page};
  }

  private generatePages(): void {
    let pages: PageOrDelimiter[] = [];
    const currentPageEndPosition = this.pagesCount - this.currentPage;

    if (this.pagesCount <= MIN_CURRENT_PAGE + 2) {
      this.pages = this.generatePagesDiapason(1, this.pagesCount);
      return;
    }

    if (this.currentPage <= MIN_CURRENT_PAGE) {
      pages = this.generatePagesDiapason(1, MIN_CURRENT_PAGE);
    } else {
      pages = [this.generatePage(1), this.generateDelimiter()];
      if (currentPageEndPosition < MIN_CURRENT_PAGE) {
        pages = [...pages, ...this.generatePagesDiapason(this.currentPage - (MIN_CURRENT_PAGE - currentPageEndPosition), this.currentPage)];
      } else {
        pages.push(this.generatePage(this.currentPage - 1));
        pages.push(this.generatePage(this.currentPage));
      }
    }

    if (currentPageEndPosition < MIN_CURRENT_PAGE) {
      pages = [...pages, ...this.generatePagesDiapason(this.currentPage + 1, this.pagesCount)];
    } else {
      pages.push(this.generatePage(Math.max(MIN_CURRENT_PAGE, this.currentPage) + 1));
      pages.push(this.generateDelimiter());
      pages.push(this.generatePage(this.pagesCount));
    }

    this.pages = pages;
  }

  private generatePagesDiapason(from: number, to: number): PageOrDelimiter[] {
    const pages: PageOrDelimiter[] = [];

    for (let i = from; i <= to; i++) {
      pages.push(this.generatePage(i));
    }

    return pages;
  }

  private generatePage(i: number): PageOrDelimiter {
    return {url: this.getLink(i), page: i, queryParams: this.queryParams};
  }

  private generateDelimiter(): PageOrDelimiter {
    return {url: [], page: 0, delimiter: true};
  }

}
