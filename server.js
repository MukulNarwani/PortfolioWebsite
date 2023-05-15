var http = require('http')
const {resolve} = require('path');
const path = require('path')
const {join} = require('path')

var fs= require('fs')
const express = require('express');
const cors = require("cors");

const host='localhost'
const PORT = 8080

const app = express()

app.listen(PORT, host, () => {
    console.log(`Server is running on http://${host}:${PORT}`);
});

app.use(express.static(join(__dirname, 'public_html')));
app.use('/uploaded/photos',express.static(join(__dirname, 'photos')));
// app.use('/uploaded/papers',express.static(join(__dirname, 'papers')));


function serveStaticDir(req,res){
    dir = req.url=='/image-list' ? '/photos': dir;
    // dir = req.url=='/paper-list' ? '/papers': dir;
    dir='/image-list'
    var dir_items=[]
    fs.readdirSync(__dirname+dir).forEach(file => {
        dir_items.push(file)
    });
    let send_json=JSON.stringify(dir_items);
    res.json(send_json)
}

app.get('/image-list',function(req,res){
    var photoNames=[]
    console.log(__dirname)
    fs.readdirSync(__dirname+'/photos').forEach(file => {
        photoNames.push(file)
      });
    let send_json=JSON.stringify(photoNames);
    res.json(send_json)
})

// app.get('/image-list',(req,res) =>{
//     dir = '/photos';
//     var dir_items=[]
//     fs.readdirSync(__dirname+dir).forEach(file => {
//         dir_items.push(file)
//     });
//     let send_json=JSON.stringify(dir_items);
//     res.json(send_json)
// })
// app.get('/paper-list',serveStaticDir)