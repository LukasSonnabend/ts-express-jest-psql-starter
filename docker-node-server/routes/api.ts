import express from 'express';
import productRoutes from "./products";
import orderRoutes from "./orders";
import userRoutes from "./users";


const router = express.Router();

router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/orders', orderRoutes);

export default router;
