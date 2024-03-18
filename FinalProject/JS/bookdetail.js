document.addEventListener("DOMContentLoaded", function () {
    var rateButton = document.getElementById("rate-button");
    var myBooksButton = document.getElementById("my-books-button");
    var wishlistButton = document.getElementById("wishlist-button");

    myBooksButton.addEventListener("click", handleButtonClick);
    wishlistButton.addEventListener("click", handleButtonClick);

    function handleButtonClick() {
        // Store the reference in a variable
        var button = this;

        button.classList.add("clicked");

        // Disables button
        button.disabled = true;

        setTimeout(function () {
            button.disabled = false;
            button.classList.remove("clicked");
        }, 2000); //2 Seconds
    }

    rateButton.addEventListener("click", function () {
        //New Window for Book Rating
        var popupWindow = window.open("../HTML/bookrater.html", "_blank", "width=900,height=600");

        // Center the window
        if (popupWindow) {
            var left = (window.screen.width - popupWindow.outerWidth) / 2;
            var top = (window.screen.height - popupWindow.outerHeight) / 2;
            popupWindow.moveTo(left, top);
        }
    });


});
