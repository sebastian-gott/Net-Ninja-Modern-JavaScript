const key = 'zI3LXepnQK8KA0odVmalvj7R0P0AhA6L';




// GET WEATHER CONDITIONS

const getConditions = async (id) => {
 const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
 const query = `${id}?apikey=${key}`;

 const response = await fetch(base + query);
 const data = await response.json();

 return data[0];
};


// GET CITY LOCATION

const getLocation = async (city) => {
    
    
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];

};








