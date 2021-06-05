let UI = (function() {
    let ui = {};

    ui.init = function() {
        /*const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            requestAnimationFrame(function() {
                cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;");
              });
        })

        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })*/

        // set the starting position of the cursor outside of the screen
        //t clientX = -100;
        //t clientY = -100;
        //nst innerCursor = document.querySelector(".cursor");

        //// add listener to track the current mouse position
        //document.addEventListener("mousemove", e => {
        //  clientX = e.clientX;
        //  clientY = e.clientY;
        //});
        //
        //// transform the innerCursor to the current mouse position
        //// use requestAnimationFrame() for smooth performance
        //const render = () => {
        //  innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
        //  // if you are already using TweenMax in your project, you might as well
        //  // use TweenMax.set() instead
        //  // TweenMax.set(innerCursor, {
        //  //   x: clientX,
        //  //   y: clientY
        //  // });
        //  
        //  requestAnimationFrame(render);
        //};
        //requestAnimationFrame(render);


        //// add event listeners to all items
        //const linkItems = document.querySelectorAll(".block");
        //linkItems.forEach(item => {
        //  item.addEventListener("mouseenter", function() {
        //      innerCursor.classList.toggle('cursor-hover');
        //  });
        //  item.addEventListener("mouseleave", function() {
        //      innerCursor.classList.toggle('cursor-hover');
        //  });
        //});

    }

    ui.scrollToEl = function(e, t) {
        t = t || 0,
        element = document.querySelector(e),
        window.scrollTo(0, element.offsetTop - t)
    }

    return ui;
})();

UI.init();