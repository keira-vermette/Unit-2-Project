/* Declare variables below to save the different sections (divs) of your story*/
let cabinetgif = document.querySelector(".cabinetgif");
let cabinet = document.querySelector(".cabinet");
let storage = document.querySelector(".storage");
let storagegif = document.querySelector(".storagegif");
let blob = document.querySelector(".blob");
let watcher = document.querySelector(".watcher");
let altar = document.querySelector(".altar");
let altargif = document.querySelector(".altargif");
let watcher1img =document.querySelector(".watcher1img");
let playvid = document.querySelector(".playvid");
let watcherb = document.querySelector(".watcherb");
let begin = document.querySelector(".begin");
let mainroom = document.querySelector(".mainroom");
let startscreen =document.querySelector(".startScreen");
let cback = document.querySelector(".cback");
let sback = document.querySelector(".sback");
let aback = document.querySelector(".aback");
let wback = document.querySelector(".wback");
let wwback = document.querySelector(".wwback");
let endingthree =document.querySelector(".endingThree");
let endthreeb = document.querySelector("#endthreeb");
let death2 = document.querySelector(".death2");
let ending = document.querySelector(".ending");
let deathb = document.querySelector(".deathb");
let deathr = document.querySelector(".deathr");
let dots = document.querySelector(".dots");

let has_knife = true;
let sacrificed_knife = false;

let room_function = function(room_to_show) {
  let divs = document.getElementsByClassName("room");
  for(let i = 0; i < divs.length; i++) {
    divs[i].style.display = "none";
  }
  document.getElementById(room_to_show).style.display = "block";
}

begin.onclick = function() {
  room_function("info");
  startscreen.style.display="none";
}
dots.onclick = function(){
  room_function("main_room")
}
cabinet.onclick = function() {
  room_function("cabinet_room");
}
storage.onclick = function() {
  room_function("storage_room");
}
blob.onclick = function() {
  room_function("hallway_room");

  if (sacrificed_knife) {
    room_function("dead_watcher_room");
    
  }
}
altar.onclick = function() {
  if (has_knife) {
    let btn = document.getElementById("sacrifice");
    btn.style.display = "block";
    btn.onclick = function() {
      has_knife = false;
      sacrificed_knife = true;
      btn.style.display = "none";
    }
  }
  room_function("altar_room");
}
watcherb.onclick = function() {
  room_function("watcher_room");
}
cback.onclick = function() {
  room_function("main_room");
}
sback.onclick = function() {
  room_function("main_room");
}
aback.onclick = function() {
  room_function("storage_room");
}
wback.onclick = function() {
  room_function("main_room");
}
wwback.onclick = function() {
  room_function("hallway_room");
}
endthreeb.onclick = function() {
  room_function("three1");
}
death2.onclick = function(){
  room_function("three2")
}
ending.onclick = function(){
  room_function("win")
}

playvid.onclick = function(){
  room_function("death")
}
deathb.onclick = function(){
  room_function("knifedeath")
}
deathr.onclick = function(){
  room_function("rundeath");
}