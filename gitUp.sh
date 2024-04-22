#!/usr/bin/bash

#git init
#git add README.md
message=$1
git add *
git commit -m $message
git branch -M main
git remote add origin https://github.com/gazevedo9962/Portifolio.git
git push -u origin main