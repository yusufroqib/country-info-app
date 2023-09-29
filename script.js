const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result");
let input = document.getElementById("inputWord");

// console.log(result.innerHTML);

searchBtn.addEventListener("click", () => {
  let inputWord = document.getElementById("inputWord").value;
  // console.log(inputWord);
  fetch(`https://restcountries.com/v3.1/name/${inputWord}?fullText=true`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      // console.log(data[0].currencies);

      let currencies = data[0].currencies;
      let currency = Object.keys(currencies);
      // console.log(currency);

      // console.log(Array.from(currencies));

      let languages = data[0].languages;
      let language = Object.values(languages);
      // console.log(language);

      result.innerHTML = `
        <div class="imageContainer">
        <img src="${data[0].flags.png}" alt="country flag">
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

input.addEventListener("keyup", function (event) {
  if (event.keyCode == 13) {
    searchBtn.click();
  }
});
