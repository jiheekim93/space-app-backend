const express = require('express');
const mongoose = require ('mongoose');
const session = require('express-session')

const cors = require('cors')
const app = express ();
require('dotenv').config()
const db = mongoose.connection;

const planetController = require('./controllers/planet.js')
const ticketController = require('./controllers/ticket.js')
const foodController = require('./controllers/food.js')
const gearController = require('./controllers/gear.js')


const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const SECRET = process.env.SECRET
mongoose.connect(MONGODB_URI);
//Middleware
app.use(express.json())
app.use(cors())


// app.use(
//   session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false
//   })
// )



app.use('/planets', planetController)
app.use('/tickets', ticketController)
app.use('/food', foodController)
app.use('/gear', gearController)

app.get('/' , (req, res) => {
  res.send('Hello World!');
});


db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
