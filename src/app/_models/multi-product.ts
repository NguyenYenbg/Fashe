import { SingleProduct } from './single-product';

export interface MultiProduct {
  [x: string]: number;
  products: any;
  productsCount: number;
}
