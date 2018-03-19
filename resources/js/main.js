var LT = (function(){
  'use strict';
  var map;
  var mapStyle = [{ "featureType": "water",
                    "stylers": [
                      { "color": "#cdcdcd" }
                  ]}, {
                    "featureType": "landscape.natural.terrain",
                    "stylers": [{ "color": "#aaaaaa" }
                  ]},{
                    "featureType": "landscape.natural",
                    "stylers": [{ "color": "#aaaaaa" }
                  ]},{
                    "featureType": "poi.park",
                    "stylers": [{ "hue": "#aaaaaa" },
                                { "saturation": -100 }
                  ]},{
                    "featureType": "road.highway",
                    "stylers": [{ "hue": "#ff0000" },
                                { "saturation": -100 }
                  ]}];
  var markers = [];

  if (!String.prototype.format) {
    String.prototype.format = function() {
      var args = arguments;
      return this.replace(/{(\d+)}/g, function(match, number) { 
        return typeof args[number] != 'undefined'
          ? args[number]
          : match
        ;
      });
    };
  }

  if (!String.prototype.capitalizeFirstLetter) {
    String.prototype.capitalizeFirstLetter = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    }
  }

  function initMenu() {
    var range = 30;
    var newHash = '';

    //gestione click
    $(".navbar a[href^='#']").on('click', function(e) {
      $('#navCollapse').collapse('hide');

      newHash = this.hash;
      e.preventDefault();

      $('html, body').animate({
          scrollTop: $(this.hash).offset().top
        }, 300);
    });

    //gestione scroll
    $(document).scroll(function () {
      $('.section').each(function () {
        var s = {};
        s.top = $(this).offset().top;
        s.hash = '#' + $(this).attr('id');
        var distance = window.pageYOffset - s.top;
        if (distance < range && distance > (range * -1) && window.location.hash !== s.hash) {
          if ((newHash != '' && newHash == s.hash) || newHash == '') {
            changeHash(s.hash);
            newHash = '';
          }
        }
      });
    });

    function changeHash(hash) {
      var sectionName = hash.substring(1).capitalizeFirstLetter();
      var pageTitle = 'Lou Tapage' + (sectionName !== 'Loutapage' ? ' - ' + sectionName : ''); 
      window.history.pushState('page', pageTitle, hash);
      document.title = pageTitle; 
    }
  }

  function initMap() {
    var mapOptions = {
      scrollwheel: false,
      panControl: true,
      panControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT
      },
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.TOP_RIGHT
      },
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: false,
      overviewMapControl: false,
      styles: mapStyle,
      zoom: 6,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: new google.maps.LatLng(46,0)
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
     
    refreshMapMarkers();    
  }

  function refreshMapMarkers() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }

    for (var i = 0; i < LT.json.concerti[LT.year].length; i++) {
      addMarker(LT.json.concerti[LT.year][i]);
    }

    function addMarker(c) {
      var point = new google.maps.LatLng(c.lat,c.lon);
      var iconPath = 'resources/img/map-marker.png';
      var marker = new google.maps.Marker({
        position: point,
        map: map,
        draggable: false,
        icon: iconPath
      });

      markers.push(marker);

      var content = '<h4>' + c.date + '/2016' + '</h4><span class="maps-content"> ' + (c.title ? c.title + ' - ' : '') + c.place + '</span>';
      var infowindow = new google.maps.InfoWindow({
        content: content
      });
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
      }); 
    }
  }

  function initDiscografia() {
    var source = $('#discografia-template').html();

    for (var i = 0; i < LT.json.discografia.length; i++ ) {
      var c = LT.json.discografia[i];
      var htmlStr = source;
      htmlStr = htmlStr.format(c.title, c.year, c.records, c.image);
      $('.discografia-container').append(htmlStr);
    }
  }

  function initConcerti() {
    /*$.getJSON('concerts.json', function(data) {
      concerti = data;
    });*/

    $('#concerti [data-year]').click(function() {
      var newYear = $(this).attr('data-year');
      if (LT.year !== newYear) {
        $('#concerti .selected').removeClass('selected');
        $(this).addClass('selected');

        if ($(this).hasClass('dropdown-menu__item')) {
          $('.load-concert-button').addClass('selected');
          $('.load-concert-button__content').text(newYear);
        } else {
          $('.load-concert-button__content').text('2013');
        }

        LT.year = newYear;
        loadConcerti();
        refreshMapMarkers();
      }
    });

    loadConcerti();
  }

  function loadConcerti() {
    $('.concerti-container').empty();

    for (var i = 0; i < LT.json.concerti[LT.year].length; i++ ) {
      var c = LT.json.concerti[LT.year][i];
      var htmlStr = '<li><div class="date">{0}</div><div class="city {4}">{1}{2}{3}</div></li>'.format(c.date, (c.title ? c.title + ' - ' : ''), c.place, (c.isCanceled ? ' <span> Annullato</span> ' : ''), (c.isCanceled ? ' is-canceled ' : ''));
      $('.concerti-container').append(htmlStr);
    }
  }

  function initMedia() {
    $('#carousel-media .item').click(function(){
      $('#carousel-media').carousel('pause');
      var videoUrl = $(this).attr('data-video-url');
      $('#modalVideo iframe').attr('src', videoUrl);
      $('#modalVideo').modal();

      $('.carousel-control').addClass('hide');
    });

    $('#modalVideo').on('hide.bs.modal', function (e) {
      $('#modalVideo iframe').attr('src', '');
      $('#carousel-media').carousel('cycle');
      $('.carousel-control').removeClass('hide');
    });
  }

  function initDeAndre() {
    $('#carousel-deandre .item').click(function(){
      $('#carousel-deandre').carousel('pause');
      var videoUrl = $(this).attr('data-video-url');
      $('#modalVideo iframe').attr('src', videoUrl);
      $('#modalVideo').modal();

      $('#carousel-deandre .carousel-control').addClass('hide');
    });

    $('#modalVideo').on('hide.bs.modal', function (e) {
      $('#modalVideo iframe').attr('src', '');
      $('#carousel-deandre').carousel('cycle');
      $('#carousel-deandre .carousel-control').removeClass('hide');
    });
  }

  function initCrowdfunding() {
    $('#crowdfunding .play').click(function(){
      var videoUrl = $(this).attr('data-video-url');
      $('#modalVideo iframe').attr('src', videoUrl);
      $('#modalVideo').modal();
    });
  }

  function initBuonenuove() {
    var i = 1;
    var timer;

    changeOpacity();
    function changeOpacity() {
      $('.buonenuove__img').removeClass('glitch');
      $('.buonenuove__img[data-id=' + i + ']').addClass('glitch');

      i ++;
      if (i > 6) {
        i = 1;        
      }

      timer = setTimeout(function() {
        changeOpacity();
      }, getRandomInt(3000, 6000));
    }

    $('#buonenuove').click(function(){
      var videoUrl = $(this).attr('data-video-url');

      clearTimeout(timer);

      $('#modalVideo iframe').attr('src', videoUrl);
      $('#modalVideo').modal();
    });

    $('#modalVideo').on('hide.bs.modal', function (e) {
      $('#modalVideo iframe').attr('src', '');
      changeOpacity();
    });
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function scrollTo(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 750);
  }

  function init() {
    initMenu();
    initConcerti();
    initDiscografia();
    initMedia();
    initDeAndre();
    //initBuonenuove();
    initCrowdfunding();
  }

  return {
    json: {concerti: jsonData.concerti, discografia: jsonData.discografia},
    year: 2018,
    init: init,
    initMap: initMap,
    scrollTo: scrollTo
  }
})();

$(function(){
  LT.init();
});
