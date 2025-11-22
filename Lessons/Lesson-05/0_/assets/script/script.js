//console.log('ciao');

//const HOBBIES = ["judo", "boxe", "cycling"]
//console.log(HOBBIES, length);
//console.log(HOBBIES, (1));

//const PERSON = {
    //name: "Sasha",
    //lastname: "Bravo",
    //hobbies: HOBBIES
//};
//console.log(PERSON);

//console.log(PERSON.name);

// console.log(PERSON.hobbies.at(0));

// const CONTAINER = document.getElementById('container')

// for (hobby of PERSON.hobbies) {

    //const ITEM = document.createElement('li');
    //ITEM.textContent = hobby
    // ITEM.innerHTML = hobby

    // CONTAINER.appendChild(ITEM)
// }

fetch('/assets/data/data.json') // get the data from an external source
  .then(response => response.json()) // parse/convert the data in JavaScript format
  .then(data => console.log(data)) // dispay the data in the console
  .catch(error => console.error('Error:', error)); // display an error if the data cannot be loaded

  function dispayData(data) {
    console.log(data);

    for (hobby of data.hobbies) {
       const ITEM = document.createElement('li');
       ITEM.textContent = `${hobby}`;  

       CONTAINER.appendChild(ITEM)
    }

  }

    function dispayError(data) {
    console.log(error);
  }

  