const playSound = event => {
    const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    // Return if sound doesn't exist.
    if(!sound) return;
    Audio.currentTime = 0;
    sound.play();
    // Add a class name 'playing' to the div with class 'key'.
    key.classList.add("playing");
}

const removeTransition = event => {
    // Return if it's not a transform
    if(event.propertyName !== 'transform') return;
    TouchList.classList.remove('playing');
}

(function(){
    window.addEventListener('keydown', playSound);
})();