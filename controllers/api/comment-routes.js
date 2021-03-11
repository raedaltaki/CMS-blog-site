const router = require('express').Router();
const {User,Post,Comment}= require('../../models');
const sequelize = require('../../config/connection');

router.get('/',(req,res)=>
{
    Comment.findAll(
    {

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
    Comment.findOne(
    {
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
    Comment.create(req.body)
    .then(data=>res.json(data))
    .catch(err => 
    {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id',(req,res)=>
{
    Comment.update(req.body,
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
    Comment.destroy({
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

module.exports = router;