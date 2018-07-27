const axios = require('axios');

const getLugarLatLng = async (direccion) => {

    let encodedUrl = encodeURI(direccion)

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyAjNjPDFHcOb5cmp3D052iS6yJh509rAeQ`);
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    var formatted_address = resp.data.results[0].formatted_address;
    var latitud = resp.data.results[0].geometry.location.lat;
    var longitud = resp.data.results[0].geometry.location.lng;

    return {
        direccion: formatted_address,
        lat: latitud,
        lng: longitud
    }
}

module.exports = {
    getLugarLatLng
}

