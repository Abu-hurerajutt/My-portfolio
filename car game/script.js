const maincar = document.getElementById("carmain")
const cars = document.querySelectorAll('.cars')

document.addEventListener('keydown', function (e) {

    if (e.key === 'ArrowLeft') {
        maincar.style.left="30px"
    } else if (e.key === 'ArrowRight' ){
       maincar.style.left="220px"
    }
});
function isColliding(maincar, car) {
    let maincarRect = maincar.getBoundingClientRect();
    let carRect = car.getBoundingClientRect();

    return !(maincarRect.right < carRect.left ||
             maincarRect.left > carRect.right ||
             maincarRect.bottom < carRect.top ||
             maincarRect.top > carRect.bottom);
}

function checkCollision() {
    cars.forEach(function(cars) {
        if (isColliding(maincar, cars)) {
            stopCars();
            stoproad();
            stopcounter();
            savescore();
            stopmusic();
            // overmusic();
        }
    });
    
}

function stopCars() {cars.forEach(function(car){
    car.style.animationPlayState = "paused";
})
}
stoproad=()=>{
    const road = document.getElementsByClassName('road')[0];
    road.classList.add('roadstop')
    const gameover=document.getElementById('gameover');
    gameover.style.display='block'

}
let meters = 0;
let km =0;
let recsave= document.getElementById('hi');
let rec=recsave.innerHTML
let hi = 0

const countmeters = setInterval(() => {
    meters+=100;
    document.getElementById('me').innerHTML=meters 
    playmusic()
    if(meters>999){
        meters=0
        km++
        if(km<10){
            document.getElementById('km').innerHTML="0"+km
        }
        else{
            document.getElementById('km').innerHTML=km
        }
        
        if(km>rec){
            rec++
            if(rec<10){
                document.getElementById('hi').innerHTML="0"+rec
            }
            else{
                document.getElementById('hi').innerHTML=rec
            }
        }

    }
    
    

   
}, 1000);
stopcounter=()=>{
    clearInterval(countmeters)
    let musica=document.getElementById('audio2')
    musica.play()
}

savescore=()=>{
    localStorage.setItem('score',recsave.innerHTML)
}
showscore=()=>{
    recsave.innerHTML=localStorage.getItem('score')
}
showscore()
setInterval(checkCollision, 100); 

playmusic=()=>{
    let music = document.getElementById('audio1')
    music.play();
}
stopmusic=()=>{
    let music = document.getElementById('audio1')
    music.pause();
}
// overmusic=()=>{
//     let musica=document.getElementById('audio2')
//     musica.play()
// }