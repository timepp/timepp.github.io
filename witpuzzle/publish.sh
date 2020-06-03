#!/bin/bash

pushd ../timepp.github.io/witpuzzle
git reset --hard
git pull
cp ../../witpuzzle/* .
git add *
git commit -m "update witpuzzle"
git push
popd
