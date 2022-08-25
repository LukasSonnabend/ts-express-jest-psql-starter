import { Product } from '../../common_types/product';
import { BaseOrder, OrderProcessed, OrderStatus, PaymentMethod } from '../../common_types/order';
import { faker } from '@faker-js/faker';



const makeFakeProducts = (count: number): Product[] => {
  return Array(count).fill(0).map((_, i) => {

    const price = { dollars: Math.round(Math.random() * 100), cents: Math.round(Math.random() * 100) };
    return {
      id: i,
      name: faker.commerce.productName(),
      price,
      description: faker.lorem.paragraph(),
      image: faker.image.image(),
      quantity: Math.round(Math.random() * 10)
    }
  })
}

const makeFakeOrder = (count: number, customerId: number = -1): BaseOrder[] | OrderProcessed[] => {
  return Array(count).fill(0).map((_, i) => {

    const products = makeFakeProducts(Math.round(Math.random() * 10));

    if (customerId === -1) {
      return {
        customerId: i,
        datePlaced: new Date(),
        paymentMethod: PaymentMethod.PayPal,
        status: OrderStatus.Submitted,
        products: products,
      }
    } else {
      return {
        id: i,
        customerId: customerId,
        datePlaced: new Date(),
        paymentMethod: PaymentMethod.PayPal,
        products: products,
        status: OrderStatus.Pending,
        total: products.reduce((acc, product) => acc + product.price.dollars + product.price.cents, 0) / 100,
        acceptedOffer: true,
      }
    }

  })
}


export { makeFakeProducts, makeFakeOrder };