(function ($) {
    $(document).ready(function () {
        /* $(document).on('submit', "[data-js-form=news-filter]", function(e) {
             e.preventDefault();
             var keyword = $("input[name=keyword]").val();
             var sortnewsby = $("#sortnewsby").find(":selected").val();
             var yearnews = $("#yearnews").find(":selected").val();
             var monthnews = $("#monthnews").find(":selected").val();
             $.ajax({
                 url: newsAjax.ajaxUrl,
                 data: {
                     action: "newsfilter",
                     sortnewsby: sortnewsby,
                     yearnews: yearnews,
                     monthnews: monthnews,
                     keyword: keyword
                 },
                 type: "post",
                 success: function(result) {
                     $(".newsfilterresult").html(result);
                 },
                 error: function(result) {
                     console.warn(result);
                 }
             });
         });*/
        /*$(document).on('submit', "[data-js-form=events-filter]", function(e) {
               e.preventDefault();
               var sorteventsby = $("#sorteventsby").find(":selected").val();
               var keyword = $("input[name=keyword]").val();
               var yearevents = $("#yearevents").find(":selected").val();
               var monthevents = $("#monthevents").find(":selected").val();
               $.ajax({
                   url: eventsAjax.ajaxUrl,
                   data: {
                       action: "eventsfilter",
                       keyword: keyword,
                       sorteventsby: sorteventsby,
                       yearevents: yearevents,
                       monthevents: monthevents,
                   },
                   type: "post",
                   success: function(result) {
                       $(".eventsfilterresult").html(result);
                   },
                   error: function(result) {
                       console.warn(result);
                   }
               });
           });*/

        /*$(document).on('submit', "[data-js-form=images-filter]", function(e) {
            e.preventDefault();
            var sortimagesby = $("#sortimagesby").find(":selected").val();
            var keyword = $("input[name=keyword]").val();
            var yearimages = $("#yearimages").find(":selected").val();
            var monthimages = $("#monthimages").find(":selected").val();
            $.ajax({
                url: imagesAjax.ajaxUrl,
                data: {
                    action: "imagesfilter",
                    keyword: keyword,
                    sortimagesby: sortimagesby,
                    yearimages: yearimages,
                    monthimages: monthimages,
                },
                type: "post",
                success: function(result) {
                    $(".imagesfilterresult").html(result);
                },
                error: function(result) {
                    console.warn(result);
                }
            });
        });*/
        $("#faqsubmit").click(function (e) {
            e.preventDefault();
            var keyword = $("input[name=keyword]").val();

            $.ajax({
                url: faqAjax.ajaxUrl,
                data: {
                    action: "faqfilter",
                    keyword: keyword
                },
                type: "post",
                success: function (result) {
                    $(".faqfilterresult").html(result);
                },
                error: function (result) {
                    console.warn(result);
                }
            });
        });

        $("#faqresetButton").click(function (e) {
            e.preventDefault();
            location.reload(true);
        });



        $(document).on('submit', "[data-js-form=publication-filter]", function (e) {
            e.preventDefault();
            var keyword = $("input[name=keyword]").val();
            var sortpublicationby = $("#sortpublicationby").find(":selected").val();
            var yearspublication = $("#yearspublication").find(":selected").val();
            var langpublication = $("#langpublication").find(":selected").val();
            var catpublication = $("#catpublication").find(":selected").val();

            $.ajax({
                url: publicationAjax.ajaxUrl,
                data: {
                    action: "publicationfilter",
                    keyword: keyword,
                    sortpublicationby: sortpublicationby,
                    yearspublication: yearspublication,
                    langpublication: langpublication,
                    catpublication: catpublication,
                },
                type: "post",
                success: function (result) {
                    $(".fillterpublicationresult").html(result);
                },
                error: function (result) {
                    console.warn(result);
                }
            });
        });


        $(document).on('submit', "[data-js-form=historical-documents-filter]", function (e) {
            e.preventDefault();
            var keyword = $("input[name=documentskeyword]").val();
            $.ajax({
                url: historicaldocumentsAjax.ajaxUrl,
                data: {
                    action: "historicaldocumentsfilter",
                    keyword: keyword
                },
                type: "post",
                success: function (result) {
                    $("#searchResult").html(result);
                },
                error: function (result) {
                    console.warn(result);
                }
            });
        });


        $(document).on('change', "[data-js-form=glossary-filter]", function (e) {
            e.preventDefault();
            var letter = $("input[name=glossaryCategory]:checked").val();
            var language = $("[data-js-form=glossary-filter]").data('js-lang');
            console.log(language);
            $.ajax({
                url: glossaryAjax.ajaxUrl,
                data: {
                    action: "glossaryfilter",
                    letter: letter,
                    lang: language
                },
                type: "post",
                success: function (result) {
                    $(".listofGlossary .bodyTable").html(result);
                },
                error: function (result) {
                    console.warn(result);
                }
            });
        });

        /*$(document).on('change', "[data-js-form=govermental-archives-filter] input,[data-js-form=govermental-archives-filter] select", function(e) {
            e.preventDefault();
            var $searchfor = $(this).val().toLowerCase();
            if ($(this).attr("type") == "radio") {
                if ($searchfor == "all") {
                    $("#govermentalArchaiveArea .for-search").show();
                    return;
                }
                $("#govermentalArchaiveArea .for-search").each(function(index, element) {
                    if ($(element).find(".categoryname").text().toLowerCase() == $searchfor) {
                        $(element).show();
                    } else {
                        $(element).hide();
                    }
                });
            }
            if ($(this).attr("type") == "text" && $searchfor.length != 0) {
                $("#govermentalArchaiveArea .for-search").each(function(index, element) {
                    if ($(element).find(".cardTitle").text().toLowerCase().indexOf($searchfor) >= 0) {
                        $(element).show();
                    } else {
                        $(element).hide();
                    }
                });
            }

        });
        $("#governmentalarchiveSDate").change(function() {
            var startdate = $(this).val();
            $("#govermentalArchaiveArea .for-search").each(function(index, element) {
                var itemDate = $(element).find(".dateItem").data("date");
                if (new Date(itemDate) >= new Date(startdate)) {
                    $(element).show();
                } else {
                    $(element).hide();
                }
            });
        });
        $("#governmentalarchiveEDate").change(function() {
            var enddate = $(this).val();
            $("#govermentalArchaiveArea .for-search").each(function(index, element) {
                var itemDate = $(element).find(".dateItem").data("date");
                if (new Date(itemDate) <= new Date(enddate)) {
                    $(element).show();
                } else {
                    $(element).hide();
                }
            });
        });*/
        /*$("[data-js-form=govermental-archives-filter] , #governmentalarchiveSDate , #governmentalarchiveEDate").change(function () {
            searchArchive();
        });*/
        $("#submitgovarchivrFilter").click(function(e) {
            e.preventDefault();
            searchArchive();
        });
    });

})(jQuery);



