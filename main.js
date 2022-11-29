


var $hamburger = $('.hamburger');

TweenLite.set('.line01',{x:40});  
TweenLite.set('.line03',{x:-40});
TweenLite.set('.navigation',{xPercent:-50, yPercent:-50})
TweenLite.set('.navigation li',{opacity:1}); 

var hamburgerMotion = new TimelineMax()
.to('.line03',0.4,{x:'-=50'},0)
.to('.line01',0.4,{x:'+=50'},0)
.to('.menu',0.4,{autoAlpha:1},0)
.staggerTo('.navigation li',0.1,{x:0,ease: Sine.easeOut},0.2,0.5)
.to('.navigation li',1,{marginBottom:'100px', ease: Power1.easeOut})
.reverse()

$hamburger.on('click', function(e) {
  hamburgerMotion.reversed(!hamburgerMotion.reversed());
  document.body.classList.toggle('lock-scroll');
});




function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  
  ;
  let displayTime = document.querySelector(".time")
  const date = new Date();
  const time = (formatAMPM(new Date));
  displayTime.innerHTML = time


gsap.registerPlugin(ScrollTrigger);

const pageWrap = document.querySelector('#PageWrap')

//GSAPHorizontalScroll
function GSAPHorizontalScroll() {
    let Sections = gsap.utils.toArray("section");

    let GSAPHorizontalScrollTL = gsap.timeline({
        scrollTrigger: {
            trigger: "#PageWrap",
            pin: true,
            scrub: 0,
            // snap: 1 / (Sections.length - 1),
            end: () => "+=" + pageWrap.offsetWidth,
            // markers: "true",
        }
    })
    GSAPHorizontalScrollTL
        .to(Sections, {
            xPercent: -100 * (Sections.length - 1),
            ease: "none",
        })
}
//GSAPHorizontalScroll






var	wideScreen = window.matchMedia("(min-width: 800px)");
var	narrowScreen = window.matchMedia("(max-width: 799px)");
      
  if(wideScreen.matches) {
    function GSAPHorizontalScroll() {
        let Sections = gsap.utils.toArray("section");
    
        let GSAPHorizontalScrollTL = gsap.timeline({
            scrollTrigger: {
                trigger: "#PageWrap",
                pin: true,
                scrub: 0,
                // snap: 1 / (Sections.length - 1),
                end: () => "+=" + pageWrap.offsetWidth,
                // markers: "true",
            }
        })
        GSAPHorizontalScrollTL
            .to(Sections, {
                xPercent: -100 * (Sections.length - 1),
                ease: "none",
            })
    }
    function SectionAboutGSAP() {
      let SectionAboutGSAPTL = gsap.timeline({
        scrollTrigger: {
          trigger: "#SectionB",
          // toggleActions: "play reverse play reverse",
          scrub: 0,
          start: () =>
            "center center-=" +
            (document.querySelector("#SectionB").offsetLeft - window.innerWidth),
          end: () => "+=" + document.querySelector("#SectionB").offsetWidth,
          // scroller:"#SectionB",
          // horizontal: true,
          
        }
      });
      SectionAboutGSAPTL.to(".about-text", {
        y: -50,
        duration: 1,
        opacity: 1
      })
        
      
    }
    const children = document.querySelectorAll('.reveal svg');

 children.forEach((child)=>{
  child.parentElement.replaceWith(...child.parentElement.childNodes);
 })
  }
  else {
    function GSAPHorizontalScroll() {
        let Sections = gsap.utils.toArray("section");
    
        let GSAPHorizontalScrollTL = gsap.timeline({
            scrollTrigger: {
                trigger: "#PageWrap",
                pin: true,
                scrub: 0,
                // snap: 1 / (Sections.length - 1),
                end: () => "+=" + pageWrap.offsetWidth,
                // markers: "true",
            }
        })
        GSAPHorizontalScrollTL
            .to(Sections, {
                yPercent: 10 * (Sections.length - 1),
                ease: "none",
            })
    }
    let revealContainers = document.querySelectorAll(".reveal");

    revealContainers.forEach((container) => {
      let image = container.querySelector(".reveal svg");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "restart none none reset"
        }
      });
    
      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1.5, {
        xPercent: -100,
        ease: Power2.out
      });
      tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.2,
        delay: -1.5,
        ease: Power2.out
      });
    });
    function SectionBGSAP() {
      let SectionBGSAPTL = gsap.timeline({
        scrollTrigger: {
          trigger: "#SectionB",
          // toggleActions: "play reverse play reverse",
          scrub: 0,
          start: () =>
            "center center-=" +
            (document.querySelector("#SectionB").offsetLeft - window.innerWidth),
          end: () => "+=" + document.querySelector("#SectionB").offsetWidth,
          // scroller:"#SectionB",
          // horizontal: true,
          
        }
      });
      SectionBGSAPTL.from(".about-text", {
        y: "-360",
        ease: "none"
      })
        .to(".scroll-btn", {
          opacity: 0,
          ease: "none"
        })
     
      
    }
  
  }

