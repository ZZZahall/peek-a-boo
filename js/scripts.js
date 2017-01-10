$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-hidden").fadeIn();
    $("#walrus-showing").fadeOut();
  });
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
  $("button#original").click(function() {
    $("body").removeClass();
  });
  $("p").click(function() {
    $("p").addClass("highlight");
    $('p').addClass("bg-success");
  });

});
