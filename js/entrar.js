document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) { // <-- aqui
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const password = document.getElementById("password").value;

        if (nome === "Millene" && password === "030525") {
            window.location.href = "nossaPlay.html";
        } else {
            alert("Você não tem permissão pra ir para a próxima página");
        }
    });
});
