const requestUrl = "https://jsonplaceholder.typicode.com/users"

// =========== GET ===========

// function sendRequest(method, url, body = null) {
//     return fetch(url).then((response) => {
//         return response.json();
//     });
// }

// sendRequest('GET', requestUrl)
//     .then((data) => {console.log(data)})
//     .catch((error) => console.log(error));

// ============================


// =========== POST ===========

// function sendRequest(method, url, body = null) {
//     const headers = {
//         'Content-type': 'application/json'
//     };

//     return fetch(url,
//     {
//         method: method,
//         body: JSON.stringify(body),
//         headers: headers
//     })
//     .then(response => {
//         return response.json();
//     });
// }

// const body = {
//     name: 'Ayxan',
//     age: '17'
// };

// sendRequest('POST', requestUrl, body)
//     .then((data) => {console.log(data)})
//     .catch((error) => console.log(error));
// ============================
