const dev = document.getElementById("dev");
const button = document.getElementById("button");
const loader = document.getElementById("loader");
const imageArray = ["dev1.PNG","dev2.PNG","dev3.PNG","dev4.PNG","dev5.PNG","dev6.PNG","dev7.PNG","dev8.PNG","dev9.PNG","dev10.PNG","dev11.PNG"];

setTimeout(() => {
    loader.remove();
}, 2000);


let imageQueue = -1 ; 

button.addEventListener("click", ()=>{
    imageQueue++
    dev.style.backgroundImage= `url(${imageArray[imageQueue]})`;
    if(imageQueue>9){
        imageQueue=-1;
    }
   
})

