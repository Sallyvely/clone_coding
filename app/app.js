const express = require('express');
const app = express();
const PORT = 3000;

//앱 세팅
app.set("views","./src/views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`))

app.use(express.static(__dirname + '/src'));

const home = require("./src/routes/home");
app. use("/",home); //미들 웨어를 등록해주는 메서드

app.listen(PORT,function(){
    console.log('conntected!')
});
