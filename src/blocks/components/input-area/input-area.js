import NiceSelect from "../../../../node_modules/nice-select2/dist/js/nice-select2";

(() => {
    const selects = document.querySelectorAll(".select-wrap .select");

    if (selects.length) {
        selects.forEach((select) => {
            new NiceSelect(select);
        });
    }

})();