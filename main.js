let nombre
let fuerza
let personaje1
document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    nombre = document.getElementById('nombre').value;
    fuerza = document.getElementById('fuerza').value;
    personaje1=new Personaje(nombre,fuerza);
    document.getElementById("features").textContent="Resultado: "+personaje1.presentarse()
    console.log(personaje1.presentarse())
});
class Personaje{
    constructor(nombre,fuerza){
        this.nombre=nombre;
        this.fuerza=fuerza;
    }
    presentarse(){
        return `El nombre del personajes es ${this.nombre} y su nivel de fuerza es ${this.fuerza}` 
    }
}

class Jedi extends Personaje{
    constructor(nombre,fuerza){
        super(nombre,fuerza)
    }
    usarFuerza(){
        return `El Jedi esta usando la fuerza para proteger la galaxia` 
    }
    entrenar(){
        this.fuerza=parseFloat(this.fuerza)+10
        return this.fuerza
    }
}
let nombreJedi
let fuerzaJedi
let jedi1
document.getElementById('miFormulario1').addEventListener('submit', function(event) {
    event.preventDefault(); 
    nombreJedi = document.getElementById('nombreJedi').value;
    fuerzaJedi = document.getElementById('fuerzaJedi').value;
    jedi1=new Jedi(nombreJedi,fuerzaJedi);
    document.getElementById("Jedi").innerHTML=`
    <h1>Resultado usarFuerza: ${jedi1.usarFuerza()}</h1>
    <h1>Resultado entrenar: ${jedi1.entrenar()}</h1>
    `
});

class Sith extends Personaje{
    constructor(nombre,fuerza){
        super(nombre,fuerza)
    }
    usarFuerza(){
        return `El Sith esta usando la fuerza para conquistar la galaxia` 
    }
    corromper(){
        this.fuerza=parseFloat(this.fuerza)-5
        return this.fuerza
    }
}
let nombreSith
let fuerzaSith
let sith1
document.getElementById('miFormulario2').addEventListener('submit', function(event) {
    event.preventDefault(); 
    nombreSith = document.getElementById('nombreSith').value;
    fuerzaSith = document.getElementById('fuerzaSith').value;
    sith1=new Sith(nombreSith,fuerzaSith);
    document.getElementById("Sith").innerHTML=`
    <h1>Resultado usarFuerza: ${sith1.usarFuerza()}</h1>
    <h1>Resultado entrenar: ${sith1.corromper()}</h1>
    `
});

class MaestroJedi extends Jedi{
    constructor(nombre,fuerza){
        super(nombre,fuerza)
    }
    ensenar(){
        this.fuerza=parseFloat(this.fuerza)+20
        return this.fuerza
    }
}
let yoda
let nombreYoda
let fuerzaYoda
document.getElementById('miFormulario3').addEventListener('submit', function(event) {
    event.preventDefault(); 
    nombreYoda = document.getElementById('nombreYoda').value;
    fuerzaYoda = document.getElementById('fuerzaYoda').value;
    yoda=new MaestroJedi(nombreYoda,fuerzaYoda);
    document.getElementById("Yoda").innerHTML=`
    <h1>Resultado presentarse: ${yoda.presentarse()}</h1>
    <h1>Resultado usarFuerza: ${yoda.usarFuerza()}</h1>
    <h1>Resultado entrenar: ${yoda.ensenar()}</h1>
    `
});


let darthVader
let nombreDarthVader
let fuerzaDarthVader
document.getElementById('miFormulario4').addEventListener('submit', function(event) {
    event.preventDefault(); 
    nombreDarthVader = document.getElementById('nombreDarthVader').value;
    fuerzaDarthVader = document.getElementById('fuerzaDarthVader').value;
    darthVader=new Sith(nombreDarthVader,fuerzaDarthVader);
    document.getElementById("DarthVader").innerHTML=`
    <h1>Resultado presentarse: ${darthVader.presentarse()}</h1>
    <h1>Resultado usarFuerza: ${darthVader.usarFuerza()}</h1>
    <h1>Resultado corromper: ${darthVader.corromper()}</h1>
    `
});

let obj1=new Personaje("Jose","1200")
let obj2=new Personaje("Mario","1500")
function batalla(obj1,obj2){//hacer aqui un formulario donde se escriba a los dos y luego un boton de enfrentar para que se ataquen
    if(obj2.fuerza>obj1.fuerza){//falta lo de usar fuerza
        return `Gano ${obj2.nombre}`
    }else if(obj2.fuerz===obj1.fuerza){
        return `La batalla genero un empate`
    }else{
        return `Gano ${obj1.nombre}`
    }
}





