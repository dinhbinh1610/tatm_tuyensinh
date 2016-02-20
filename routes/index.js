var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/gioithieu', function(req, res, next) {
  res.render('gioithieu', { title: 'Trang Giới thiệu' });
});
router.get('/lichkhaigiang', function(req, res, next) {
  res.render('lichkhaigiang', { title: 'Trang lịch khai giảng' });
});
router.get('/uudai', function(req, res, next) {
  res.render('uudai', { title: 'Trang ưu đãi' });
});
module.exports = router;
