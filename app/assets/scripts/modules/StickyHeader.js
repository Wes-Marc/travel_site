class StickyHeader {
    constructor() {
        this.headerScrollTrigger = document.querySelector(".header-scroll-trigger");
        this.header = document.querySelector(".header");
        this.pageSections = document.querySelectorAll(".page-section");
        this.headerObserverOptions = { rootMargin: "200px 0px 0px 0px" };
        this.navObserverOptions = { threshold: 0.6 };
        this.events();
    }

    events() {
        this.handleHeaderScrollStyle();
        this.handleNavHighlight();
    }

    handleHeaderScrollStyle() {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                this.header.classList.remove("header--dark");
            } else {
                this.header.classList.add("header--dark");
            }
        }, this.headerObserverOptions);
        observer.observe(this.headerScrollTrigger);
    }

    handleNavHighlight() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                let matchingLink = entry.target.getAttribute("data-matching-link");
                if (entry.isIntersecting) {
                    document.getElementById(matchingLink).classList.add("is-current-link");
                } else {
                    document.getElementById(matchingLink).classList.remove("is-current-link");
                }
            });
        }, this.navObserverOptions);
        this.pageSections.forEach(section => observer.observe(section));
    }
}

export default StickyHeader;
