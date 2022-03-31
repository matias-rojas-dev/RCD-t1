const express = require('express');
const router = express.Router();

const { rutController } = require('../controllers/rutController');


module.exports = function () {

    router.get('/rut', rutController)
    return router;
}