const fs = require('fs');

fs.readdir('./', (err, files) => {
  for (const file of files) {
    if (file.includes('txt')) {
      const newFile = file.replace('txt', 'js')
      fs.rename(file, newFile, (err) => {
        if (err) throw err;
        console.log('Rename complete!');
      });
    }
  }
})

