const CONTAINER = document.getElementById('container')

const MY_API_KEY = "80d1993378fa9e47ffc9c7fec53fe1d2" // here add your API key
const API_URL = "https://api.openweathermap.org/data/2.5/forecast?lat=45.9&lon=8.96&units=metric&appid=" + MY_API_KEY

fetch(API_URL)
  .then(response => response.json()) 
  .then(data => showData(data))
  .catch(error => showError(error));


function showData(data) {
    //console.log(data)

    const weatherData = data.list;
    console.log(weatherData)

    for (let item of weatherData) {
        console.log(item)

        const temperature = item.main.temp;
        const tempFIx = (temperature + 2) * 20;
        const time = item.dt_txt.substring(0, 16);

        const listItem = document.createElement('li');

        listItem.textContent = `${time}: ${temperature}°`;


        let bgColor = 'blue';
        //if (temperature <= 0) {
          //  bgColor = 'blue'
        //}

        const tempBar = document.createElement('div');
        tempBar.classList.add('bar');
        tempBar.style.width = `${tempFIx}px`;
        tempBar.style.backgroundColor = bgColor; 

        listItem.appendChild(tempBar);

        CONTAINER.appendChild(listItem); 

    }
}


function showError(error) {
    console.log(error)
}

function tempToHSL(temp, minTemp = -5, maxTemp = 50){

    temp = Math.max(minTemp, Math.min(maxTemp,temp))

    const hue = (maxTemp - temp) / (maxTemp - minTemp) * 240;

    return `hsl(${hue}, 80%, 50%)`;

}