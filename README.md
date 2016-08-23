# http-fetcher [![Build Status](https://travis-ci.org/rajikaimal/http-fetcher.svg?branch=master)](https://travis-ci.org/rajikaimal/http-fetcher)

:zap: Minimal effort for http requests

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