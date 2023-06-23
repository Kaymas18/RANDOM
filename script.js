$(document).ready(function() {
    // Fetch portfolio items from an API or a JSON file
    $.getJSON('portfolio.json', function(data) {
      // Iterate through the portfolio items and create HTML for each item
      $.each(data, function(index, item) {
        var portfolioItem = `
          <div class="portfolio-item">
            <h2>${item.title}</h2>
            <img src="${item.image}" alt="${item.title}">
            <p>${item.description}</p>
          </div>
        `;
        // Append the portfolio item HTML to the container
        $('#portfolioItems').append(portfolioItem);
      });
    });
  });
  