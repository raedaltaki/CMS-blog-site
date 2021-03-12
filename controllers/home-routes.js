const router = require('express').Router();
const {Post} = require('../models');
router.get('/',(req,res)=>
{
    Post.findAll(
    {

    })
    .then(data=>
    {
        const posts = data.map(post => post.get({ plain: true }) );
        // console.table(posts);
        res.render('homepage',{posts});
    })
    .catch(err => 
    {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    
    res.render('login');
});

router.get('/signup', (req, res) => {
    
    res.render('signup');
});

router.get('/dashboard', (req, res) => {
    
    res.render('dashboard');
});

module.exports = router;