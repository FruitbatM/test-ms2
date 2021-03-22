let lat = 35.23264;
let lon = 139.0135;
const apiKey = 'b3e0a4fb9d29b25beb45fdf2cad771b0';

const temperatureValue = document.getElementById('temperature-value');
const temperatureDescription = document.getElementById('temperature-description');

function getWeather(latitude, longitude) {
  const api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  fetch(api)
    .then(response => {
    })
    .then(data => {
      console.log(data);
      const {temp, description, name} = data.currently;
      //Set DOM elememnts from the API
      temperatureValue.textContent = temp;
      temperatureDescription[0].textContent = description;

    });
};