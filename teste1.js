const data = require("./fakeData");

const fs = require('fs');
const path = require('path');
const dataPath = path.resolve(__dirname, 'fakeData.js');

const getUser = (req, res, next) => {
  const name = req.query.name;
  const user = data.find((user) => user.name === name);

  if (user) {
    if (user.readed) {
      user.readed++;
    } else {
      user.readed = 1;
    }
    
    const updatedDataContent = `module.exports = ${JSON.stringify(data, null, 2)};`;

    fs.writeFile(dataPath, updatedDataContent, (err) => {
      if (err) {
        console.error('Erro ao salvar os dados:', err);
        return;
      }
      res.send(user);
    });
    
  } else {
    res.status(404).send("Usuário não encontrado");
  }
};

const getUsers = (req, res, next) => {
  res.send(data);
};


module.exports = {
  getUser,
  getUsers
};
