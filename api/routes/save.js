'use strict';

var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const fs = require('fs');

/* GET main. */
router.get('/home', function(req, res, next) {
  fetch('https://admin.sirinsoftware.com/wp-json/wp/v2/pages?slug=home&_embed')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      fs.writeFileSync('public/res-json/home/index.json', data);
      fs.writeFileSync('../build/static/res-json/home/index.json', data);
    });
  res.json({'res':'ok'})
});

/* GET posts. */
router.get('/posts', async function(req, res, next) {
  async function getPosts(page){
    const url = `https://admin.sirinsoftware.com/wp-json/wp/v2/posts?page=${page}&_embed`;
    const rData = [];
    try {
      const res = await fetch(url);
      const json = await res.json();

      let data = JSON.stringify(json);
      await fs.writeFile(`../build/static/res-json/posts/index-p${page}.json`, data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
      });
      await fs.writeFile(`public/res-json/posts/index-p${page}.json`, data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
      });
    } catch (error) {
      console.log(error);
    }
  }
  const page = req.query && req.query.page ? req.query.page : 1;
  getPosts(page);

  res.json({'res':'ok'})
});

/* GET posts by slug. */
router.get('/posts/:slug', function(req, res, next) {
  fetch('https://admin.sirinsoftware.com/wp-json/wp/v2/posts?slug='+req.params.slug+'?_embed')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      fs.writeFileSync('public/res-json/posts/'+req.params.slug+'.json', data);
      fs.writeFileSync('../build/static/res-json/posts/'+req.params.slug+'.json', data);
    });
  res.json({'res':'ok'})
});

/* GET cases. */
router.get('/cases', function(req, res, next) {
  const page = req.query && req.query.page ? req.query.page : 1;
  fetch(`https://admin.sirinsoftware.com/wp-json/wp/v2/portfolio?page=${page}&per_page=999&_embed`)
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      fs.writeFileSync(`public/res-json/portfolio/index-p${page}.json`, data);
      fs.writeFileSync(`../build/static/res-json/portfolio/index-p${page}.json`, data);
    });
  res.json({'res':'ok'})
});

/* GET cases by slug. */
router.get('/cases/:slug', function(req, res, next) {
  fetch('https://admin.sirinsoftware.com/wp-json/wp/v2/portfolio?slug='+req.params.slug+'?_embed')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      fs.writeFileSync('public/res-json/portfolio/'+req.params.slug+'.json', data);
      fs.writeFileSync('../build/static/res-json/portfolio/'+req.params.slug+'.json', data);
    });
  res.json({'res':'ok'})
});


/* GET page by slug. */
router.get('/pages/:slug', function(req, res, next) {
  fetch('https://admin.sirinsoftware.com/wp-json/wp/v2/pages?slug='+req.params.slug+'?_embed')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      fs.writeFileSync('public/res-json/pages/'+req.params.slug+'.json', data);
      fs.writeFileSync('../build/static/res-json/pages/'+req.params.slug+'.json', data);
    });
  res.json({'res':'ok'})
});

/* GET teammembers. */
router.get('/teammembers', function(req, res, next) {
  const page = req.query && req.query.page ? req.query.page : 1;
  fetch(`https://admin.sirinsoftware.com/wp-json/wp/v2/teammembers?page=${page}&per_page=999&_embed`)
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      fs.writeFileSync(`public/res-json/teammembers/index-p${page}.json`, data);
      fs.writeFileSync(`../build/static/res-json/teammembers/index-p${page}.json`, data);
    });
  res.json({'res':'ok'})
});

/* GET categories. */
router.get('/categories', function(req, res, next) {
  fetch('https://admin.sirinsoftware.com/wp-json/wp/v2/categories')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      fs.writeFileSync('public/res-json/categories/index.json', data);
      fs.writeFileSync('../build/static/res-json/categories/index.json', data);
    });
  res.json({'res':'ok'})
});

/* GET portfolio-cat. */
router.get('/portfolio-cat', function(req, res, next) {
  fetch('https://admin.sirinsoftware.com/wp-json/wp/v2/portfolio-cat')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      fs.writeFileSync('public/res-json/portfolio-cat/index.json', data);
      fs.writeFileSync('../build/static/res-json/portfolio-cat/index.json', data);
    });
  res.json({'res':'ok'})
});

/* GET options. */
router.get('/options', function(req, res, next) {
  fetch('https://admin.sirinsoftware.com/wp-json/frontity-api/get-options')
    .then(res => res.json())
    .then(json => {
      let data = JSON.stringify(json);
      fs.writeFileSync('public/res-json/options/index.json', data);
      fs.writeFileSync('../build/static/res-json/options/index.json', data);
    });
  res.json({'res':'ok'})
});

module.exports = router;
