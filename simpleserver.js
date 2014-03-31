var express = require('express'),
    coffee = require('./routes/coffees');
 
var app = express();

app.use(express.bodyParser());
app.get('/coffees', coffee.findAll);
app.get('/coffees/:id', coffee.findById);
app.post('/coffees', coffee.addCoffee);
app.put('/coffees/:id', coffee.updateCoffee);
app.delete('/coffees/:id', coffee.deleteCoffee);
 
app.listen(4444);
console.log('Listening on port 4444...');