class RevealOnScroll {
    constructor(elements, thresholdPercent) {
        this.itemsToReveal = elements;
        this.observerOptions = { root: null, threshold: thresholdPercent / 100 };
        this.hideInitially();
        this.events();
    }

    events() {
        this.createObserver();
    }

    createObserver() {
        const observer = new IntersectionObserver(this.revealElements, this.observerOptions);
        this.itemsToReveal.forEach(element => observer.observe(element));
    }

    revealElements(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-item--is-visible");
                // After animation, stop observing
                observer.unobserve(entry.target);
            }
        });
    }

    hideInitially() {
        this.itemsToReveal.forEach(element => {
            element.classList.add("reveal-item");
        });
    }
}

export default RevealOnScroll;
