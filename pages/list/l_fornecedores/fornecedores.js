$(document).ready(function() {
	var urlapi = "https://damp-tundra-82992.herokuapp.com/api/fornecedores/";
	
	$.ajax({
		url: urlapi,
		type : "get",
		dataType : "json",
		success : function(data){
			console.log(data);
		},
		error : function(erro){
			console.log(erro);
		}

	});
});