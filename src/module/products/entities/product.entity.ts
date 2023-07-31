import { randomUUID } from 'node:crypto';

export class Product {
  readonly id: string;
  item: string;
  category: string;
  image: string | null;
  unit: number;
  price: number;
  user_id?: string;

  constructor() {
    this.id = randomUUID();
  }
}
