document.addEventListener("DOMContentLoaded", function () {
    // Get the button elements
    var rateButton = document.getElementById("rate-button");
    var myBooksButton = document.getElementById("my-books-button");
    var wishlistButton = document.getElementById("wishlist-button");


    // Add click event listeners
    myBooksButton.addEventListener("click", handleButtonClick);
    wishlistButton.addEventListener("click", handleButtonClick);

    function handleButtonClick() {
        // Store the reference to 'this' in a variable
        var button = this;

        // Add a class to trigger the animation
        button.classList.add("clicked");

        // Disable the button
        button.disabled = true;

        // Optionally, you can set a timeout to re-enable the button after a certain duration
        setTimeout(function () {
            // Re-enable the button and remove the class
            button.disabled = false;
            button.classList.remove("clicked");
        }, 2000); // 2000 milliseconds (2 seconds) in this example
    }

    // Add click event listener to the button
    rateButton.addEventListener("click", function () {
        // Open a new window with the desired HTML page
        var popupWindow = window.open("../HTML/bookrater.html", "_blank", "width=900,height=600");

        // Center the popup window on the screen
        if (popupWindow) {
            var left = (window.screen.width - popupWindow.outerWidth) / 2;
            var top = (window.screen.height - popupWindow.outerHeight) / 2;
            popupWindow.moveTo(left, top);
        }
    });


});
