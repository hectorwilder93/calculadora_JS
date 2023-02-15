var globalOperacion = "";
var casillaActiva = 1;

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function insertar_digito(digito) {
  var Elemento = document.getElementById("vnum" + casillaActiva);
  //Va a agregar un número a la casilla activa

  //Validar si el texto ya tiene punto
  if (digito == ".") {
    var valorActual = Elemento.value;
    if (valorActual.includes(".")) {
      //El número no tiene sentido
    } else {
      //Validar si es el primer caracter
      if (valorActual.length > 0) {
        Elemento.value = Elemento.value + digito;
      } else {
        Elemento.value = "0.";
      }
    }
  } else if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(digito)) {
    Elemento.value = Elemento.value + digito;
  }
}
function seleccionar_operacion(operacion) {
  //Va a cambiar a la segunda casilla activa y adicionalmente va
  //a mostrar el operador en la calculadora
  //Si ya hay dos valores válidos, va a calcular el resultado
  //Validar si los números son válidos

  var campo1 = document.getElementById("vnum1");
  var campo2 = document.getElementById("vnum2");
  var num1 = campo1.value;
  var num2 = campo2.value;

  if (isNumeric(num1) && isNumeric(num2)) {
    resolver();
  }

  globalOperacion = operacion;
  var caracter = "";

  //Coloca el icono de la operación en la caja de operación
  switch (operacion) {
    case "suma":
      caracter = "+";
      break;
    case "multiplicacion":
      caracter = "X";
      break;
    case "division":
      caracter = "/";
      break;
    case "potencia":
      caracter = "^";
      break;
    case "modulo":
      caracter = "MOD";
      break;
    case "resta":
      caracter = "-";
      break;
    default:
      break;
  }
  document.getElementById("operador").innerHTML = caracter;

  //Pasar a la siguiente casilla
  casillaActiva = 2;
}

function limpia_digito() {
  //Va a eliminar el último caracter de la casilla activa
  var clr = limpia_digito;
  clr = clr.slice(0, -1);
  console.log(clr);
}

function limpiar_pantalla() {
  //Eliminará el operador, los valores de las casillas y el resultado
  //Adicionalmente me volverá a situar en la primera casilla.
  document.getElementById("casillaActiva").value = "";
}

function resolver(recursivo = false) {
  //Me calculará y mostrará el resultado si hay dos números válidos

  var campo1 = document.getElementById("vnum1");
  var campo2 = document.getElementById("vnum2");
  var num1 = campo1.value;
  var num2 = campo2.value;

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  resultado = 0;
  switch (globalOperacion) {
    case "suma":
      resultado = num1 + num2;
      break;
    case "multiplicacion":
      resultado = num1 * num2;
      break;
    case "division":
      resultado = num1 / num2;
      break;
    case "potencia":
      resultado = Math.pow(num1, num2);
      break;
    case "modulo":
      resultado = num1 % num2;
      break;
    case "resta":
      resultado = num1 - num2;
      break;
    default:
      break;
  }

  //Visualizar resultado
  document.querySelectorAll("#res_inner td")[0].innerHTML = resultado;

  //agregar el valor al input1 y al input2
  campo1.value = resultado;
  campo2.value = "";

  if (recursivo) {
  } else {
    seleccionar_operacion("");
  }
}
