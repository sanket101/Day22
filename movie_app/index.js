let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let apiRoutes = require('./api-routes');

let app = express();
//Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/moviesdb', {useNewUrlParser : true});
var db = mongoose.connection;

//Checking for db
if(!db)
    console.log("Error Connecting DB");
else
    console.log("Db connected successfully");

app.get('/', (req,res)=>{
    res.send(JSON.stringify({message:'Hello world from Express JS !!!'}))
});

app.use('/api', apiRoutes);

let port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log('Server started...');
});