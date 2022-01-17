var Calculadora = (
    function iniciar() {
        //variables
        var operandoa
        var operandob
        var operacion
        var res
        var limite = 8
        var cero = document.getElementById("0")
        var uno = document.getElementById('1')
        var dos = document.getElementById("2")
        var tres = document.getElementById("3")
        var cuatro = document.getElementById("4")
        var cinco = document.getElementById("5")
        var seis = document.getElementById("6")
        var siete = document.getElementById("7")
        var ocho = document.getElementById("8")
        var nueve = document.getElementById("9")
        var encender = document.getElementById("on")
        var signos = document.getElementById("sign")
        var raiz = document.getElementById("raiz")
        var mas = document.getElementById("mas")
        var menos = document.getElementById("menos")
        var por = document.getElementById("por")
        var dividido = document.getElementById("dividido")
        var punto = document.getElementById("punto")
        var igual = document.getElementById("igual")
        var pantalla = document.getElementById("display")


        //Efecto al presionar las teclas
        cero.addEventListener("mousedown", function () {
            cero.setAttribute("style", "transform:scale(0.85,0.85)")
        })
        uno.addEventListener("mousedown", function () {
            uno.setAttribute("style", "transform:scale(0.85,0.85)")
        })
        dos.addEventListener("mousedown", function () {
            dos.setAttribute("style", "transform:scale(0.85,0.85)")
        })
        tres.addEventListener("mousedown", function () {
            tres.setAttribute("style", "transform:scale(0.85,0.85)")
        })
        cuatro.addEventListener("mousedown", function () {
            cuatro.setAttribute("style", "transform:scale(0.85,0.85)")
        })
        cinco.addEventListener("mousedown", function () {
            cinco.setAttribute("style", "transform:scale(0.85,0.85)")
        })
        seis.addEventListener("mousedown", function () {
            seis.setAttribute("style", "transform:scale(0.85,0.85)")
        })
        siete.addEventListener("mousedown", function () {
            siete.setAttribute("style", "transform:scale(0.85,0.85)")
        })
        ocho.addEventListener("mousedown", function () {
            ocho.setAttribute("style", "transform:scale(0.85,0.85)")
        })
        nueve.addEventListener("mousedown", function () {
            nueve.setAttribute("style", "transform:scale(0.85,0.85)")
        })
        encender.addEventListener("mousedown", function () {
            encender.setAttribute("style", "transform:scale(0.85,0.85)")
        })
        signos.addEventListener("mousedown", function () {
            signos.setAttribute("style", "transform:scale(0.85,0.85)")
        })
        raiz.addEventListener("mousedown", function () {
            raiz.setAttribute("style", "transform:scale(0.85,0.85)")
        })
        mas.addEventListener("mousedown", function () {
            mas.setAttribute("style", "transform:scale(0.85,0.85)")
        })
        menos.addEventListener("mousedown", function () {
            menos.setAttribute("style", "transform:scale(0.85,0.85)")
        })
        por.addEventListener("mousedown", function () {
            por.setAttribute("style", "transform:scale(0.85,0.85)")
        })
        dividido.addEventListener("mousedown", function () {
            dividido.setAttribute("style", "transform:scale(0.85,0.85)")
        })
        punto.addEventListener("mousedown", function () {
            punto.setAttribute("style", "transform:scale(0.85,0.85)")
        })
        igual.addEventListener("mousedown", function () {
            igual.setAttribute("style", "transform:scale(0.85,0.85)")
        })
        cero.addEventListener("mouseup", function () {
            cero.setAttribute("style", "transform:scale(1,1)")
        })
        uno.addEventListener("mouseup", function () {
            uno.setAttribute("style", "transform:scale(1,1)")
        })
        dos.addEventListener("mouseup", function () {
            dos.setAttribute("style", "transform:scale(1,1)")
        })
        tres.addEventListener("mouseup", function () {
            tres.setAttribute("style", "transform:scale(1,1)")
        })
        cuatro.addEventListener("mouseup", function () {
            cuatro.setAttribute("style", "transform:scale(1,1)")
        })
        cinco.addEventListener("mouseup", function () {
            cinco.setAttribute("style", "transform:scale(1,1)")
        })
        seis.addEventListener("mouseup", function () {
            seis.setAttribute("style", "transform:scale(1,1)")
        })
        siete.addEventListener("mouseup", function () {
            siete.setAttribute("style", "transform:scale(1,1)")
        })
        ocho.addEventListener("mouseup", function () {
            ocho.setAttribute("style", "transform:scale(1,1)")
        })
        nueve.addEventListener("mouseup", function () {
            nueve.setAttribute("style", "transform:scale(1,1)")
        })
        encender.addEventListener("mouseup", function () {
            encender.setAttribute("style", "transform:scale(1,1)")
        })
        signos.addEventListener("mouseup", function () {
            signos.setAttribute("style", "transform:scale(1,1)")
        })
        raiz.addEventListener("mouseup", function () {
            raiz.setAttribute("style", "transform:scale(1,1)")
        })
        mas.addEventListener("mouseup", function () {
            mas.setAttribute("style", "transform:scale(1,1)")
        })
        menos.addEventListener("mouseup", function () {
            menos.setAttribute("style", "transform:scale(1,1)")
        })
        por.addEventListener("mouseup", function () {
            por.setAttribute("style", "transform:scale(1,1)")
        })
        dividido.addEventListener("mouseup", function () {
            dividido.setAttribute("style", "transform:scale(1,1)")
        })
        punto.addEventListener("mouseup", function () {
            punto.setAttribute("style", "transform:scale(1,1)")
        })
        igual.addEventListener("mouseup", function () {
            igual.setAttribute("style", "transform:scale(1,1)")
        })
        //registro en pantalla





        cero.onclick = function (e) {
            if (pantalla.textContent.length >= 8) {

            }
            if (pantalla.textContent == "0") {
                pantalla.textContent = pantalla.textContent
            } else {
                pantalla.textContent = pantalla.textContent + "0"
            }
        }



        uno.onclick = function (e) {

            if (pantalla.textContent == "0") {
                pantalla.textContent = "1"
            } else {
                if (pantalla.textContent.length < 9) {
                    pantalla.textContent = pantalla.textContent + "1"
                }
            }

        }
        dos.onclick = function (e) {
            if (pantalla.textContent == "0") {
                pantalla.textContent = "2"
            } else {
                if (pantalla.textContent.length < 9) {
                    pantalla.textContent = pantalla.textContent + "2"
                }
            }
            }
        

        tres.onclick = function (e) {
            if (pantalla.textContent == "0") {
                pantalla.textContent = "3"
            } else {
                if (pantalla.textContent.length < 9) {
                    pantalla.textContent = pantalla.textContent + "3"
                }
            }
            }


        cuatro.onclick = function (e) {
            if (pantalla.textContent == "0") {
                pantalla.textContent = "4"
            } else {
                if (pantalla.textContent.length < 9) {
                    pantalla.textContent = pantalla.textContent + "4"
                }
            }
            }
        cinco.onclick = function (e) {
            if (pantalla.textContent == "0") {
                pantalla.textContent = "5"
            } else {
                if (pantalla.textContent.length < 9) {
                    pantalla.textContent = pantalla.textContent + "5"
                }
            }
            }
        seis.onclick = function (e) {
            if (pantalla.textContent == "0") {
                pantalla.textContent = "6"
            } else {
                if (pantalla.textContent.length < 9) {
                    pantalla.textContent = pantalla.textContent + "6"
                }
            }
            }
        siete.onclick = function (e) {
            if (pantalla.textContent == "0") {
                pantalla.textContent = "7"
            } else {
                if (pantalla.textContent.length < 9) {
                    pantalla.textContent = pantalla.textContent + "7"
                }
            }
            }
        ocho.onclick = function (e) {
            if (pantalla.textContent == "0") {
                pantalla.textContent = "8"
            } else {
                if (pantalla.textContent.length < 9) {
                    pantalla.textContent = pantalla.textContent + "8"
                }
            }
            }
        nueve.onclick = function (e) {
            if (pantalla.textContent == "0") {
                pantalla.textContent = "9"
            } else {
                if (pantalla.textContent.length < 9) {
                    pantalla.textContent = pantalla.textContent + "9"
                }
            }
            }

        encender.onclick = function (e) {
            resetear();
        }

        //operaciones

        mas.onclick = function (e) {
            operandoa = pantalla.textContent
            operacion = "+";
            limpiar();
        }
        menos.onclick = function (e) {
            operandoa = pantalla.textContent
            operacion = "-";
            limpiar();
        }
        por.onclick = function (e) {
            operandoa = pantalla.textContent
            operacion = "x";
            limpiar();
        }

        dividido.onclick = function (e) {
            operandoa = pantalla.textContent
            operacion = "÷";
            limpiar();


        }
        // numeros negativos
        signos.onclick = function () {

            pantalla.textContent = parseFloat(pantalla.textContent) * (-1)
        }
        //decimales
        punto.onclick = function () {

            pantalla.textContent = pantalla.textContent + "."
        }

        igual.onclick = function (e) {
            operandob = pantalla.textContent
            resolver();
        }
        function limpiar() {
            pantalla.textContent = ""
        }

        function resetear() {
            pantalla.textContent = "0"
            operandoa = "0"
            operandob = "0"
            operacion = ""
        }

        function pantallaDigitos() {
            cadena = pantalla.textContent
            numero = parseFloat(cadena)
            limite = 8
            if (cadena.length > limite) {
                if (numero - numero.toFixed(0) == 0) {
                    pantalla.textContent = numero
                }
                else {
                    pantalla.textContent = parseFloat(cadena).toPrecision(8)
                }
            }
        }

        function resolver() {
            res = 0
            switch (operacion) {
                case "+":
                    res = parseFloat(operandoa) + parseFloat(operandob)
                    break;
                case "-":
                    res = parseFloat(operandoa) - parseFloat(operandob)
                    break;
                case "x":
                    res = parseFloat(operandoa) * parseFloat(operandob)
                    break;
                case "÷":
                    res = parseFloat(operandoa) / parseFloat(operandob)
                    break;

            }
            resetear();
            pantalla.textContent = res;
        }

    }
)();