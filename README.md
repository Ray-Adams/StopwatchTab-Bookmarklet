# StopwatchTab Bookmarklet
A minimalistic bookmarklet that adds stopwatches to tab titles.

## Installation
Copy and paste the code below into the URL section of a new bookmark.
```javascript
javascript:(function(){var i,s=0,d=document.title;function c(e){return(e-(e%=60))/60+(9<e?":":":0")+e}function t(){s<3600?(s++,document.getElementsByTagName("title")[0].innerHTML='('+c(s)+') '+d):clearInterval(i)}i=setInterval(t,1e3);})();
```
**NOTE**: You can view the beautified file here: [stopwatchtab.js](../master/stopwatchtab.js)

## Usage
Simply click the bookmarklet on any webpage, and a stopwatch formatted in `MM:SS` will appear to the left of the current tab's title.

## Features
* Online and offline functionality
* Works on multiple tabs simultaneously
* More efficient on system resources than Chrome extensions
* Convenient: run with one-click

### Compatability
Browser | Supported
--------|------------
Chrome |     ✓
Firefox|     ✓
Safari |     ✗
