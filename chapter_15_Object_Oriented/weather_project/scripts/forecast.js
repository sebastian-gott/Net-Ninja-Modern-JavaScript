// const key = 'zI3LXepnQK8KA0odVmalvj7R0P0AhA6L';




// // GET WEATHER CONDITIONS

// const getConditions = async (id) => {
//  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//  const query = `${id}?apikey=${key}`;

//  const response = await fetch(base + query);
//  const data = await response.json();

//  return data[0];
// };


// // GET CITY LOCATION

// const getLocation = async (city) => {
    
    
//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query = `?apikey=${key}&q=${city}`;
//     const response = await fetch(base + query);
//     const data = await response.json();
   
//     return data[0];

// };

class Weather {
    constructor(){
        this.key = 'zI3LXepnQK8KA0odVmalvj7R0P0AhA6L';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityDets = await this.getLocation(city);
        const weather = await this.getConditions(cityDets.Key);

        return {
            cityDets: cityDets,
            weather: weather };
    }
    async getLocation(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
    
        return data[0];
    }
    async getConditions(id){
        const query = `${id}?apikey=${this.key}`;
       
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
       
        return data[0];
    }
}








