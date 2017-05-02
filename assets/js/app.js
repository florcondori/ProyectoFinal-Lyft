window.addEventListener("load", function(){
	var telefono = document.getElementById("telefono");
	var email = document.getElementById("email");
	var inputText = document.getElementsByClassName("js-input-text");

	telefono.addEventListener("click", function(){
		this.parentNode.nextElementSibling.style.display = "block";
	});

	telefono.addEventListener("blur", function(){
		if(validarInputVacio){
			if(/^[0-9]{9}$/.test(this.value)){
				quitarError(telefono);
			}else{
				mostrarError(telefono);
			}
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
		inputText[i].addEventListener("blur", function(){
			if( this.value.trim().length !==0){
				var araryText = this.value.split(" ");
				araryText.forEach(function(elem, i){
					araryText[i] = elem.charAt(0).toUpperCase()+elem.slice(1).toLowerCase(); 
				});
				if(this.value === araryText.join(" ")){
					this.nextElementSibling.removeAttribute("style");
					this.removeAttribute("style");
				}
				else{
					this.nextElementSibling.style.visibility = "visible";
					this.style.borderColor = "red";					
				}
			}else{
				this.nextElementSibling.style.visibility = "visible";
				this.style.borderColor = "red";
			}
		});
	}

});

var lastScroll = 0;
window.addEventListener('scroll', function(){
	var scrollNumber = window.pageYOffset || document.body.scrollTop;
	console.log(scrollNumber);
		if(scrollNumber>lastScroll){
			document.getElementById("nav-header").style.background = "white";
			document.getElementById("nav-header").style.color ="black";
			document.getElementById("sign-up").style.visibility = "visible";
			document.getElementById("logo-mostrar").style.display = "none";
			console.log("arriba");
		}else{
			console.log("abajo");
			if(scrollNumber<=3){
				document.getElementById("nav-header").removeAttribute("style");
				document.getElementById("sign-up").removeAttribute("style");
				document.getElementById("login-in").removeAttribute("style");
			}
		}
});

function validarInputVacio(){
	if( this.value.trim().length !==0){
		return true;
	}else{
		console.log(this.nextElementSibling);
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
