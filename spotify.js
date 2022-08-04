// console.log("welcome to my spotify clone");
    //   ---------------- variable define -----------
    const btnplay=document.querySelector(".play");
    const btnpause=document.querySelector(".pause");

const play=document.querySelector("#play");
const prev=document.querySelector("#prev");
const next=document.querySelector("#next");
const songprogress=document.querySelector("#songprogress");
const trackimage=document.querySelector("#trackimage");
const title=document.querySelector("#title");
const artist=document.querySelector("#artist");
const displayvolume=document.querySelector("#displayvolume");
const mute=document.querySelector("#mute");
const volumeprogress=document.querySelector("#volumeprogress");
const currenttime=document.querySelector("#current-time");
const durationtime=document.querySelector("#durition-time");
const mplaylist=document.querySelector(".music-playlist");
// const songName=document.querySelector(".songName");
// const img=document.querySelector("#imgsong
const pDiv=document.querySelector(".playlist-div");
const playlist=document.querySelector(".playlist");
const sss=document.querySelector(".fa-circle-play");

    //    song list -------------
Tracklist=[
    {
     name:"Let me Love You",
        path:"./music/song.mp3",
        img:"./img/song.jpg",
        singer:"Justin Berbal"
    },
    {
        name:"Baarish",
        path:"./music/song1.mp3",
        img:"./img/img1.jpg",
        singer:"Tanishk Bagchi"
    },
    {
        name:"Phir Bhi Tumko Chahunga",
        path:"./music/song2.mp3",
        img:"./img/img1.jpg",
        singer:"Arijit Singh"
    },
    {
        name:"Blessing of Baapu",
        path:"./music/song3.mp3",
        img:"./img/Yzg5.gif",
        singer:"Jassi Gill"
    },
    {
        name:"hddh",
        path:"./music/song4.mp3",
        img:"././img/Yzg5.gif",
        singer:"HSJA"
    },
    {
        name:"Aaye Munde",
        path:"./music/song5.mp3",
        img:"./img/Yzg5.gif",
        singer:"Varinder Brar"
    },
    {
        name:"Chal Jindiye",
        path:"./music/song6.mp3",
        img:"./img/Yzg5.gif",
        singer:"Amrinder Gill"
    },
    {
        name:"Chan Vahkya",
        path:"./music/song7.mp3",
        img:"./img/Yzg5.gif",
        singer:"Hornoon"
    }
];





 let timer;
 let autoplay=0;
 let indexTrack=0;
 let songIsplaying=false;
//  let songItem=document.getElementsByClassName("songItem");
 let track=document.createElement("audio");
 track.addEventListener("timeupdate",stupdate);

    //  addEventListener on play buttion-----------------
    play.addEventListener("click",justplay); 
    btnpause.addEventListener("click",justplay);
    next.addEventListener("click",nextsong);
    prev.addEventListener("click",prevsong);

songprogress.addEventListener("change",changedurition);
volumeprogress.addEventListener("change",changeVolume);
// sidelist.addEventListener("click",sidefun);


    // ------------ create a function to load the track ---------
    function loadtrack(indexTrack){
clearInterval(timer);
resetsongprogress();
        track.src=Tracklist[indexTrack].path;
        title.innerHTML=Tracklist[indexTrack].name;
        trackimage.src=Tracklist[indexTrack].img;
        artist.innerHTML=Tracklist[indexTrack].singer;

track.load();
timer= setInterval(updatesongprogress,1000);
    }
    loadtrack(indexTrack);
    // create a function for control the play pause 
    function justplay(){
        if(songIsplaying==false){
            songplay();
            // play.innerHTML=`<img src="./resource/icon/pause.svg" alt="">`
          
        }
        else{
            songpause();
        }
    }
      
// for playing the song -----------------
function songplay(){
    track.play();
    songIsplaying=true;
    btnplay.style.display="none";
    btnpause.style.display="flex";
    trackimage.classList.add("anime");
}
    //  function for pause the song 
