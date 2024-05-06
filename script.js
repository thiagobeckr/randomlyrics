function randomimg() {
    var urls = [
        "https://pbs.twimg.com/media/GJ3dnQ8XEAAtHcl?format=jpg&name=medium",
        "https://pbs.twimg.com/media/GJ2LTECWQAE0c7v?format=jpg&name=medium",
        "https://pbs.twimg.com/media/GIGmQblWEAArGEM?format=jpg&name=small",
        "https://pbs.twimg.com/media/GIF9da1XgAAPGk2?format=jpg&name=small",
        "https://pbs.twimg.com/media/GIBBTcZXsAAnUZc?format=jpg&name=900x900",
        "https://pbs.twimg.com/media/GH_zps8XIAAFFp5?format=png&name=900x900",
        "https://pbs.twimg.com/media/GHmkdYjW4AArLss?format=jpg&name=medium",
        "https://pbs.twimg.com/media/GGbGDo9XoAAlxKE?format=jpg&name=medium",
        "https://pbs.twimg.com/media/GGZ0DXFX0AATaTt?format=jpg&name=medium",
        "https://pbs.twimg.com/media/GHm_5ssX0AAZ1JQ?format=jpg&name=medium",
    ];

    var random = Math.floor(Math.random() * urls.length);
    var urlrandom = urls[random];

    var img = document.getElementById("randomImage");

    // Adicionando classe para iniciar a transição
    img.classList.add("fade-out");

    setTimeout(function() {
        // Mudando a imagem após a transição de fade-out
        img.src = urlrandom;
        img.onload = function() {
            // Removendo a classe para iniciar a transição de fade-in
            img.classList.remove("fade-out");
        };
    }, 500); // Tempo correspondente à duração da transição de fade-out em milissegundos
}
