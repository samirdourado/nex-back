export class ProductDTO {
  readonly item: string;
  readonly category: string;
  readonly image: string | null;
  readonly unit: number;
  readonly price: number;
  readonly user_id: string;
}
