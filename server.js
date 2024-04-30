const express = require('express');
const path = require('path');
const expressSitemapXml = require("express-sitemap-xml");

const app = express();


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
    '/product/25',
    '/product/26',
    '/product/27',
    '/product/28',
    '/product/29',
    '/product/30',
    '/product/31',
    '/product/32',
    '/product/33',
    '/product/34',
    '/product/35',
    '/product/36',
    '/product/37',
    '/product/38',
    '/search/type/query'
  ];
};

app.use(expressSitemapXml(getUrls, 'https://greenman.kz'))
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res, next) => {
  if (req.url === '/sitemap.xml') {
      res.header('Content-Type', 'application/xml');
      res.sendFile(path.join(__dirname, 'sitemap.xml'));

  } else {
    // Предоставление index.html для остальных маршрутов
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
