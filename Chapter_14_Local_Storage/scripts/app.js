const searchCity = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


const updateUI = (data) => {

    console.log(data);
    // const cityDets = data.cityDets;
    // const weather = data.weather;

    // DESTRUCTURE PROPERTIES

    const { cityDets, weather } = data;

    // UPDATE DETAILS TEMPLATE'

    const timeLocation = weather.LocalObservationDateTime.slice(11,16);
    console.log(timeLocation);

    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <h5 class="my-3">${timeLocation}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    `;

    // UPDATE THE NIGHT/DAY & ICON IMAGES

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    //const result = condition ? 'value 1' : 'value 2';

    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    
    
    // if(weather.IsDayTime) {
    //     timeSrc = 'img/day.svg'
    // } else {
    //     timeSrc= 'img/night.svg'
    // };
    time.setAttribute('src', timeSrc);

    //REMOVE D-NONE
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

};

const updateCity = async (city) =>{
    //console.log(city);
    
    const cityDets = await getLocation(city);
    const weather = await getConditions(cityDets.Key);

    return {
        cityDets: cityDets,
        weather: weather
    };


};


searchCity.addEventListener('submit', (e) => {
    e.preventDefault();

    // GET CITY VALUE
    const city = searchCity.city.value.trim();
    searchCity.reset();

    //UPDATE UI WITH NEW VALUE
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

    // SET LOCALE STORAGE

    localStorage.setItem('city', city);

});

if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(err => console.log(err));
};