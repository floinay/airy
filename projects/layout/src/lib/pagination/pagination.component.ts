import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';
import { Pagination } from './pagination';
import { ActivatedRoute } from '@angular/router';
import { CanColorCtor, HasElementRef, mixinColor } from '@airy-ui/cdk';

const PaginationBase: CanColorCtor = mixinColor(HasElementRef, 'primary');


const MIN_CURRENT_PAGE = 4;

interface PageOrDelimiter {
  url: string[];
  delimiter?: true;
  page: number;
}

@Component({
  selector: 'air-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent extends PaginationBase {
  private _link: string[] = [];
  private _pagination!: Pagination;
  pages: PageOrDelimiter[] = [];
  @Input() hideFirst = true;

  @Input() set pagination(value: Pagination) {
    this._pagination = value;
    this.generatePages();
  }

  get pagination(): Pagination {
    return this._pagination;
  }

  get currentPage(): number {
    return this.pagination.current_page;
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

  constructor(private route: ActivatedRoute, elementRef: ElementRef) {
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
    if (this.currentPage <= MIN_CURRENT_PAGE) {
      pages = this.generatePagesDiapason(1, MIN_CURRENT_PAGE);
    } else {
      pages = [this.generatePage(1), this.generateDelimiter()];
      pages.push(this.generatePage(this.currentPage - 1));
      pages.push(this.generatePage(this.currentPage));
    }

    if (this.pagesCount - this.currentPage < MIN_CURRENT_PAGE) {
      pages = [...pages, ...this.generatePagesDiapason(this.currentPage + 1, this.pagesCount)];
    } else {
      pages.push(this.generatePage(this.currentPage + 1));
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
    return {url: this.getLink(i), page: i};
  }

  private generateDelimiter(): PageOrDelimiter {
    return {url: [], page: 0, delimiter: true};
  }

}
