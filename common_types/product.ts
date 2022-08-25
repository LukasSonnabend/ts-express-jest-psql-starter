import { Price } from "./price";

export type Product = {
  id: number;
  name: string;
  price: Price;
  description: string;
  image: string;
  quantity: number;
};