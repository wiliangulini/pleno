let forms = document.getElementById('forms');
let chatInt = document.getElementById('chatInt');
let textchat = document.getElementById('textchat');
let videos = document.getElementById('videos');
let svg = document.getElementById('svg');
let subscriber = document.getElementById('subscriber');
let publisher = document.getElementById('publisher');

document.querySelector('.enviar').addEventListener('click', () => {
  forms.submit.click();
});

if(screen.width <= 768) {

  textchat.setAttribute('style','display: none');

  chatInt.addEventListener('click', () => {
    if(textchat.style.display == "flex") {
      textchat.style.display = "none";
    } else {
      textchat.style.display = "flex";
      //fazer video ficar pequeno
      videos.classList.add('videoSmall');
      subscriber.classList.add('subscriberSmall');
      publisher.classList.add('publisherSmall');
    }
  });

  svg.addEventListener('click', () => {
    textchat.style.display = "none";
    //fazer video ficar normal
    videos.classList.remove('videoSmall');
    subscriber.classList.remove('subscriberSmall');
    publisher.classList.remove('publisherSmall');
  });

} else {

  chatInt.addEventListener('click', () => {
    if(textchat.style.display == "flex") {
      textchat.style.display = "none";
      videos.style.marginLeft = '10.5%';
    } else {
      setTimeout(() => {
        textchat.style.display = "flex";
      }, 350);
      videos.style.marginLeft = '0%';
    }
  });

  svg.addEventListener('click', () => {
    textchat.style.display = "none";
    videos.style.marginLeft = '10.5%';
  });

}