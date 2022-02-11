//  $ = JQuery = document.querySelector && .querySelectorAll
/*
 *   innerHTML = html("")
 *   textContent = text("")
 *
 *   .style.color = css("color")
 *
 *   .classList.add("")  =  .addClass("")
 *   .setAttribute("src") = "smth" || .attr("src", "http::smth")
 */
$("h1").css("color", "purple");

$("a").attr("href", "https://www.imdb.com");

$("h1").addClass("big-heading");

$(document).keydown(function(e) {

  $("h1").text(e.key);
});

$("h1").on("mouseover", function() {

  $("h1").css("color", "DarkSlateBlue");
  setTimeout(function() {
    $("h1").css("color", "");
  }, 500);
});

// Animations
$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
