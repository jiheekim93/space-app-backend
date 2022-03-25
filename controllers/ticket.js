const express = require('express')
const router = express.Router()
const Ticket = require('../models/ticket.js')

router.get('/', (req, res) => {
    Ticket.find({}, (err, foundTicket)=>{
        res.json(foundTicket);
    });
  })
  
  router.get('/:id', (req, res) => {
    Ticket.findById(req.params.id, (err, getTicket)=>{
        res.json(getTicket);
    })
  })

  router.post('/', (req, res) => {
    Ticket.create(req.body, (err, createdTicket) => {
        res.json(createdTicket)
    })
  })
  
  router.delete('/:id', (req, res)=>{
      Ticket.findByIdAndRemove(req.params.id, (err, deletedTicket)=>{
          res.json(deletedTicket);
      });
  });
  
  router.put('/:id', (req, res)=>{
      Ticket.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTicket)=>{
          res.json(updatedTicket);
      });
  });
  
  
  module.exports = router