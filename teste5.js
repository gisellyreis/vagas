const data = require("./fakeData");

const consultReadedUser = (req, res, next) => {
    const name =  req.query.name;
    const user = data.find((user) => user.name === name);

    if (user) {
      const readed = user.readed || 0;
      res.send("Usuário " +  name  + "  foi lido " + readed + " vezes.");
    } else {
      res.status(404).send("Usuário não encontrado");
    }

};

module.exports = {
  consultReadedUser
};