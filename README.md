[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)
# TwitterListener

Listens for twitter for actions related to a certain keyword. Lists all tweets containing or about the keyword.

## Installation

You can install this package using yarn: after cloning the repository create a file called `.keys/twitterAuth.json`. Copy, paste and fill in the collowing json file:
```
{
  "consumer_key": "",
  "consumer_secret": "",
  "access_token_key": "",
  "access_token_secret": ""
}
```
You can get access to these credentials [here](https://apps.twitter.com/).
Finally run the folowing command:

`yarn install && yarn run start`


and the service will start up.

## Docker

Docker is supported. To run the project in a docker container run the following commands:
```
docker build . -t twitterlistener
docker run -it --name tweet twitter:latest
```
and the service will start up. The container will be names `tweet` but you can change that in the second comand after the `--name` parameter.


## Configuration

None as of now
