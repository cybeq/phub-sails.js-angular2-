const axios = require('axios');
module.exports={
  checkCityForRegister: async function(city){
    const url = 'https://nominatim.openstreetmap.org/search';
    const params = {
      q: `${city}`,
      format: 'json',
      limit: 10,
      countrycodes: 'pl',
      place_type: 'city',
      'accept-language':'pl'

    };

    try {
      const res = await axios.get(url, { params, headers: { 'Accept-Language': 'en-US' } });
      return res.data;
    } catch (err) {}
    return;
  }
}
