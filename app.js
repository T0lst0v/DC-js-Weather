const apiKey = "da5633bb719ba8fd9d214234323cfc0c";
const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=";
const units = "imperial";

// const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=houston,uk&appid=da5633bb719ba8fd9d214234323cfc0c&units=imperial";

function getWeather(city) {
  console.log(`${apiURL}${city}&appid=${apiKey}&units=${units}`);
  fetch(`${apiURL}${city}&appid=${apiKey}&units=${units}`) // promise\
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((result) => {
      console.log(result);
      if (result.cod == "200") {
        document.querySelector("#mainContainer").innerHTML = `
      <h2>${result.name}</h2> 
       <h3>current temperature : ${result.main.temp}</h3> 
       <h4>max temperature : ${result.main.temp_max}</h4> 
       <h4>min temperature : ${result.main.temp_min}</h4> 
       <h4>pressure : ${result.main.pressure}</h4> 
       <h4>humidity : ${result.main.humidity}</h4> 
      <h3></h3>
      `;
      } else if (result.cod == 404) {
        document.querySelector("#mainContainer").innerHTML = `Sorry ${result.message}`;
      }
    });
}
function clearField(f) {
  document.querySelector("f").value = "";
}

function getCity() {
  let input = document.querySelector("#cityInput").value;
  if (input != "") {
    document.querySelector("#cityInput").value = "";
    console.log(input);
    return input.toLowerCase();
  } else alert("enter City name");
}

document.querySelector("#btnFind").onclick = () => {
  getWeather(getCity());
};
