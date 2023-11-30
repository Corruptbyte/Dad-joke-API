// Selecting the button and paragraph elements
const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');

// Event listener for when the page is loaded
document.addEventListener('DOMContentLoaded', getJoke);

// Event listener for when the button is clicked
button.addEventListener('click', getJoke);

// Function to fetch and display a joke
function getJoke(){
    // Fetching the joke data from the API
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(data => data.json()) // Parsing the response as JSON
    .then(obj => jokeText.innerHTML = obj.joke); // Displaying the joke in the paragraph element
}
