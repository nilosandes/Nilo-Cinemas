// document.getElementById("myheader").innerHTML = 

//     "<nav class='topnav'>"
//         +"&nbsp <a href='index.html' class='active'>Página inicial</a>"
//         +"<a href='/cinemas.html'>Cinemas</a>"
//         +"<a href='/filmes.html'>Filmes</a>"
//         +"<a href='/func.html'>Gerenciar</a>"
//         +"<!--Itens à direita da barra de nav-->"
//         +"<div id='socials'>"
//         +"<a href='https://www.facebook.com/nilo.sandes/' target='_blank'><i class='fa fa-facebook-official' margin-right: 5px></i></a>"
//         +"<a class='fa fa-instagram' margin-left: 10px href='https://www.instagram.com/nilosandes/' target='_blank'></a>"
//         +"<a class='fa fa-twitter-square'></a>"
//         +"<a class='fa fa-youtube' href='https://www.youtube.com/channel/UCC1sLI4f-ySKs8h-B3WTn3g' target='_blank'></a>"
//         +"<a class='fa fa-linkedin-square' href='https://www.linkedin.com/in/nilo-sandes-b1b93a211/' target='_blank'></a>"
//         +"</div>"
//         +"<a id='cad' href='/cadastro.html'>Cadastrar</a>"
//         +"<a id=login href='/login.html'>Login </a>"
//         +"</div>"
//     +"</nav>"
//     ;

<script src="https://code.jquery.com/jquery-3.3.1.js"
    integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
    crossorigin="anonymous"></script>
    
$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
});