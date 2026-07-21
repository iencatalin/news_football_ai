import express from 'express';
import { getAllNews, getNews } from '../controllers/newsController';

const router = express.Router();

router.get('/', getNews);
router.get('/all', getAllNews);

export default router;
