import "../styles/styles.css";

import MobileMenu from "./modules/MobileMenu";
import StickyHeader from "./modules/StickyHeader";
import RevealOnScroll from "./modules/RevealOnScroll";

new MobileMenu();
new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
let modalInstance = null;

document.querySelectorAll(".open-modal").forEach(element => {
    element.addEventListener("click", async e => {
        e.preventDefault();

        if (!modalInstance) {
            try {
                const { default: Modal } = await import("./modules/Modal");
                modalInstance = new Modal();
            } catch (error) {
                console.error("Problem loading modal", err);
                return;
            }
        }

        modalInstance.openModal();
    });
});

if (module.hot) {
    module.hot.accept();
}