//////////////////////////////////////////////////////////////
/* let nombre
let edad
let sexo
let persona1
document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    nombre = document.getElementById('nombre').value;
    edad = document.getElementById('edad').value;
    sexo = document.getElementById('sexo').value;
    persona1=new Persona(nombre,edad,sexo);
    document.getElementById("saludo").textContent="Resultado: "+persona1.saludar()
    console.log(persona1.saludar())
});

class Persona{
    nombre;
    edad;
    sexo;
    constructor(nombre,edad,sexo){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
    }
    saludar(){
        return `Hola ${this.nombre} buen dia` 
    }
    static esMayorDeEdad(){
        if(this.edad>=18){
            return true;
        }else{
            return false;
        }
    }
}

class Estudiante extends Persona{
    constructor(nombre,edad,sexo,carrera){
        super(nombre,edad,sexo)
        this.carrera=carrera;
    }
    estudiar(){
        return `La persona ${this.nombre} estudia ${this.carrera}` 
    }
}

document.getElementById('miFormulario1').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let carrera = document.getElementById('carrera').value;

    let estudiante1=new Estudiante(nombre,edad,sexo,carrera);
    document.getElementById("imprimirSaludo").textContent=estudiante1.saludar()
    document.getElementById("imprimirCarrera").textContent=estudiante1.estudiar()
});

document.getElementById('miFormulario2').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById("imprimirResEdad").textContent=Persona.esMayorDeEdad(persona1.edad)
});
///////////
class Animal{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    hacerSonido(){
        return `Sonido del animal ${this.nombre} es` 
    }
}
let animal1
let nombreAnimal
let edadAnimal
document.getElementById('miFormulario3').addEventListener('submit', function(event) {
    event.preventDefault(); 
    nombreAnimal = document.getElementById('nombreAnimal').value;
    edadAnimal = document.getElementById('nombreAnimal').value;
    animal1=new Animal(nombreAnimal,nombreAnimal);
    document.getElementById("imprimirSonidoAnimal").textContent=animal1.hacerSonido()
});

class Perro extends Animal{
    constructor(nombre,edad,raza){
        super(nombre,edad)
        this.raza=raza;
    }
    moverCola(){
        return `El perro ${this.nombre} con edad de ${this.edad} y raza ${this.raza} está moviendo la cola.` 
    }
}
let perro1
let nombrePerro
let edadPerro
let raza
document.getElementById('miFormulario4').addEventListener('submit', function(event) {
    event.preventDefault(); 
    nombrePerro = document.getElementById('nombrePerro').value;
    edadPerro = document.getElementById('edadPerro').value;
    raza = document.getElementById('raza').value;
    perro1=new Perro(nombrePerro,edadPerro,raza);
    document.getElementById("imprimirPerro").textContent=perro1.moverCola()
});
////////////
class Figura{
    constructor(color,area){
        this.color=color;
        this.area=area;
    }
    calcularArea(){
        return `El area de la figura es ${this.area}`
    }
}
let figura1
let area
let color
document.getElementById('miFormulario5').addEventListener('submit', function(event) {
    event.preventDefault(); 
    area = document.getElementById('area').value;
    color = document.getElementById('color').value;

    figura1=new Figura(color,area)
    document.getElementById("imprimirArea").textContent=figura1.calcularArea()
});

class Cicurlo extends Figura{
    constructor(color,area,radio){
        super(color,area)
        this.radio=radio;
    }
    calcularArea(){
        const pi = Math.PI;
        return `El area del circulo es ${pi*this.radio*this.radio}`
    }
}
let circulo1
let radio
document.getElementById('miFormulario6').addEventListener('submit', function(event) {
    event.preventDefault(); 
    radio = document.getElementById('radio').value;

    circulo1=new Cicurlo(color,area,radio)
    document.getElementById("imprimirAreaCirculo").textContent=circulo1.calcularArea()
});

class Rectangulo extends Figura{
    constructor(color,area,largo,ancho){
        super(color,area)
        this.largo=largo;
        this.ancho=ancho;
    }
    calcularArea(){
        return `El area del rectangulo es ${this.largo*this.ancho}`
    }
}
let rectangulo1
let largo
let ancho
document.getElementById('miFormulario7').addEventListener('submit', function(event) {
    event.preventDefault(); 
    largo = document.getElementById('largo').value;
    ancho = document.getElementById('ancho').value;

    rectangulo1=new Rectangulo(color,area,largo,ancho)
    document.getElementById("imprimirAreaRectangulo").textContent=rectangulo1.calcularArea()
});

///////////////
class Vehiculo{
    constructor(marca,modelo,velocidad){
        this.marca=marca;
        this.modelo=modelo;
        this.velocidad=velocidad;
    }
    acelerar(){
        let aumento=parseInt(this.velocidad)+10
        return `La velocidad actual es ${aumento}`
    }
    static convertirKmHEnMph(velocidad){
        let conv=(parseInt(velocidad))/1.60934
        return `Velocidad en mi/h es ${conv}`
    }
}
let vehiculo1
let marca
let modelo
let velocidad
document.getElementById('miFormulario8').addEventListener('submit', function(event) {
    event.preventDefault(); 
    marca = document.getElementById('marca').value;
    modelo = document.getElementById('modelo').value;
    velocidad = document.getElementById('velocidad').value;

    vehiculo1=new Vehiculo(marca,modelo,velocidad)
    document.getElementById("velocidadActual").textContent=vehiculo1.acelerar()
});

class Coche extends Vehiculo{
    constructor(marca,modelo,velocidad,combustible){
        super(marca,modelo,velocidad)
        this.combustible=combustible;
    }
    acelerar(){
        let aumento=parseInt(this.velocidad)+20
        return `La velocidad actual es ${aumento}`
    }
}
let coche1
let combustible
document.getElementById('miFormulario9').addEventListener('submit', function(event) {
    event.preventDefault(); 
    combustible = document.getElementById('combustible').value;

    coche1=new Coche(marca,modelo,velocidad,combustible)
    document.getElementById("imprimirCoche").textContent=coche1.acelerar()
});

document.getElementById('miFormulario10').addEventListener('submit', function(event) {
    event.preventDefault(); 
    vehiculo1=new Vehiculo(marca,modelo,velocidad)
    document.getElementById("imprimirConversion").textContent=Vehiculo.convertirKmHEnMph(vehiculo1.velocidad)
});


/////////////////
class Empleado{
    constructor(nombre,edad,sueldo){
        this.nombre=nombre;
        this.edad=edad;
        this.sueldo=sueldo;
        this.id = Empleado.generarIdEmpleado();
    }
    calcularSalarioAnual(){
        let sueldazo=parseFloat(this.sueldo)
        return `Salario anual: ${12*sueldazo}`
    }
    static generarIdEmpleado(){
        if (!Empleado.contador) {
            Empleado.contador = 1;
        }
        const id = Empleado.contador;
        Empleado.contador++;
        return id;
    }
}
let empleado1
let nombreEmpleado
let edadEmpleado
let sueldoEmpleado
document.getElementById('miFormulario11').addEventListener('submit', function(event) {
    event.preventDefault(); 
    nombreEmpleado = document.getElementById('nombreEmpleado').value;
    edadEmpleado = document.getElementById('edadEmpleado').value;
    sueldoEmpleado = document.getElementById('sueldoEmpleado').value;

    empleado1=new Empleado(nombreEmpleado,edadEmpleado,sueldoEmpleado)
    document.getElementById("imprimirSuedo").textContent=empleado1.calcularSalarioAnual()
});

class Gerente extends Empleado{
    constructor(nombre,edad,sueldo,departamento){
        super(nombre,edad,sueldo)
        this.departamento=departamento;
    }
    calcularSalarioAnual(){
        let sueld=parseFloat(this.sueldo)
        return `Salario gerente: ${12*(sueld+0.1*sueld)}`
    }
}
let gerente1
let nombreGerente
let edadGerente
let sueldoGerente
let departamento
document.getElementById('miFormulario12').addEventListener('submit', function(event) {
    event.preventDefault(); 
    nombreGerente = document.getElementById('nombreGerente').value;
    edadGerente = document.getElementById('edadGerente').value;
    sueldoGerente = document.getElementById('sueldoGerente').value;
    departamento = document.getElementById('departamento').value;

    gerente1=new Gerente(nombreGerente,edadGerente,sueldoGerente,departamento)
    document.getElementById("imprimirSuedoGerente").textContent=gerente1.calcularSalarioAnual()
});

//Llamada a metodo estatico
document.getElementById('boton').addEventListener("click", function() {
    empleado1=new Empleado(nombreEmpleado,edadEmpleado,sueldoEmpleado) //id=1
    empleado2=new Empleado(nombreEmpleado,edadEmpleado,sueldoEmpleado) //id=2
    document.getElementById("llamar").innerHTML="<h1>"+ Empleado.generarIdEmpleado() +"</h1>"
}); */