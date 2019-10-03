# projekt_ka

A website for streaming pod and videos for the organization [Kulturakademin](http://www.kulturakademin.com)
[Live version here](https://projekt-k.netlify.com/)

## TOOLS

The page is built with [react](https://github.com/facebook/react) and [styled-components](https://github.com/styled-components/styled-components).

Data is being fetched from a local JSON file to provide examples.

## SCRIPTS

```SH
$ npm run start     # Start react app on localhost:3000
$ npm run build     # Builds the app
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

## FEEDBACK
Remove Unused Imports:
- src/App.js - Line 1
- src/views/About.js - Line 3, 5
- src/views/CategoryPage.js - Line 1, 2, 4
- src/views/SubcategroyPage.js - Line 3
- src/views/VideoView.js - Line 3, 7
- src/components/Filter/index.js - Line 5, 7
- src/components/Header/Nav/Menu/index.js - Line 13, 21
- src/components/Layout/index.js - Line 12
- src/components/RecMedia/index.js - Line 5

Remove Unused Variables / Constants:
- src/views/SearchResult.js - Line 19
- src/views/Start.js - Line 13, 16
- src/components/FeaturedClipsList/index.js - Line 5
- src/components/Filter/index.js - 13, 16, 17
- src/components/Header/Nav/Menu/index.js - Line 27, 29, 32
- src/components/RecMedia/index.js - Line 9
- src/components/ThumbnailMedia/index.js - Line 4
- src/components/VideoViewComponent/index.js - Line 14
- src/components/FeaturedClipsList/index.js - Line 5

Remove Commented Code:
- src/views/SearchResult.js - Line 42    

Warnings: 
- Menu/index.js on line 50 Expected '===' instead of '=='.

Other:
- src/style/global.js, Opening bracket missing for ending bracket located at - Line 38
- src/components/Header/Nav/Menu/index.js, Can you move the filter & sort logic outside of the Return statement? - Line 61, 64, 67, 88, 107
- src/components/VideoViewComponent/index.js, Can you move conditional display logic outside of the return statement? - Line 31, 41
- public/manifest.json - Missing essential icon references for Android
- public/index.html - Missing essential icon references for iOS
- The app only works as it should on iphones 6/7/8 plus.


## PWA

The project is built to perform as an PWA.

## CREATORS

Made by: [Izabella Larsson](https://github.com/izabellalarsson/) and [Mattias Rådemar](https://github.com/raademar)

## LICENSE

MIT-LICENSE, except for Kulturakademins Media for which all right are reserved to Kulturakademin.
