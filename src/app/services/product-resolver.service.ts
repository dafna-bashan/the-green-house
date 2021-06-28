import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ItemService } from './item.service'

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<Observable<Product>> {

  constructor(private itemService: ItemService) { }

  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params
    return this.itemService.getById(id)
  }
}
