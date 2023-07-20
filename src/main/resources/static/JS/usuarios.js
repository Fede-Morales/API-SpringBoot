cargarUsuarios();


async function cargarUsuarios(){

  const request = await fetch('api/usuarios', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },

  })
  .catch(error => {
    console.error("Ocurrio un error llamando al servicio de obtener usuarios")
  })
  const usuarios = await request.json();

  let listadoHTML = '';

  for(let usuario of usuarios){
    
    let botonEliminar = '<a href="#" onclick="deleteUsuario(' + usuario.id + ')" class="butonEliminar"> Eliminar </a>';
    let botonEditar = '<a href="editar.html" onclick="deleteUsser(' + usuario.id + ')" class="butonEditar"> Editar </a>';

     let usuarioHTML = '<tr><td>'+ usuario.nombre +'</td><td>'
                        + usuario.apellido+'</td><td>'+usuario.email+'</td><td>'
                        + botonEliminar + '</td><td>'+ botonEditar +'</td></tr>';
     listadoHTML += usuarioHTML;
  }

  document.querySelector('#miTabla tbody').outerHTML = listadoHTML;
  
}


async function deleteUsuario(id){

  if(!confirm('¿Desea eliminar este usuario?')){
      return;
  }
  const request = await fetch('api/usuarios/'+ id, {
    method: 'DELETE',
    headers:
     {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
     }
  })
  .catch(error => {
    console.error("Ocurrio un error llamando al servicio de eliminar usua en el archivo login.js")
  })
  alert('Usuario eliminado')
  location.reload();
}

async function deleteUsser(id){

 if(!confirm('¿Desea modificar este usuario?')){
      return;
  }

  const request = await fetch('api/usuarios/'+ id, {
    method: 'DELETE',
    headers:
     {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
     }
  })
  .catch(error => {
    console.error("Ocurrio un error llamando al servicio de eliminar usua en el archivo login.js")
  })
}

function cerrarSesion(){
  if(confirm('¿Desea cerrar sesión?')){
    window.location.href = 'login.html'
  }
  return;
}
