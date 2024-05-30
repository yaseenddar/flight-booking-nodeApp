const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
app = express();
const routes = require('./router/index');

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api',routes);
app.listen(PORT,async()=>{
    console.log('Server is running on port ',PORT)

    })


