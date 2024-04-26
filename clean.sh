#!/usr/bin/bash
# Para npm
npm cache clean --force
rm -rf node_modules
npm install

# Para Yarn
#yarn cache clean
#rm -rf node_modules
#yarn install
