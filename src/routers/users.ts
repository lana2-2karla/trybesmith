import express from 'express';
import usersController from '../controllers/users.controller';
import usersValidateMiddleware from '../middlewares/users.validate';

const router = express.Router();

router.post('/users', usersValidateMiddleware, usersController.addUsersController);

export default router;