const API_KEY = "d3bc27b6065fe9059c68a57ec415dbcf";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(Response => Response.json()
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            weather.innerText = `\u00A0${data.name} / ${data.main.temp} / ${data.weather[0].main}\u00A0`;
        }));
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
