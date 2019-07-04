//j query to allow arrow to scroll down 1 page at a time
$(document).ready(function() {
  $(".down-arrow").click(function(event) {
    $("html, body").animate({ scrollTop: "+=970px" }, 1000);
  });
});

$(document).ready(function() {
  $(".up-arrow").click(function(event) {
    $("html, body").animate({ scrollTop: "+=-970px" }, 1000);
  });
});
