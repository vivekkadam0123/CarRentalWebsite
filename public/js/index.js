//for slider
var btn=document.getElementsByClassName("btn");             //below car for you there will be 6 buttons that can be clicked to view different cars
var slide=document.getElementById("slideshow");             //class=row or id=slideshow is having width 5520px 

     btn[0].onclick = function(){
         slide.style.transform = "translateX(0px)";
         for(i=0;i<6;i++){
             btn[i].classList.remove("selected");          //class=slected makes button blue and big in width. 
             //here first we remove class=selected from all buttons and then we add it to the clicked button
         }
         this.classList.add("selected");
     }
     btn[1].onclick = function(){
         slide.style.transform = "translateX(-920px)";
         for(i=0;i<6;i++){
             btn[i].classList.remove("selected");
         }
         this.classList.add("selected");
     }
     btn[2].onclick = function(){
         slide.style.transform = "translateX(-1840px)";
         for(i=0;i<6;i++){
             btn[i].classList.remove("selected");
         }
         this.classList.add("selected");
     }
     btn[3].onclick = function(){
         slide.style.transform = "translateX(-2760px)";
         for(i=0;i<6;i++){
             btn[i].classList.remove("selected");
         }
         this.classList.add("selected");
     }
     btn[4].onclick = function(){
         slide.style.transform = "translateX(-3680px)";
         for(i=0;i<6;i++){
             btn[i].classList.remove("selected");
         }
         this.classList.add("selected");
     }
     btn[5].onclick = function(){
         slide.style.transform = "translateX(-4600px)";
         for(i=0;i<6;i++){
             btn[i].classList.remove("selected");
         }
         this.classList.add("selected");
     }





//extra
// function bookswift(){                       on slider swift page if there is <button onclick=bookswift()>
//     window.open("/booknow.html");     
// }

    


    



    