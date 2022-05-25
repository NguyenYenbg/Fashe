import { Rating } from './rating';

export interface SingleProduct {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
  };
}