////philiosphoe 

if(wideScreen.matches) {
  function SectionBGSAP() {
    let SectionBGSAPTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#SectionB",
        // toggleActions: "play reverse play reverse",
        scrub: 0,
        start: () =>
          "center center-=" +
          (document.querySelector("#SectionB").offsetLeft - window.innerWidth),
        end: () => "+=" + document.querySelector("#SectionB").offsetWidth,
        // scroller:"#SectionB",
        // horizontal: true,
        
      }
    });
    SectionBGSAPTL.from(".about-text", {
      y: "-360",
      ease: "none"
    })
      .to(".scroll-btn", {
        opacity: 0,
        ease: "none"
      })
   
    
  }




  
window.onload = () => {

  GSAPHorizontalScroll()
  SectionBGSAP();
  SectionAboutGSAP()
  ScrollTrigger.defaults({
      markers:false
    })
    
    var points = gsap.utils.toArray('.point');
    var indicators = gsap.utils.toArray('.indicator');
    
    var height = 100 * points.length;
    
    gsap.set('.indicators', {display: "flex"});
    
    var tl = gsap.timeline({
      duration: points.length,
      scrollTrigger: {
        trigger: ".philosophie",
        start: "top center",
        end: "+="+height+"%",
        scrub: true,
        id: "points",
      }
    })
    
    var pinner = gsap.timeline({
      scrollTrigger: {
        trigger: ".philosophie .wrapper",
        start: "top top",
        end: "+="+height+"%",
        scrub: true,
        pin: ".philosophie .wrapper",
        pinSpacing: true,
        id: "pinning",

      }
    })
    
    
    
    
    points.forEach(function(elem, i) {
      gsap.set(elem, {position: "absolute", top: 0});
    
      tl.to(indicators[i], {backgroundColor: "orange", duration: 0.25}, i)
      tl.from(elem.querySelector('svg'), {autoAlpha:0}, i)
      tl.from(elem.querySelector('article'), {autoAlpha:0, translateY: 100}, i)
      
      if (i != points.length-1) {
        tl.to(indicators[i], {backgroundColor: "#adadad", duration: 0.25}, i+0.75)
        tl.to(elem.querySelector('article'), {autoAlpha:0, translateY: -100}, i + 0.75)
        tl.to(elem.querySelector('svg'), {autoAlpha:0}, i + 0.75)
      }
      
    });
    
    
    
  
}
}
else {
  gsap.registerPlugin(ScrollTrigger);

let titles = gsap.utils.toArray(".bio-text"),
  offset = titles[1].offsetTop - titles[0].offsetTop;

// loop through each "h2" element and create an animation/ScrollTrigger for each
titles.forEach((element, i) => {
  gsap.to(element, {
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "center center+=" + offset / 2,
      end: "center center-=" + offset / 2,
      scrub:true,
  
      onEnter: () => {
        gsap.to(element, {
          y: -50,
          duration: 1,
          opacity: 1
        });
      },
      onLeave: () => {
        gsap.to(element, {
          y: -100,
          duration: 1,
          opacity: 0
        });
      },
      onEnterBack: () => {
        gsap.to(element, {
          y: -50,
          duration: 1,
          opacity: 1
        });
      },
      onLeaveBack: () => {
        gsap.to(element, {
          y: 0,
          duration: 1,
          opacity: 0
        });
      }
    }
  });
});

}















  var darkMode;

