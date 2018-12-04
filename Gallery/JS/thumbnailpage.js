function change1() {
    
    var modal= document.getElementById('myModal');
    modal.style.display = "block";
    document.getElementById("header").innerHTML="<u>Brian Lara</u>";
    document.getElementById("mainImg").src="./CSS/img/lara.jpg";
    document.getElementById("des").src="./CSS/sanga table.html";
    document.getElementById("des").innerHTML=   "Lara holds several world records for high scoring.<br>He has the highest individual score in both first-class <br> cricket (501 not out for Warwickshire against Durham in 1994)<br>and Test cricket (400 not out for the West Indies against England <br>in 2004). Lara amassed his world record 501 in 474 minutes off only 427 balls.";
}

function change2() {        
    var modal= document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    document.getElementById("header").innerHTML="<u>Kevin Peterson</u>";
    document.getElementById("mainImg").src="./CSS/img/kevin.jpg";
    document.getElementById("des").innerHTML="Kevin Peter Pietersen MBE (born 27 June 1980) is a former England <br>international cricketer. He is a right-handed batsman and occasional<br> off spin bowler who currently plays for Melbourne Stars <br>in the Big Bash League, the Quetta Gladiators in the Pakistan Super League as<br> well as the Hollywoodbets Dolphins in the CSA T20 Challenge. He had also<br> been signed by the Rising Pune Supergiants for the 2016 season of the Indian <br>Premier League.";
}
function change3() {        
    var modal= document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    document.getElementById("header").innerHTML="<u>Kumar Sangakkara</u>";
    document.getElementById("mainImg").src="./CSS/img/sanga.jpg";
    document.getElementById("des").innerHTML="Kumar Sangakkara, an elegant stroke player, a reliable keeper, an astute <br> thinker, was the cornerstone of Sri Lankan cricket for close to 15 years.<br> After playing close to 500 international games for his country, the all-time great<br> cricketer played his final game in a Test against India at Colombo<br> (PSS) in 2015. ";
    
}
function change4() { 
    var modal= document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    document.getElementById("header").innerHTML="<u>Ricky Ponting</u>";
    document.getElementById("mainImg").src="./CSS/img/ricky.jpg";
    document.getElementById("des").innerHTML="Ricky Thomas Ponting, AO (born 19 December 1974), nicknamed Punter,<br> is an Australian former cricketer who was captain of the<br> Australia national cricket team during its 'golden era'; between<br> 2004 and 2011 in Test cricket and 2002 and 2011 in One Day <br>International cricket.";
}
function change5() {
    var modal= document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    document.getElementById("header").innerHTML="<u>Daniel Vettori</u>";
    document.getElementById("mainImg").src="./CSS/img/daniel.jpg";
    document.getElementById("des").innerHTML="Daniel Vettori has been on the international scene so long it is <br>sometimes hard to believe he has only recently crossed into his thirties. <br>The youngest man to play Test cricket for New Zealand,<br> at the age of 18, he is one of only eight players to have managed the double of<br> 300 Test wickets and 3000 runs. With time on his side, he could one day creep <br>up towards Hadlee's 431 Test dismissals, but to do that Vettori would need to <br>avoid the stress fractures in his back that troubled him earlier in his career.<br> He also cannot afford another form slump like the one he suffered in 2003-04.";
}
window.onclick = function change(event){
    var modal= document.getElementById('myModal'); 
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function backblack(){
   back.style.backgroundColor = "#000000";
}

function backwhite(){
    back.style.backgroundColor = "#ffffff";
}

function backgreen(){
    back.style.backgroundColor = "#035105";
}

function textred(){
    document.getElementById("des").style.color="#ff0000";
}

function textblue(){
    document.getElementById("des").style.color="#0aceff";
}

function textblack(){
    document.getElementById("des").style.color="#000000";
}

function textwhite(){
    document.getElementById("des").style.color="#ffffff";
}