function songpause(){
    track.pause();
    songIsplaying=false;
    btnpause.style.display="none";
    btnplay.style.display="flex";
    trackimage.classList.remove("anime");
    
  
    play.innerHTML='<i class="fa-solid fa-circle-play"></i>'

}
// add addEventListener on prev button 

function nextsong(){
    if(indexTrack<Tracklist.length - 1){
        indexTrack++;
        loadtrack(indexTrack);
        songplay()
    }
    else{
        indexTrack=0;
        loadtrack(indexTrack);
        songplay()
    }
}
function prevsong(){
    if(indexTrack>0){
        indexTrack--;
        loadtrack(indexTrack);
        songplay()
    }
    else{
        indexTrack=Tracklist -1;
        loadtrack(indexTrack);
        songplay()
    }
}
// create a function for duration section 
function changedurition(){
let sliderpostion=track.duration*(songprogress.value/100);
track.currentTime=sliderpostion;

}

// reset songprogress 
function resetsongprogress(){
    songprogress.value=0;
}
function updatesongprogress(){
    let position=0;
    if(!isNaN(track.duration)){
        position=track.currentTime*(100/track.duration);
        songprogress.value=position;
    }
}
// Mute Sound
function muteSound() {
    track.volume = 0;
    displayvolume.innerHTML = 0;
    currentVolume.value = 0;
  }

// Change Volume
function changeVolume() {
    displayvolume.value = volumeprogress.value;
    track.volume = volumeprogress.value/100;
  }
// create a function for update time duration........................ 
function stupdate(){
        if (track.duration) {
          let curmins = Math.floor(track.currentTime / 60);
          let cursecs = Math.floor(track.currentTime - curmins * 60);
          let durmins = Math.floor(track.duration / 60);
          let dursecs = Math.floor(track.duration - durmins * 60);
      
          if (dursecs < 10) {
            dursecs = "0" + dursecs;
          }
          if (durmins < 10) {
            durmins = "0" + durmins;
          }
          if (curmins < 10) {
            curmins = "0" + curmins;
          }
          if (cursecs < 10) {
            cursecs = "0" + cursecs;
          }
          currenttime.innerHTML = curmins + ":" + cursecs;
          durationtime.innerHTML = durmins + ":" + dursecs;
        } else {
            currenttime.innerHTML = "00" + ":" + "00";
          durationtime.innerHTML = "00" + ":" + "00";
        }
      }
    //    js for the playlist slider 
      const sidelist=document.querySelector("#sidelist");
      const container=document.querySelector(".container");
      const cancel=document.querySelector("#cancel");
      sidelist.addEventListener("click",showPlayList);
      cancel.addEventListener("click",hidePlayList)
      function showPlayList() {
        container.style.display="grid"
      }
      function hidePlayList() {
        container.style.display="none"
      }



// js for display song in playlist 
      let counter = 1;
      function displayTracks() {
        for (let i = 0; i < Tracklist.length; i++) {
          console.log(Tracklist[i].name);
          let div = document.createElement("div");
          div.classList.add("playlist");
          div.innerHTML = `
              <span class="song-index">${counter++}</span>
              <p class="single-song">${Tracklist[i].name}</p>
          `;
          pDiv.appendChild(div);
        }
        playFromPlaylist();
    }
      
      displayTracks();
// Play song from the playlist
function playFromPlaylist() {
    pDiv.addEventListener("click", (e) => {
      if (e.target.classList.contains("single-song")) {
        //   alert(e.target.innerHTML);
        const indexNum = Tracklist.findIndex((item, index) => {
          if (item.name === e.target.innerHTML) {
            return true;
          }
        });
        loadtrack(indexNum);
        songplay();
        hidePlayList();
      }
    });
  }

  // for footer
  const btn=document.querySelector(".btn");
  btn.addEventListener("click",btncall);
  function btncall(){
    alert("Subscribed Succesfully")
  }