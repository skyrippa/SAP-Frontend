
//Variáveis
var servidoresArray = []

//AJAX -  URL request and saving api-data
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
// --------------------------------------------------------//


//--------------------Functions--------------------//

// Populate table Servidores
function populateTable(data){
    var table = document.getElementById('employee-table')
    for (var i = 0; i < data.length; i++) { 
      var row = ` <tr><td>${data[i].nome}</td>
                      <td>${data[i].cargo}</td>
                      <td>${data[i].setor}</td>
                      <td><button type="button" class="btn btn-primary" " data-toggle="modal" data-target="#info">+</button></td>
                  </tr>`
                    
                    
                
      table.innerHTML+= row
    }
  }
  //--------------------Functions--------------------//