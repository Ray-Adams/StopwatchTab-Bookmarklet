javascript:(() => {
    let interval, seconds = 0, initialDocumentTitle = document.title;

    formatSeconds = secondsTotal => new Date(secondsTotal * 1000).toJSON().substr(11, 8);

    stopwatch = () => {
        if (seconds < 86400) {
            seconds++;
            document.title = `(${formatSeconds(seconds)}) ${initialDocumentTitle}`;
        } else clearInterval(interval)
    }
    
    interval = setInterval(stopwatch, 1000)
})();
