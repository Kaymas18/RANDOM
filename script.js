$(document).ready(function () {
  // Fetch portfolio items from an API or a JSON file
  $.getJSON("portfolio.json", function (data) {
    // Iterate through the portfolio items and create HTML for each item
    $.each(data, function (index, item) {
      var portfolioItem = `
          <div class="portfolio-item">
            <h2>${item.title}</h2>
            <img src="${item.image}" alt="${item.title}">
            <p>${item.description}</p>
          </div>
        `;
      // Append the portfolio item HTML to the container
      $("#portfolioItems").append(portfolioItem);
    });
  });
});
$(document).ready(function () {
  $('a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      ); // Adjust the scrolling speed as desired
    }
  });
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".navbar").addClass("shrink");
  } else {
    $(".navbar").removeClass("shrink");
  }
});
$("#portfolioCarousel").carousel({
  interval: 3000, // Adjust the interval (in milliseconds) between slide transitions
});
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({
    behavior: "smooth",
  });
}
