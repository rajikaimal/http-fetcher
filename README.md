# http-fetcher [![Build Status](https://travis-ci.org/rajikaimal/http-fetcher.svg?branch=master)](https://travis-ci.org/rajikaimal/http-fetcher) [![Greenkeeper badge](https://badges.greenkeeper.io/rajikaimal/http-fetcher.svg)](https://greenkeeper.io/)

:zap: Minimal effort for http requests

Most of the time small modules require only GET requests to function. Using full fledged packages like [request](https://www.npmjs.com/package/request) in small modules can take over space in your project unnecessarily.

http-fetcher focuses only on fetching data (GET requests)

Size comparison : request `>100KiB`, http-fetcher `<15KiB`

> works only for fetching data [GET requests only]

## Install

```
npm install --save http-fetcher
```

## Usage

```js
const httpFetcher = require('http-fetcher');

httpFetcher('api.github.com', '/users/gaearon/orgs', { 'User-Agent': 'github-organizations' }, 'https')
	.then((res) => {
		console.log(res);
	});
```

## API

### get(hostname, path, headers, protocol)

Returns a promise

#### hostname

Type: `string`

Hostname for requesting resource

#### path

Type: `string`

Path for requesting resource

#### headers [optional]

Type: `object`

http headers

#### protocol

Type: `string`

requesting protocol (http/https)

## License

MIT © [Rajika Imal](https://rajikaimal.github.io)