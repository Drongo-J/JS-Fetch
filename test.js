const requestUrl = "https://reqres.in/api/users?page=2";

function sendRequest(method, url, body) {
    return fetch(url)
        .then(response => {
            return response.json();
        });
}

sendRequest("GET", requestUrl)
    .then((d) => {
        console.log(d.data);
        fillHtmlToTable(d.data);
    })
    .catch((err) => console.log(err));

function fillHtmlToTable(data) {
    let container = document.getElementById("container");
    let content = "";

    data.forEach(element => {
        content += `
        <div style='width12rem'>
            <h1>${element.first_name}</h1>
            <img src=${element.avatar}>
        </div>
        `
    });
    container.innerHTML = content;
}