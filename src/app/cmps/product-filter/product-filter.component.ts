import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterBy } from 'src/app/models/filter-by';


@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {


  ngOnInit(): void {
  }
  @Input() filterBy: FilterBy
  @Output() onFilter = new EventEmitter<FilterBy>()

  filterByCopy: FilterBy

  constructor() {
    this.filterByCopy = { ...this.filterBy }
  }
}
