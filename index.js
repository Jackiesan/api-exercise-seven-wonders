
const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=$Chicago&key=AIzaSyArO73wSW8bJ-WDmqcrVXXNkAh0gFjeP14`;


const sevenWonders = ["Great Pyramid of Giza", "Hanging Gardens of Babylon", "Colossus of Rhodes", "Pharos of Alexandria", "Statue of Zeus at Olympia", "Temple of Artemis", "Mausoleum at Halicarnassus"]

const loadCoordinates = () => {
  const coordinateList = $('#coordinate-list')
  coordinateList.empty();

  sevenWonders.forEach(function(wonder) {
    axios.get(URL)

    .then ((response) => {
      coordinateList.append(`<li>${response.data.}</li>`);
    })
    .catch((error) => {
      console.log(error);
    });
  });
}

$(document).ready(() => {
  $('#load').click(loadCoordinates);
})
