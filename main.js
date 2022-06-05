var heart1 = document.querySelector('.heart');
let audioArr = document.getElementsByTagName('audio');
console.log(audioArr);
var isPlaying = false;
heart1.addEventListener('click', () => {
    audioArr[0].play();
    // isPlaying = !isPlaying;
    // if(isPlaying){
    //   audioArr[0].pause();
    // }
})
heart1.addEventListener('click', () => {
    audioArr[0].pause();
})
// heart.addEventListener('mouseleave',() =>{
//     audioArr[1].play();
// })



document.addEventListener('mousemove', function (e) {
  var body = document.querySelector('body');
  var heart = document.createElement('span');
  var x = e.offsetX;
  var y = e.offsetY;
  heart.style.left = x + 'px';
  heart.style.top = y + 'px';
  var size = Math.random() * 100;
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';
  body.appendChild(heart);
  setTimeout(() => {
    heart.remove()
  },2500)
})