jQuery(document).ready(function ($) {
    // AJAX call to update cart count
    function updateCartCount_request() {
        $.ajax({
            url: '/', // Replace with your server endpoint
            type: 'GET',
            dataType: 'html', // Set the data type to HTML
            success: function (response) {
                // Get the body of the HTML response
                var bodyContent = $(response).find('.cart-count').html();

                // Log the body content to the console
                //console.log(bodyContent);
                $('.cart-count').text(bodyContent);
            },
            error: function (xhr, status, error) {
                console.error("An error occurred: " + error);
            }
        });
    }
    // function updateCartCount() {
    //     $.ajax({
    //         url: ajax_cart_count.ajaxurl,
    //         type: 'POST',
    //         data: {
    //             action: 'ajax_cart_count_update',
    //             nonce: ajax_cart_count.nonce
    //         },
    //         success: function (response) {
    //             // Update cart count display
    //             if (response > 100) {
    //                 $('.cart-count').text("+99");
    //             } else {
    //                 $('.cart-count').text(response);
    //             }
    //         }
    //     });
    // }

    // Call the function initially
    //updateCartCount();

    // Refresh cart count on events (e.g., after adding/removing items)
    $(document.body).on('added_to_cart', function () {
        $(".add-card-alert").show();
        updateCartCount_request();
        setTimeout(() => {
            $(".add-card-alert").hide();
        }, 3000);
    });

    // Refresh cart count on events (e.g., after adding/removing items)
    $(document.body).on('removed_from_cart', function () {
        $(".remove-card-alert").show();
        updateCartCount_request();
        setTimeout(() => {
            $(".remove-card-alert").hide();
        }, 3000);
    });


    $(document.body).on('click', 'button[name="update_cart"]', function () {
        updateCartCount_request();
    });

    $('.wpcf7-form input[type="submit"]').bind('click touch', function () {
       
        // Submit the form (you can remove this line if you want to prevent form submission entirely)
        // $('#your-contact-form-id').submit();
        // $(this).prop('disabled', true);

    });


});
// jQuery(document).ready(function($) {
//     // AJAX call to update cart count
//     function updateCartCount() {
//         $.ajax({
//             url: ajax_cart_count.ajaxurl,
//             type: 'POST',
//             data: {
//                 action: 'ajax_cart_count_update',
//                 nonce: ajax_cart_count.nonce
//             },
//             success: function(response) {
//                 // Update cart count display
//                 $('.cart-count').text(response);
//             }
//         });
//     }

