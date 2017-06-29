$(document).ready(function(){
 $("button").click(function(e){
		e.preventDefault();
		var name = $("#tareas").val();
		var message = $("#agregar").val();
		if(name == "" && message == ""){
			alert("Debes añadir tareas");
		}else{
			$('#lista').append('<div><span class="center-align">'+ name + '</span><p class="center-align">' + message + '</p></div>');
		}
	});

})