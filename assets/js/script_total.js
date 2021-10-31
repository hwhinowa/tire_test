/* LOCOMOTIVE SCROLL */
// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});


/* SCROLL TRIGGER */
gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.saveStyles(".container-hero div")
// ScrollTrigger.matchMedia({

//   // desktop
//   "(min-width: 800px)": function() {
//     // setup animations and ScrollTriggers for screens 800px wide or greater (desktop) here...
//     // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
//   },
//   // mobile
//   "(max-width: 799px)": function() {
//     // The ScrollTriggers created inside these functions are segregated and get
//     // reverted/killed when the media query doesn't match anymore.
//     var targets = document.querySelectorAll(".container-hero div");

//     targets.forEach(target => {
//       const tl = gsap.timeline({
//         defaults: {duration: 1},
//         scrollTrigger: {
//           trigger: target,
//           markers: true,
//           scrub: true,
//           start: "center 50%",
//           end: "bottom 50%",
//           pin: true
//         }
//       })
//       .fromTo(target, {y: 25}, {y: -25})
//       .from(target, {opacity: 0, duration: 0.2}, 0)
//       .to(target, {opacity: 0, duration: 0.2}, 0.8)
//     });
//   },

//   // all
//   "all": function() {
    //console.clear();

    /*
    ********* AIRPOD + TEXT *********
    */
    // const canvas = document.getElementById("hero-lightpass");
    // const context = canvas.getContext("2d");

    // canvas.width = 1158;
    // canvas.height = 770;

    // const frameCount = 147;
    // const currentFrame = index => (
    //   `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(index + 1).toString().padStart(4, '0')}.jpg`
    // );

    // const images = []
    // const airpods = {
    //   frame: 0
    // };

    // for (let i = 0; i < frameCount; i++) {
    //   const img = new Image();
    //   img.src = currentFrame(i);
    //   images.push(img);
    // }

    // gsap.to(airpods, {
    //   frame: frameCount - 1,
    //   snap: "frame",
    //   scrollTrigger: {
    //     scrub: 0.5
    //   },
    //   onUpdate: render
    // });

    // images[0].onload = render;

    // function render() {
    //   context.clearRect(0, 0, canvas.width, canvas.height);
    //   context.drawImage(images[airpods.frame], 0, 0);
    // }

    // // Timeline for scaling the image when scrolling begins

    // var tl = gsap.timeline({
    //   scrollTrigger: {
    //     scrub: true
    //   }
    // });

    // tl.from("#hero-lightpass", {
    //   scale: 1.2,
    //   duration: 1
    // }, 0)
    // .to("#hero-lightpass", {
    //   scale: 1,
    //   duration: 0.25
    // }, 0.75)


    // // Timeline for fading in and fading out the text

    // var targets = document.querySelectorAll(".container-hero div");

    // targets.forEach(target => {
    //   const tl = gsap.timeline({
    //     defaults: {duration: 1},
    //     scrollTrigger: {
    //       trigger: target,
    //       markers: true,
    //       scrub: true,
    //       start: "center 50%",
    //       end: "bottom top",
    //       pin: true
    //     }
    //   })
    //   .fromTo(target, {y: 25}, {y: -25})
    //   .from(target, {opacity: 0, duration: 0.2}, 0)
    //   .to(target, {opacity: 0, duration: 0.2}, 0.8)
    // });

    /*
    ********* IMAGE SEQUENCE *********
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

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
//   }

// });