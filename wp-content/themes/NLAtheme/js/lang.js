$(document).ready(function() {
    var Lang = $("html").attr("lang");
    if (Lang == "en-US") {
        $(".bread-cat.bread-custom-post-type-halls").text("Halls of the National Library and Archives");
    } else {
        $(".bread-cat.bread-custom-post-type-halls").text("قاعات الأرشيف والمكتبة الوطنية");

    }

});