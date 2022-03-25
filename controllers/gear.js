const express = require('express')
const router = express.Router()
const Gear = require('../models/gear.js')

router.get('/', (req, res) => {
    Gear.find({}, (err, foundGear)=>{
        res.json(foundGear);
    });
  })

  router.get('/:id', (req, res) => {
    Gear.findById(req.params.id, (err, getGear)=>{
        res.json(getGear);
    })
  })


  router.post('/', (req, res) => {
    Gear.create(req.body, (err, createdGear) => {
        res.json(createdGear)
    })
  })
  
  router.delete('/:id', (req, res)=>{
      Gear.findByIdAndRemove(req.params.id, (err, deletedGear)=>{
          res.json(deletedGear);
      });
  });
  
  router.put('/:id', (req, res)=>{
      Gear.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedGear)=>{
          res.json(updatedGear);
      });
  });
  
  
  module.exports = router