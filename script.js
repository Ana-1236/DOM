function iniciarSesion() {
    /* console.log('Inicio de sesion')
    let label = document.getElementById('label')
    console.log(label) */
    let usuario = document.getElementById('usuario').value 
    let contraseña = document.getElementById('contraseña').value
if (usuario == 'Ana' && contraseña == '1234') {
    console.log('inicio de sesión')
}
else {
    console.log('Error de credenciales')
}
}

