import express from 'express';
import {
  getAllNews,
  getCachedCount,
  getNews,
  refreshNews,
} from '../controllers/newsController';

const router = express.Router();

router.get('/', getNews);
router.get('/all', getAllNews);
router.get('/refresh', async (req, res) => {
  await refreshNews();
  res.json({ message: 'Refreshed', count: getCachedCount() });
});
export default router;
