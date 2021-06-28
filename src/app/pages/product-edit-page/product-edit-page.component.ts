import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../../store/store';
import { Observable, Subscription } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { ItemService } from 'src/app/services/item.service';
import { LoadItem, RemoveItem, SaveItem } from 'src/app/store/actions/item.actions';

@Component({
  selector: 'product-edit-page',
  templateUrl: './product-edit-page.component.html',
  styleUrls: ['./product-edit-page.component.scss']
})
export class ProductEditPageComponent implements OnInit {

  constructor(private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<State>) {
    this.product$ = this.store.select('productState').pipe(pluck('item'));
  }

  product$: Observable<Product | null>
  subscription: Subscription | null = null;
  product: Product

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(data => {
      if (data.product) this.product = JSON.parse(JSON.stringify(data.product))
      else this.product = this.itemService.emptyItem
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onBack() {
    this.router.navigateByUrl(this.product._id ? `/product/${this.product._id}` : '/product')
  }

  onSaveProduct() {
    this.store.dispatch(new SaveItem(this.product));
    console.log('Saving: ', this.product);
    this.router.navigateByUrl(this.product._id ? `/product/${this.product._id}` : '/product')
  }


}
