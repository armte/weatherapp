var lat;
var long;
var nightColor = 'black';
var nightFontColor = '#F4EC90';
var currentTime = new Date();
var currentHour = currentTime.getHours();
var currentMinute = currentTime.getMinutes();

/*Array to store weather graphic and color scheme to corresponding weather ID obtained from API*/
var iconArray = [ {'id': 200, 'day': "https://armte.github.io/FCC4/img/thunderstorm-sun.png", 'dayColor': "#2EA7E0",
                            'night': "https://armte.github.io/FCC4/img/thunderstorm-night.png"},
                  {'id': 201, 'day': "https://armte.github.io/FCC4/img/thunderstorm.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/thunderstorm-night.png"},
                  {'id': 202, 'day': "https://armte.github.io/FCC4/img/thunderstorm.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/thunderstorm-night.png"},
                  {'id': 210, 'day': "https://armte.github.io/FCC4/img/thunderstorm-sun.png", 'dayColor': "#2EA7E0",
                            'night': "https://armte.github.io/FCC4/img/thunderstorm-night.png"},
                  {'id': 211, 'day': "https://armte.github.io/FCC4/img/thunderstorm.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/thunderstorm-night.png"},
                  {'id': 212, 'day': "https://armte.github.io/FCC4/img/thunderstorm.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/thunderstorm-night.png"},
                  {'id': 221, 'day': "https://armte.github.io/FCC4/img/thunderstorm.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/thunderstorm-night.png"},
                  {'id': 230, 'day': "https://armte.github.io/FCC4/img/thunderstorm-sun.png", 'dayColor': "#2EA7E0",
                            'night': "https://armte.github.io/FCC4/img/thunderstorm-night.png"},
                  {'id': 231, 'day': "https://armte.github.io/FCC4/img/thunderstorm.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/thunderstorm-night.png"},
                  {'id': 232, 'day': "https://armte.github.io/FCC4/img/thunderstorm.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/thunderstorm-night.png"},
                  {'id': 300, 'day': "https://armte.github.io/FCC4/img/drizzle.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 301, 'day': "https://armte.github.io/FCC4/img/drizzle.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 302, 'day': "https://armte.github.io/FCC4/img/rain.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 310, 'day': "https://armte.github.io/FCC4/img/drizzle.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 312, 'day': "https://armte.github.io/FCC4/img/rain.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 313, 'day': "https://armte.github.io/FCC4/img/rain.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 314, 'day': "https://armte.github.io/FCC4/img/rain.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 321, 'day': "https://armte.github.io/FCC4/img/drizzle.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 500, 'day': "https://armte.github.io/FCC4/img/drizzle.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 501, 'day': 'https://armte.github.io/FCC4/img/rain.png', 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 502, 'day': "https://armte.github.io/FCC4/img/shower-rain.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 503, 'day': "https://armte.github.io/FCC4/img/rain.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 504, 'day': "https://armte.github.io/FCC4/img/shower-rain.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 511, 'day': "https://armte.github.io/FCC4/img/heavy-snow.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 520, 'day': "https://armte.github.io/FCC4/img/drizzle.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 521, 'day': "https://armte.github.io/FCC4/img/rain.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 522, 'day': "https://armte.github.io/FCC4/img/shower-rain.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 531, 'day': "https://armte.github.io/FCC4/img/shower-rain.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/rain-night.png"},
                  {'id': 600, 'day': "https://armte.github.io/FCC4/img/snow.png", 'dayColor': "#FFFFFF",
                            'night': "https://armte.github.io/FCC4/img/snow-night.png"},
                  {'id': 601, 'day': "https://armte.github.io/FCC4/img/snow.png", 'dayColor': "#FFFFFF",
                            'night': "https://armte.github.io/FCC4/img/snow-night.png"},
                  {'id': 602, 'day': "https://armte.github.io/FCC4/img/heavy-snow.png", 'dayColor': "#FFFFFF",
                            'night': "https://armte.github.io/FCC4/img/snow-night.png"},
                  {'id': 611, 'day': "https://armte.github.io/FCC4/img/snow.png", 'dayColor': "#FFFFFF",
                            'night': "https://armte.github.io/FCC4/img/snow-night.png"},
                  {'id': 612, 'day': "https://armte.github.io/FCC4/img/snow.png", 'dayColor': "#FFFFFF",
                            'night': "https://armte.github.io/FCC4/img/snow-night.png"},
                  {'id': 615, 'day': "https://armte.github.io/FCC4/img/snow.png", 'dayColor': "#FFFFFF",
                            'night': "https://armte.github.io/FCC4/img/snow-night.png"},
                  {'id': 616, 'day': "https://armte.github.io/FCC4/img/snow.png", 'dayColor': "#FFFFFF",
                            'night': "https://armte.github.io/FCC4/img/snow-night.png"},
                  {'id': 620, 'day': "https://armte.github.io/FCC4/img/snow.png", 'dayColor': "#FFFFFF",
                            'night': "https://armte.github.io/FCC4/img/snow-night.png"},
                  {'id': 621, 'day': "https://armte.github.io/FCC4/img/heavy-snow.png", 'dayColor': "#FFFFFF",
                            'night': "https://armte.github.io/FCC4/img/snow-night.png"},
                  {'id': 622, 'day': "https://armte.github.io/FCC4/img/heavy-snow.png", 'dayColor': "#FFFFFF",
                            'night': "https://armte.github.io/FCC4/img/snow-night.png"},
                  {'id': 701, 'day': "https://armte.github.io/FCC4/img/mist.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/mist-night.png"},
                  {'id': 711, 'day': "https://armte.github.io/FCC4/img/smoke.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/dust-night.png"},
                  {'id': 721, 'day': "https://armte.github.io/FCC4/img/haze.png", 'dayColor': "#F8B62D",
                            'night': "https://armte.github.io/FCC4/img/haze-night.png"},
                  {'id': 731, 'day': "https://armte.github.io/FCC4/img/dust.png", 'dayColor': "#D8BF9E",
                            'night': "https://armte.github.io/FCC4/img/dust-night.png"},
                  {'id': 741, 'day': "https://armte.github.io/FCC4/img/mist.png", 'dayColor': "#DCDDDD",
                            'night': "https://armte.github.io/FCC4/img/mist-night.png"},
                  {'id': 751, 'day': "https://armte.github.io/FCC4/img/dust.png", 'dayColor': "#D8BF9E",
                            'night': "https://armte.github.io/FCC4/img/dust-night.png"},
                  {'id': 761, 'day': "https://armte.github.io/FCC4/img/dust.png", 'dayColor': "#D8BF9E",
                            'night': "https://armte.github.io/FCC4/img/dust-night.png"},
                  {'id': 762, 'day': "https://armte.github.io/FCC4/img/dust.png", 'dayColor': "#D8BF9E",
                            'night': "https://armte.github.io/FCC4/img/dust-night.png"},
                  {'id': 771, 'day': "https://armte.github.io/FCC4/img/squalls.png", 'dayColor': "#2EA7E0",
                            'night': "https://armte.github.io/FCC4/img/squalls-night.png"},
                  {'id': 781, 'day': "https://armte.github.io/FCC4/img/tornado.png", 'dayColor': "#B0B0B0",
                            'night': "https://armte.github.io/FCC4/img/squalls-night.png"},
                  {'id': 800, 'day': "https://armte.github.io/FCC4/img/clear-sky.png", 'dayColor': '#2EA7E0',
                            'night': "https://armte.github.io/FCC4/img/clear-sky-night.png"},
                  {'id': 801, 'day': "https://armte.github.io/FCC4/img/few-clouds.png", 'dayColor': '#2EA7E0',
                            'night': "https://armte.github.io/FCC4/img/few-clouds-night.png"},
                  {'id': 802, 'day': "https://armte.github.io/FCC4/img/scattered-clouds.png", 'dayColor': '#B0B0B0',
                            'night': "https://armte.github.io/FCC4/img/scattered-clouds-night.png"},
                  {'id': 803, 'day': "https://armte.github.io/FCC4/img/few-clouds.png", 'dayColor': '#2EA7E0',
                            'night': "https://armte.github.io/FCC4/img/few-clouds-night.png"},
                  {'id': 804, 'day': "https://armte.github.io/FCC4/img/scattered-clouds.png", 'dayColor': '#B0B0B0',
                            'night': "https://armte.github.io/FCC4/img/scattered-clouds-night.png"}
                          ];//end iconArray

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function autoResizeDiv()
        {
            document.getElementById('main-page').style.height = window.innerHeight +'px';
        }

$(document).ready(function() {
  
   autoResizeDiv();
  /*get the latitude and longitude of the client's location*/
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      requestLocalWeather(lat, long);

      //getLocalWeather(lat, long);

    });//end getCurrentPosition
  }//end if

  /*code to toggle between farenheit and celsius*/
      $("#degreesBtn").on("click", function (){
        $("#temp span").each(function() {
          if(!$(this).hasClass("degree")){
            if($(this).hasClass("absent")){
              $(this).removeClass("absent");
            }//end if
            else {
              $(this).addClass("absent");
            }//end else
        }//end initial if statement
        });//end each function
      });//end onClick function
