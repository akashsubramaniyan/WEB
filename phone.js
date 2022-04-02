var circle =document.getElementById('circle');
var upBtn =document.getElementById('upBtn');
var downBtn =document.getElementById('downBtn');

var rotateValue=circle.style.transform;

var rotateSum;

upBtn.onclick=function(){
    rotateSum=rotateValue+"rotate(-90deg)";
    circle.style.transform=rotateSum;
    rotateValue=rotateSum;
}


downBtn.onclick=function(){
    rotateSum=rotateValue+"rotate(90deg)";
    circle.style.transform=rotateSum;
    rotateValue=rotateSum;
}


const tl = gsap.timeline({defaults:{ease:"slow"}})


tl.fromTo('.tag',{opacity:0},{opacity:1,duration:2,x:50});

tl.to('.slider',{y:'-100%', duration:2,delay:2});

tl.to('.slider2',{x:'-100%',duration:2});

tl.fromTo('.link a',{opacity:0},{opacity:1 ,duration :1,stagger:0.5})

tl.fromTo('.logo',{opacity:0},{opacity:1 ,duration :1});

tl.fromTo('.mobile',{opacity:0},{opacity:1 ,duration :1})

tl.to(".mobile", {duration: 1, x: -50,rotation:360});


tl.to('.slider3',{x:'100%',duration:1});

tl.fromTo('.controls',{opacity:0},{opacity:1,duration:1})

tl.fromTo('.feature',{opacity:0},{opacity:1,duration:1})




