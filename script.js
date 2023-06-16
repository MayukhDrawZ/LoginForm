
if(window.innerWidth<=699 ){
    document.getElementById("top-a-first").addEventListener("click",function sliding(){

         document.getElementById("slide").style.transform='translateY(0rem)';
        
    
       
    
    
    
    
    
    });
    
    document.getElementById("top-a-sec").addEventListener("click",function sliding2(){
    
        document.getElementById("slide").style.transform='translateY(-24rem)';
    
    
    
    
    });

}

if(window.innerWidth>699 ){
    document.getElementById("top-a-first").addEventListener("click",function sliding(){
        document.getElementById("slide").style.transform='translateX(0rem)';
    
    
    
    
    });
    
    document.getElementById("top-a-sec").addEventListener("click",function sliding2(){
    
        document.getElementById("slide").style.transform='translateX(-22rem)';
    
    
    
    
    });
    
}

