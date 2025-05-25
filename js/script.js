const backgroundMusic = document.getElementById('backgroundMusic');
const playPauseButton = document.getElementById('playPauseButton');
const volumeSlider = document.getElementById('volumeSlider');

let isPlaying = false; // Variável para controlar o estado da musica

// Define o volume inicial do audio de acordo com o valor no slider
// CORRIGIDO: Usar .value para o valor do slider
backgroundMusic.volume = parseFloat(volumeSlider.value); 

// Adiciona um "ouvinte de evento" ao botão de tocar/pausar
playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        // Se a música estiver tocando, pause-a
        backgroundMusic.pause();
        playPauseButton.textContent = 'Tocar Música';
    } else {
        // Se a música estiver pausada, tente reproduzi-la
        backgroundMusic.play()
            .then(() => {
                // Se a reprodução for bem-sucedida (o que deve acontecer após o clique)
                playPauseButton.textContent = 'Pausar Música';
                console.log("Música iniciada com sucesso");
            })
            // CORRIGIDO: Trocar .cacth por .catch
            .catch(error => {
                // Caso haja algum erro ao tentar iniciar (improvável com clique)
                console.error("Erro ao tentar tocar a música:", error);
                alert("Não foi possível iniciar a música. Por favor, tente novamente ou verifique as configurações do seu navegador.");
                // Mantém o estado como pausado
                isPlaying = false;
                playPauseButton.textContent = 'Tocar Música';
                return;
            });
    }
    // Inverte o estado da música (de tocando para pausado, ou vice-versa)
    isPlaying = !isPlaying;
});

// Adiciona um ouvinte de evento para o slider de volume
volumeSlider.addEventListener('input', () => {
    // Atualiza o volume da musica em tempo real
    // CORRIGIDO: Usar .value para o valor do slider
    backgroundMusic.volume = parseFloat(volumeSlider.value);
});

// Garante que o botão de pause/play esteja sempre funcionando
backgroundMusic.addEventListener('pause', () => {
    isPlaying = false;
    playPauseButton.textContent = 'Tocar Música';
});

// Caso a musica comece a tocar por outro motivo
backgroundMusic.addEventListener('play', () => {
    isPlaying = true;
    playPauseButton.textContent = "Pausar Música";
});
const navLinks = document.querySelector('nav ul li a');

navLinks.forEach(link =>{
    link.addEventListener('click', function(e){
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if(targetSection){
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});