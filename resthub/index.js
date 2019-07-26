let express = require('express');

//import Data Siswa
let dataSiswa = require('./datasiswa');

let app = express();

var port = process.env.PORT || 8080;

app.get('/',(req,res) => res.send('Selamat Datang di Data Center Siswa Indonesia'));

app.use('/DataSiswa', dataSiswa);

app.listen(port, function(){
  console.log("Running Resthub on port " + port);
})
