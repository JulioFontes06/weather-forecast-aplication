const key = "b749b0ada68796fa40c7ba54d0d6ad16"
let dataApi 
let cityName = document.getElementById('city-input')

function showInfo(dataApi) {
    console.log(dataApi)

    document.getElementById('city-name').innerText = dataApi.name
    document.getElementById('temp-info').innerText = Math.floor (dataApi.main.temp) + '°C'
    document.getElementById('wheather-text').innerText = dataApi.weather[0].description
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${dataApi.weather[0].icon}.png`
    document.getElementById('porcent-humidity').innerText = 'Umidade do ar: ' + dataApi.main.humidity + '%'
}


async function getDataApi(city) {

    dataApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    if(typeof(dataApi.name) === 'undefined'){
        alert(`Cidade ${city} não foi encontrada`)

        console.clear()
        city.innerText = ''
    }else{
        showInfo(dataApi)
    }
}

function getCityName() {    
        getDataApi(cityName.value)

        cityName.innerHTML = ''
}