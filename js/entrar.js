document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) { // <-- aqui
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const password = document.getElementById("password").value.trim();

        if (nome === "Millene" && password === "030525") {
            Swal.fire({
                imageUrl: "img/foto4.jpeg",
                imageHeight: 600,
                width: 450,
                height: 500,
                background: '#D3D3D3', 
                imageAlt: "Dona encrenca",
                confirmButtonText: "Bem-vinda Dona do meu pensamento!",
                customClass: {
                    image: 'image-radius',
                }
            }).then(() =>{
                  window.location.href = "nossaPlay.html";
            });
           } else {
            Swal.fire({
                icon: "error",
                title: "Acesso negado!",
                text: "Você não tem permissão pra ir para a próxima página",
            });
        }
    });
});
