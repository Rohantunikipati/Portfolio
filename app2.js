
let circle=document.querySelector(".mini-circle");
let imgcircle=document.querySelector(".image-circle");
let icon=document.createElement("i");
icon.classList.add("fa-solid");
icon.classList.add("fa-arrow-right");

window.addEventListener("mousemove",function(dets){
    gsap.to(circle,{
        x:dets.clientX-10,
        y:dets.clientY-10
    })
})
let images=document.querySelectorAll(".project img");
images.forEach(function(image){
    let xprev=0;
    let yprev=0;
    image.addEventListener("mousemove",function(dets){
        circle.appendChild(icon);
        var timeout;
        clearTimeout(timeout);
        let xdiff=dets.clientX-xprev;
        let ydiff=dets.clientY-yprev;
        xprev=dets.clientX;
        yprev=dets.clientY;

        let xscale=gsap.utils.clamp(0.2,1.8,xdiff);
        let yscale=gsap.utils.clamp(0.2,1.8,ydiff);

        gsap.to(circle,{
            // scale:5,
            scaleX:xscale,
            scaleY:yscale
        })
        // timeout=setTimeout(function(){
            setscale(5);
        // },500)
    })
    image.addEventListener("mouseleave",function(dets){
        setscale(1)
        console.log("ima woking");
        circle.removeChild(icon);
    })
})
function setscale(finalscale){
    gsap.to(circle,{
        scale:finalscale
    })
}
gsap.from(".page1 .img img",{
    scale:1.6,
    duration:1.5,
    ease:Expo.easeInOut
},'0')
gsap.from(".scroll",{
    x:300,
    delay:1
},'2')
gsap.to(".overlay10 h1",{
    y:0,
    duration:2,
    ease:Expo.easeInOut
},'1')
gsap.to(".overlay20 h1",{
    y:0,
    duration:2,
    ease:Expo.easeInOut
},'1')
gsap.to(".overlay30 h1",{
    y:0,
    duration:2,
    ease:Expo.easeInOut
},'1')
gsap.from(".nav-bar",{
    y:-100,
    duration:2,
    ease:Expo.easeInOut
},'1')

