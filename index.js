//j query to allow arrow to scroll down 1 page at a time

$(".down-arrow")
  .eq(0)
  .click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".full-page-view")
          .eq(1)
          .offset().top
      },
      1000
    );
  });

$(".down-arrow")
  .eq(1)
  .click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".full-page-view")
          .eq(2)
          .offset().top
      },
      1000
    );
  });

$(".down-arrow")
  .eq(2)
  .click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".full-page-view")
          .eq(3)
          .offset().top
      },
      1000
    );
  });

$(".down-arrow")
  .eq(3)
  .click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".full-page-view")
          .eq(4)
          .offset().top
      },
      1000
    );
  });
