let listaVideo = document.querySelectorAll('.lista-video .vid');
let videoPrincipal = document.querySelector('.video-principal video');
let titulo = document.querySelector('.video-principal .titulo');

listaVideo.forEach(video =>{
  video.onclick = () =>{
     listaVideo.forEach(vid => vid.classList.remove('active'));
     video.classList.add('active');
     if(video.classList.contains('active')){
         let src = video.children[0].getAttribute('src');
         videoPrincipal.src = src;
         let text = video.children[1].innerHTML;
         titulo.innerHTML = text;
     };
  };
});