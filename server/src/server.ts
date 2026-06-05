import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cron from 'node-cron';
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

cron.schedule(
  '0 7,19 * * *',
  () => {
    console.log('Cron job pornit:', new Date().toISOString());
    refreshNews();
  },
  {
    timezone: 'Europe/Bucharest',
  },
);

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
