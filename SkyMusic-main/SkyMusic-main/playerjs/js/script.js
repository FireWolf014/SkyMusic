let musica = document.querySelector("audio");

let duracaoMusica = document.querySelector(".fim");

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

//Eventos
document.querySelector(".botao-play").addEventListener("click", tocarMusica);

document.querySelector(".botao-pause").addEventListener("click", pausarMusica);



 
//Funções


 //Função Toca musica
 function tocarMusica () {
     musica.play();
     document.querySelector(".botao-pause").style.display = "block";
     document.querySelector(".botao-play").style.display = "none";
 }

 //Função Pausa musica
 function pausarMusica () {
     musica.pause();
     document.querySelector(".botao-pause").style.display = "none";
     document.querySelector(".botao-play").style.display = "block";
 }

// Barra de audio
 function atualizarBarra() {
     let barra = document.querySelector("progress");
     barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + "%";
     let tempoDecorrido = document.querySelector(".inicio");
     tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
 }

// Tempo de duração
 function segundosParaMinutos(segundos) {
     let campoMinutos = Math.floor(segundos / 60);
     let campoSegundos = segundos % 60;
     if (campoSegundos < 10){
         campoSegundos = "0" + campoSegundos;
     }

     return campoMinutos+":"+campoSegundos;
}
