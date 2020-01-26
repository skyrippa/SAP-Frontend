
//Variáveis
var sectorArray = []

//AJAX - configuração buscando a url da api e salvando os dados no objeto
$.ajax({
    method:'GET',
    url :'https://damp-tundra-82992.herokuapp.com/api/setores',
    success:function (response){
      
      try {
        //Save data on Array
        sectorArray = response.data
        populateTable(sectorArray)
        console.log(sectorArray)


      } catch (e) {
        console.log('Erro ao buscar Setor!')
        alert('Erro ao buscar setor Setor !')
      }
      
    }
})

//Functions

// populate the table
function populateTable(data){
    var table = document.getElementById('table-sector')
    for (var i = 0; i < data.length; i++) { 
      var row = ` <tr><td>${data[i].nome}</td>
                      <td>${data[i].sigla}</td>
                      <td>${data[i].ramal}</td>
                      <td>${data[i].email}</td>
                      <td><button type="button" class="btn btn-primary">+</button>
                      </td>
                  </tr>`
                    
                    
                
      table.innerHTML+= row
    }
  }