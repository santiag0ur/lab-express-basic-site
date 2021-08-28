const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/index', (request, response, next) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/photo_gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/photo_gallery.html');
});

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (request, response, next) => {
  response.sendFile(__dirname + '/views/works.html');
});

app.listen(3000, () => console.log('The basic-site-express is running'));
