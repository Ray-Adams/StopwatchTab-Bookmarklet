javascript:(() => {
    
    if (typeof stopwatchTab != 'undefined') {

        if (stopwatchTab.active) {
            
            clearInterval(stopwatchTab.interval);
            stopwatchTab.active = false;
            
        } else {
            
            stopwatchTab.start();
            stopwatchTab.active = true;
            
        }

    } else {

        this.stopwatchTab = {
            active: true
        };

        let seconds = 0, initialDocumentTitle = document.title;

        formatSeconds = totalSeconds => new Date(totalSeconds * 1000).toJSON().substr(11, 8);

        stopwatch = () => {
            seconds++;
            document.title = `(${formatSeconds(seconds)}) ${initialDocumentTitle}`;
        };
        
        (stopwatchTab.start = () => {
            stopwatchTab.interval = setInterval(stopwatch, 1000);
        })();

    }

})();
