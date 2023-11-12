import NiceSelect from "../../../../node_modules/nice-select2/dist/js/nice-select2";

(() => {
    const selects = document.querySelectorAll(".select-wrap .select");

    if (selects.length) {
        selects.forEach((select) => {
            new NiceSelect(select);
        });
    }

    const togglePasswordBtns = document.querySelectorAll(".toggle-pass-visibility");

    if (togglePasswordBtns.length) {
        togglePasswordBtns.forEach(btn => {
            btn.addEventListener("click", function (e) {
                e.preventDefault();

                const input = this.closest(".input-wrap").querySelector("input");

                if (input) {
                    const attr = input.getAttribute("type");

                    this.classList.toggle("visible");

                    if (attr === "password") {
                        input.setAttribute("type", "text");
                        return;
                    }

                    input.setAttribute("type", "password");
                }
            });
        });
    }

})();