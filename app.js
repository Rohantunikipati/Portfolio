gsap.registerPlugin(ScrollTrigger);

let tl=gsap.timeline({scrollTrigger:{
    trigger:".page2",
    start:"-10% 30%",
    end:"-10% 30%",
    scrub:1
}})
tl.to(".page1",{
    backgroundColor: 'black',
    ease:"linear",
    duration:2
},'0')
tl
.to(".page2",{
    backgroundColor: 'black',
    ease:"linear",
    duration:2
},'0')
.to(".nav-bar ",{
    backgroundColor: 'black',
    color:"rgb(209 209 199 )",
    ease:"linear",
    duration:2
},'0')
.to(".links a",{
    color:"rgb(209 209 199 )",
    ease:"linear",
    duration:1
},'0')
.to(".links button",{
    backgroundColor:"rgb(209 209 199 )",
    color:"black",
    ease:"linear",
    duration:2
},'0')


let tl2=gsap.timeline({scrollTrigger:{
    trigger:".inforight",
    start:"-10% 0%",
    end:"95% 0%",
    // markers:true,
    pin:true,
    scrub:true
}})
tl2.to(".infoleft img",{
    scale:"1.1"
})

let tl3=gsap.timeline({scrollTrigger:{
    trigger:".page3",
    start:"5% 30%",
    end:"5% 30%",
    // markers:true,
    scrub:1
}})
tl3
.to(".page2",{
    backgroundColor: 'white',
    ease:"linear",
    duration:2
},'0')
.to(".page3",{
    backgroundColor: 'white',
    ease:"linear",
    duration:2
},'0')
.to(".nav-bar ",{
    backgroundColor: 'white',
    color:"black",
    ease:"linear",
    duration:2
},'0')
.to(".links a",{
    color:"black",
    ease:"linear",
    duration:2
},'0')
.to(".links button",{
    backgroundColor:"black",
    color:"rgb(209 209 199 )",
    ease:"linear",
    duration:2
},'0')
let tl4=gsap.timeline({scrollTrigger:{
    trigger:".txt",
    start:"0% 90%",
    end:"250% 90%",
    scrub:1
}})
tl4
.to(".txtleft",{
    marginLeft:"-50%",
},'0')
.to(".txtright",{
    marginLeft:"0%",
},'0')


let tl5=gsap.timeline({scrollTrigger:{
    trigger:".page5",
    start:"-10% 30%",
    end:"-10% 30%",
    // markers:true,
    scrub:1
}})
tl5
.to(".page4",{
    backgroundColor: 'black',
    ease:"linear",
    duration:2
},'0')
.to(".page5",{
    backgroundColor: 'black',
    ease:"linear",
    duration:2
},'0')
.to(".nav-bar ",{
    backgroundColor: 'black',
    color:"rgb(209 209 199 )",
    ease:"linear",
    duration:2
},'0')
.to(".links a",{
    color:"rgb(209 209 199 )",
    ease:"linear",
    duration:2
},'0')
.to(".links button",{
    backgroundColor:"rgb(209 209 199 )",
    color:"black",
    ease:"linear",
    duration:2
},'0')
gsap.to(".overlay .heading",{
    y:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".overlay",
        start:"-7% 75%",
        end:"-7% 75%",
        scrub:1
    }
})
gsap.to(".overlay2 .heading",{
    y:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".overlay2",
        start:"-7% 75%",
        end:"-7% 75%",
        scrub:1
    }
})
gsap.to(".overlay3 .heading",{
    y:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".overlay3",
        start:"-7% 75%",
        end:"-7% 75%",
        scrub:1
    }
})

let tl7=gsap.timeline({scrollTrigger:{
    trigger:".page6",
    start:"0% 30%",
    end:"0% 30%",
    // markers:true,
    scrub:1
}})
tl7
.from(".pagetop .contact",{
    x:100,
    opacity:0
},'0')
.from(".pagebottom .contact",{
    x:-100,
    opacity:0
},'0')

let tl6=gsap.timeline({scrollTrigger:{
    trigger:".page6",
    start:"10% 0%",
    end:"150% 0%",
    // markers:true,
    pin:true,
    scrub:1
}})
tl6
.to(".pagetop",{
    top:"-100%",
},'0')
.to(".pagetop .contact",{
    top:"120%"
},'0')
.to(".pagebottom",{
    bottom:"-100%"
},'0')
.to(".pagebottom .contact",{
    top:"-100%"
},'0')
.from(".detleft",{
    y:500
},'0')
.from(".detright",{
    y:500
},'0')
let tl8=gsap.timeline({scrollTrigger:{
    trigger:".page6",
    start:"0% 30%",
    end:"0% 30%",
    // markers:true,
    scrub:1
}})
tl8
.to(".page5",{
    backgroundColor:"white"
},'0')
.to(".pagetop",{
    backgroundColor:"white"
},'0')
.to(".pagebottom",{
    backgroundColor:"white"
},'0')
.to(".nav-bar ",{
    backgroundColor: 'white',
    color:"black",
    ease:"linear",
    duration:2
},'0')
.to(".links a",{
    color:"black",
    ease:"linear",
    duration:2
},'0')
.to(".links button",{
    backgroundColor:"black",
    color:"rgb(209 209 199 )",
    ease:"linear",
    duration:2
},'0')

