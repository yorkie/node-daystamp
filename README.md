
DayStamp
===============

### Install

```
$ npm install daystamp
```

### Usage

Compare the timestamps if they are in one day

```js
const daystamp = require('daystamp');
daystamp.fromDate(Date.now()) === daystamp.fromDate(d);
```

### API

`.fromDate(Date d)`: get the day stamp from a Date or timestamp
`.fromNow()`: get the day stamp from now Date

### License

MIT

