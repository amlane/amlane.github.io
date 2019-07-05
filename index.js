//j query to allow arrow to scroll down 1 page at a time

$(".down-arrow")
  .eq(0)
  .click(() => {
    $("html, body").animate(
      {
        scrollTop: $("#one").offset().top
      },
      1000
    );
  });

$(".down-arrow")
  .eq(1)
  .click(() => {
    $("html, body").animate(
      {
        scrollTop: $("#two").offset().top
      },
      1000
    );
  });

$(".down-arrow")
  .eq(2)
  .click(() => {
    $("html, body").animate(
      {
        scrollTop: $("#three").offset().top
      },
      1000
    );
  });

$(".scroll-home")
  .eq(0)
  .click(() => {
    $("html, body").animate(
      {
        scrollTop: $("#home").offset().top
      },
      2000
    );
  });
