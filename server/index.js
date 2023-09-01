//packages/modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()
const routes = require('./routes/route')

//config

const PORT = process.env.PORT || 3000;

// connecting to mongodb
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log('DB connection successfull'))
.catch((err)=>console.log(err.message))

//app
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }));

//add routes
app.use('/api/post',routes);

//execute
app.get('/', (req, res) =>res.send('Hello World'));
app.listen(PORT,(req,res)=>console.log('server listening on port ', PORT));