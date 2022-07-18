#!/usr/bin/env bash

PACKAGE="yarn"

command -v $PACKAGE

if [ $? == 1 ] ; then
    echo "Installing $PACKAGE"
    npm install -g $PACKAGE
else
    echo "Yarn is already installed"
fi