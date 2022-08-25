import {Product} from './product';

export enum OrderStatus {
  Submitted = 'Submitted',
  Pending = 'pending',
  Confirmed = 'confirmed',
  EnRoute = 'en-route',
  Delivered = 'delivered',
  Cancelled = 'cancelled',
}

export enum PaymentMethod {
  PayPal = 'PayPal',
  Stripe = 'Stripe',
}


export interface BaseOrder {
  customerId: number;
  datePlaced: Date;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  confirmationNumber?: string;
  discount?: number;
  discountCode?: string;
  products: Product[];
}

export interface OrderProcessed extends BaseOrder {
  id: number;
  products: Product[];
  total: number;
  acceptedOffer: boolean;
}
