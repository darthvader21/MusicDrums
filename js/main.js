var button = document.querySelectorAll('button');

for (var i = button.length - 1; i >= 0; i--) {

  button[i].addEventListener('click', function() {
    // 0 because there is only one audio
    var audio = this.getElementsByTagName('audio')[0];
    audio.currentTime=0;
    audio.play();
  });

}
