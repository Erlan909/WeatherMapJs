const KEY = '&appid=b7bd9c57e51069f30cd5fd92900c3480'
const URL = 'https://api.openweathermap.org/data/2.5/weather?q='

const getWeather = async (event)=>{
    event.preventDefault()


    let city = document.getElementById('city')
    let api = URL+city.value+KEY


    const res = await fetch(api)
    const req =await res.json()
    console.log(req)
    cityWeather(req)
    city.value = ''
    drawInfoOnPage(req)
}
// let city = document.getElementById('city')
let div = document.createElement('div')

const cityWeather = (weather) => {
    
   


    let div = document.createElement('h2')
    let h3 = document.createElement('h3')
    let p = document.createElement('h3')
    let h4 = document.createElement('h4')

     
    h3.innerHTML = weather.name
    p.innerHTML = `Кельвин ${weather.main.temp} Цельсия: ${weather.main.temp - 273.15}`
    div.innerHTML = `Скорость ветра ${weather.wind.deg} Градус: ${weather.wind.speed} км/ч`
    div.innerHTML = `Небо ${weather.weather[0].description}`

    output.appendChild(h3)
    output.appendChild(p)
    output.appendChild(div)
    output.appendChild(h4)
}

    const drawInfoOnPage=(data)=>{
        let maps = document.createElement('div')
        maps.id='map'
        maps.style.width='300px'
        maps.style.height='300px'
        output.appendChild(maps)
    
        let map;
    
    DG.then(function () {
     map = DG.map('map', {
         center: [data?.coord.lat, data?.coord.lon],
         zoom: 13
     });
     DG.marker([data?.coord.lat, data?.coord.lon])
     .addTo(map)
     .bindPopup(data.name)
    });
    }  


// var map;

// DG.then(function () {
//     map = DG.map('map', {
//         center: [42.87, 74.59],
//         zoom: 13
//     });
// });
