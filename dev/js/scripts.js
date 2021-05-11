//IMPORTS
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {CustomEase} from "gsap/CustomEase";
import {CustomWiggle} from "gsap/CustomWiggle";

//register Plugins
gsap.registerPlugin(GSDevTools, MotionPathPlugin, CustomEase, CustomWiggle);

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


    //*********** flightTL init ****************
    // gsap.set("#space-ship", {xPercent:-50, yPercent:-50, transformOrigin:"50% 50%"});
    //*********** moonLandingTL init ****************


  }

  //Nested Timelines
  //***********  fadeInTL  ****************
  function fadeInTL(){
    let tl = gsap.timeline();

    tl.from("#background", {alpha:0, duration:4, scale:10})
    .from("#clouds g", {alpha:0, stagger:1, duration:2}, "-=3")
    .from("#stars",{duration:2,alpha:0, ease: "power3.in"},'upAndAway', "-=1")
    .from("#window", {alpha:0, duration:4, scale:10})

    ;//tl END

    return tl;

  }



  //*********** spaceshipTL ****************
  function rocketTL(){
    let tl = gsap.timeline();

    tl.from("#rocket",{y:"+=500", duration:0.5})
    .from("#beam",{y:"+=500", duration:0.5},"-=0.5")
    .to("#flame",{duration:0.25, scaleY:.05, yoyo:true, repeat:1})
    .from("#engine",{rotation:180, transformOrigin:"center"})
    .from("#wings",{alpha:0, duration:0.5})
    
    
    

    ;//tl END

    return tl;

  }

  //*********** liftOffTL ****************

  function liftOffTL(){
    let tl = gsap.timeline();

    
    
    

    //tl END

    return tl;

  }

  //*********** flightTL ****************
  function flightTL(){
    let tl = gsap.timeline();

    tl.to("#rocket1", {
      duration:15,
      motionPath:{
        path:"#flightPath",
        align:"#flightPath",
        alignOrigin:[0.5, 0.5],
        autoRotate:90
        // start: 0.1,
        // end: 0.5,
      },
      ease:"power4.out"


    })
    //.to("#moon", {alpha:1});

    ;//tl END

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

.add(rocketTL(),"-=6")
.add(liftOffTL())
.add(flightTL(),"target")

;//tl END

//mainTL.play("target");



});//ready END
