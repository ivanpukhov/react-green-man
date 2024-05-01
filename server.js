
const express = require('express');
const path = require('path');
const expressSitemapXml = require('express-sitemap-xml');
const compression = require('compression');

const app = express();

// Предопределенный список URL для карты сайта
const getUrls = async () => {
  return [
    '/',
    '/cart',
    '/catalog',
    '/auth',
    '/profile',
    '/product/1',
    '/product/2',
    '/product/3',
    '/product/4',
    '/product/5',
    '/product/6',
    '/product/7',
    '/product/8',
    '/product/9',
    '/product/10',
    '/product/11',
    '/product/12',
    '/product/13',
    '/product/14',
    '/product/15',
    '/product/16',
    '/product/17',
    '/product/18',
    '/product/19',
    '/product/20',
    '/product/21',
    '/product/22',
    '/product/23',
    '/product/24',
    '/product/26',
    '/product/27',
    '/product/32',
    '/product/33',
    '/product/34',
    '/product/35',
    '/product/36',
    '/product/37',
    '/product/38',
  ];
};

app.use(compression()); // Сжатие всех HTTP ответов
app.use(expressSitemapXml(getUrls, 'https://greenman.kz')); // Генерация Sitemap

// Настройка кэширования статических файлов
app.use(express.static(path.join(__dirname, 'build'), {
  etag: true, // Использование ETag для кэширования
  lastModified: true, // Использование заголовка Last-Modified
  setHeaders: (res, path) => {
    if (express.static.mime.lookup(path) === 'text/html') {
      res.setHeader('Cache-Control', 'public, max-age=0'); // Исключение HTML из кэширования
    } else {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable'); // Кэширование остальных статических ресурсов на год
    }
  }
}));

// Перенаправление всех запросов на index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
