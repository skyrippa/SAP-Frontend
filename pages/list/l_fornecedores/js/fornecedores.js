//Variáveis
var providersArray = []

//AJAX -  URL request and saving api-data
$.ajax({
    method:'GET',
    url :'https://damp-tundra-82992.herokuapp.com/api/fornecedores/',
    success:function (response){
      
      try {
        //Save data on Array
        providersArray = response.data
        populateTable(providersArray)
        populateTableBL(providersArray)
        console.log(providersArray)

      } catch (e) {
        alert('Url error : Existe algum problema na Rota !')

      }
      
    }
})
// --------------------------------------------------------//


//--------------------Functions--------------------//

// Populate table Fornecedores
function populateTable(data){
    var table = document.getElementById('table-providers')
    for (var i = 0; i < data.length; i++) { 
      var row = ` <tr><td>${data[i].nomeFantasia}</td>
                      <td>${data[i].cnpj}</td>
                      <td>${data[i].telefone}</td>
                      <td>${data[i].email}</td>
                      <td><button type="button" class="btn btn-primary">+</button>
                      </td>
                  </tr>`
                    
                    
                
      table.innerHTML+= row
    }
  }

//Populate table Lista Negra
function populateTableBL(data){
  var table = document.getElementById('table-blacklist')
    
  for (var i = 0; i < data.length; i++) {
    //Validate if Fornecedor status listaNegra equals true  
    if (data[i].listaNegra == true) {
      var row = `<tr>
                    <td>${data[i].nomeFantasia}</td>
                    <td>${data[i].cnpj}</td>
                    <td>${data[i].telefone}</td>
                    <td>${data[i].email}</td>
                    <td><button type="button" class="btn btn-primary">+</button>
                 </tr>`

      table.innerHTML += row
    }
  }
}

//--------------------Functions--------------------//