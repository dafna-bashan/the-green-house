import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { ItemService } from 'src/app/services/item.service';
import { LoadItem, LoadItems, RemoveItem } from 'src/app/store/actions/item.actions';
import { State } from '../../store/store';
@Component({
  selector: 'product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {

  constructor(private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<State>) {
    this.product$ = this.store.select('productState').pipe(pluck('item'));
  }
  product$: Observable<Product | null>
  product: Product
  subscription: Subscription
  productSubscription: Subscription
  productToDisplay :  Product
  
  async ngOnInit(): Promise<void> {
    this.subscription = this.route.data.subscribe(data => {
      this.product = data.product
    })
    this.store.dispatch(new LoadItem(this.product._id))
    this.productSubscription = this.product$.subscribe(product=>{
      this.productToDisplay = product
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
    this.productSubscription.unsubscribe()
  }

  onRemoveProduct(itemId: string) {
    console.log('itemApp: dispatching remove');
    this.store.dispatch(new RemoveItem(itemId));
    this.router.navigateByUrl('/product')
  }

}
