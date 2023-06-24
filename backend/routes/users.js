import express from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/users.js';

const router = express.Router();

router.post('/', createUser);

router.get('/', getUsers);

router.get('/:id', getUserById);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;
