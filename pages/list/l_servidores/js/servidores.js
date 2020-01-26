
//Variáveis
var servidoresArray = []

//AJAX - configuração buscando a url da api e salvando os dados no objeto
$.ajax({
    method:'GET',
    url :'https://damp-tundra-82992.herokuapp.com/api/servidores',
    success:function (response){
      
      try {
        //Save data on Array
        servidoresArray = response.data
        populateTable(servidoresArray)
        console.log(servidoresArray)


      } catch (e) {
        console.log('Erro ao buscar servidores!')
      }
      
    }
})

//Functions

// populate the table
function populateTable(data){
    var table = document.getElementById('employee-table')
    for (var i = 0; i < data.length; i++) { 
      var row = ` <tr><td>${data[i].nome}</td>
                      <td>${data[i].cargo}</td>
                      <td>${data[i].setor}</td>
                      <td><button type="button" class="btn btn-primary">+</button>
                      </td>
                  </tr>`
                    
                    
                
      table.innerHTML+= row
    }
  }