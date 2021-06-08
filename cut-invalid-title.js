const fs = require('fs');

fs.readdir('./', (err, files) => {
  for (const file of files) {
    if (!file.includes('.git')) {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) throw err;
        let reading = data.replace('', '');

        const dataWrite = new Uint8Array(Buffer.from(reading));
        fs.writeFile(file, dataWrite, (err) => {
          if (err) throw err;
          console.log('The file has been saved!');
        });

      });
    }
  }
})
