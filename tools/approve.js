// open file in args[1]
const fs = require('fs');

const storiesFolder = '../src/components/stories';
const fileName = process.argv[2];
const fullFileName = `${storiesFolder}/${fileName}.stories.tsx`;

if (!fs.existsSync(fullFileName)) {
  console.log('File does not exist', fullFileName);
  process.exit(1);
}

let fileContents = fs.readFileSync(fullFileName, 'utf8');
fileContents = fileContents
  .replace(/ notImplemented/g, ' ok')
  .replace(/ \(x\)/g, '');
fs.writeFileSync(fullFileName, fileContents, 'utf8');
