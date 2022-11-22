let idmusica;

$(function(){
    let musica = $(".playerALL");
    let player = $(".player");
    musica.click(function (){ 
        
        pararAudio()
        idmusica = $(this).siblings("audio").attr("id");
        tocarAudio()
    });
    player.click(tocarAudio)
});

function tocarAudio(){
    let audio = document.getElementById(idmusica)
    audio.play();
}

function pararAudio (){
    let audio = document.getElementById(idmusica)
    if (audio)
    audio.pause();
}

