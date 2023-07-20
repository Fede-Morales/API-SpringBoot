    const urlParams = new URLSearchParams(window.location.search);
    const usuario = Object.fromEntries(urlParams.entries());

    // document.getElementById("name").value = usuario.nombre;
    // document.getElementById("surname").value = usuario.apellido;
    // document.getElementById("email").value = usuario.email;
    // document.getElementById("password").value = usuario.password;
    //Lo mismo con los otros campos.

    console.log("el usuario recuperado es: ", usuario)

    async function editarUsuario() {
        let datos = {};
        datos.nombre = document.getElementById("name").value;
        datos.apellido = document.getElementById("surname").value;
        datos.email = document.getElementById("email").value;
        datos.password = document.getElementById("password").value;


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

    alert('Usuario editado');
    const usuarios = await request.json();

  }