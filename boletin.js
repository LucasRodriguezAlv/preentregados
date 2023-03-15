function InicioDeSesion (){
    const usuario = prompt ("¡Bienvenido Profe! Ingrese su corrreo electronico")
    const contrasenia = prompt ("Ingrese su contraseña")
    alert ("Bienvenido " + usuario)

}
InicioDeSesion ()
console.log (InicioDeSesion)

let seleccionMateria  = parseInt (
    prompt (
        "¿Que materia desea ver? \n 1. Biologia \n 2. Matematica \n 3. Lengua \n 4. Quimica"
    )
);

if (seleccionMateria === 1) {
    alert ("La materia escogida es Biologia")
} else if (seleccionMateria === 2) {
    alert ("La materia escogida es Matematica")
} else if (seleccionMateria === 3) {
    alert ("La materia escogida es Lengua")
} else if (seleccionMateria === 4) {
    alert ("La materia escogida es Quimica")
} else {
    alert ("No escogio ninguna materia" )

}

class Alumnos{
    constructor (nombre, apellido, dni, curso, notaprimercuatri, notasegundocuatri){
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni 
        this.curso = curso
        this.notaprimercuatri = notaprimercuatri
        this.notasegundocuatri = notasegundocuatri 
    }
    promedio (){
        const promedio = (this.notaprimercuatri + this.notasegundocuatri) / 2;
        return (promedio)
    }
}

function crearAlumno () {
    let alumno = []
    let agregarAlumnos = prompt ("¿Cuantos alumnos desea ingresar?")
    for (let index = 0; index < agregarAlumnos; index ++){
        let nombre = prompt ("Ingresa su nombre")
        let apellido = prompt ("Ingresa su apellido")
        let curso = prompt ("Ingresa su curso")
        let dni = prompt ("Ingrese su dni")
        let notaprimercuatri = parseInt(prompt ("Ingrese su nota del primer cuatrimestre"))
        let notasegundocuatri = parseInt(prompt ("Ingrese su nota del segundo cuatrimestre"))
        

        let AlumnoRegistrado = new Alumnos (nombre, apellido, curso, dni, notaprimercuatri, notasegundocuatri)
        
        
        
        const prom = AlumnoRegistrado.promedio()

        AlumnoRegistrado.promedio = prom

        alumno.push (AlumnoRegistrado)
    }
    
    console.log (alumno)
    return alumno
}

let alumnoArr = crearAlumno ()
console.log (alumnoArr)

let AlumnosAprobados = alumnoArr.filter(
    (alumno) => alumno.promedio >= 7
);

console.log (AlumnosAprobados)