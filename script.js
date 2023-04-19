// Variable
const mainHeading = document.getElementById('main-heading')
const describingWords = document.getElementById('describing-words')
const playPauseBtn = document.getElementById('play-pause-btn')
const volume = document.getElementById('volume')
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

/* 2- For Controls Pressing keys */ 
document.addEventListener('keydown' , (e) => {
    e.preventDefault();
    switch(e.key.toLowerCase()){
        case " " :
        case "k":
            playPauseVideo();
            return;
        case "f":
            fullScreen();
            return;
        case "i":
            miniplayer();
            return;
        case "t":
            theatre();
            return;
    }
})

/* 3- For Play/Pause Screen */
video.addEventListener('click' , () => {
    playPauseVideo();
})

/* 4- For Theatre */
theatreMode.addEventListener('click' , () => {
    theatre();
})

/* 5- For FullScreen */
fullScreenMode.addEventListener('click' , () => {
    fullScreen();
})

/* 6- For MiniPlayer */
miniplayerMode.addEventListener('click' , () => {
    miniplayer();
})

/* 7- For Mute/Unmute */
volume.addEventListener('click' , () => {
    muteUnmute();
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

let miniplayer = () => {
    if(videoContainer.classList.contains('miniplayer')){
        document.exitPictureInPicture();
        videoContainer.classList.remove('miniplayer')
    }
    else{
        videoContainer.classList.add('miniplayer')
        video.requestPictureInPicture();
    }
}

let muteUnmute = () => {
    if(video.muted){
        videoContainer.classList.remove('muted')
        video.muted = false;
    }
    else{
        videoContainer.classList.add('muted')
        video.muted = true;
    }
} 


// Init
video.play()