const data = require("./fakeData");

const fs = require('fs');
const path = require('path');
const dataPath = path.resolve(__dirname, 'fakeData.js');

const createUser = (req, res, next) => {
  const name = req.body.name;
  const job = req.body.job;

  const newUser = {
    id: data.length + 1,
    name: name,
    job: job,
  };

  data.push(newUser);

  const updatedDataContent = `module.exports = ${JSON.stringify(data, null, 2)};`;

  fs.writeFile(dataPath, updatedDataContent, (err) => {
    if (err) {
      console.error('Erro ao salvar os dados:', err);
      return;
    }
    res.send(newUser);
  });
};

module.exports = {
  createUser
};
