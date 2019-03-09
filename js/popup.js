    var link = document.querySelector(".button_feedback");
    var popup_message = document.querySelector(".modal-message");
    var close = popup_message.querySelector(".modal-close");
    var user_name = popup_message.querySelector("[name=name]");
    var mapLink = document.querySelector(".popup_map");
    var mapPopup = document.querySelector(".modal-map");
    var mapClose = mapPopup.querySelector(".modal-close");
    
    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup_message.classList.add("modal-show");
      user_name.focus();
    });
    close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup_message.classList.remove("modal-show");
    });
    mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
    });
    mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
    });
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