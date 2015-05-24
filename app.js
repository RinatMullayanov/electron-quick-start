document.write('We are using node.js ' + process.version);
document.write('<br>');
document.write(' and Electron ' + process.versions['electron']);
document.write('<br>');

var fs = require('fs');
var packagejs = fs.readFileSync('./package.json', 'utf8');
document.write(packagejs);
