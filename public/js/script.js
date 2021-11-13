const state = {
    persons: [],
};
async function sendMongoDB() {
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
    fetchAndRenderPersons();
}
async function fetchAndRenderPersons() {
    const response = await fetch("/person");
    document.getElementById("personsData").innerHTML = "";
    let persons;
    state.persons = await response.json();
    renderPersons();
}
function renderPersons() {
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
    document.getElementById("personsData").innerHTML = personsHTML;
}
const personGet = () => {
    window.onload = fetchAndRenderPersons();
};
const mixedLogin = () => {};
function veghSoft() {
    console.log("OK");
    window.location = "http://www.veghsoft.eu";
}