if (localStorage.getItem('dark-mode')) {  
  // if dark mode is in storage, set variable with that value
  darkMode = localStorage.getItem('dark-mode');  
} else {  
  // if dark mode is not in storage, set variable to 'light'
  darkMode = 'light';  
}

// set new localStorage value
localStorage.setItem('dark-mode', darkMode);



if (localStorage.getItem('dark-mode') == 'dark') {
  // if the above is 'dark' then apply .dark to the body
  $('body').addClass('dark');  
  // hide the 'dark' button
  $('.dark-button').hide();
  // show the 'light' button
  $('.light-button').show();
}


// Toggle dark UI

$('.dark-button').on('click', function() {  
  $('.dark-button').hide();
  $('.light-button').show();
  $('body').addClass('dark');  
  // set stored value to 'dark'
  localStorage.setItem('dark-mode', 'dark');
});

$('.light-button').on('click', function() {  
  $('.light-button').hide();
  $('.dark-button').show();
  $('body').removeClass('dark');
  // set stored value to 'light'
  localStorage.setItem('dark-mode', 'light');   
});



myAudio = new Audio('./audio.mp3'); 
if (typeof myAudio.loop == 'boolean')
{
    myAudio.loop = true;
}
else
{
    myAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}


function myFunction() {

  const soundBtn = document.querySelector('.volume-btn');
  
    if (soundBtn.innerHTML === "Sound on") {
      soundBtn.innerHTML = "Sound off";
   
      myAudio.play();
    } else {
      soundBtn.innerHTML = "Sound on";
  
        myAudio.pause();
     
    }
  }
  // gsap.registerPlugin(ScrollTrigger);
  // gsap.to(".scroll-btn", {
  //   scrollTrigger: "#PageWrap",
  //   start:"bottom 90%",
 
  
  //   opacity:0,
  // });
  var darkMode;

if (localStorage.getItem('dark-mode')) {  
  // if dark mode is in storage, set variable with that value
  darkMode = localStorage.getItem('dark-mode');  
} else {  
  // if dark mode is not in storage, set variable to 'light'
  darkMode = 'light';  
}

// set new localStorage value
localStorage.setItem('dark-mode', darkMode);



if (localStorage.getItem('dark-mode') == 'dark') {
  // if the above is 'dark' then apply .dark to the body
  $('body').addClass('dark');  
  // hide the 'dark' button
  $('.dark-button').hide();
  // show the 'light' button
  $('.light-button').show();
}


// Toggle dark UI

$('.dark-button').on('click', function() {  
  $('.dark-button').hide();
  $('.light-button').show();
  $('body').addClass('dark');  
  // set stored value to 'dark'
  localStorage.setItem('dark-mode', 'dark');
});

$('.light-button').on('click', function() {  
  $('.light-button').hide();
  $('.dark-button').show();
  $('body').removeClass('dark');
  // set stored value to 'light'
  localStorage.setItem('dark-mode', 'light');   
});



function myFunctionRead() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function myFunctionReadToo() {
  var dots = document.getElementById("dotss");
  var moreText = document.getElementById("morre");
  var btnText = document.getElementById("myBtnn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function myFunctionReadThree() {
  var dots = document.getElementById("dotsss");
  var moreText = document.getElementById("morrre");
  var btnText = document.getElementById("myBtnnn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}



Pace.on('done', function() {
 
  $('.p').delay(500).animate({top: '30%', opacity: '0'}, 3000, $.bez([0.19,1,0.22,1]));


  $('#preloader').delay(1500).animate({top: '-200%',opacity: '0'}, 3000, $.bez([0.19,1,0.22,1]));

  $('.pace').delay(1500).animate({opacity: '0'}, 2000, $.bez([0.19,1,0.22,1]));
      TweenMax.to(".text", 2, {
          delay: 1.8,
               y: 10,
               opacity: 1,
               ease: Expo.easeInOut
         })
         TweenMax.to(".time-wrapper", 2, {
          delay: 1.8,
               opacity: 1,
               ease: Expo.easeInOut
         })
         TweenMax.to(".coord", 2, {
          delay: 2,
        opacity:1,
               ease: Expo.easeInOut
         })
 });
