const CONTAINER = document.getElementById('container')

fetch('/assets/data/MOCK_DATA.json') // get the data from an external source
  .then(response => response.json()) // parse/convert the data in JavaScript format
  .then(data => dispayData(data)) // dispay the data in the console
  .catch(error => console.error('Error:', error)); // display an error if the data cannot be loaded


function dispayData(data) {
    console.log(data);

    //filter
    const FILTERED = data.filter( (obj) => obj.age >= 20 && obj.age < 39 );
    // const SUB_FILTERED = FILTERED.filter( (obj) => obj.gender = 'Female');
    // const FILTERED_B = data.filter( (obj) => obj.first_name=='Elissa');

    //sort
    const SORT = FILTERED.sort( (a, b) => a.age - b.age );
    // const SORT = SUB_FILTERED.sort( (a, b) => b.first_name.localeCompare(a.first_name) );

    for (let person of SORT) {

        const PERSON_BOX = document.createElement('li');
        const PERSON_INFO = document.createElement('div');
        const PERSON_BAR = document.createElement('div');
       

        PERSON_INFO.textContent = `${person.first_name} ${person.last_name} ${person.gender} ${person.age}`;

        const BAR_WIDTH = person.age * 5; // scale factor to make the bar more visible
        PERSON_BAR.style.width = `${BAR_WIDTH}px`;
        PERSON_BAR.className = 'bar';

        let BAR_COLOR = 'gray'


        if (person.gender == 'Male') {
            BAR_COLOR = 'blue';

            
        } 
        else if (person.gender == 'Female') {
            BAR_COLOR = 'pink';
        }

        else {
            BAR_COLOR = 'orange ';
        }

        PERSON_BAR.style.backgroundColor = BAR_COLOR;

        PERSON_BOX.appendChild(PERSON_INFO); 
        PERSON_BOX.appendChild(PERSON_BAR); 


        CONTAINER.appendChild(PERSON_BOX);
    }

}

function dispayError(data) {
    console.log(error);
  }