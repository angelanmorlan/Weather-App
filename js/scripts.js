// Scripts
$('.toggle-drawer').sidr();

$('.toggle-drawer').click( function() {
  
  $('aside').toggleClass('drawer');
  
});
$('#city-1').on('click', function() {
     
    //load weather using your lat/long coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      
      // Check lat/long coordinates
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      
      console.log(lat, long);
      
      // Send to SimpleWeather
      getWeather( lat + ',' + long ); 
    });
   
    var getWeather = function(location) {
    
   $.simpleWeather({
    location: location,
    unit: 'f',
    success: function(weather) {
      
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#one figure:nth-child(1) .city').text(weather.city);
      $('#one figure:nth-child(1) .temp').text(weather.temp);
      $('#one figure:nth-child(1) .low').text(weather.forecast[0].low);
      $('#one figure:nth-child(1) .high').text(weather.forecast[0].high);
      $('#one figure:nth-child(1) img').attr('src', weather.forecast[0].image);
        

    


    // Display Data : Day 2
    $('#one figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#one figure:nth-child(2) .calendar-date').text(weather.forecast[1].date);
    $('#one figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#one figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#one figure:nth-child(2) img').attr('src', weather.forecast[1].image);

    // Display Data : Day 3
    $('#one figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#one figure:nth-child(3) .calendar-date').text(weather.forecast[2].date);
    $('#one figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#one figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#one figure:nth-child(3) img').attr('src', weather.forecast[2].image);

    // Display Data : Day 4
    $('#one figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#one figure:nth-child(4) .calendar-date').text(weather.forecast[3].date);
    $('#one figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#one figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#one figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#one figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#one figure:nth-child(5) .calendar-date').text(weather.forecast[4].date);
    $('#one figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#one figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#one figure:nth-child(5) img').attr('src', weather.forecast[4].image);

    // Display Data : Day 6
    $('#one figure:nth-child(6) .next-day').text(weather.forecast[5].day);
    $('#one figure:nth-child(6) .calendar-date').text(weather.forecast[5].date);
    $('#one figure:nth-child(6) .low').text(weather.forecast[5].low);
    $('#one figure:nth-child(6) .high').text(weather.forecast[5].high);
    $('#one figure:nth-child(6) img').attr('src', weather.forecast[5].image);

    // Display Data : Day 7
    $('#one figure:nth-child(7) .next-day').text(weather.forecast[6].day);
    $('#one figure:nth-child(7) .calendar-date').text(weather.forecast[6].date);
    $('#one figure:nth-child(7) .low').text(weather.forecast[6].low);
    $('#one figure:nth-child(7) .high').text(weather.forecast[6].high);
    $('#one figure:nth-child(7) img').attr('src', weather.forecast[6].image);

  },
  error: function(error) {
    // Show if weather cannot be retreived
    console.log('Look outside.');
  }

});

    
};
  
});
$('#city-2').on('click', function() {
  
  $.simpleWeather({
    location: 99004,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#two .temp').text(weather.temp);
      $('#two .city').text(weather.city);
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  }); 
  
});


// Section 2 Weather
$('#city-3').on('click', function() {
  
  $.simpleWeather({
    location: 99224,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#three .temp').text(weather.temp);
      $('#three .city').text(weather.city);
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  }); 
  
});

$('#city-4').on('click', function() {
  
  $.simpleWeather({
    location: 98144,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#four .temp').text(weather.temp);
      $('#four .city').text(weather.city);
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  }); 
  
});

$('#city-5').on('click', function() {
  
  $.simpleWeather({
    location: 83854,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#five .temp').text(weather.temp);
      $('#five .city').text(weather.city);
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  }); 
  
});

$('#city-6').on('click', function() {
  
  $.simpleWeather({
    location: 83814,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#six .temp').text(weather.temp);
      $('#six .city').text(weather.city);
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  }); 
  
});
