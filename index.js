const requestUrl = "https://jsonplaceholder.typicode.com/users"

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            }
            else {
                resolve(xhr.response);
            }
        }

        xhr.onerror = () => {
            reject(xhr.response);
        }

        xhr.send(body);
    });
}

sendRequest('GET', requestUrl)
    .then(data => {
        console.log(data)
        fillDataToHtml(data);
    })
    .catch(error => console.log(error));

// function sendRequest(method, url) {
//     return fetch(url).then((response) => {
//         return response.json();
//     });
// }

// function sendRequest(method, url, body) {
//     const headers = {
//         'Content-type': 'application/json'
//     };

//     return fetch(url,
//         {
//             method: method,
//             body: JSON.stringify(body),
//             headers: headers
//         })
//         .then(response => {
//             return response.json();
//         });
// }


// Task

var users;

function fillDataToHtml(response) {
    // console.log(JSON.stringify(response));
    let jsonResult = JSON.parse(response);
    let myTable = document.getElementById('mytable');
    let content = '';
    content += `
        <tr>
            <th>Name</th>
            <th>Userame</th>
            <th>Email</th>
            <th>Street</th>
            <th>Suite</th>
            <th>City</th>
            <th>Zipcode</th>
        </tr>
    `;

    users = jsonResult;
    jsonResult.forEach(e => {
        content += `
        <tr onclick="showUser(${e.id})">
            <td>${e.name}</th>
            <td>${e.username}</th>
            <td>${e.email}</th>
            <td>${e.address.street}</th>
            <td>${e.address.suite}</th>
            <td>${e.address.city}</th>
            <td>${e.address.zipcode}</th>
            <td>
                <button onclick="deleteUser(${e.id})">Delete</button>
            </td>
            <td>
                <button onclick="showUser(${e.id})">Show</button>
             </td>
             <td>
                <button onclick="updateUser(${e.id})">Update</button>
             </td>
        </tr>   
        `;
    });

    myTable.innerHTML = content;
}


function deleteUser(id) {
    sendRequest('DELETE', requestUrl, requestUrl + '/' + id);
    alert("Deleted");
}

sendRequest("GET", requestUrl)
    .then((data) => { fillDataToHtml(data) })
    .catch((err) => console.log(err));


let name = document.getElementById('name');
let username = document.getElementById('username');
let email = document.getElementById('email');
let street = document.getElementById('street');
let suite = document.getElementById('suite');
let city = document.getElementById('city');
let zipcode = document.getElementById('zipcode');

function showUser(id) {
    let user = users.find((u) => u.id == id);
    // alert(user.username)
    name.value = user.name;
    username.value = user.username;
    email.value = user.email;
    street.value = user.address.street;
    suite.value = user.address.suite;
    city.value = user.address.city;
    zipcode.value = user.address.zipcode;
}

function updateUser(id) {
    let newUser = {
        id:id,
        name: name.value,
        username: username.value,
        email: email.value,
        adress: {
            street: street.value,
            suite: suite.value,
            city: city.value,
            zipcode: zipcode.value
        }
    }

    sendRequest("PUT", requestUrl, newUser);
    alert("UPDATED");
    alert(JSON.stringify(newUser));
}