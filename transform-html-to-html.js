const fs = require('fs');

fs.readdir('./', (err, files) => {
  for (const file of files) {
    if (!file.includes('.git')) {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) throw err;
        if (data.includes('<!DOCTYPE html />')) {
          const newFile = file.replace('js', 'html')
          fs.rename(file, newFile, (err) => {
            if (err) throw err;
            console.log('Rename complete!');
          });
        }
      });
    }
  }
})
