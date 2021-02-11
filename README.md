# StopwatchTab Bookmarklet
A minimalistic bookmarklet that adds stopwatches to tab titles.

## Installation
Copy and paste the code below into the URL section of a new bookmark.
```javascript
javascript:(_=>{if(_+''!=typeof stopwatchTab)stopwatchTab.a?(clearInterval(stopwatchTab.i),stopwatchTab.a=!1):(stopwatchTab.s(),stopwatchTab.a=!0);else{this.stopwatchTab={a:!0};let d=0,a=document,b=a.title;(stopwatchTab.s=()=>stopwatchTab.i=setInterval(_=>{d++,a.title=`(${new Date(1e3*d).toJSON().substr(11,8)}) ${b}`},1e3))()}})()
```
**NOTE**: You can view the beautified file [here](../master/stopwatchtab.js).

## Usage
Simply click the bookmarklet on any webpage, and a stopwatch formatted in `HH:MM:SS` will appear to the left of the current tab's title. Clicking the bookmarklet additional times will start or stop the stopwatch.

## Features
* Online and offline functionality
* Works on multiple tabs simultaneously
* More efficient than browser extensions
* Start/stop functionality

## Release History
* 1.2.0
  * Added start/stop functionality
  * Stopwatch will restart after 24 hours
* 1.1.1
  * Fixed global variable leak
  * Shaved off 41 bytes from the bookmarklet
* 1.1.0
  * Cleaner code
  * Stopwatch limit increased from 1 hour to 24 hours
* 1.0.0
  * Initial release

## Compatability
Browser | Supported
--------|------------
Chrome  |     ✓
Firefox |     ✓
Safari  |     ✗
