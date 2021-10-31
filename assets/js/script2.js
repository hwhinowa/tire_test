
/*
var frame_count  = 9,
    offset_value = 100;

gsap.to(".viewer", {
  backgroundPosition: (-offset_value * frame_count * 2) + "px 50%",
  ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
  scrollTrigger: {
    trigger: ".scene",
    start: "top top",
    end: "+=" + (frame_count * offset_value),
    pin: true,
    scrub: true
  }
});
*/


// console.log('1')


gsap.registerPlugin(ScrollTrigger);


// const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".smooth-scroll"),
//     smooth: true, 
//     smoothMobile: true,
//     lerp: .07, 
// });

// locoScroll.on("scroll", ScrollTrigger.update);
// ScrollTrigger.scrollerProxy(".smooth-scroll", {
// scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
// }, 
// getBoundingClientRect() {
// return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
// },
// pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
// });


// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.refresh();

/*
document.querySelectorAll(".images").forEach(image => {
    const tl = gsap.timeline({
        scrollTrigger: {
        trigger: image, 
        scroller: ".smooth-scroll",  
        scrub: true,   
        end:"+=200%"  
    }});  

    tl.set(image, {
        autoAlpha:0,
        scale:.8
    })   
    
    .fromTo(image, {
        autoAlpha:0, 
    }, { 
        autoAlpha: 1,
        scale:1
    }) 
    
    .to(image, {autoAlpha: 0, scale:1})
    
});
*/

var frame_count  = 9,
    offset_value = 100;

gsap.to(".viewer", {
  backgroundPosition: (-offset_value * frame_count * 2) + "px 50%",
  ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
  scrollTrigger: {
    trigger: ".scene",
    start: "top top",
    end: "+=" + (frame_count * offset_value),
    pin: true,
    scrub: true
  }
});