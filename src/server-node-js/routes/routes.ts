import express from 'express';
import { getBoilerplate } from '../controllers/boilerplate.controller';
import boilerplateMiddleware from '../middlewares/boilerplate.middleware';

const router = express.Router();

router.get('/boilerplate/:id', boilerplateMiddleware, getBoilerplate);

export default router;