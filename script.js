const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstani(){
    var t1 = gsap.timeline();

    t1.from("#nav",{
        y:'-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut



    })
    
    t1.to(".boundinglem",{
        y:0,
        
        duration: 2,
        ease: Expo.easeInOut,
        delay:-1,
        stagger: .2


    })
    t1.from("#footer",{
        y:-10,
        opacity: 0,
        duration: 1.5,
        delay:-1,
        ease: Expo.easeInOut



    })
}
function circlefollow(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}
function circlesmall(){
    var xscale=1;
    var yscale=1;
    var xprev=0;
    var yprev=0;
    window.addEventListener("mousemove",function(dets){
        xscale=gsap.utils.clamp(.8,1.2,dets.clientX-xprev);
        yscale=gsap.utils.clamp(.8,1.2,dets.clientY-yprev);
        
        xprev=dets.clientX;
        yprev=dets.clientY;
        circlefollow(xscale,yscale);
    });

}
circlesmall();
circlefollow();
firstani();
document.querySelectorAll(".element").forEach(function(element){
   element.addEventListener("mousemove",function(details){

    gsap.to(element.querySelector("img"),{
    opacity:1,
    ease:Power1,
        

   });
   

   });
});