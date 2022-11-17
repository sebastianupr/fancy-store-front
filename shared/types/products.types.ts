export type Product = {
  id: string;
  handle: string;
  description: string;
  image: ProductImage | null;
  productType: string | null;
  title: string;
  totalInventory: 0;
  price: string;
  createdAt: string
  updatedAt: string;
}

type ProductImage = {
  id: string;
  url: string;
}