import { MultiProduct } from './multi-product';

export interface SingleCart {
  id: number;
  userId: number;
  date: string;
  products: MultiProduct[];
  __v: number;
}
