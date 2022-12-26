fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokeText;
    })

// axios
//         .get("https://jsonplaceholder.typicode.com/users")
//         .then(response => {
//           console.log(response.data);
//         })
//         .catch(error => console.error(error));

// async function getUsers() {
//     let response = await fetch(
//       "https://api.api-ninjas.com/v1/quotes?category=courage"
//     );
//     let data = await response.json();
//     return data;
//   }
//   getUsers().then(data => console.log(data));

// var category = 'courage'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
//     headers: { 'X-Api-Key': 'CsIHavMVWvga+iJ6WgynQQ==U2uKf1k0xUazHdIj'},             
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

// // const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// 		'X-RapidAPI-Host': 'webknox-jokes.p.rapidapi.com'
// 	}
// };

// fetch('https://webknox-jokes.p.rapidapi.com/jokes/search?keywords=kick%2C%20hard&numJokes=5&category=Chuck%20Norris&minRating=5', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// fetch("https://type.fit/api/quotes")
//     .then(function(response) {
//     return response.json();
// })
//     .then(function(data) {
//     console.log(data);
// });

// fetch('https://icanhazdadjoke.com/slack')
//     .then(data => data.json())
//     .then(jokeData => {
//         const jokeText = jokeData.attachments[0].text;
//         const jokeElement = document.getElementById('jokeElement');

//         jokeElement.innerHTML = jokeText;
//     })