//IMPORTS
 import { gsap } from "gsap";
 import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
 import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
// import {CustomEase} from "gsap/CustomEase";
// import {CustomWiggle} from "gsap/CustomWiggle";

//register Plugins
gsap.registerPlugin( MorphSVGPlugin, DrawSVGPlugin);

//**** SELECT ELEMENTS without jQuery ****\\

// jQuery, all instances of .box
//$(".box");

// first instance of .box
//document.querySelector(".box");

// all instances of .box
//document.querySelectorAll(".box");
//example:
//let someBox = document.querySelector("#box");


//page ready listener
let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
  //add tools
  //GSDevTools.create();

  /* add your code here */
  //Variables
  let mainTL = gsap.timeline({id:"main"});
  


  function init(){

    //  gsap.set("#logo",{transformOrigin:50% 50% });


    //*********** flightTL init ****************
    // gsap.set("#space-ship", {xPercent:-50, yPercent:-50, transformOrigin:"50% 50%"});
    //*********** moonLandingTL init ****************


  }

  //Nested Timelines
  //***********  fadeInTL  ****************
  function fadeInTL(){
    let tl = gsap.timeline();

    
    
  
   tl.from("#logo",{alpha:0, duration:2, scale:1})
   tl.from("#headlights", {alpha:0, duration:0.1})
   tl.to("#logo",{alpha:0, duration:2})
   tl.to("#headlights",{alpha:0, duration:2})
   tl.from("#background", {alpha:0, duration:4, scale:10})
    // .from("#clouds g", {alpha:0, stagger:1, duration:2}, "-=3")
    // .from("#stars",{duration:2,alpha:0, ease: "power3.in"},'upAndAway', "-=1")
    // .from("#window", {alpha:0, duration:4, scale:10})

     ;//tl END

    return tl;

  }



  //*********** spaceshipTL ****************
  function dashboardTL(){
    let tl = gsap.timeline();

    tl.from ("#dashboard_base", {duration:2, drawSVG:"0%"})
    tl.from ("#dashboard_base", {duration:2, fill:"white"})
    tl.from ("#outter_circle", {duration:1, drawSVG:"0%"})
    tl.from ("#outter_circle", {duration:1, fill:"white"})
    .from("#dashboard_top", {alpha:0, duration:2})
    .from("#spedometer",{alpha:0, sclae:10,transformOrigin:"center", duration:2})
    .from("circle2", {alpha:0, rotation:360, transformOrigin:"center" , scale:5, duration:2})
    .from("#zero", {alpha:0, duration:0.5})
    .from("#one", {alpha:0, duration:0.5})
    .from("#two", {alpha:0, duration:0.5})
    .from("#three", {alpha:0, duration:0.5})
    .from("#four", {alpha:0, duration:0.5})
    .from("#five", {alpha:0, duration:0.5})
    .from("#six", {alpha:0, duration:0.5})
    .from("#seven", {alpha:0, duration:0.5})
    .from("#eight", {alpha:0, duration:0.5})
    .from("#nine", {alpha:0, duration:0.5})
    .from("#pointer", {alpha:0, rotation:360, duration:1})
    .from("#gears",{alpha:0, duration:0.5})
    .from("#top_left", {alpha:0, x:"-=250", duration:1})
    .from("#top_right", {alpha:0,x:"+=250", duration:1})
    .from("#bottom_left", {alpha:0,x:"-=250", duration:1})
    .from("#bottom_right", {alpha:0,x:"+=250", duration:1})
    .from("#speed", { duration:1, alpha:0})
    .from ("#box", {duration:1.25, drawSVG:"0%"},"-=0.5")
    .from ("#box", {duration:1.25, fill:"white", opacity:"0"})
    .from("#weather_icon", { duration:1, alpha:0})
    .from("#weather", { duration:1, alpha:0})
    .from("#bell",{alpha:0, duration:1, scale:3, transformOrigin:"center"})
    // tl.from("#rocket",{y:"+=500", duration:0.5})
    // .from("#beam",{y:"+=500", duration:0.5},"-=0.5")
    
    
    
    
    

    ;//tl END

    return tl;

  }

  //*********** liftOffTL ****************

  function menuTL(){
    let tl = gsap.timeline();
    
    tl.from("#menu_background", {y:"+=1000", duration:1})
    tl.from("#menu_base", {duration:1, drawSVG:"0%"})
    tl.from("#menu_base", {duration:1, fill:"white", stroke:"white", strokeWidth:"1", opacity:"0"})
      .from("#music",{duration:1, x:"-=1000"})
      .from("#phone",{duration:1, x:"+=1000"})
      .from("#map",{duration:1, x:"-=1000"})
      .from("#settings",{duration:1, x:"+=1000"})
      

    

    
    
    

    //tl END

    return tl;

  }

  //*********** flightTL ****************
  function musicTL(){
    let tl = gsap.timeline();

    tl.from("#music_icon", {alpha:0, duration:1})
      .from("#uzi",{alpha:0, duration:1, scale:3, transformOrigin:"center"})
      .from("#luv", {alpha:0, duration:1})

    

    ;//tl END

    return tl;

  }


  function phoneTL(){
    let tl = gsap.timeline();

    tl.from("#phone1", {alpha:0, duration:1})
      .from("#music1", {alpha:0, duration:1})
      .to("#music_icon", {alpha:0, duration:1})
      .from("#phone_icon", {alpha:0, duration:1})
      .from("home", {alpha:0, duration:1})
      .from("work", {alpha:0, x:"+=250", duration:1})
      .from("number", {alpha:0, x:"-=250", duration:1})
      .from("number1", {alpha:0, x:"+=250", duration:1})








    ;

    return tl;

  }


//*********** moonLandingTL ****************


//*********** flame functions DO NOT INCLUDE IN MAIN TL ****************






//1. set initial properties
init();

//2. show content - prevents FOUC
gsap.set('#svg-container',{visibility:"visible"});

//3. BUILD Main timeline
mainTL.add(fadeInTL())
.add(dashboardTL())
.add(menuTL())
.add(musicTL())
.add(phoneTL())



;//tl END

//mainTL.play("target");



});//ready END
