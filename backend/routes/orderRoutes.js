import express from 'express'
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders
} from '../controllers/orderControllers.js'
import { protect, admin } from '../middleware/authMiddleware.js'

//Authorize middleware (protect function) that verify token of user before go to profile page
router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)


export default router