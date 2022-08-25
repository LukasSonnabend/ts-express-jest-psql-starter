import express from 'express';
import { Product } from '../../common_types_gograb/product';
import { makeFakeProducts } from './utils';

const router = express.Router();

router // return all products
  .get('/', (req, res) => {
    res.json({
      products: makeFakeProducts(10),
      sentTime: new Date(),
    });
  })


export default router;
