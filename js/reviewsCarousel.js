document.addEventListener('DOMContentLoaded', () => {
    if (typeof tns !== 'function') {
        console.error('tiny-slider не загружен');
        return;
    }

    const slider = tns({
        container: '.my-slider',
        items: 1,           
        slideBy: 1,
        loop: true,
        center: true,
        mouseDrag: true,
        gutter: 20,
        speed: 300,         
        controls: true,
        nav: true,
        navPosition: 'bottom',
        nextButton: ".next",
        prevButton: ".prev",
        responsive: {
            640: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 }
        },
        autoWidth: false,
        fixedWidth: false,
        rewind: false
    });

    const setState = () => {
        let now = slider.getInfo();
        let current = now.index;
        let prevCurrent = now.indexCached;

        let prev = now.slideItems[current].previousElementSibling;
        let next = now.slideItems[current].nextElementSibling;

        if (current !== prevCurrent) {
            for (let i = 0; i < now.slideItems.length; i++) {
                now.slideItems[i].classList.remove("tns-slide-prev");
                now.slideItems[i].classList.remove("tns-slide-next");
                now.slideItems[i].classList.remove("tns-slide-current");
            }
        }

        if (prev) prev.classList.add("tns-slide-prev");
        now.slideItems[current].classList.add("tns-slide-current");
        if (next) next.classList.add("tns-slide-next");
    };

    setState(); 
    slider.events.on("indexChanged", setState);
});