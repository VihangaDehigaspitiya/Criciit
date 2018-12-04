function validation(){
    var Name = document.forms["f1"]["fname"].value;
    var Email = document.forms["f1"]["email"].value;   
    var comment= document.forms["f1"]["Commments"].value;     
    var radios =document.getElementsByName("rating");   
  
    var empty=false;  
    var radiochecked=false; 
    var rating="";    
    
    if (Name === "") {
        alert("Name must be filled out");
        empty=true; 
    }
        
    if (Email === "") {
        alert("Email must be filled out");
        empty=true;  
        
    }  
       
    for (var i = 0, length = radios.length; i < length; i++) {
       if (radios[i].checked) {
        rating=(radios[i].value);
        radiochecked=true;                
        break;     
    }
    }

       
    if (radiochecked==false){
        alert("Rating must be checked");
        empty=true; 
     }
        
        if (empty==false){
          
           alert("Dear "+Name+" , Thank you very much for your feedback.You have rated our site "+rating +" and your comment was " + comment);
            
                              
    }                      
}






          
