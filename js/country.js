const loadCountires = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};


const displayCountries = (countries) => {
  //   console.log(countries);
  const coutiresContainer = document.getElementById("countries-container");

  countries.forEach(country => {
    // console.log(country);
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `
     <h3> Name: ${country.name.common} </h3>
     <p>Capital:${country.capital ? country.capital[0] : "No Capital"}</p>
     
     <button onclick= loadCountiresDetails('${country.cca2}')>Details</button>
     
     `;
    coutiresContainer.appendChild(countryDiv);
  });
};

loadCountires();


const loadCountiresDetails = (code) => {
  // https://restcountries.com/v3.1/alpha/{code}
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  // console.log('country code',code);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountriesDetails(data[0]));
};

const displayCountriesDetails = (desh) => {
  //   console.log(desh);
  const coutiresContainer = document.getElementById("countries-container");
  coutiresContainer.innerHTML = `
     <h3> Name: ${desh.name.common} </h3>
     <img src="${desh.flags.png}" class="img-responsive" alt="Image">
     
     `;
};


