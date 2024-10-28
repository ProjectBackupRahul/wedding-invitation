import  { useEffect  } from 'react';
import audio from '../audio/bm.mp3'
 
const BackGroundMusic = () => {
  useEffect(() => {
    const audio = new Audio('../audio/bm.mp3');
    audio.loop = true; // Set the audio to loop

    // Function to play audio after user interaction
    const playAudioOnInteraction = () => {
        audio.play()
            .then(() => {
                console.log('Audio is playing!');
                // Remove event listeners after playing to avoid repeated calls
                window.removeEventListener('click', playAudioOnInteraction);
                window.removeEventListener('keydown', playAudioOnInteraction);
            })
            .catch(error => {
                console.error('Audio play failed:', error);
            });
    };

    // Add event listeners for user interaction
    window.addEventListener('click', playAudioOnInteraction);
    window.addEventListener('keydown', playAudioOnInteraction);

    // Cleanup event listeners on component unmount
    return () => {
        window.removeEventListener('click', playAudioOnInteraction);
        window.removeEventListener('keydown', playAudioOnInteraction);
    };
}, []);

return null; // No UI needed for background audio
};

 
export default BackGroundMusic;