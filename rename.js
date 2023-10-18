const fs = require('fs');
const project = require('./package.json').name;

if (fs.existsSync(`./dist/${project}/en`)) {
  fs.rmdirSync(`./dist/${project}/en`, { recursive: true });
}
