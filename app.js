const playicon = document.getElementById("play");
const audiofile = document.getElementById("audio");

let isaudioplaying = false;

function play() {
    audiofile.play();
    isaudioplaying = true;
    playicon.classList.replace("fa-play", "fa-pause");
}

function pause() {
    audiofile.pause();
    isaudioplaying = false;
    playicon.classList.replace("fa-pause", "fa-play");
}

playicon.addEventListener("click", function () {
    if (isaudioplaying) {
        pause();
    } else {
        play();
    }
});
const forwardicon=document.getElementById("forward")
const songdetails=[
     {
        image: "IMAGES/image-2(1).jpg",
        songName: "Singari Song",
        singerName: "Ramajogayya Sastry",
        audio: "AUDIOs/music-2.mp3"
    }
    ,
    {
        image: "IMAGES/image-3(3).jpg",
        songName: "Dekhelenge Saala song",
        singerName: "Devi Sri Prasad singer ",
        audio: "AUDIOs/music-3(3).mp3"
    },
    {
        image: "IMAGES/image-4(4).jpg",
        songName: "Nadhive Song",
        singerName: "Rakendu mouli Singer",
        audio: "AUDIOs/music-4(4).mp3"
    },

    {
        image: "IMAGES/image-5.jpg",
        songName: "Tulasi Song",
        singerName: " Sumedh k Singer",
        audio: "AUDIOs/music-5(5).mp3"
    },

    {
        image: "IMAGES/image-6.jpg",
        songName: "Sasirekha Song",
        singerName: " Anirudh Singer",
        audio: "AUDIOs/music-6.mp3"
    },


    
{
        image: "IMAGES/image-1(1).jpg",
        songName: "Meesala Pilla Song",
        singerName: "Shweta Mohan",
        audio: "AUDIOs/music-1.mp3"
    }
]
const songimg=document.getElementById("songimage")
const songh3=document.getElementById("songname")
const singh4=document.getElementById("singername")
let songindex=0
function forwardsong(){
    songimg.src=songdetails[songindex].image
    songh3.textContent=songdetails[songindex].songName
    singh4.textContent=songdetails[songindex].singerName
    audiofile.src=songdetails[songindex].audio
    updateHeart()
    play()
    songindex++

}
forwardicon.addEventListener("click",function(){
    forwardsong()
    if(songindex>songdetails.length-1)
    {
        songindex=0
    }
     

})
const backwardIcon=document.getElementById("backward")
function backwardsong() {
    songindex--;

    if (songindex < 0) {
        songindex = songdetails.length - 1;
    }

    songimg.src = songdetails[songindex].image;
    songh3.textContent = songdetails[songindex].songName;
    singh4.textContent = songdetails[songindex].singerName;
    audiofile.src = songdetails[songindex].audio;
    updateHeart();
    play();
    
    
    
}
backwardIcon.addEventListener("click",function(){
    backwardsong()
})
const durationfile=document.getElementById("duration")
const currenttimeele=document.getElementById("currenttime")
const movableele=document.getElementById("movable")

audiofile.addEventListener("timeupdate",function(details){

let audiocurrenttime=details.srcElement.currentTime
const audioduration=details.srcElement.duration
const durationinmin=Math.floor(audioduration/60)
let durationinsec =Math.floor(audioduration%60)
if(durationinsec<10)
{
    durationinsec=`0${durationinsec}`

}
durationfile.textContent=`${durationinmin}:${durationinsec}`
let audiocurrenttimeinmin=Math.floor(audiocurrenttime/60)
let audiotimeinsec=Math.floor(audiocurrenttime%60)
if(audiotimeinsec<10)
{
    audiocurrenttime=`0${audiotimeinsec}`
}
currenttimeele.textContent=`${audiocurrenttimeinmin}:${audiotimeinsec}`
let audioplayedpercent=audiocurrenttime/audioduration *100
movableele.style.width=`${audioplayedpercent}%`
})


const heartbutton=document.getElementById("heart")
function updateHeart() {
    const songName = songh3.textContent;

    if (localStorage.getItem(songName)) {
        heartbutton.style.color = "red";
    } else {
        heartbutton.style.color = "black";
    }
}
heartbutton.addEventListener("click", function () {

    const songName = songh3.textContent;

    if (localStorage.getItem(songName)) {

        localStorage.removeItem(songName);
        heartbutton.style.color = "black";

    } else {

        localStorage.setItem(songName, singh4.textContent);
        heartbutton.style.color = "red";

    }

});


const shuffleele=document.getElementById("shuffle")
shuffleele.addEventListener("click",function()
{
    let songrandindex=Math.floor(Math.random()*4)
    songimg.src = songdetails[songrandindex].image;
    songh3.textContent = songdetails[songrandindex].songName;
    singh4.textContent = songdetails[songrandindex].singerName;
    audiofile.src = songdetails[songrandindex].audio;
    play()

})