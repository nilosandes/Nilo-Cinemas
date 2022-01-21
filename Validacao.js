function validarForm() {
    var val = document.getElementById("valido");
    try {
    var n = document.forms["cadastre"]["nome"].value;
    if (n == null || n == "") {
    throw "O Nome deve ser preenchido!";
    }
    var y = document.forms["cadastre"]["email"].value;
    var atpos = y.indexOf("@");
    var dotpos = y.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= y.length){
    throw "Digite um e-mail válido!";
    }
    return true;    
    } catch (err) {
    val.style.color = "#FF0000";
    val.innerHTML = "Erro: " + err;
    return false;
    }
    }