const router = require('express').Router();
const {User,Post,Comment}= require('../../models');
const sequelize = require('../../config/connection');

router.get('/',(req,res)=>
{
    User.findAll(
    {
            attributes: { exclude: ['password'] }
        }
    )
    .then(data=>res.json(data))
    .catch(err => 
    {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id',(req,res)=>
{
    User.findOne(
    {
        attributes: 
        { 
            exclude: ['password'] 
        },
        where: 
        {
            id : req.params.id
        }
    })
    .then(data=>res.json(data))
    .catch(err => 
    {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/',(req,res)=>
{
    User.create(req.body)
    .then(data=>res.json(data))
    .catch(err => 
    {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id',(req,res)=>
{
    User.update(req.body,
        {
            where:
            {
                id: req.params.id
            }
        })
    .then(data=>res.json(data))
    .catch(err => 
    {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id',(req,res)=>
{
    User.destroy({
            where:
            {
                id: req.params.id
            }
        })
    .then(data=>res.json(data))
    .catch(err => 
    {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/login',(req,res)=>
{
    User.findOne(
        {
            where:
            {
                username: req.body.username
            }
        }
    )
    .then(data=>
    {
        if(!data)
        {
            res.status(400).json({ message: 'Incorrect username!' });
            window.alert('Incorrect username!');
            return; 
        }

        const pwd = data.checkPassword(req.body.password);
        
        if(!pwd)
        {
            res.status(400).json({ message: 'Incorrect password!' });
            window.alert('Incorrect password!');
            return;
        }
        res.json('Loggedin!');
        window.alert('Loggedin!');
    })
    .catch(err => 
    {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/logout',(req,res)=>
{

});

module.exports = router;