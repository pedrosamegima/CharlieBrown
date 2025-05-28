document.addEventListener("DOMContentLoaded", function(){
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(){
        event.preventDefault();


        const nome = document.getElementById("nome").value;
        const cinema = document.getElementById("cinema").value;
        const password = document.getElementById("password").value;

        if(nome === "Millene Gabrielle Andrade de Jesus" && cinema === "03/05/2025" && password === "DonaDoMeuPensamento"){
            window.location.href = "nossaPlay.html";
    } else {
        alert("Você não tem permissão pra ir para a proxima pagina");
    }
    });
})