const textos = document.getElementsByClassName("h2");
const tema = document.getElementById("trocar")

let temaEscuro = false;

tema.addEventListener("click",
    function(){

        if (temaEscuro === false){

            document.body.style.background = "#18191a";

            document.body.style.color = "white";

            textos[0].style.color = "#f8f9fa";

            textos[1].style.color = "#f8f9fa";
            
            temaEscuro = true;
        }
        else {
            document.body.style.background = "#C5DAFF";

            document.body.style.color = "black";

            textos[0].style.color = "rgb(0, 0, 71)";

            textos[1].style.color = "rgb(0, 0, 71)";

            temaEscuro = false;
        }
    }
);
