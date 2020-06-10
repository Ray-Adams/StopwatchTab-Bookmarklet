javascript: (function() {
    var i, s = 0,
        d = document.title;

    function c(e) {
        return (e - (e %= 60)) / 60 + (9 < e ? ":" : ":0") + e
    }

    function t() {
        if (s < 3600) {
            s++;
            document.getElementsByTagName("title")[0].innerHTML = '(' + c(s) + ') ' + d;
        } else clearInterval(i);
    }

    i = setInterval(t, 1000);
})();
