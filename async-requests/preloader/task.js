const  xhr = new XMLHttpRequest();
const img = document.getElementById('loader');
const items = document.getElementById('items');
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = "json";
xhr.onload = function() {
  let valute = xhr.response.response.Valute;
  for (let i in valute){
    items.insertAdjacentHTML("afterbegin", `
    <div class="item__code">
    ${valute[i].CharCode}
          </div>
          <div class="item__value">
              ${valute[i].Value}
          </div>
          <div class="item__currency">
              руб.
          </div>`)
}
img.classList.remove('loader_active');
}
xhr.send();

//эталонный код//

const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

function showLoader() {
  loader.classList.add('loader_active');
}

function hideLoader() {
  loader.classList.remove('loader_active');
}

function displayItems(data) { 
  itemsContainer.innerHTML = '';
  for (const currencyCode in data) {
    if (data.hasOwnProperty(currencyCode)) {
      const currency = data[currencyCode];
      const item = document.createElement('div');
      item.className = 'item';
      item.innerHTML = `
      <div class='item__code'>${currency.CharCode}</div>
      <div class='item__value'>${currency.Value}</div>
      <div class='item__currency'>руб.</div>
      `;
      itemsContainer.appendChild(item);
    }
  }
  }
function loadCurrency() {
  showLoader();
  
  const cachedData  = localStorage.getItem('currencyData')
// if (cachedData){
//  const data = JSON.parse(cachedData)
//  hideLoader();
//  displayItems(data);
// }
}

fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
  .then(response => response.json())
  .then(data => {
    localStorage.setItem('currencyData', JSON.stringify(data.response.Valute));
    hideLoader();
    displayItems(data.response.Valute);
  })
  .catch(error => console.error(error));

loadCurrency();

 

  
