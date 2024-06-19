import axios from 'axios';

export const getPlaceData = async (type, sw, ne) => {
  try {
    const {data : {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'x-rapidapi-key': 'api-key',
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
        }
    });
    console.log('API response data:', data);
    return data;
  } catch (error) { 
    console.error(error);
  }
}


