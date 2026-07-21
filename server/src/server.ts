import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import newsRouter from './routes/news';
import {
  getCachedCount,
  initNews,
  refreshNews,
} from './controllers/newsController';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/news', newsRouter);

const start = async () => {
  await initNews();

  app.listen(PORT, () => {
    console.log(`Server pornit pe portul ${PORT}`);
  });

  if (getCachedCount() === 0) {
    await refreshNews();
  }
};

start();