//     // Call the function initially
//     updateCartCount();

//     // Refresh cart count on events (e.g., after adding/removing items)
//     $(document.body).on('added_to_cart removed_from_cart', function() {
//         updateCartCount();
//     });
//     $(document.body).on('click', 'button[name="update_cart"]', function() {
//         updateCartCount();
//     });


// });

function sortCard(cardList) {

    var listItems = cardList.children('.for-search').get();
    var sortedby = $("[data-js-form=govermental-archives-filter] #sortby").children("option:selected").val();

    listItems.sort(function (a, b) {
        if (sortedby == "title") {
            var titleA = $(a)[0].getAttribute("data-Cardtitle");
            var titleB = $(b)[0].getAttribute("data-Cardtitle");
        } else if (sortedby == "date") {
            var titleA = $(a)[0].getAttribute("data-Carddate");
            var titleB = $(b)[0].getAttribute("data-Carddate");
        }
        return titleA.localeCompare(titleB);
    });
    $.each(listItems, function (index, item) {
        cardList.append(item);
    });
    return cardList;

}

function searchArchive() {
    var listofArrayItems = $("#govermentalArchaiveArea");
    var sortedList = sortCard(listofArrayItems);
    var $searchfor = $("#searchTitle").val().toLowerCase();
    var cat = $("input[type='radio'][name='govermentalarchivecategory']:checked").val().toLowerCase();
    var startdate = $("#governmentalarchiveSDate").val() ? $("#governmentalarchiveSDate").val() : '1901-01-01';
    var enddate = $("#governmentalarchiveEDate").val() ? $("#governmentalarchiveEDate").val() : new Date();
    var allHidden = true;
    listofArrayItems.find('.for-search').each(function(index, element) {
        var itemCardDate = $(element)[0].getAttribute("data-Carddate");
        var itemCardTitle = $(element)[0].getAttribute("data-Cardtitle").toLowerCase();
        var itemCardcategory = $(element)[0].getAttribute("data-category").toLowerCase();
        if (new Date(itemCardDate) >= new Date(startdate) && new Date(itemCardDate) <= new Date(enddate) && itemCardTitle.indexOf($searchfor) >= 0 && (itemCardcategory == cat || cat == "all")) {
            $(element).show();
            allHidden = false;
        } else {
            $(element).hide();
        }
    });

    $("#govermentalArchaiveArea").replaceWith(listofArrayItems);
    if (allHidden) {
        $(".no-result-found").removeClass("d-none");
    } else {
        $(".no-result-found").addClass("d-none");
    }
}

/*

function login() {
    var request = {
        client_id: 'NAL',
        redirect_uri: 'http://localhost/nla/login-call-back',
        response_type: 'code',
        scope: 'openid profile all_resources custom_data',
        response_mode: 'query'
    };
    window.location.href = `https://events.tahaluf.ae/SqlSecurityAPI/connect/authorize?${this.toQuery(request, true)}`;
}

function completeLogin() {
    var codeauth = document.getElementById("codeauth");
    //console.log(codeauth.dataset.code);
    const request = {
        client_id: 'NAL',
        code: codeauth.dataset.code,
        redirect_uri: 'http://localhost/nla/login-call-back',
        grant_type: 'authorization_code'
    };

    const headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
    });

    fetch('https://events.tahaluf.ae/SqlSecurityAPI/connect/token', {
            method: 'POST',
            headers: headers,
            body: toQuery(request)
        })
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
        .catch(error => {
            console.error(error);
        });
}

function toQuery(data, encode) {
    const getValue = (value, encode) => encode ? encodeURIComponent(value) : value;
    const params = Object.keys(data).map(key => getValue(key, encode) + '=' + getValue(data[key], encode)).join('&');
    return params;
}*/