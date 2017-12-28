//Initialize Weather class
const storage = new Storage();
//get stored location data
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city,weatherLocation.state);




const ui = new UI;



//  weather.changeLocation(city,state);

//Get weaher on DOM Load
document.addEventListener('DOMContentLoaded',getWeather);

//Change Location Event for Button in Modal

document.getElementById('w-save-btn').addEventListener('click',(e)=>{
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation(city,state);
  storage.setLocationData(city,state)

  //Get Weather again after changing location
  getWeather();

  //Close modal
  $('#locationModal').modal('hide');

});



function getWeather() {
  weather.getWeather()
.then(weatherObj=>{
  console.log(weatherObj)
  ui.paint(weatherObj);

})
.catch(err=>console.log(err))
}


