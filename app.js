const express = require('express');
const bodyparser = require('body-parser');
const db = require('./db');
const userRouter = require('./routes/userRoutes');
const notesRoute = require('./routes/noteRoutes');
require('dotenv').config();


const app = express();
app.use(bodyparser.json());

app.get('/',(req,res)=>{
    console.log('this is base url');
    res.status(200).json(
        {
            "stats": `server is working fine on port ${PORT}`
        }
    );

});


app.use('/user',userRouter);

app.use('/notte',notesRoute);





const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log('server is running on port',PORT);
})



