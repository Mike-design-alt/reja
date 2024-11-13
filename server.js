console.log("Webserverni boshlash");
const express = require("express");
const app = express();
const http=require("http");

//web server #1 entering code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// #2 sesstion code


// #3 views code

app.set("views","views");
app.set("view engine", "ejs");


// #4 routing code
app.post("/create-item",(req, res)=> { console. log (req.body);
  res.json({test: "success"});
 });


/*app.get('/hello', function (req, res) {
    res.send(`<h1 style="background: red" >Hello World by Mike</h1>`);
  });

  app.get('/gift', function (req, res) {
    res.send(`<h1 style="background: blue" >you are in the gift page</h1>`);
  });
  */

  app.get('/', function (req, res) {
    res.render("harid");
  });


  const server = http.createServer(app);
  let PORT = 3000;
  server.listen(PORT, function(){
    console.log(`the server is working succesfully on port : ${PORT}`);

  });