const data =  require("./fakeData");

const fs = require('fs');
const path = require('path');
const dataFilePath = path.resolve(__dirname, 'fakeData.js');

const updateUser = (req, res, next) => {
  const id = req.query.id;

  const reg = data.find(user => user.id == id);
  if (reg) {
    reg.name = req.body.name;
    reg.job = req.body.job;

    const updatedDataContent = `module.exports = ${JSON.stringify(data, null, 2)};`;

    fs.writeFile(dataFilePath, updatedDataContent, err => {
      if (err) {
        console.error('Erro ao atualizar o arquivo:', err);
        res.status(500).send('Erro ao atualizar o registro');
        return;
      }

      res.send(reg);
    });
  } else {
    res.status(404).send('Registro não encontrado');
  }
};

module.exports = {
  updateUser
};
  