/*code to toggle between mi/hr and km/hr */
      $("#windBtn").on("click", function (){
        $("#wind span").each(function() {
          if($(this).hasClass("absent")){
            $(this).removeClass("absent");
          }//end if
          else {
            $(this).addClass("absent");
          }
        });//end each function
      });//end onClick function
      
});//end of ready function

/*function that receives location coordinates and retrieves current weather of specificed location. If the AJAX request is successful
* the weather information is parsed as a JSON object and passed to a function that displays the weather on the webpage */
function requestLocalWeather(lat, long) {
  var req = new XMLHttpRequest();
  req.open('GET', 'https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+long, true);
  req.addEventListener('load', function(){
    if(req.status >= 200 && req.status < 400) {
      var received = req.responseText;
      console.log(received);
      var weatherObj = JSON.parse(received);
      console.log(weatherObj);
      displayLocalWeather(weatherObj);
    }
    else {
      console.log(req.responseText);
    }
  });

  req.send(null);

}

function displayLocalWeather(data) {
  $("#place").append(data.name);
  $("#today").append(days[currentTime.getDay()]);
  $("#currentDate").append(months[currentTime.getMonth()] + " " + currentTime.getDate() + ", " + currentTime.getFullYear());
  $("#time").append(convertSunRiseSet(currentTime.getTime()/1000));
  $("#celsius").append((data.main.temp).toFixed(1));
  $("#farenheit").append(toFarenheit(data.main.temp).toFixed(1));
  $("#sunRise").append(convertSunRiseSet(data.sys.sunrise));
  $("#sunSet").append(convertSunRiseSet(data.sys.sunset));
  $("#wind-speed-kmHr").append(data.wind.speed.toFixed(1));
  $("#wind-speed-miHr").append(((data.wind.speed)/1.6).toFixed(1));
  $("#wind").append(" , " + getWindDirection(data.wind.deg));
  var weatherIndex = iconArray.map(function(x) {return x.id;}).indexOf(data.weather[0].id);
/*if statement that checks whether it is day time or night time for user and applies styling and graphics based on the time.*/
  if(dayTime(data.sys.sunrise, data.sys.sunset)){
    $("#forecast").append("Today's Weather: " + data.weather[0].description);
    $("#weather-icon").attr('src', iconArray[weatherIndex].day);
    $("#main-page").css('background-color', iconArray[weatherIndex].dayColor);
  }
  else {
    $("#forecast").append("Tonight's Weather: " + data.weather[0].description);
    $("#weather-icon").attr('src', iconArray[weatherIndex].night);
    $("#main-page").css('background-color', 'black');
    $("#weather-box").css({'border-color': nightFontColor, 'color': nightFontColor});
    $("button").removeClass('btn-outline-dark').addClass('btn-outline-light');
    $("button").css({'border-color': nightFontColor, 'color': nightFontColor});
  }//end else

}
/*function that translates the wind direction from degrees to compass direction*/
function getWindDirection(degrees) {
  if(degrees > 22.5 && degrees <= 67.5){
    return "Northeasterly";
  }
  else if (degrees > 67.5 && degrees <= 112.5){
    return "Northerly";
  }
  else if(degrees > 112.5 && degrees <= 157.5){
    return "Northwesterly";
  }
  else if(degrees > 157.5 && degrees <= 202.5){
    return "Westerly";
  }
  else if(degrees > 202.5 && degrees <= 247.5){
    return "Southwesterly";
  }
  else if(degrees > 247.5 && degrees <= 292.5){
    return "Southerly";
  }
  else if(degrees > 292.5 && degrees <= 337.5) {
    return "Southeasternly";
  }
  else {
    return "Easterly";
  }
}//end getWindDirection function

/*function that takes UNIX time and translates it to standard time*/
function convertSunRiseSet (unix) {
  var amOrPm = "am";
  var sunRiseSet = new Date(unix*1000);
  var hours = sunRiseSet.getHours();
  if(hours > 12){
    amOrPm = "pm";
    hours -= 12;
  }
  var minutes = "0" + sunRiseSet.getMinutes();
  return hours + ":" + minutes.substr(-2) + " " + amOrPm;
}//end convertSunRiseSet
/*function that converts a celsius temperature to a farenheit one*/
function toFarenheit(temp) {
    return (temp * 1.8) + 32;
}//end toFarenheit
/*function that returns true if it is daytime or false if it is not*/
function dayTime(rise, set) {
  var sunRising = new Date(rise*1000);
  var sunSetting = new Date(set*1000);
  if(currentHour > sunRising.getHours() && currentHour < sunSetting.getHours()){
    return true;
  }
  else if(currentHour == sunRising.getHours()){
    return currentMinute >= sunRising.getMinutes();
  }
  else if(currentHour == sunSetting.getHours()){
    return currentMinute <= sunSetting.getMinutes();
  }
  else {
    return false;
  }
}//end dayTime