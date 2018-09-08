#!/usr/bin/env node

/*
 * Script credit: bersling@gmail.com
 * Original post: https://www.tsmean.com/articles/how-to-write-a-typescript-library/angular/
 */

const fsextra = require('fs-extra');
const { exec } = require('child_process');

fsextra.copy('./src/app/humane-translate', './dist-lib', err => {
  if (err) return console.error(err);
  console.log('Copied files');
  createDeclarations();
});

function createDeclarations() {
  exec('cd dist-lib && tsc index.ts --declaration', () => {
    console.log('Generated declarations (and some JS files...)');
    createPackageJson();
  });
}

function createPackageJson() {
  const packageJSON =  {
    "name": "humane-translate",
    "version": "0.1.0",
    "description": "Easy translation mechanism with human readable string references",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/nirmall/humane-translate"
    },
    "keywords": [
      "Angular",
      "Angular2",
      "Library",
      "Example"
    ],
    "author": "nir3al@gmail.com",
    "license": "MIT",
    "bugs": {
      "url": "https://github.com/nirmall/humane-translate/issues"
    },
    "homepage": "https://github.com/nirmall/humane-translate#readme",
    "types": "index.d.ts"
  };
  fsextra.writeJson('./dist-lib/package.json', packageJSON, {spaces: 2}, err => {
    if (err) return console.error(err);
    console.log('Created package.json');
  });

}