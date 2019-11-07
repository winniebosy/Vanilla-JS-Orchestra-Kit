//  listening for a keyup event

window.addEventListener('keydown', function(e){
    // selecting the data element
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
       console.log(audio);
       if(!audio) return; //stops the function from running altogether
       audio.play();

});