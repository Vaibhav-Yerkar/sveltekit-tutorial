// scripts/renamePayDir.js

const fs = require('fs');
const path = require('path');

const oldPath = path.join(__dirname, '../node_modules/neucron-sdk/dist/pay');
const newPath = path.join(__dirname, '../node_modules/neucron-sdk/dist/Pay');

console.log(`Renaming ${oldPath} to ${newPath}`);

if (fs.existsSync(oldPath)) {
  fs.rename(oldPath, newPath, function (err) {
    if (err) {
      console.error('Error renaming directory:', err);
    } else {
      console.log('Directory renamed successfully');
    }
  });
} else {
  console.log('Old directory path does not exist or has already been renamed');
}

// Verify the renaming
if (fs.existsSync(newPath)) {
  console.log('New path exists:', newPath);
} else {
  console.error('New path does not exist after renaming:', newPath);
}
