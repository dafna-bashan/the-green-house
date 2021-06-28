import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as productModule from './reducers/product.reducer';

import { environment } from '../../environments/environment';

export interface State {
  productState: productModule.ProductState;
}

export const reducers: ActionReducerMap<State> = {
  productState: productModule.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
