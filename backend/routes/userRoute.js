import express from 'express'
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

//This is 2 different route
router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
//Authorize middleware (protect function) that verify token of user before go to profile page
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)

export default router