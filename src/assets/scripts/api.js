const urlBase = 'https://api.adviceslip.com';

constructorApi = () => {
    getAdvice();
}

getFromApi = (path) =>
    fetch(`${urlBase}/${path}`)
        .then((response) => response.json())
        .catch((error) => error);


getAdvice = () => getFromApi('advice')
    .then(({ slip: { advice } }) => {
        document.getElementById('slip')
        .appendChild(
            document.createTextNode(advice)
        );
    })
    .catch((error) => {
        alert(error.message);
    });


setTimeout(() => {
    constructorApi();
}, 100);