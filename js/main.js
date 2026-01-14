let UI = (function() {
    let ui = {};

    ui.init = function() {
    }

    ui.scrollToEl = function(e, t) {
        t = t || 0,
        element = document.querySelector(e),
        window.scrollTo(0, element.offsetTop - t)
    }

    return ui;
})();

UI.init();