const fs = require('fs');

function readFile() {
  return new Promise((resolve, reject) => {
    fs.readFile(`${__dirname}/data.json`, (error, data) => {
      console.log('Async Read: starting...');
      if (error) {
        reject(error);
      } else {
        try {
          resolve(JSON.parse(data));
        } catch (exception) {
          reject(exception);
        }
      }
    });
  });
}


module.exports = {
  loadData: readFile
};
