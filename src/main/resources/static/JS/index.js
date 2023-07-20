async function iniciarSesion(){

    let datos = {};
    datos.email = document.getElementById("email").value;
    datos.password = document.getElementById("password").value;


  const request = await fetch('api/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  })
  .catch(error => {
    console.error("Ocurrio un error llamando al servicio de editar en el archivo login.js")
  })

  const respuesta  = await request.text();
  if(respuesta == "OK"){
    alert("Bienvenido " + datos.email);
    window.location.href = 'usuarios.html'
  }else{
    alert("Usuario o contraseña incorrectos");
  }

}