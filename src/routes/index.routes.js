const { Router } = require('express');
const app = require('../server');
const router = Router();

const {
	renderIndex,
	renderAbout,
} = require('../controllers/index.controllers');

router.get('/', renderIndex);

router.get('/about', renderAbout);

module.exports = router;
