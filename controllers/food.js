const express = require('express');
const router = express.Router()
const Food = require('../models/food.js')

router.get('/', (req, res) => {
    Food.find({}, (err, foundFood)=>{
        res.json(foundFood);
    });
  })
  
router.post('/', (req, res) => {
    Food.create(req.body, (err, createdFood) => {
        res.json(createdFood)
    })
})

router.delete('/:id', (req, res) => {
    Food.findByIdAndRemove(req.params.id, (err, deletedFood) => {
        res.json(deletedFood)
    })
})

router.put('/:id', (req, res) => {
    Food.findByIdAndUpdate(req.params.id, req.body,
    {new:true}, (err, updatedFood) => {
        res.json(updatedFood)
    })
})

module.exports = router