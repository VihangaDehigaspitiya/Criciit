/**
 * Created by Ragul on 7/11/17.
 */

// visible student1 details
function showStudent1(x) {

    document.getElementById("s1").innerHTML="<b> Vimukthi Gunarathne <br> Student 01 <br> IIT Reg no : 2016374 <br> UoW Reg ID : w1654470</b>";
    document.getElementById("s1").style.visibility = "visible";
}

// hide student1 details
function hideStudent1(x) {

    document.getElementById("s1").style.visibility = "hidden";
}

// visible student2 details
function showStudent2(x) {

    document.getElementById("s2").innerHTML="<b> Mohammed Haffaz <br> Student 02 <br> IIT Reg no : 2016378 <br> UoW Reg ID : w1654473</b>";
    document.getElementById("s2").style.visibility = "visible";
}

// hide student2 details
function hideStudent2(x) {

    document.getElementById("s2").style.visibility = "hidden";
}

// visible student3 details
function showStudent3(x) {

    document.getElementById("s3").innerHTML="<b> Ragul Ravindiran <br> Student 03 <br> IIT Reg no : 2016362 <br> UoW Reg ID : w1654457</b>";
    document.getElementById("s3").style.visibility = "visible";
}

// hide student3 details
function hideStudent3(x) {

    document.getElementById("s3").style.visibility = "hidden";
}

// visible student4 details
function showStudent4(x) {

    document.getElementById("s4").innerHTML="<b> Vihanga Sangeeth <br> Student 04  <br> IIT Reg no : 2016417 <br> UoW Reg ID : w1654570</b>";
    document.getElementById("s4").style.visibility = "visible";
}

// hide student4 details
function hideStudent4(x) {

    document.getElementById("s4").style.visibility = "hidden";
}

// to top scroll button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
