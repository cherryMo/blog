var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

var express = require('express');
var router = express.Router();
// 主页
router.get('/', function (req, res, next) {
    res.render('index');
});
// 注册
router.get('/reg', function (req, res, next) {
    res.render('reg');
});
router.post('/reg', function (req, res, next) {
});
// 登录
router.get('/login', function (req, res, next) {
    res.render('login');
});
router.post('/login', function (req, res, next) {
});
//注销
router.get('/logout', function (req, res, next) {
});
// 发表文章
router.get('/post', function (req, res, next) {
    res.render('post');
});
router.post('/post', function (req, res, next) {
});
// 查看文章
router.get('/post/:postId', function (req, res, next) {
    res.render('article');
});

module.exports = router;
