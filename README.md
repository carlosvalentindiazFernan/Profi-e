# diary-web-components-

## Getting started

### Install node dependencies using NVM

```shell

sudo apt-get update
sudo apt-get install build-essential libssl-dev

```
NVM install  using script

```shell

curl https://raw.githubusercontent.com/creationix/nvm/v0.16.1/install.sh | sh
bash install_nvm.sh
source ~/.profile

```
### Install Node

Find out the versions of Node js that are available for installation

```shell

nvm ls-remote
nvm install 6.11.1
nvm use 6.11.1
node -v

```

Install dependencies

under the project folder `diary-web-components` install requirements with npm

```shell

npm install

```
or

```shell

npm install -g

```

### Run project

Linux and MacOS

```shell
DEBUG=diary-web-components:* npm start
```
Windows

```shell
set DEBUG=diary-web-components:* & npm start
```
