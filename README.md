# StopwatchTab Bookmarklet
A minimalistic bookmarklet that adds stopwatches to tab titles.

## Installation
Copy and paste the code below into the URL section of a new bookmark.
```javascript
javascript:((a,b,c=0,d=document,e=d.title)=>{a=_=>86400>c?(c++,d.title=`(${new Date(1e3*c).toJSON().substr(11,8)}) ${e}`):clearInterval(b),b=setInterval(a,1e3)})()
```
**NOTE**: You can view the beautified file [here](../master/stopwatchtab.js).

## Usage
Simply click the bookmarklet on any webpage, and a stopwatch formatted in `HH:MM:SS` will appear to the left of the current tab's title.

## Features
* Online and offline functionality
* Works on multiple tabs simultaneously
* More efficient than browser extensions
* Convenient: run with one-click

## Release History
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
