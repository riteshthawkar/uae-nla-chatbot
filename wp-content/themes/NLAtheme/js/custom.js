$ = jQuery;
jQuery(window).on("load", function () {
    // makes sure the whole site is loaded 
    //$('#status').fadeOut(); // will first fade out the loading animation 
    //$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    //$('body').delay(350).css({ 'overflow': 'visible' });
    var Lang = jQuery("html").attr("lang");
    zoomingSecrren();
    themeswitcher();
    setInterval(function () {
        if (localStorage.getItem('theme') === "dark") {
            jQuery(".theme-toggle").prop("checked", "true");
            v("#switch-theme label i ").removeClass("icon-sun");
            jQuery("#switch-theme label i ").addClass("icon-moon");
        } else if (localStorage.getItem('theme') === "primary" || localStorage.getItem('theme') === "green" || localStorage.getItem('theme') === "gold" || localStorage.getItem('theme') === "light") {
            jQuery(".theme-toggle").prop("checked", "");
            jQuery("#switch-theme label i ").removeClass("icon-moon");
            jQuery("#switch-theme label i ").addClass("icon-sun");
        }
    }, 10);
});

jQuery(document).ready(function () {
    console.log("server 53");
    if (navigator.userAgent.includes("Mac") && navigator.userAgent.includes("Chrome")) {
        document.body.classList.add('mac-chrome');
    }
    if (jQuery(window).width() <= 991) {
        jQuery(".desktopHeader #google_translate_element").remove();
    }
    //theme color
    jQuery("input[name=themecolor]").change(function (e) {
        var themecolor = jQuery("input[name=themecolor]:checked").val();
        jQuery("html").attr("data-theme", themecolor);
        localStorage.setItem('theme', themecolor);
        jQuery(".theme-toggle").prop("checked", "");
        jQuery("#switch-theme label i ").removeClass("icon-moon");
        jQuery("#switch-theme label i ").addClass("icon-sun");
    });
    //mobile menu
    jQuery(".main-nav .menu-item-has-children").on({
        mouseenter: function (e) {
            jQuery(this).children(".sub-menu").show();
            e.stopImmediatePropagation();
        },
        mouseleave: function (e) {
            jQuery(this).children(".sub-menu").hide();
            e.stopImmediatePropagation();
        }
    });
    jQuery(function () {
        jQuery('[data-toggle="tooltip"]').tooltip()
    })
    jQuery(".resetBTN").click(function (event) {
        event.preventDefault();
        jQuery(".contactForm form").trigger("reset");
    });
    jQuery(".resetFormBTN.publication").click(function (event) {
        event.preventDefault();
        jQuery(".formFillterSection form").trigger("reset");
    });
    jQuery(".btn-nla-modal").click(function () {
        var modalTarget = jQuery(this).data("target");
        var videourl = jQuery(this).data('videourl');
        var videotitle = jQuery(this).data('title');
        jQuery('.nla-videomodal[data-modal="' + modalTarget + '"] video').attr('src', videourl);
        if (videotitle != "") {
            jQuery('.nla-videomodal[data-modal="' + modalTarget + '"] .videoTitle').empty().append(videotitle);
        }
        jQuery('.nla-videomodal[data-modal="' + modalTarget + '"]').modal('show');
    });
    jQuery('.nla-videomodal').on('hidden.bs.modal', function () {
        jQuery('.nla-videomodal video').get(0).play();
        jQuery('.nla-videomodal video').get(0).pause();
        jQuery('.nla-videomodal video').get(0).currentTime = 0;
    });
    jQuery(".editAddressDetails form .form-row").addClass("flex-column billingCheckout");
    jQuery(".entry-summary form.cart").addClass("d-flex align-items-center");
    jQuery(".wpda_tree_item_container > div").addClass("organizationStructureItem");
    navQuantity();
    var Lang = jQuery("html").attr("lang");
    var dirLang;
    if (Lang == "ar") {
        dirLang = true;
        localStorage.setItem('LANGUAGE', 'ar');
    } else {
        dirLang = false;
        localStorage.setItem('LANGUAGE', 'en');
    }

    jQuery('.hallsGalleryGroup').owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        rtl: dirLang,
        navText: ["<div class='nav-button owl-prev'><i class='icon-keyboard_arrow_left'></i></div>", "<div class='nav-button owl-prev'><i class='icon-keyboard_arrow_right'></i></div>"],
        items: 1,
        responsive: {
            0: {
                autoplay: false,
                nav: true,
                dots: false,
            },
            600: {
                autoplay: false,
                nav: true,
                dots: false,
            },
            1000: {
                autoplay: false,
                nav: true,
                dots: false,
            }
        }
    });

    jQuery('.servicesGroup').owlCarousel({
        loop: false,
        nav: false,
        rtl: dirLang,
        dots: false,

        responsive: {
            0: {
                autoplay: true,
                nav: false,
                dots: true,
                items: 2,
            },
            600: {
                autoplay: true,
                nav: false,
                dots: false,
                items: 3,
            },
            800: {
                autoplay: true,
                nav: false,
                dots: false,
                items: 6,
            },
            1200: {
                autoplay: true,
                nav: false,
                dots: false,
                items: 6,
            }
        }
    });

    jQuery('.comingEventsGroup').owlCarousel({
        loop: false,
        nav: true,
        rtl: dirLang,
        dots: true,
        navText: ["<div class='nav-button owl-prev'><i class='icon-keyboard_arrow_left'></i></div>", "<div class='nav-button owl-prev'><i class='icon-keyboard_arrow_right'></i></div>"],
        items: 1,
        navRewind: false,
        responsive: {
            0: {
                autoplay: false,
                nav: true,
                dots: true,
                loop: false,
                navRewind: false
            },
            600: {
                autoplay: false,
                nav: true,
                dots: true,
                loop: false,
                navRewind: false
            },
            1000: {
                autoplay: false,
                nav: true,
                dots: true,
                loop: false,
                navRewind: false
            }
        }
    });

    jQuery('.HappenedCardsGroups').owlCarousel({
        loop: false,
        nav: false,
        rtl: dirLang,
        autoplay: true,
        dots: false,
        items: 1,
        responsive: {
            0: {
                autoplay: true,
                nav: false,
                dots: false,
            },
            600: {
                autoplay: true,
                nav: false,
                dots: false,
            },
            1000: {
                autoplay: true,
                nav: false,
                dots: false,
            }
        }
    });

    jQuery('.importantLinkGroup').owlCarousel({
        loop: true,
        nav: false,
        rtl: dirLang,
        autoplay: false,
        dots: false,
        items: 2,
        responsive: {
            0: {
                loop: true,
                autoplay: true,
                nav: false,
                dots: false,
                items: 1,
            },
            600: {
                loop: true,
                autoplay: true,
                nav: false,
                dots: false,
                items: 1,
            },
            1000: {
                loop: false,
                autoplay: false,
                nav: false,
                dots: false,
                items: 2,
            }
        }
    });

    //start code for leave modal
    var targetUrl = "";
    jQuery('a').click(function (event) {
        targetUrl = jQuery(this).prop('href');
        var currentDomain = window.location.hostname;
        var targetDomain = getDomain(targetUrl);
        if (targetDomain !== currentDomain && !jQuery(this).hasClass("noLeave") && !jQuery(this).hasClass("lb-close") && !jQuery(this).hasClass("pdfDownload")) {
            event.preventDefault();
            jQuery('#leavingModal').modal('show');
        } else if (jQuery(this).hasClass("hashedUrl") && !jQuery(this).hasClass("pdfDownload")) {
            event.preventDefault();
            var mainSiteUrl = window.location.protocol + '//' + window.location.host + '/';
            var encryptedUrl = targetUrl;
            var newTab = window.open('', '_blank');
            newTab.location.href = mainSiteUrl + 'pdf-viewer?url=' + encodeURIComponent(encryptedUrl);
        }
    });
    jQuery(".approveleaving").click(function (event) {
        jQuery('#leavingModal').modal('hide');
        window.open(targetUrl);
        return false;
    });
    //end code for leave modal



    jQuery('a[href*=".pdf"]').each(function () {
        jQuery(this).addClass("hashedUrl");
        /*var originalUrl = $(this).attr('href');
        var encryptedUrl = encryptURL(originalUrl);
        $(this).attr('href', encryptedUrl);
        $(this).data('encrypted', true);*/
    });








    addCustomQueryString();

    $('#fromeventdate').datepicker({
        uiLibrary: 'bootstrap4',
        format: 'yyyy-mm-dd',
    });
    $('#toeventdate').datepicker({
        uiLibrary: 'bootstrap4',
        format: 'yyyy-mm-dd',
        keyboardNavigation: false
    });


    jQuery('#startdatepicker').datepicker({
        uiLibrary: 'bootstrap4',
        format: 'dd-mm-yyyy',
        maxDate: function () {
            return jQuery('#enddatepicker').val() ? jQuery('#enddatepicker').val() : new Date();
        }
    });
    jQuery('#enddatepicker').datepicker({
        uiLibrary: 'bootstrap4',
        format: 'dd-mm-yyyy',
        minDate: function () {
            return jQuery('#startdatepicker').val() ? jQuery('#startdatepicker').val() : new Date() - 1;
        },
        maxDate: new Date()
    });
    jQuery('#startdatepickerVideo').datepicker({
        uiLibrary: 'bootstrap4',
        format: 'dd-mm-yyyy',
        maxDate: function () {
            return jQuery('#enddatepickerVideo').val() ? jQuery('#enddatepickerVideo').val() : new Date();
        }
    });
    jQuery('#enddatepickerVideo').datepicker({
        uiLibrary: 'bootstrap4',
        format: 'dd-mm-yyyy',
        minDate: function () {
            return jQuery('#startdatepickerVideo').val() ? jQuery('#startdatepickerVideo').val() : new Date() - 1;
        },
        maxDate: new Date()
    });
    jQuery('#startdatepickerMaps').datepicker({
        uiLibrary: 'bootstrap4',
        format: 'dd-mm-yyyy',
        maxDate: function () {
            return jQuery('#enddatepickerMaps').val() ? jQuery('#enddatepickerMaps').val() : new Date();
        }
    });
    jQuery('#enddatepickerMaps').datepicker({
        uiLibrary: 'bootstrap4',
        format: 'dd-mm-yyyy',
        minDate: function () {
            return jQuery('#startdatepickerMaps').val() ? jQuery('#startdatepickerMaps').val() : new Date() - 1;
        },
        maxDate: new Date()
    });
    jQuery('#imagesSDate').datepicker({
        uiLibrary: 'bootstrap4',
        format: 'dd-mm-yyyy',
        maxDate: function () {
            return jQuery('#imagesEDate').val() ? jQuery('#imagesEDate').val() : new Date();
        }
    });
    jQuery('#imagesEDate').datepicker({
        uiLibrary: 'bootstrap4',
        format: 'dd-mm-yyyy',
        minDate: function () {
            return jQuery('#imagesSDate').val() ? jQuery('#imagesSDate').val() : new Date() - 1;
        },
        maxDate: new Date()
    });
    jQuery('#governmentalarchiveSDate').datepicker({
        uiLibrary: 'bootstrap4',
        format: 'yyyy-mm-dd',
        maxDate: function () {
            return jQuery('#governmentalarchiveEDate').val() ? jQuery('#governmentalarchiveEDate').val() : new Date();
        }
    });
    jQuery('#governmentalarchiveEDate').datepicker({
        uiLibrary: 'bootstrap4',
        format: 'yyyy-mm-dd',
        minDate: function () {
            return jQuery('#governmentalarchiveSDate').val() ? jQuery('#governmentalarchiveSDate').val() : new Date() - 1;
        },
        maxDate: new Date()
    });

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    jQuery("#billing_email, #shipping_email").on("input", function (e) {
        var inputValue = jQuery(this).val();
        if (!emailPattern.test(inputValue)) {
            var sanitizedValue = inputValue.replace(/[^\w@.-]/g, '');
            jQuery(this).val(sanitizedValue);
        }
    });

    jQuery(".woocommerce-checkout input").attr("maxlength", 50);
    jQuery(".woocommerce-checkout textarea").attr("maxlength", 200);
    jQuery(".woocommerce-shipping-calculator input").attr("maxlength", 50);
    jQuery(".woocommerce-product-gallery__image img").attr("title", "");


    // Prevent non-numeric characters from being entered
    $('input[name=your-number]').on('keydown', function (e) {
        if (e.key.length === 1 && e.key.match(/[^0-9]/)) {
            e.preventDefault();
        }
    });


    jQuery('#resetBillingFieldsButton').click(function () {
        jQuery('input[name^="billing_"]').val('');
    });
    jQuery('#resetShippingFieldsButton').click(function () {
        jQuery('input[name^="shipping_"]').val('');
    });

    jQuery("#shareopinionform").on("hidden.bs.modal", function () {
        jQuery('.share-opinion-form form .wpcf7-form-control-wrap input').val('');
        jQuery('.share-opinion-form form textarea').val('');
        jQuery('.share-opinion-form form .wpcf7-not-valid-tip').hide();
        jQuery('.share-opinion-form form .wpcf7-list-item input[type="radio"]').prop('checked', false);
        jQuery('.share-opinion-form form select option:first').prop('selected', true);
        jQuery('.facerating').addClass('d-none');
        jQuery('.facerating').removeClass('d-block');
    });

    jQuery("#happinessMeter").on("hidden.bs.modal", function () {
        jQuery('.pollForm input[type="radio"]').prop('checked', false);
    });

    // Share Opinion Form 
    document.addEventListener('wpcf7mailsent', function (event) {
        jQuery(".share-opinion-form").addClass("d-none");
        jQuery("#shareopinionform .modal-title").addClass("d-none");
        jQuery(".thanksMessage").removeClass('d-none');
        jQuery(".thanksMessage").addClass('d-block');
    }, false);

    jQuery("select[name=note-type]").on("change", function () {
        var notetypevalue = jQuery(this).find(":selected").val();
        if (notetypevalue == "Feedback" || notetypevalue == "الاستفسارات") {
            jQuery(".facerating").addClass("d-block");
            jQuery(".facerating").removeClass("d-none");
        } else {
            jQuery(".facerating").removeClass("d-block");
            jQuery(".facerating").addClass("d-none");
        }
    });

    // Accessibility Part
    jQuery(".searchIcon").on("click", function () {
        jQuery(".searchModal").fadeToggle();;
    });
    jQuery(".accessibilityToolsButton").on("click", function () {
        jQuery(".accessibilityToolsSection").fadeToggle();;
    });
    jQuery(document).mouseup(function (e) {
        var container = jQuery(".searchModal,.accessibilityToolsSection");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide();
        }
    });
    // Zoom In button click event handler
    jQuery("input[name='zoomScreen']").on("change", function () {
        changeZoomingSecrren();
    });


    jQuery('input[name="dzstabs_accordio_styling_input"]').bind('change', function () {
        var _t = jQuery(this);
        var val = _t.val();
        console.info(val);
        jQuery('#dzstabs_accordio_styling').html(' body .dzs-tabs.skin-blue .tabs-menu .tab-menu-con.active .tab-menu{ background-color: ' + val + '; }');
    });


    $("#chatbotBTN").click(function () {
        if (!$(".chatbot-area").hasClass("chatbot-active")) {
            $(".chatbot-area").addClass("chatbot-active");
        } else {
            $(".chatbot-area").removeClass("chatbot-active");
        }
    });
    jQuery(".close-item").click(function () {
        if ($(".chatbot-area").hasClass("chatbot-active")) {
            $(".chatbot-area").removeClass("chatbot-active");
        }
    });




    function enableSubmitButton(form) {
        var submitButton = form.find('input[type="submit"]');
        submitButton.prop('disabled', false);
    }

    jQuery('form.wpcf7-form').on('wpcf7submit', function (event) {
        if (event.detail.apiResponse.status === 'mail_failed') {
            enableSubmitButton(jQuery(this));
        }
    });

    jQuery('form.wpcf7-form').on('wpcf7mailfailed', function (event) {
        enableSubmitButton(jQuery(this));
    });

    jQuery('form.wpcf7-form').on('wpcf7invalid', function () {
        enableSubmitButton(jQuery(this));
    });

    jQuery('form.wpcf7-form').submit(function () {
        var submitButton = jQuery(this).find('input[type="submit"]');
        submitButton.prop('disabled', true);
    });


    jQuery('.registrationForm input[name=user-name] , .registrationForm input[name=email] , .registrationForm input[name=entity-name] , .registrationForm input[name=entity-name]').on('keydown input', function (e) {
        var inputValue = jQuery(this).val();
        if (inputValue.length >= 49 && e.keyCode !== 8) {
            e.preventDefault();
        }
    });

    jQuery('.registrationForm input[name=your-number]').on('keydown input', function (e) {
        var inputValue = jQuery(this).val();
        if (inputValue.length >= 14 && e.keyCode !== 8) {
            e.preventDefault();
        }
    });

    jQuery("input[name=keyword] , input[name=searchCriteria]").on('keyup', function () {
        var userInput = $(this).val();
        var forbiddenChars = /[<>"'&\/,;()%]/g;
        var cleanedInput = userInput.replace(forbiddenChars, '');
        jQuery(this).val(cleanedInput);
    });

    jQuery('#ship-to-different-address-checkbox').prop('checked', false);
});

