#!/bin/bash

cp ./* ../timepp.github.io/witpuzzle
pushd ../timepp.github.io/witpuzzle
git add *
git commit -m "update witpuzzle"
git push
popd
