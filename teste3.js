const data = require("./fakeData");

const fs = require('fs');
const path = require('path');
const dataFilePath = path.resolve(__dirname, 'fakeData.js');

const removeUser = (req, res, next) => {
  const name = req.query.name;

  const index = data.findIndex(user => user.name === name);
  if (index !== -1) {
    data.splice(index, 1);

    const updatedDataContent = `module.exports = ${JSON.stringify(data, null, 2)};`;

    fs.writeFile(dataFilePath, updatedDataContent, err => {
      if (err) {
        res.status(500).send('Erro ao remover usuário');
        return;
      }

      res.send('Usuário removido com sucesso!');
    });
  } else {
    res.status(404).send('Usuário não encontrado');
  }
};

module.exports = {
  removeUser
};
