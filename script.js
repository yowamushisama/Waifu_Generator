//DOM MODEL
let btn = document.querySelector("#btn");
let image = document.getElementById("waifuimg");
let btn_2 = document.getElementById('btn-2');
let btn_3 = document.getElementById('btn-3');
let dot = document.querySelectorAll(".dot");
let header = document.querySelector('.header');
const images = [{
    image:"file:///D:/Engineering%20Books/Website%20Development/DOM%20PROJECTS/Project%203/Pics/Nakano_Itsuki.jpeg",name:"Nakano Itsuki"
},{
    image:"file:///D:/Engineering%20Books/Website%20Development/DOM%20PROJECTS/Project%203/Pics/Nakano_Miku.jpeg"
,name:"Nakano Miku"},{
    image:"file:///D:/Engineering%20Books/Website%20Development/DOM%20PROJECTS/Project%203/Pics/Nakano_Nino.jpeg"
,name:"Nakano Nino"},{
    image:"file:///D:/Engineering%20Books/Website%20Development/DOM%20PROJECTS/Project%203/Pics/Nakano_Yotsuba.jpeg"
,name:"Nakano Yotsuba"},{
    image:"file:///D:/Engineering%20Books/Website%20Development/DOM%20PROJECTS/Project%203/Pics/Nakano_Ichika.jpeg"
,name:"Nakano Ichika"}
];
//EventListener
btn.addEventListener("click",function(){
   let random = Math.floor(Math.random()*images.length);
   image.src = images[random].image;

})

let count=-1;
let c = 0;

btn_2.addEventListener("click",function(){
            count++;  
            c++;
            if(count > images.length -1){
                count = 0;
            }
            image.src = images[count].image;
            header.innerText = images[count].name;
            if(c>images.length-1){
                c= 0;
                dot[images.length-1].style.backgroundColor='#bbb';
            }
              
            console.log(c);
            dot[c].style.backgroundColor = 'white';
            dot[c-1].style.backgroundColor = '#bbb';
            console.log(images[count].name);
            
    
    
 })
btn_3.addEventListener("click",function(){
    count--;
    c--;
    console.log("btn3 "+ count);
   
     if(count <0 ){
        count = images.length-1;
    }if(c<0){
        c = images.length-1;
        dot[0].style.backgroundColor = '#bbb';
        console.log("circle counter "+ c);
    }
    dot[c].style.backgroundColor = 'white';
    dot[c+1].style.backgroundColor = '#bbb';
    image.src = images[count].image;
})
