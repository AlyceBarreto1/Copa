const textos = document.getElementsByClassName("h2");
const tema = document.getElementById("trocar");
const cantores = document.querySelector(".cantores");
const p = document.querySelectorAll("p");


p[1].style.color = "pink";
p[4].style.color = "purple";

let temaEscuro = false;

tema.addEventListener("click",
    function(){

        if (temaEscuro === false){

            document.body.style.background = "#18191a";

            document.body.style.color = "white";

            textos[0].style.color = "#f8f9fa";

            textos[1].style.color = "#f8f9fa";

            cantores.innerHTML = "CANTORES DA COPA";

            cantores.style.color = "white";

            p[0].style.color = "white";
            p[2].style.color = "white";
            p[3].style.color = "white";
            p[5].style.color = "white";

            temaEscuro = true;
        }
        else {
            document.body.style.background = "#C5DAFF";

            document.body.style.color = "black";

            textos[0].style.color = "rgb(0, 0, 71)";

            textos[1].style.color = "rgb(0, 0, 71)";

            cantores.style.color = "rgb(0, 0, 71)"

            p[0].style.color = "#000047";
            p[2].style.color = "#000047";
            p[3].style.color = "#000047";
            p[5].style.color = "#000047";

            temaEscuro = false;
        }
    }
);
