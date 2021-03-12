const router = require('express').Router();
const {Post,User,Comment} = require('../models');
router.get('/',(req,res)=>
{
    Post.findAll(
    {
        include:
        {
            model: User
        }
    })
    .then(data=>
    {
        const posts = data.map(post => post.get({ plain: true }) );
        // console.table(posts);
        res.render('homepage',{posts,loggedIn:req.session.loggedIn});
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
    Post.findAll(
        {
            where:
            {
                user_id:req.session.user_id
            },
            include:
            {
                model: User
            }
        })
        .then(data=>
        {
            const posts = data.map(post => post.get({ plain: true }) );
            const task = "create";
            res.render('dashboard',{posts,username:req.session.username,loggedIn:req.session.loggedIn,task:task});
        })
        .catch(err => 
        {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/dashboard/edit/:id', (req, res) => {
    Post.findOne(
        {
            where:
            {
                user_id:req.session.user_id,
                id:req.params.id
            },
            include:
            {
                model: User
            }
        })
        .then(data=>
        {
            const post = data.get({ plain: true });
            const task = "edit";
            res.render('edit-post',{post,username:req.session.username,loggedIn:req.session.loggedIn,task:task});
        })
        .catch(err => 
        {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;