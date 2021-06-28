import { Component, OnInit } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { State } from '../../store/store';
import { LoadItems } from '../../store/actions/item.actions';
import { FilterBy } from 'src/app/models/filter-by';

@Component({
  selector: 'product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  items$: Observable<Product[]>;
  item$: Observable<Product | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string>;
  filterBy: FilterBy

  constructor(private store: Store<State>) {
    this.items$ = this.store.select('productState').pipe(pluck('items'));
    this.item$ = this.store.select('productState').pipe(pluck('item'));
    this.isLoading$ = this.store.select('productState').pipe(pluck('isLoading'));
    this.error$ = this.store.select('productState').pipe(pluck('error'));
  }

  ngOnInit(): void {
    console.log('itemApp: dispatching LoadItems => effects');
    this.store.dispatch(new LoadItems(this.filterBy));
  }

  onSetFilter(filterBy: FilterBy) {
    this.filterBy = {...filterBy}
    console.log('itemApp: dispatching LoadItems => effects');
    this.store.dispatch(new LoadItems(this.filterBy));
  }
}
