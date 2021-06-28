import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductEditPageComponent } from './pages/product-edit-page/product-edit-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductResolverService } from './services/product-resolver.service'
import { GreenHouseAppComponent } from './pages/green-house-app/green-house-app.component';

const routes: Routes = [
  {
    path: 'product', component: ProductPageComponent,
    children: [
      { path: 'add', component: ProductEditPageComponent },
    ]
  },
  {
    path: 'product/:id', component: ProductDetailsPageComponent,
    resolve: { product: ProductResolverService },
    canActivate: [AuthGuard],
    children: [
      { path: 'edit', component: ProductEditPageComponent, resolve: { product: ProductResolverService } }
    ]
  },
  {
    path: '', component: GreenHouseAppComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
