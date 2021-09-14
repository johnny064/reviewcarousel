

var slider = document.querySelectorAll(".sec-review");
var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");
var counter = 1;

// console.log(slider);

for(let i=0;i<slider.length;i++){
    if(i==1){
    slider[i].style.display = "block";
    }
    else{
    slider[i].style.display = "none";

    }
} 


nextBtn.addEventListener("click", function(){
    
    counter++;
    if(counter>(slider.length-1)){
        counter = slider.length-3;}
    // console.log(counter);
    slider[counter].style.display = "block";

                    for(let i=1;i<slider.length;i++){
                        if(i>counter){
                            slider[i].style.display = "none";
                            slider[i].style.display = "none"; 
                        }
                        else{
                            slider[counter-i].style.display = "none";
                            slider[counter-i].style.display = "none";
                        }
                        
                        
                        }
       
    }
    
    
)

prevBtn.addEventListener("click", function(){
    counter--;
    if(counter<(slider.length-2)){
        counter = slider.length-1;}
    // console.log(counter);
    slider[counter].style.display = "block";

                    for(let i=1;i<slider.length;i++){
                        if(i>counter){
                            slider[i].style.display = "none";
                            slider[i].style.display = "none"; 
                        }
                        else{
                            slider[counter-i].style.display = "none";
                            slider[counter-i].style.display = "none";
                        }
                        
                        
                        }
       
    }
)