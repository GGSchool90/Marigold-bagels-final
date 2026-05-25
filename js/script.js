/* Interactive navigation, menu tabs, and contact form feedback */
$(function () {
    $(".nav-toggle").on("click", function () {
        var menu = $("#" + $(this).attr("aria-controls"));
        var isOpen = menu.toggleClass("open").hasClass("open");
        $(this).attr("aria-expanded", isOpen);
    });

    $(".tab-button").on("click", function () {
        var panelId = $(this).data("menu-tab");

        $(".tab-button").removeClass("active");
        $(this).addClass("active");

        $(".menu-panel").removeClass("active");
        $("#" + panelId).addClass("active");
    });

    $("#contact-form").on("submit", function (event) {
        event.preventDefault();

        if (this.checkValidity()) {
            $(".form-status").text("Thank you! Your request is ready to send.");
            this.reset();
        } else {
            $(".form-status").text("Please complete the highlighted fields.");
            this.reportValidity();
        }
    });

    $('.accordion-header').click(function() {
        if ($(this).next('.accordion-content').is(':visible')) {
            $(this).next('.accordion-content').slideUp();
        } else {
            $('.accordion-content').slideUp();
            $(this).next('.accordion-content').slideDown();
        }
    });
});
