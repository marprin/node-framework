'use strict';

module.exports = (params) => {
    const app = params.app;
    const middleware = params.middleware;

    app.get('', (req, res, next) => {
        console.log('tes');
        res.send('in home');
    });
}

// const express = require('express');
// const router = express.Router();

// router.get('', (req, res) => {
//     console.log('tes');
//     res.send('succes');
// })

// module.exports = router;