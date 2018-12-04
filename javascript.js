var min=8;//Here you can set the minimum and maximum value of the text size, according to you preference
var max=18;

function increaseFontSize() {
   var p = document.getElementsByTagName("div");
   /*The "p" is the paragraph tag of the HTML document, you can use mutiple elements of the html document by 
    making the 'var p' an array or you get the elements by the id using the .getElementsById method in the global DOM model. 
   */
   for(i=0;i<p.length;i++) {
      if(p[i].style.fontSize) {
         var s = parseInt(p[i].style.fontSize.replace("px",""));
      } else {
         var s = 12;
      }
      if(s!=max) {
         s += 1;
      }
      p[i].style.fontSize = s+"px"
   }
}
function decreaseFontSize() {
   var p = document.getElementsByTagName("div");
   //The same as above here too.
   for(i=0;i<p.length;i++) {
      if(p[i].style.fontSize) {
         var s = parseInt(p[i].style.fontSize.replace("px",""));
      } else {
         var s = 12;
      }
      if(s!=min) {
         s -= 1;
      }
      p[i].style.fontSize = s+"px"
   }   
}