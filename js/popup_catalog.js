    var link_basket = document.querySelector(".buy");
    var popup_basket = document.querySelector(".modal-notification");
    var close = popup_basket.querySelector(".modal-close");

    link_basket.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup_basket.classList.add("modal-show");
    });
    close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup_basket.classList.remove("modal-show");
    });