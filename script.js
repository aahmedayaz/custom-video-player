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
const slider = document.getElementById('slider')
const currentTime = document.getElementById('currentTime')
const totalTime = document.getElementById('totalTime')
const timeline = document.getElementById('timeline')
const playbackSpeed = document.getElementById('playback-speed')
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

/* 8- For Volume Slider */
slider.addEventListener('input' , (e) => {
    volumeHighAverageLowMuted(e);
})

/* 9- For Total Time */
video.addEventListener('loadedmetadata' , () => {
    totalTime.textContent = timeFormat(video.duration)
})

/* 10- For Current Time */
video.addEventListener('timeupdate' , () => {
    currentTime.textContent = timeFormat(video.currentTime)
    updateTimeline();
})

/* 11- For Dragging the timeline */
timeline.addEventListener('input' , () => {
    video.currentTime = (timeline.value * video.duration) / 100;
})

/* 12- For Playback Speed */
playbackSpeed.addEventListener('click' , () => {
    changePlayBack();
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
        console.log(document.fullscreenElement);
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
        videoContainer.classList.add('volume-high')
        slider.value = 1
        video.volume = 1
        video.muted = false;
    }
    else{
        videoContainer.classList.add('muted')
        videoContainer.classList.remove('volume-low')
        videoContainer.classList.remove('volume-average')
        videoContainer.classList.remove('volume-high')
        slider.value = 0;
        video.volume = 0;
        video.muted = true;
    }
} 

let volumeHighAverageLowMuted = (e) => {
    video.volume = e.target.value
    if(e.target.value == '0' ){
        video.muted = true;
    }
    else{
        video.muted = false;
    }
    
    if(video.volume == '1'){
        videoContainer.classList.add('volume-high')
        videoContainer.classList.remove('volume-low')
        videoContainer.classList.remove('volume-average')
        videoContainer.classList.remove('muted')
    }
    else if(video.volume > '0.3' && video.volume < '1'){
        videoContainer.classList.add('volume-average')
        videoContainer.classList.remove('volume-low')
        videoContainer.classList.remove('volume-high')
        videoContainer.classList.remove('muted')
    }
    else if(video.volume > '0' && video.volume < '0.3'){
        videoContainer.classList.add('volume-low')
        videoContainer.classList.remove('volume-high')
        videoContainer.classList.remove('volume-average')
        videoContainer.classList.remove('muted')
    }
    else if(video.volume == '0'){
        videoContainer.classList.add('muted')
        videoContainer.classList.remove('volume-low')
        videoContainer.classList.remove('volume-average')
        videoContainer.classList.remove('volume-high')
    }
}


let timeFormat = (timeInSeconds) => {
    let hours = Math.floor(timeInSeconds/3600).toString()
    let minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60).toString()
    let seconds = Math.floor(timeInSeconds % 60).toString()

    hours = hours.length == 1 ? hours.padStart(2 , '0') : hours;
    minutes = minutes.length == 1 ? minutes.padStart(2 , '0') : minutes;
    seconds = seconds.length == 1 ? seconds.padStart(2 , '0') : seconds;

    if(hours <= 0){
        return `${minutes}:${seconds}`
    }
    else{
        return `${hours}:${minutes}:${seconds}`
    }
}

let updateTimeline = () => {
    timeline.value = (video.currentTime*100) / video.duration
}


let changePlayBack = () => {
    if(video.playbackRate < 2.0){
        video.playbackRate += 0.25;
    }
    else{
        video.playbackRate = 0.25;
    }
    playbackSpeed.textContent = `${video.playbackRate}x`
}