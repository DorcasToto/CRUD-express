// const express = require("express")
// const cors = require('cors')
// const router = require("./routes/index")

// const app = express()


// app.use(express.json);
// app.use(cors())
// app.use('/api',router)


// app.listen(process.env.PORT || '3000',()=>{
//     console.log("Server is running at port 3000")
// })

const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/index')
const cors = require('cors')

const PORT = 3000;

const app = express();


app.use(bodyParser.json())
app.use(cors())
app.use('/api', api)


app.get('/', function(req, res){
    res.send('My First Express App is Working!')
})

app.listen(PORT, function(){
    console.log('Listening on port: ' + PORT)
})