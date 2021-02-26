(() => {
    
    if (window.stopwatchTab) {

        if (stopwatchTab.active) {
            
            clearInterval(stopwatchTab.interval);
            stopwatchTab.active = false;
            
        } else {
            
            stopwatchTab.start();
            stopwatchTab.active = true;
            
        };

    } else {

        this.stopwatchTab = {
            active: true
        };

        let seconds = 0, initialTabTitle = document.title;

        const formatSeconds = totalSeconds => new Date(totalSeconds * 1000).toJSON().substr(11, 8);

        const stopwatch = () => {
            seconds++;
            document.title = `(${formatSeconds(seconds)}) ${initialTabTitle}`;
        };
        
        (stopwatchTab.start = () => {
            stopwatchTab.interval = setInterval(stopwatch, 1000);
        })();

    };

})()
