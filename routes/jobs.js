const express = require('express');
const router    = express.Router();
const Job       = require('../models/Job');

router.get('/test', (req,res)=>{
    res.send('deu certo')
});



// add via post
router.post('/add', (req, res) => {
    let {title, salary, company, description, email, new_jobs} = req.body;

    // insert
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_jobs
    })
    .then(() =>{res.redirect('/')})
    .catch(err => console.log(err));
});

module.exports = router;