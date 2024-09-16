const xhr = new XMLHttpRequest();
xhr.addEventListener("load", () => {
    const response = xhr.response;
    console.log(response)
})
// Indicaet the type of message and the endpoint to send it to.
xhr.open("GET", "https://supersimplebackend.dev/products/first");
xhr.send();