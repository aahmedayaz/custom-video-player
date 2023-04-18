// Variable
const mainHeading = document.getElementById('main-heading')
const describingWords = document.getElementById('describing-words')
const playPauseBtn = document.getElementById('play-pause-btn')
const videoContainer = document.getElementById('video-container')
const video = document.getElementById('video')
const theatreMode = document.getElementById('theatre-mode')
const fullScreenMode = document.getElementById('fullscreen-mode')
const miniplayerMode = document.getElementById('miniplayer-mode')

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

/* 4- For FullScreen */
fullScreenMode.addEventListener('click' , () => {
    fullScreen();
})

/* 5- For MiniPlayer */
miniplayerMode.addEventListener('click' , () => {
    if(videoContainer.classList.contains('miniplayer')){
        document.exitPictureInPicture();
        videoContainer.classList.remove('miniplayer')
    }
    else{
        videoContainer.classList.add('miniplayer')
        video.requestPictureInPicture();
    }
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

let fullScreen = () => {
    if(videoContainer.classList.contains('fullscreen')){
        videoContainer.classList.remove('fullscreen')
    }
    else{
        videoContainer.classList.add('fullscreen')
    }
}


// Init
video.play()