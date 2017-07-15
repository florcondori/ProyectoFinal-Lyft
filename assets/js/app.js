window.addEventListener("load", function(){
	var telefono = document.getElementById("telefono");
	var email = document.getElementById("email");
	var inputText = document.getElementsByClassName("js-input-text");
	var btn = document.getElementById("btn-become")

	telefono.addEventListener("focus", function(){
		this.parentNode.nextElementSibling.style.display = "block";
	});

	telefono.addEventListener("blur", validarInputVacio);
	telefono.addEventListener("keyup", function(){

		if(/^[0-9]{9}$/.test(this.value) && this.value.length==9){
			quitarError(telefono);
		}else{
			mostrarError(telefono);
		}
	
	});

	email.addEventListener("blur", function(){
		if( validarInputVacio){

			if(/([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/gi.test(this.value)){
				quitarError(email);
			}else{
				mostrarError(email);
			}
		}
	});

	for(var i=0; i<inputText.length;i++){

		inputText[i].addEventListener("keyup", function(){

			if(/^[a-zA-Z]*$/.test(this.value)){
				quitarError(this);
			}else{
				mostrarError(this);
			}
		});

		inputText[i].addEventListener("blur", function(){

			var araryText = this.value.split(" ");
			araryText.forEach(function(elem, i){
				araryText[i] = elem.charAt(0).toUpperCase()+elem.slice(1).toLowerCase(); 
			});
			
			if(this.value.toLowerCase() === araryText.join(" ").toLowerCase()){
				this.value = araryText.join(" ");
			}								
		});

		inputText[i].addEventListener("blur", validarInputVacio);
	}

	btn.addEventListener("click", function(e){
		e.preventDefault();
		document.getElementById("formulario-sign-up").reset();
		document.getElementsByClassName("div-input-oculto")[0].removeAttribute("style");
	});

});

var lastScroll = 0;
window.addEventListener('scroll', function(){
	var scrollNumber = window.pageYOffset || document.body.scrollTop;

		if(scrollNumber>lastScroll){
			document.getElementById("nav-header").classList.add("header-in");
			document.getElementById("sign-up").style.visibility = "visible";
			document.getElementById("logo-mostrar").style.display = "none";
			document.getElementById("logo-oculto").classList.remove("oculto");
		}else{
			if(scrollNumber<=3){
				document.getElementById("nav-header").classList.remove("header-in");
				document.getElementById("sign-up").removeAttribute("style");
				document.getElementById("logo-mostrar").removeAttribute("style");
				document.getElementById("logo-oculto").classList.add("oculto");
			}
		}
});

function validarInputVacio(){
	if( this.value.trim().length !==0){
		return true;
	}else{

		this.nextElementSibling.style.visibility = "visible";
		this.style.borderColor = "red";
		return false;
	}
}
function mostrarError(input){
	input.nextElementSibling.style.visibility = "visible";
	input.style.borderColor = "red";	
}
function quitarError(input){
	input.nextElementSibling.removeAttribute("style");
	input.removeAttribute("style");
}
