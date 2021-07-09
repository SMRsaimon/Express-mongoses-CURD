const  express = require('express');
const app = express();
const multer = require('multer')
const cors = require('cors');
app.use(cors())



const UPLOADS_FOLDER= "./uploades"
const   upload=multer({

    dest:UPLOADS_FOLDER,

})

app.post("/upload", upload.array("avatar",3),(req,res)=>{

    res.send("file uploaded")

})
app.listen(4000, ()=>{

    console.log("surver run success ")
})