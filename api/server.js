const express = require('express');
const XMLHttpRequest = require('xhr2');
const app = express(),
  bodyParser = require('body-parser');
port = 3080;

app.use(bodyParser.json());

app.get('/api/tracks', async (req, res) => {
  if (!!req.query.search && typeof req.query.search === 'string') {
    let request = new XMLHttpRequest();
    request.open('GET', `https://api.deezer.com/search?q=${req.query.search}`);
    request.send();
    return (request.onload = () => {
      if (request.status === 200) {
        return res.json(JSON.parse(request.response));
      } else {
        console.log(`Error ${request.status} ${request.statusText}`);
      }
    });
  } else {
    res.json({});
  }
});

app.get('/api/artist', async (req, res) => {
  if (!!req.query.id && typeof req.query.id === 'string') {
    let request = new XMLHttpRequest();
    request.open('GET', `https://api.deezer.com/artist/${req.query.id}`);
    request.send();
    return (request.onload = () => {
      if (request.status === 200) {
        return res.json(JSON.parse(request.response));
      } else {
        console.log(`Error ${request.status} ${request.statusText}`);
      }
    });
  } else {
    res.json({});
  }
});

app.get('/api/top-list', async (req, res) => {
  if (!!req.query.id && typeof req.query.id === 'string') {
    let request = new XMLHttpRequest();
    request.open('GET', `https://api.deezer.com/artist/${req.query.id}/top?limit=5`);
    request.send();
    return (request.onload = () => {
      if (request.status === 200) {
        return res.json(JSON.parse(request.response));
      } else {
        console.log(`Error ${request.status} ${request.statusText}`);
      }
    });
  } else {
    res.json({});
  }
});

app.get('/api/albums', async (req, res) => {
  if (!!req.query.id && typeof req.query.id === 'string') {
    let request = new XMLHttpRequest();
    request.open('GET', `https://api.deezer.com/artist/${req.query.id}/albums`);
    request.send();
    return (request.onload = () => {
      if (request.status === 200) {
        return res.json(JSON.parse(request.response));
      } else {
        console.log(`Error ${request.status} ${request.statusText}`);
      }
    });
  } else {
    res.json({});
  }
});

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}/`);
});
