const https = require('https');
const url ='https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson'  

https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
      
      const json = JSON.parse(data);

      console.log('*******************************');
      console.log(json.metadata.title);
      console.log('--------------------');
      console.log('total: ', json.metadata.count);
      console.log('status: ', json.metadata.status);
      console.log('--------------------');
      console.log(new Date(json.metadata.generated).toLocaleString('es-ES'));
      console.log('>>>>>>>>>>>.....*.....<<<<<<<<<<');
      json.features.forEach((earthquake) => {
        console.log(earthquake .properties.title);
        console.log(new Date(earthquake .properties.time).toLocaleString('es-ES'));
        console.log('Magnitud: ', earthquake .properties.mag);
        console.log('Estatus: ', earthquake .properties.status);
        console.log('Tipo: ', earthquake .properties.type);
        console.log('Lugar :', earthquake .properties.place);
        console.log('Coordenadas: ', earthquake .geometry.coordinates[0] + ' ,', earthquake .geometry.coordinates[1]);
        console.log('Info: ', earthquake .properties.url);
        console.log('Detalles: ', earthquake .properties.detail);
        console.log('>>>>>>>>>>>.....*.....<<<<<<<<<<');
      });
      
  });
});
