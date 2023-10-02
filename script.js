const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result");
let input = document.getElementById("inputWord");

// console.log(result.innerHTML);

searchBtn.addEventListener("click", () => {
  let inputWord = document.getElementById("inputWord").value.trim();
  // console.log(inputWord);
  fetch(`https://restcountries.com/v3.1/name/${inputWord}?fullText=true`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      // console.log(data[0]);
    // console.log(Object.keys(data[0].currencies));
    // console.log(Object.keys(data[0].currencies[0]));

    // let currency1 = Object.keys(data[0].currencies[0]);
    // console.log(currency1);

      let currencies = data[0].currencies;
            // console.log(currencies);
      let currency = Object.keys(currencies);
      

      // console.log(Array.from(currencies));

      let languages = data[0].languages;
            console.log(languages);
      let language = Object.values(languages);
      console.log(language);

      result.innerHTML = `
        <div class="imageContainer">
        <img src="${data[0].flags.png}" alt="${data[0].flags.alt}">
        <h2>${inputWord}</h2>
    </div>
    <div id="countryInfo">
        <p class="eachInfo"><strong>Capital:</strong> ${data[0].capital[0]}</p>
        <p class="eachInfo"><strong>Continent:</strong> ${data[0].continents[0]}</p>
        <p class="eachInfo"><strong>Population:</strong> ${(data[0].population).toLocaleString()}</p>
        <p class="eachInfo"><strong>Currencies:</strong> ${currency[0]}</p>
        <p class="eachInfo"><strong>Language:</strong> ${language[0]}</p>
    </div>
        `;
    })
    .catch(() => {
      result.innerHTML = `
            <h2 class="error">Couldn't Find The Country</h2>
        `;
    });
});

//Make 'ENTER' button work for input field
input.addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    searchBtn.click();
  }
});


// *******************************TESTING***********************************************
// let obj = {
//     NGN: {name: 'Nigerian Naira', symbol: 'N'},

//     // USD: {name: 'United States Dollar', symbol: '$'},

//     // JPY: {name: 'Japanese Yen', symbol: 'J'}
// }

// console.log(obj);
// let objKeys = Object.keys(obj)
// console.log(objKeys);
// console.log(objKeys[0]);
