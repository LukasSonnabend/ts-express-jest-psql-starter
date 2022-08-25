import express from 'express';
import { makeFakeOrder } from './utils';
const router = express.Router();
import { BaseOrder, OrderProcessed, OrderStatus, PaymentMethod } from '../../common_types_gograb/order';

router
  .get('/', (req, res) => {
    res.json({
      orders: makeFakeOrder(10),
      sentTime: new Date(),
  }).status(200);})
  .get('/:id', (req, res) => {
    res.json({
      orders: makeFakeOrder(1, parseInt(req.params.id)),
      sentTime: new Date(),
    }).status(200);
  })
  .post('/', (req, res) => {
    let order: BaseOrder = req.body;
    console.log(order)


  })

export default router;