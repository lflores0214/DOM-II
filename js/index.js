// Your code goes here
const honk = document.querySelector('.logo-heading');

honk.addEventListener('dblclick', () => {
    const audio = document.querySelector('.horn');
    audio.play();
})

const textTransform = document.querySelectorAll('.text-content');
console.log(textTransform);

textTransform.addEventListener('resize', () => {
    textTransform.style.color = "red";
    textTransform.style.transition = "all 0.7s"
})
