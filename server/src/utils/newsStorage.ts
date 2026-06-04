import fs from 'fs/promises';
import path from 'path';

const FILE_PATH = path.join(process.cwd(), 'data', 'news.json');

export async function loadNews() {
  try {
    const data = await fs.readFile(FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function saveNews(news: unknown) {
  await fs.writeFile(FILE_PATH, JSON.stringify(news, null, 2), 'utf-8');
}
