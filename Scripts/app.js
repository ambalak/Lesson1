"use strict";
//IIFE - Immediately Invoked Function Expression
//Anonymous self executing function
(function(){


    let newH2;
    //event handlers
    function MouseOver(){
        newH2.style.color = "green";
        newH2.style.fontSize = "80px";

    };

    function MouseOut(){
        newH2.style.color = "black";
        newH2.style.fontSize = "30px";

    };

    function Start()
    {
        console.log("App Started...");

        let firstHeading = document.getElementById("firstHeading");
        firstHeading.textContent = "good bye hello World!";   
        firstHeading.style.fontWeight = "bold";

        let main = document.getElementsByTagName("main")[0];
        newH2 = document.createElement("h2");
        newH2.setAttribute("class","Display-5");
        newH2.textContent= "secondary heading";
        main.appendChild(newH2);


        //document.getElementById("firstHeading").textContent = "Good Day Pa!";

        newH2.addEventListener('click',function(){
            newH2.style.color = (newH2.style.color == "blue")? "black" : "blue";
        });

        newH2.addEventListener('mouseover',MouseOver);

        newH2.addEventListener('mouseout',MouseOut);
          
    }

    


    window.addEventListener("load",Start);


})();