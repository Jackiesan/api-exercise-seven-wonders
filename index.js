const sevenWonders = ["Great Pyramid of Giza", "Hanging Gardens of Babylon", "Colossus of Rhodes", "Pharos of Alexandria", "Statue of Zeus at Olympia", "Temple of Artemis", "Mausoleum at Halicarnassus"]

const reportStatus = (message) => {
  $('#status-message').html(message);
}

const loadCoordinates = () => {
  const coordinateList = $('#coordinate-list')
  coordinateList.empty();

  sevenWonders.forEach(function(wonder) {
    let URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${wonder}&key=AIzaSyArO73wSW8bJ-WDmqcrVXXNkAh0gFjeP14`
    axios.get(URL)

    .then ((response) => {
      coordinateList.append(`<li>${wonder}<ul> <li>Latitude: ${response.data.results[0].geometry.location.lat}</li><li>Longitude: ${response.data.results[0].geometry.location.lng}</li><ul></li>`);
      reportStatus('Wonders Loaded!');
    })
    .catch((error) => {
      console.log(error);
      reportStatus(`Error: ${error.message}`)
    });
  });
}

$(document).ready(() => {
  $('#load').click(loadCoordinates);
})
