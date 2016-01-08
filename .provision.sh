#! /bin/bash

apt-get update -qq && apt-get upgrade -y

apt-get install -y npm

npm install -g n && n latest
