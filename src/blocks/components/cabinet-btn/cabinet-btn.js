(() => {
    const btn = document.querySelector(".cabinet-button");

    if (btn) {
        btn.addEventListener("click", function (e) {
            if (window.matchMedia("(max-width: 980px)")) {
                e.preventDefault();

                if (!e.target.closest(".cabinet-button__drop")) {
                    this.classList.toggle("active");
                }

            }
        });
    }

    document.querySelector("html").addEventListener("click", (e) => {

        console.log(!e.target.closest(".cabinet-button"));
        if (!e.target.closest(".cabinet-button")) {
            btn.classList.remove("active");
        }
    });
})();