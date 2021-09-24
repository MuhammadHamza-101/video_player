//get dom elements for js code
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//creat functions
//create function to clicking video on
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
};

//create function for update for play and pause icon
function updatePlayIcon(){
    if(video.paused){
        play.innerHTML = ' <i class="fa fa-play fa-2x"></i>';
    }else{
        play.innerHTML = ' <i class="fa fa-pause fa-2x"></i>';
    }
};

//create function to stop video
function stopVideo(){
    video.currentTime = 0;
    video.pause();
};



//function to update the video progress using slider
function updateProgress(){
    progress.value = (video.currentTime / video.duration) *100;

    // set the time for timestamp
    let minutes = Math.floor(video.currentTime / 60)
    if(minutes < 10){
        minutes = "0" + String(minutes)
    };
    let sec = Math.floor(video.currentTime % 60);
    if(sec < 0){
        sec = "0" + String(sec)
    };
    timestamp.innerHTML = `${minutes}:${sec}`
};

function setVideoProgress(){
    video.currentTime = (progress.value * video.duration) / 100;
};

// create addEventListeners.....

// create addEventListeners video.....
video.addEventListener('click',toggleVideoStatus);
video.addEventListener('pause',updatePlayIcon);
video.addEventListener('play',updatePlayIcon);
video.addEventListener('timeupdate',updateProgress);

// create EventListener play.....
play.addEventListener('click',toggleVideoStatus);


// create EventListener stop.....
stop.addEventListener('click',stopVideo);


// create EventListener progress.....

progress.addEventListener('change',setVideoProgress);