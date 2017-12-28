class UI{
  constructor(){
    this.location = document.getElementById('w-location')
    this.description = document.getElementById('w-desc')
    this.temperature = document.getElementById('w-temperature')
    this.icon = document.getElementById('w-icon')
    this.details = document.getElementById('w-details')
    this.humidity = document.getElementById('w-humidity')
    this.dewpoint = document.getElementById('w-dewpoint')
    this.feelsLike = document.getElementById('w-feels-like')
    this.wind = document.getElementById('w-wind')
  }
  paint(weather){
 this.location.textContent = weather.display_location.full;
 this.description.textContent= weather.weather;
 this.temperature.textContent = weather.temp_c+'C';
 this.icon.setAttribute('src',weather.icon_url);
this.humidity.textContent = `Humidity: ${weather.relative_humidity}`;
this.dewpoint.textContent = `Dew Point: ${weather.dewpoint_c
}`;
this.feelsLike.textContent = `Feels Like: ${weather.feelslike_c}`;
this.wind.textContent = `Wind: ${weather.wind_string
}`;


  }
}