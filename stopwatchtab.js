javascript:((interval, seconds, initialDocumentTitle) => {
    seconds = 0, initialDocumentTitle = document.title;

    formatSeconds = secondsTotal => new Date(secondsTotal * 1000).toISOString().substr(11, 8);

    stopwatch = () => {
        if (seconds < 86400) {
            seconds++;
            document.querySelector('title').innerHTML = `(${formatSeconds(seconds)}) ${initialDocumentTitle}`;
        } else clearInterval(interval)
    }
    
    interval = setInterval(stopwatch, 1000)
})();
