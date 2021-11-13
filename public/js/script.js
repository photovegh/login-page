const state = {
    persons: [],
};

/* 
async function sendMongoDB() {
    const response = await fetch("/person");
    document.getElementById("personsData").innerHTML = "";
    let persons;
    state.persons = await response.json();
    //state.persons = persons;
    renderPersons();
}
 */

//document.getElementById("modalLogin()").onsubmit = async function () {
async function sendMongoDB() {
    console.log("sendmongodb 1");

    //eddig jutottam el !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const userName = document.getElementById("userName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const history = document.getElementById("history").value;

    await fetch("/person", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            userName: userName,
            email: email,
            message: message,
            history: history,
        }),
    });
    console.log("sendmongodb 2");
    fetchAndRenderPersons();
}

//window.onload = fetchAndRenderPersons();
async function fetchAndRenderPersons() {
    const response = await fetch("/person");
    document.getElementById("personsData").innerHTML = "";
    let persons;
    state.persons = await response.json();
    //state.persons = persons;
    renderPersons();
}
function renderPersons() {
    //let personsHTML = "";
    let personsHTML = "";
    for (const person of state.persons) {
        personsHTML += `
    <tr>
    <td>${person.userName}</td>
    <td>${person.email}</td>
    <td>${person.message}</td>
    <td>${person.history}</td>
    </tr>
    `;
    }
    console.log(state.persons[0]);
    document.getElementById("personsData").innerHTML = personsHTML;
}

//***************************old code *****************/
const personGet = () => {
    console.log(
        "GET personGet function OK !!!!! *** index-login / routing ***"
    );

    window.onload = fetchAndRenderPersons();

    //window.location = "http://64.227.121.167:9999/person";
    //window.onload
    /* 
  http://64.227.121.167:9999/person;
  const data = http://64.227.121.167:9999/person;
  console.log(data);
  */

    console.log(
        "GET personGet function OK !!!!! *** index-login / routing a window.location után***"
    );
};
//console.log(person);

/* const modalLogin = () => {
    console.log("BUTTON modalLogin is ready *** modal OK + MongoDB ***");
    let mLogin = document.getElementById("userName").value;
    console.log(mLogin);
    let mEmail = document.getElementById("email").value;
    console.log(mEmail);
    let mMessage = document.getElementById("message").value;
    console.log(mMessage);
    let mHistory = document.getElementById("history").value;
    console.log(mHistory);
}; */

const mixedLogin = () => {
    console.log("BUTTON mixedLogin is ready !!! js FOLDER !!!");
};

function veghSoft() {
    console.log("OK");
    window.location = "http://www.veghsoft.eu";
}
