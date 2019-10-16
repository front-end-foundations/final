document.addEventListener('click', clickHandlers);

var nyt =
  'https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0';

function clickHandlers() {
  if (event.target.matches('button')) {
    getData();
  }
}

var addContent = function(data) {
  var looped = '';
  for (let i = 0; i < data.results.length; i++) {
    looped += `
    <div class="item">
    <h3>${data.results[i].title}</h3>
    <img src="${data.results[i].multimedia[1].url}" />
    <p>${data.results[i].abstract}</p>
    </div>
    `;
  }
  document.querySelector('.content div').innerHTML = looped;
};

var getData = function() {
  fetch(nyt)
    .then(response => response.json())
    .then(json => addContent(json));
};
