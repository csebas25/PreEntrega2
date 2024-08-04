class Usuario {
    constructor(nombre, apellido, gastoTotal, promedioGastos, fechaIngreso) {
        this.nombre = nombre
        this.apellido = apellido
        this.gastoTotal = gastoTotal
        this.promedioGastos = promedioGastos
        this.fechaIngreso = fechaIngreso
    }
}

class BaseUsuarios {
    constructor() {
        this.usuarios = [] // Inicializa la lista de usuarios
    }

    agregarUsuario(usuario) {
        this.usuarios.push(usuario)
    }

    listarUsuarios() {
        if (this.usuarios.length === 0) {
            prompt('No hay usuarios')
        }
        return this.usuarios.map((usuario, index) => 
            `Usuario ${index + 1}: \nNombre: ${usuario.nombre}, \nApellido: ${usuario.apellido}, \nGasto Total: ${usuario.gastoTotal}, \nPromedio de Gastos: ${usuario.promedioGastos}, \nFecha de Ingreso: ${usuario.fechaIngreso}`
        )
    }
    eliminarUsuario(indice) {
        this.usuarios.splice(indice,1)
    }
}

const baseUsuarios = new BaseUsuarios()


//Preguntar al usuario que desea hacer
function pedirDato () {
    ingresarDato = prompt('Que deseas hacer? \nIngresar usuario? Ingresar 1 \nVer los usuarios? Ingresar 2 \nEliminar usuario? Ingresar 3 \nSalir? Ingresar 4')
}

//Pedir datos al usuario
pedirDato()
do {
    let gastos = []
    if (ingresarDato === '1') {
        nom = prompt('Cual es el nombre del usuario?')
        ape = prompt('Cual es el apellido del usuario')
        let x = parseInt(prompt('Cuantos datos deseas ingresar?'))
        if (isNaN(x) || x <= 0) {
            alert('Ingresa un numero valido')
        } else {
            let i = 0
            do {
                let dato = parseFloat(prompt((i+1) + ' ' + 'dato'))
                    if (isNaN(dato) || dato <= 0) {
                        alert('Ingresa un numero valido')
                    } else {
                        gastos.push(dato)
                    }
                i++
            } while (i<x)
        }
        //Calculo suma total de gastos
        let suma = 0
        gastos.forEach(valor => {
            suma += valor
        })

        //Calculo promedio de los gastos
        let promedio = 0
        promedio = suma / gastos.length

        //Fecha de ingreso
        let hoy = new Date(prompt('Ingrese la fecha de ingreso del usuario (Año/mes/dia)'))
        let fecha = hoy.toDateString()

        //Agregar usuario
        const nuevoUsuario = new Usuario(nom,ape,suma,promedio,fecha)
        baseUsuarios.agregarUsuario(nuevoUsuario)
        

        alert('Los gastos ingresados son: ' + ' ' + gastos.join(' / '))
        pedirDato()   
    } else if (ingresarDato === '2') { //listar usuarios
        if (baseUsuarios.usuarios.length === 0) {
            alert('No hay usuarios')
            pedirDato()
        } else {
            const usuariosListados = baseUsuarios.listarUsuarios();
            alert(usuariosListados)
            pedirDato()
        }
    } else if (ingresarDato === '3') { //eliminar usuarios
        if (baseUsuarios.usuarios.length === 0) {
            alert('No hay usuarios para eliminar')
            pedirDato()
        } else {
            const usuariosListados = baseUsuarios.listarUsuarios();
            alert(usuariosListados)
            let ini = parseInt(prompt('Que usuario desea eliminar? Ingrese el número'))
            baseUsuarios.eliminarUsuario(ini - 1)
            alert('Usuario eliminado')
            pedirDato()
        }
    } else {
        alert('Has salido')
        break
    }
} while (ingresarDato !== '4')

