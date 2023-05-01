const param = {	
	url : "https://api.openweathermap.org/data/2.5/",
	appid : "8ffe6449c5da40e64905d7a9f8d0ee6e"
}

// function getWeather() {
//     const cityId = document.querySelector('#city').value;
//     fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
// 	.then(weather => {
// 			return weather.json();
// 		}).then(showWeather);
// }

// function showWeather(data) {
// 	console.log(data);
//     document.querySelector(".outCityName").textContent = data.name;
//     document.querySelector(".outTemp").innerHTML = Math.round(data.main.temp) + '&deg';
//     document.querySelector(".outIcon").innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
//     document.querySelector(".outDescription").innerHTML = data.weather[0]['description'];
//     document.querySelector(".outWindDirection").innerHTML = data.wind.deg + ' deg';
//     document.querySelector(".outWindSpeed").innerHTML = data.wind.speed + ' m/s';
//     document.querySelector(".outPressure").innerHTML = Math.round(data.main.pressure * 0.7506) + ' mm Hg';
// }

// function createElement () {
//     let myParent = document.querySelector('.myForm');
//     const cities = {
//         'Kyiv': 703448,
//         'San Francisco': 1689979,
//         'Budapest': 3054643,
//         'Sopot': 3085151,
//         'Dalaman': 447273
//     }

//     let selectList = document.createElement("select");
//     selectList.id = "city";

//     myParent.append(selectList);

//     for (let key in cities) {
//         let option = document.createElement("option");
//         option.value = cities[key];
//         option.text = key;
//         selectList.append(option);
//     }
// }

// createElement();
// getWeather();
// document.querySelector('#city').onchange = getWeather;

// --------------------------------------------------------------------------------------------------------------

const form = document.querySelector("#form");
const input = document.querySelector("#text-input");
let city;

form.addEventListener("submit", function (event) {
    event.preventDefault();
    city = input.value.trim();
    console.log(city);
    fetch(`${param.url}weather?q=${city}&units=metric&APPID=${param.appid}`)
    .then(weather => {
 			return weather.json();
    }).then(data => {
        console.log(data);
    });
})




