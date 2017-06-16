// Scripts
// call Sidr Plugin. Toggle by Default
$('.toggle-drawer').sidr();

// Close from inside
//$('.toggle-drawer').sidr({
//  method: 'close'
//});

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
      $('#two figure:nth-child(1) .city').text(weather.city);
      $('#two figure:nth-child(1) .temp').text(weather.temp);
      $('#two figure:nth-child(1) .low').text(weather.forecast[0].low);
      $('#two figure:nth-child(1) .high').text(weather.forecast[0].high);
      $('#two figure:nth-child(1) img').attr('src', weather.forecast[0].image);
      
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
      $('#three figure:nth-child(1) .city').text(weather.city);
      $('#three figure:nth-child(1) .temp').text(weather.temp);
      $('#three figure:nth-child(1) .low').text(weather.forecast[0].low);
      $('#three figure:nth-child(1) .high').text(weather.forecast[0].high);
      $('#three figure:nth-child(1) img').attr('src', weather.forecast[0].image);
      
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
      $('#four figure:nth-child(1) .city').text(weather.city);
      $('#four figure:nth-child(1) .temp').text(weather.temp);
      $('#four figure:nth-child(1) .low').text(weather.forecast[0].low);
      $('#four figure:nth-child(1) .high').text(weather.forecast[0].high);
      $('#four figure:nth-child(1) img').attr('src', weather.forecast[0].image);
      
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
      $('#five figure:nth-child(1) .city').text(weather.city);
      $('#five figure:nth-child(1) .temp').text(weather.temp);
      $('#five figure:nth-child(1) .low').text(weather.forecast[0].low);
      $('#five figure:nth-child(1) .high').text(weather.forecast[0].high);
      $('#five figure:nth-child(1) img').attr('src', weather.forecast[0].image);
      
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
      $('#six figure:nth-child(1) .city').text(weather.city);
      $('#six figure:nth-child(1) .temp').text(weather.temp);
      $('#six figure:nth-child(1) .low').text(weather.forecast[0].low);
      $('#six figure:nth-child(1) .high').text(weather.forecast[0].high);
      $('#six figure:nth-child(1) img').attr('src', weather.forecast[0].image);
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  }); 
  
});



