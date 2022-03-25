const express = require('express')
const router = express.Router()
const Planet = require('../models/planet.js')

router.get('/', (req, res) => {
    Planet.find({}, (err, foundPlanet)=>{
        res.json(foundPlanet);
    });
  })

  router.get('/:id', (req, res) => {
    Planet.findById(req.params.id, (err, getPlanet)=>{
        res.json(getPlanet);
    })
  })

  router.post('/', (req, res) => {
    Planet.create(req.body, (err, createdPlanet) => {
        res.json(createdPlanet)
    })
  })
  
  router.delete('/:id', (req, res)=>{
      Planet.findByIdAndRemove(req.params.id, (err, deletedPlanet)=>{
          res.json(deletedPlanet);
      });
  });
  
  router.put('/:id', (req, res)=>{
      Planet.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPlanet)=>{
          res.json(updatedPlanet);
      });
  });
  
  
  module.exports = router