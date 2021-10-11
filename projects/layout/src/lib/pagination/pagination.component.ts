import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Pagination} from './pagination';

const SIMPLE_PAGINATION_ITEMS_COUNT = 7;

@Component({
  selector: 'air-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit {
  private _link: string[] = [];
  private _options!: Pagination;
  @Input() hideFirst = true;

  @Input() set options(value: Pagination) {
    this._options = value;
  }

  get options(): Pagination {
    return this._options;
  }

  get currentPage(): number {
    return this.options.current_page;
  }

  @Input() set link(value: string[]) {
    this._link = value;
  }

  get pagesCount() {
    return Math.ceil(this.options.total / this.options.per_page);
  }

  get simplePagesList(): string[][] {
    const pages: string[][] = [];
    for (let i = 0; i < this.pagesCount; i++) {
      pages.push(this.getLink(i));
    }

    return pages;
  }

  get midPagesList(): { i: number, link: string[] }[] {
    return [
      {
        i: this.currentPage - 1,
        link: this.getLink(this.currentPage - 1),
      }, {
        i: this.currentPage,
        link: this.getLink(this.currentPage),
      },
      {
        i: this.currentPage + 1,
        link: this.getLink(this.currentPage + 1),
      }
    ];
  }

  get isSimple(): boolean {
    return this.pagesCount <= SIMPLE_PAGINATION_ITEMS_COUNT;
  }

  get link(): string[] {
    return this._link;
  }

  get currentPageLink(): string[] {
    if (this.hideFirst && this.options.current_page === 1) {
      return this._link;
    }

    return [...this._link, String(this.options.current_page)];
  }

  getLink(page: number) {
    if (page === this.options.current_page) {
      return this.currentPageLink;
    }

    return [...this.link, String(page)];
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
