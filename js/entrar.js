document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const password = document.getElementById("password").value;

        if (nome === "Millene Gabrielle Andrade de Jesus" && password === "DonaDoMeuPensamento") {
            window.location.href = "./nossaPlay.html";
        } else {
            alert("Você não tem permissão pra ir para a próxima página");
        }
    });
});
