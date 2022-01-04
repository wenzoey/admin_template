var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* test */
router.get('/test', (req, res) => {
  res.send('kk')
})

/* static */
app.use('/static', express.static(path.join(__dirname, 'public')))

module.exports = router;
