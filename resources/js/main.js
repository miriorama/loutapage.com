var LT = (function(){
  'use strict';
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

  var discografia =  [{
    title: 'Live CPA Firenze SUD',
    year: '2015',
    image: 'discografia-live-cpa-firenze-sud',
    records: 'LT Records'
  },{
    title: 'Finisterre',
    year: '2013',
    image: 'discografia-finisterre',
    records: 'LT Records'
  },{
    title: 'Storia di un impiegato',
    year: '2010',
    image: 'discografia-storia-di-un-impiegato',
    records: 'LT Records'
  },{
    title: 'Que vos lej far',
    year: '2009',
    image: 'discografia-que-vos-lej-far',
    records: 'Folest Dischi'
  },{
    title: 'Réve eternè',
    year: '2007',
    image: 'discografia-reve-eterne',
    records: 'Folkest Dischi'
  },{
    title: 'Lou Tapage',
    year: '2005',
    image: 'discografia-lou-tapage',
    records: 'Videoradio'
  }];

  var concerti = [
    {date: '10/01', title: 'Teatro Altrove', place: 'Genova', lat:44.405650, lon:8.946256},
    {date: '17/03', title: 'Irlanda in festa', place: 'Cuneo', lat:44.392877, lon:7.534980},
    {date: '18/03', title: 'Jack Madden Irish Pub', place: 'Asti', lat:44.900751, lon:8.206426},
    {date: '02/04', title: 'Ostau', place: 'Marseille (Francia)', lat: 43.294480, lon:5.385673},
    {date: '03/04', title: 'Trad & Boulegan festival', place: 'Draguignan (Francia)', lat: 43.537657, lon:6.466920},
    {date: '04/04', title: '', place: 'Châteauneuf de Gadagne (Francia)', lat: 43.932339, lon:4.943401},
    {date: '08/04', title: '', place: 'Coazze (TO)', lat: 45.051520, lon:7.303860},
    {date: '24/04', title: 'Viva la resistenza! - CSA La Talpa e l\'Orologio', place: 'Imperia', lat: 43.912946, lon:8.020845},
    {date: '25/04', title: 'Festa della liberazione', place: 'Firenze', lat: 43.766832, lon:11.247326},
    {date: '29/04', title: 'FriAir Festival', place: 'Fribourg (Svizzera)', lat: 46.806477, lon:7.161972},
    {date: '30/04', title: 'Festival del Primo Maggio', place: 'Bellinzona (Svizzera)', lat: 46.194622, lon:9.024412},
    {date: '06/05', title: 'Officine Corsare', place: 'Torino', lat: 45.073439, lon:7.703500},
    {date: '07/05', title: 'Rock\'n\'food', place: 'Savigliano (CN)', lat: 44.648495, lon:7.639103},
    {date: '14/05', title: 'Les Festejades', place: 'Gruissans (Francia)', lat: 43.107052, lon:3.086181},
    {date: '27/05', title: 'Giro d\'Italia', place: 'Vinadio (CN)', lat: 44.232910, lon:7.105365},
    {date: '03/06', title: 'Folkampestre', place: 'Montevecchio (LC)', lat: 45.727021, lon:9.351164},
    {date: '09/06', title: 'Wey Cup', place: 'Saluzzo (CN)', lat: 44.647405, lon:7.485308},
    {date: '11/06', title: 'Festin dou Boutaù', place: 'Levens (Francia)', lat: 43.859184, lon:7.225960},
    {date: '18/06', title: 'Coniolo in Folk', place: 'Coniolo (AL)', lat: 45.147654, lon:8.373502},
    {date: '25/06', title: '', place: 'Valmadonna (AL)', lat: 44.971097, lon:8.611674},
    {date: '28/06', title: 'Festival Bala cui Rat', place: 'Piacenza', lat: 45.055927, lon: 9.688341},
    {date: '01/07', title: 'Pizza Fest', place: 'Cuneo', lat: 44.389024, lon: 7.547838},
    {date: '07/07', title: 'Piovono Salsicce Festival', place: 'Villastellone (TO)', lat: 44.921204, lon:7.744541},
    {date: '09/07', title: 'Festival dell\'Immateriale', place: 'Bannio Anzino (VB)', lat: 45.984741, lon:8.155819},
    {date: '16/07', title: 'Le Basse del Troll', place: 'Cuneo', lat: 44.392833, lon:7.532394},
    {date: '23/07', title: 'Festa Occitana', place: 'Olivetta S. Michele (IM)', lat: 43.879856, lon:7.514627},
    {date: '27/07', title: '', place: 'Sampeyre (CN)', lat: 44.579364, lon:7.188341},
    {date: '10/08', title: 'Festa di San Lorenzo', place: 'Chianale (CN)', lat: 44.647451, lon:6.997499},
    /*{date: '12/08', title: '', place: 'Pradleves (CN)', lat: 44.418719, lon:7.282132},*/
    {date: '13/08', title: '', place: 'Pagno (CN)', lat: 44.612944, lon:7.428961},
    {date: '18/08', title: 'Hestiv\'Òc Festival', place: 'Pau (Francia)', lat: 43.298790, lon:-0.37598},
    {date: '19/08', title: '', place: 'Bréole (Francia)', lat: 44.457101, lon:6.291742},
    {date: '21/08', title: 'Festa della Segale', place: 'Valdieri (CN)', lat: 44.2773858, lon:7.3935701},
    {date: '30/09', title: '', place: 'Villar Focchiardo (TO)', lat: 45.111320, lon:7.232871},
    {date: '09/10', title: '', place: 'Bussero (MI)', lat: 45.535730, lon:9.370038},
    {date: '15/10', title: '', place: 'Borghetto S. Spirito (SV)', lat: 44.1087504, lon:8.2405346}
  ];

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
      center: new google.maps.LatLng(43,0)
    };

    var markers = [];
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    for (var i = 0; i < LT.json.concerti.length; i++) {
      addMarker(LT.json.concerti[i]);
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
    for (var i = 0; i < LT.json.concerti.length; i++ ) {
      var c = LT.json.concerti[i];
      var htmlStr = '<li><div class="date">{0}</div><div class="city">{1}{2}</div></li>'.format(c.date, (c.title ? c.title + ' - ' : ''), c.place);
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

  function init() {
    initMenu();
    initConcerti();
    initDiscografia();
    initMedia();
  }

  return {
    json: {concerti: concerti, discografia: discografia},
    init: init,
    initMap: initMap
  }
})();

$(function(){
  LT.init();
});
