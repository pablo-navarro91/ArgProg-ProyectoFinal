
const formularioUsuario = document.querySelector("#formularioRegistrarme")
const contenedorHTML = document.querySelector(".contenedorUsuario")
const usuarios = []

const renderizarUsuarios = () =>{
    for(const usuario of usuarios){
        contenedorHTML.innetHTML += `
        <div>
            <h2>Nombre: ${usuario.nombre}</h2>
            <h3>Apellido: ${usuario.apellido}</h3>
            <p>FechaNac: ${usuario.fechanac}</p>
            <p>Email: ${usuario.email}</p>
            <p>Contrasena: ${usuario.constrasena}</p>
        </div>
        `
    }
}

formularioUsuario.addEventListener("submit", (event) =>{
    event.preventDefault()
    console.log(formularioUsuario.nombre.value)
    usuarios.push({
        nombre: formularioUsuario.nombre.value,
        apellido: formularioUsuario.apellido.value,
        fechaDeNacimiento: formularioUsuario.fechanac.value,
        email: formularioUsuario.email.value,
        constrasena: formularioUsuario.constrasena.value
    })
    renderizarUsuarios()
})