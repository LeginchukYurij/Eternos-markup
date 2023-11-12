
const triggers = document.querySelectorAll("[data-trigger-modal]");

if (triggers.length) {
    triggers.forEach((trigger) => {
        trigger.addEventListener("click", function (e) {
            e.preventDefault();
            const target = this.dataset.triggerModal;

            const all = document.querySelectorAll(".popup");

            if (all.length) {
                all.forEach((popup) => {
                    popup.classList.remove("active");
                });
            }

            const popup = document.querySelector(`.popup[data-target='${target}']`);

            if (popup) {
                popup.classList.add("active");
                document.querySelector("html").classList.add("noscroll");
            }
        });
    });
}

const closers = document.querySelectorAll(".popup .close-popup");

if (closers.length) {
    closers.forEach((closer) => {
        closer.addEventListener("click", function (e) {
            e.preventDefault();
            this.closest(".popup").classList.remove("active");
            document.querySelector("html").classList.remove("noscroll");
        });
    });
}

const popups = document.querySelectorAll(".popup");

if (popups.length) {
    popups.forEach((popup) => {
        popup.addEventListener("click", function (e) {
            console.log(this.closest(".popup__inner"));
            if (!e.target.closest(".popup__inner")) {
                e.target.closest(".popup").classList.remove("active");
                document.querySelector("html").classList.remove("noscroll");
            }
        });
    });
}