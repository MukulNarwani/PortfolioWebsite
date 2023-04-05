var http = require('http')
const {resolve} = require('path');
const path = require('path')
const {join} = require('path')

var fs= require('fs')
const express = require('express');
const cors = require("cors");

const host='localhost'
const PORT = 8080




// const requestListener = function (req, res) {
//     console.log("True")
//     if(req.method === "GET"){
       
//         console.log("True1")

//         const directory = fs.opendirSync('photos/')
//         let file
//         var newString
//         console.log("True2")

        // while ((file = directory.readSync()) !== null) {
        //     console.log(__dirname + '/' + directory.path + file.name)
        //     if (file.name.endsWith("jpg")){
        //         console.log("true")
        //     res.sendFile(__dirname + '/' + directory.path +  file.name)}
        //     else {res.end()}
        //     // newString += file.name
        //     // newString += '\n' 
        // }
//         console.log('sent')
//         // res.end(newString)
//         directory.closeSync()
//     }   
// };


const app = express()
 
app.listen(PORT, host, () => {
    console.log(`Server is running on http://${host}:${PORT}`);
});

app.use(express.static(join(__dirname, 'public_html')));
app.use('/uploaded',express.static(join(__dirname, 'photos')));

app.get('/image-list',function(req,res){
    var photoNames=[]
    console.log(__dirname)
    fs.readdirSync(__dirname+'/photos').forEach(file => {
        photoNames.push(file)
      });
    let send_json=JSON.stringify(photoNames);
    res.json(send_json)
})