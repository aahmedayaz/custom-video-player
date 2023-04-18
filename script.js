// Variable
const playPauseBtn = document.getElementById('play-pause-btn')
const videoContainer = document.getElementById('video-container')
const video = document.getElementById('video')
const theatreMode = document.getElementById('theatre-mode')

// Event Listeners
/* 1- For Play/Pause Btn */ 
playPauseBtn.addEventListener('click' , () => {
    playPauseVideo();
})

/* 2- For Play/Pause Screen */
video.addEventListener('click' , () => {
    playPauseVideo();
})

/* 3- For Theatre */
theatreMode.addEventListener('click' , () => {
    theatre();
})

// Functions 

let playPauseVideo = () => {
    if(video.paused){
        if(videoContainer.classList.contains('paused')){
            videoContainer.classList.remove('paused')
        }
        video.play();
    }
    else{
        videoContainer.classList.add('paused')
        video.pause();
    }
}

let theatre = () => {
    if(videoContainer.classList.contains('theatre')){
        videoContainer.classList.remove('theatre')
    }
    else{
        videoContainer.classList.add('theatre')
    }
}


// Init
video.play()