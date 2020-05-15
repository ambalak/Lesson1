//IIFE - Immediately Invoked Function Expression
//Anonymous self executing function
(function(){
    function Start()
    {
        console.log("App Started...");

        let firstHeading = document.getElementById("firstHeading");
        firstHeading.textContent = "good bye hello World!";   
        firstHeading.style.fontWeight = "bold";

        let main = document.getElementsByTagName("main")[0];
        let newH2 = document.createElement("h2");
        newH2.setAttribute("class","Display-5");
        newH2.textContent= "secondary heading";
        main.appendChild(newH2);


        //document.getElementById("firstHeading").textContent = "Good Day Pa!";
    }


    window.addEventListener("load",Start);


})();