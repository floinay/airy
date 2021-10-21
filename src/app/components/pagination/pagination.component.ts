import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Pagination } from '../../../../projects/pagination/src/lib/pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  pagination$: Observable<Pagination> = this.route.paramMap.pipe(map(m => {
    return {
      total: 100,
      current_page: Number(m.get('page')) || 1,
      per_page: 8
    };
  }));

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
