const playSound = event => {
    const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    // Return if sound doesn't exist.
    if(!sound) return;
    
    sound.currentTime = 0;
    sound.play();
    // Add a class name 'playing' to the div with class 'key'.
    key.classList.add("playing");
}

const removeTransition = event => {
    // Return if the propertyName is not a transform.
    if(event.propertyName !== 'transform') return;
    console.log(this);
    event.target.classList.remove("playing");
}

(function(){
    const keys = document.querySelectorAll('.key');
    // Loop through each key and invoke removeTransition every time transition ends.
    keys.forEach(key =>
        key.addEventListener('transitionend', removeTransition)
    );
    document.addEventListener('keydown', playSound);
})();