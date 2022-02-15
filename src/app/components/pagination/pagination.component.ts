import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Pagination, PaginationCamel} from '../../../../projects/pagination/src/lib/pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {pagination$: Observable<PaginationCamel> = this.route.paramMap.pipe(map(m => {
    return {
      total: 200,
      current_page: Number(m.get('page')) || 1,
      per_page: 12
    };
  }));

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
