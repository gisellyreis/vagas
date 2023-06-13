var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const data = require("./fakeData");

var teste1 = require("./teste1");
var teste2 = require("./teste2");
var teste3 = require("./teste3");
var teste4 = require("./teste4");
var teste5 = require("./teste5");


app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

// Middleware para verificar permissoes de usuario
const checkPermission = (req, res, next) => {
  const userId = Number(req.headers.authorization);

  const user = data.find(user => user.id === userId);

  if (user && user.role === "admin") {
    next();
  } else {
    res.status(403).send("Acesso negado.");
  }
};

app.get('/', function(req, res){
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.get("/user", teste1.getUser);
app.get("/users", teste1.getUsers);
app.post("/users", teste2.createUser);
app.delete("/users", checkPermission, teste3.removeUser);
app.put("/users", checkPermission, teste4.updateUser);
app.get("/users/access", teste5.getUserReadCount);


const port  = 3000;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});