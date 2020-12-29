var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/banner', function(req, res, next) {
  res.send({
	  msg:'查询成功',
	  code:0
  });
});

module.exports = router;
