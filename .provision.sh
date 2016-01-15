#! /bin/bash

apt-get update -qq && apt-get upgrade -y -qq

apt-get install -y npm git

npm install -g n && n latest

# cd /vagrant && sudo -u vagrant -c "bash npm install"
