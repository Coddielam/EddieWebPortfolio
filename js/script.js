$(function () {
    $("#navbarToggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 700) {
            $("#items").collapse('hide');
        }
    });
});
console.log("imported");
// document.querySelector("#navbarToggle").addEventListener("blur", function(){});

