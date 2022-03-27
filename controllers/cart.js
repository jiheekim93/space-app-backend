const express = require('express');
const router = express.Router()
const Cart = require('../models/cart.js')

router.get('/', (req, res) => {
    Cart.find({}, (err, foundItem)=>{
        res.json(foundItem);
    });
})

router.get('/:id', (req, res) => {
    Cart.findById(req.params.id, (err, getItem)=>{
        res.json(getItem);
    })
  })


router.post('/', (req, res) => {
    Cart.create(req.body, (err, createdItem) => {
        res.json(createdItem)
    })
})

router.delete('/:id', (req, res) =>{
    Cart.findByIdAndRemove(req.params.id, (err, deteledItem) => {
        res.json(deteledItem)
    })
})

router.put('/:id', (req, res) => {
    Cart.findByIdAndUpdate(req.params.id, req.body,
    {new:true}, (err, updatedItem) => {
        res.json(updatedItem)
    })
})

module.exports = router