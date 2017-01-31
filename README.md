# scrubd

Scrubd is an app that lets you read video comments in real time and see which parts of the video drew the most engagement.
Using the scrubber to access a specific part of a video will load the comments at that point in time. Clicking on a bar in the graph will do the same.

## Installing

To run Scrubd on your machine, make sure you have MySQL installed.

The following command will compile it and start a server listening on port 3000:

```bash
$ npm run dev
```
Do not use `npm start`, it's reserved for Heroku deployment!

## Helpful tidbits

To seed the database with play data:

```bash
$ npm run data
```

Some basic tests to ensure your server and database are functional:

```bash
$ npm test
```
