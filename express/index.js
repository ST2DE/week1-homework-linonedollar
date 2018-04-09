const express = require('express');
const app = express(); //建立一個Express伺服器
const fs = require('fs')

app.listen(3000); //告訴server聽取3000這個Port

app.get('/', function (req, res) {
  res.send('首頁')
});
app.get('/about_me', function(req, res) {
          fs.createReadStream('./about.html').pipe(res)}
);