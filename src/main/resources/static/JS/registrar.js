
async function registrarUsuarios() {

  let datos = {};
  datos.nombre = document.getElementById("name").value;
  datos.apellido = document.getElementById("surname").value;
  datos.email = document.getElementById("email").value;
  datos.password = document.getElementById("password").value;

  if (datos.nombre == "" || datos.email == "" || datos.password == "") {
    return;
  }

  const request = await fetch('api/usuarios', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  })
  .catch(error => {
    console.error("Ocurrio un error llamando al servicio de registrar")
  })

  alert('Usuario registrado');

}
