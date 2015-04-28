(function($) {

  $(document).ready(function() {

      if (typeof Drupal.settings.su_search_page_template !== 'undefined') {

          var cx = 'unknown';
          if (typeof Drupal.settings.su_search_google_cse_cx === 'undefined' ||
              Drupal.settings.su_search_google_cse_cx == '') {
              console.log('no Google CSE cx available.');
              return;
          } else {
              cx = Drupal.settings.su_search_google_cse_cx;
          }
          var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
          gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
              '//www.google.com/cse/cse.js?cx=' + cx;
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);

          $('#search-form').hide();

          var page_title = '';
          if (typeof Drupal.settings.su_search_tab_title !== 'undefined') {
              page_title = 'Search ' + Drupal.settings.su_search_tab_title;
              $('#page-title').html(page_title);
          }

          var stanford_link = 0;
          if (typeof Drupal.settings.su_search_all_stanford_link !== 'undefined') {
              stanford_link = Drupal.settings.su_search_all_stanford_link;
          }

          if (stanford_link == 1) {
              // when the "search all stanford" link is clicked, go to stanford search
              // with whatever is in the google search field
              console.log('setting click function on link');
              $(".search-all-stanford-link").click(function(){
                  var element = google.search.cse.element.getElement('su_search_obj');
                  var su_query = element.getInputQuery();
                  $(this).attr('href', 'http://www.stanford.edu/search?q='+su_query);
                  return true;
              });
          }
      }
  });

})(jQuery);
;
jQuery(document).ready(function($) {
  // Bootstrap Carousel
  $('.carousel').attr('id', 'myCarousel');
  $('.carousel .view-content').addClass('carousel-inner');
  $('.carousel .item:nth-child(1)').addClass('active');
  $('.carousel .item').attr('tabindex', '-1');
  $('.carousel .item:nth-child(1)').attr('tabindex', '0');
  // put the ol.carousel-indicators inside the div.carousel-dots
  $('div.view-footer div.carousel-dots').append('<ol class="carousel-indicators"></ol>');
  var dots = [];
  // grab the contents of each h2 and pop it into the 'dots' array
  $('.carousel-inner .views-row h2').each(function()
  {
    var header2 = $(this).text();
    dots.push(header2);
  }
  );
  // If we ended up with an empty array, that means there are no h2 elements.
  // Therefore, it's a carousel without captions.
  if(dots.length == 0) {
    var i = 1;
    $('.carousel-inner .views-row').each(function()
    {
      // Call it "Slide 1", "Slide 2" ,etc.
      var header = "Slide " + i;
      dots.push(header);
      i++;
    }
    );
  }
  // Build the <li> elements inside of ol.carousel-indicators. There should be one <li> element for each slide, that looks like this:
  // <li data=target="myCarousel" data-slide-to="0"><a href="#">Slide Title</a></li>
  $.each(dots, function(key, value)
  {
    plusone = key + 1;
    $('.view-stanford-carousel .views-row-' + plusone + ' img').attr('id', 'stanford-carousel-slide' + plusone);
    $('.carousel-indicators').append('<li data-target="#myCarousel" data-slide-to="' + key + '"><a role="button" href="#stanford-carousel-slide' + plusone +'">' + value + '</a></li>');
  }
  );
  // Add the "active" class to the first <li> element
  $('.carousel-indicators li').first().addClass("active");

  // Run the carousel
  if ($(".carousel-autoplay")[0]){
    $('.carousel').carousel({
      interval: 6000, // use false to disable auto cycling, or use a number 4000
      ariaFocus: true
    });
  } else {
    $('.carousel').carousel({
      interval: false, // use false to disable auto cycling, or use a number 4000
      ariaFocus: true
    });
  }
});

;
jQuery(document).ready(function($) {

  $('.node-stanford-event .field-name-field-s-event-map-link a').prepend('<i class="icon-map-marker"></i> ');
  $('.node-stanford-event .field-name-field-s-event-map-link a').addClass('btn btn-sm');
});

;
