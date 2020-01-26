
//Variáveis
var providersArray = []

//AJAX - configuração buscando a url da api e salvando os dados no objeto
$.ajax({
    method:'GET',
    url :'https://damp-tundra-82992.herokuapp.com/api/fornecedores/',
    success:function (response){
      
      try {
        //Save data on Array
        providersArray = response.data
        populateTable(providersArray)
        console.log(providersArray)

      } catch (e) {

        console.log('Não foi possivel listar os servidores :')
        alert('Erro ao buscar Fornecedores')

      }
      
    }
})

//Functions

// populate the table
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