# projekt_ka

A website for streaming pod and videos for the organization [Kulturakademin](http://www.kulturakademin.com)
[Live version here](http://projekt-ka.netlify.com)

## TOOLS

The page is built with [react](https://github.com/facebook/react) and [styled-components](https://github.com/styled-components/styled-components).

Data is being fetched from a local JSON file to provide examples.

## SCRIPTS

```SH
$ npm run start     # Start react app on localhost:3000
$ npm run buils     # Builds the app
$ npm run update    # Fetches all of Kulturakademins media infromation from YouTube and Soundcloud
```

## DATA

The media information is stored in .JSON in this format:

```SH
# Addition data exist, just not needed att the moment.
[
    {
			"id": Integer,
			"title": String,
			"description": String,
			"url": String,
			"tags": [String],
			"subcategory": [String],
			"thumbnail": String,
			"length": String,
			"date": String,
			"type": String
    }
]
```

## PWA

The project is built to perform as an PWA.

## CREATORS

Made by: [Izabella Larsson](https://github.com/izabellalarsson/) and [Mattias Rådemar](https://github.com/raademar)

## LICENSE

MIT-LICENSE, except for Kulturakademins Media for which all right are reserved to Kulturakademin.
