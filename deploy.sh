#! /bin/bash

gulp bundle

rm -rf $1/*

mkdir -p $1/jspm_packages/npm/font-awesome@4.5.0/css

cp -rdf jspm_packages/system.js $1/jspm_packages/
cp -rdf jspm_packages/npm/font-awesome@4.5.0 $1/jspm_packages/npm/
cp -rdf jspm_packages/npm/font-awesome@4.5.0 $1/jspm_packages/npm/
cp -rdf jspm_packages/npm/highlight.js@9.2.0 $1/jspm_packages/npm/
cp -rdf config.js dist index.html styles $1

gulp unbundle
