function myFunc(){
    var div = document.getElementById("subMenu");

    if(div.style.display =="none"){
        div.style.display = "inline";
    }
    else{
        div.style.display = "none";
    }




}
function drink(){
    
    var drink=document.getElementById("drinks");
    var meal = document.getElementById("meals");
    
    


   if( drink.style.display =="none" ){
       drink.style.display = "block";
  
   if (meal.style.display == "block") {
       meal.style.display = "none";
       
   } else {
    drink.style.display = "block";    
   }
      
 }
 else{
    drink.style.display ="none";
   }
}
function meals(){
   
    var meal=document.getElementById("meals");
    var drink=document.getElementById("drinks");


   if( meal.style.display =="none" ){
       meal.style.display = "block";
   if (drink.style.display =="block") {
       drink.style.display = "none"
       
   } else {
       meal.style.display = "block";
   }
  
 }else{
    meal.style.display = "none";
}

}
function order(){
    var cont = document.getElementById("mainContainer");
    var pay = document.getElementById("pay")
   if(cont.style.display =="block"){
       cont.style.display = "none"
   }
   else{
       cont.style.display = "block";
   }


}
function pay(){
    

    alert("God,I need to rest.")
}
function back(){
    // var back = document.getElementById("pay")
    // if(back.style.display == "block"){
    //     back.style.display == "none"

    // }
    window.open("delicacies.html");
}