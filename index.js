//  listening for a keyup event
window.addEventListener('keydown', playOrchestra);


    function playOrchestra(e){
    // selecting the data element
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);

    //for the corresponding key
    const key =document.querySelector(`.key[data-key="${e.keyCode}"]`);
       if(!audio) return; //stops the function from running altogether

       //rewinds to the start
       audio.currentTime=0;
       audio.play(); //plays the audio

       key.classList.add('playing');


   
    };

  const keys = document.querySelectorAll('.key');

//listening to each and every transition of the key
keys.forEach(key => key.addEventListener('transitionend', removeTransition));  

// function for removing transition
function removeTransition(e){

    if(e.propertyName !== 'transform') return; //skip if its not a transform

    this.classList.remove('playing');
}

// Play music by mouse click
keys.forEach( key => key.addEventListener('click' , playByMouse ) );
function playByMouse(e)
{
    const keyCode = this.getAttribute('data-key');
	const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
	audio.currentTime = 0;
	audio.play();
	const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    key.classList.add('playing');
}






