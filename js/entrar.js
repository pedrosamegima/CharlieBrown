document.addEventListener("DOMContentLoaded", function(){
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event){
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const cinema = document.getElementById("cinema").value;
        const password = document.getElementById("password").value;

        if(nome === "Dona do meu pensamento" && cinema === "03/05/2025" && password === "DonaEncrenca"){
            window.location.href = "nossaPlay.html";
        } else {
            alert("Você não tem permissão pra ir para a próxima página");
        }
    });
});
