javascript:(() => {
    var interval, seconds = 0, initialDocumentTitle = document.title;

    formatSeconds = secondsTotal => {   
        let hrs = ~~(secondsTotal / 3600), mins = ~~((secondsTotal % 3600) / 60), secs = ~~secondsTotal % 60, ret = '';

        if (hrs > 0) {
            ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
        }
        ret += '' + mins + ':' + (secs < 10 ? '0' : '');
        ret += '' + secs;
        return ret;
    }

    stopwatch = () => {
        if (seconds < 86400) {
            seconds++;
            document.querySelector('title').innerHTML = `(${formatSeconds(seconds)}) ${initialDocumentTitle}`;
        } else clearInterval(interval)
    }
    
    interval = setInterval(stopwatch, 1000)
})();