function themeswitcher() {
    var toggle = document.getElementById("theme-toggle");
    if (localStorage.getItem('theme') === null) {
        localStorage.setItem('theme', "light");
    }
    var storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        document.documentElement.setAttribute('data-theme', storedTheme)
    }
    toggle.onclick = function () {
        var currentTheme = document.documentElement.getAttribute("data-theme");
        var targetTheme = "light";
        if (currentTheme === "light" || currentTheme === "primary" || currentTheme === "gold" || currentTheme === "green") {
            targetTheme = "dark";
        }
        document.documentElement.setAttribute('data-theme', targetTheme)
        localStorage.setItem('theme', targetTheme);
    };
}

function zoomingSecrren() {
    var zoomScreen = localStorage.getItem('zooming');
    if (zoomScreen) {
        localStorage.setItem('zooming', zoomScreen);
        document.documentElement.setAttribute('data-zoom', zoomScreen);
    } else {
        localStorage.setItem('zooming', "resetZoom");
        document.documentElement.setAttribute('data-zoom', zoomScreen);
    }
}

function changeZoomingSecrren() {

    localStorage.setItem('zooming', jQuery("input[name='zoomScreen']:checked").val());
    document.documentElement.setAttribute('data-zoom', jQuery("input[name='zoomScreen']:checked").val());
}
/*
function replaceClass(placeClass, oldClass, newClass) {
    var form = $(placeClass);
    var oldclass = form.find("." + oldClass);
    oldclass.removeClass(oldClass);
    oldclass.addClass(newClass);
}
*/
function navQuantity() {
    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');
        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            var newVal = oldValue + 1;
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });
    jQuery(".qty").on('change', function () {
        jQuery("button[name=update_cart]").attr("disabled", false);
    });
}

function getDomain(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.hostname;
}


function addCustomQueryString() {
    var checklogin = jQuery(".checkLogin").data("checklogin");
    if (checklogin) {
        var anchors = jQuery('a');
        var queryParam = "authenticate=true";
        var checkstring = "NLAAPP/public/services/cards";
        anchors.each(function () {
            var href = jQuery(this).attr('href');
            if (href !== undefined) {
                if (href.indexOf(checkstring) !== -1) {
                    jQuery(this).attr('href', href + '?' + queryParam);
                }
            }
        });
    }

}

function showPassword() {
    var icon = jQuery(".passwordGroup i").attr("class");
    var inputtype = jQuery("#one-pass-password").attr("type");
    if (icon == "icon-eye" && inputtype == "password") {
        jQuery("#one-pass-password").attr("type", "text");
        jQuery(".passwordGroup i").attr("class", "icon-eye-slash");
    }
    if (icon == "icon-eye-slash" && inputtype == "text") {
        jQuery("#one-pass-password").attr("type", "password");
        jQuery(".passwordGroup i").attr("class", "icon-eye");
    }
}

function encryptURL(url) {
    return btoa(url);
}

