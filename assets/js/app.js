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
/*		if( this.value.trim().length !==0){
			if(/^[0-9]{9}$/.test(this.value)){
				this.nextElementSibling.removeAttribute("style");
				this.removeAttribute("style");
			}else{
				this.nextElementSibling.style.visibility = "visible";
				this.style.borderColor = "red";
			}
		}else{
			this.nextElementSibling.style.visibility = "visible";
			this.style.borderColor = "red";
		}*/
	});

	email.addEventListener("blur", function(){
		if( this.value.trim().length !==0){
			if(/([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/gi.test(this.value)){
				this.nextElementSibling.removeAttribute("style");
				this.removeAttribute("style");
			}else{
				this.nextElementSibling.style.visibility = "visible";
				this.style.borderColor = "red";
			}
		}else{
			this.nextElementSibling.style.visibility = "visible";
			this.style.borderColor = "red";
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
