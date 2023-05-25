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
        this.fuerza=parseInt(fuerza);
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

//creacion de instancias de batalla
let obj1=new Jedi("Jedi","100")
let obj2=new Sith("Sith","200")

const a1=document.getElementById("a1")
const a2=document.getElementById("a2")
const b1=document.getElementById("b1")
const b2=document.getElementById("b2")

const espacioBatalla=document.getElementById("espacioBatalla")

b1.addEventListener("click",batallar)
a1.addEventListener("click",batallar)
function batallar(){
    espacioBatalla.textContent=batalla(obj1,obj2)
}

b2.addEventListener("click",usarB)
a2.addEventListener("click",usarA)

function usarA(){
    return espacioBatalla.textContent=obj1.usarFuerza()
}
function usarB(){
    return espacioBatalla.textContent=obj2.usarFuerza()
}

function batalla(obj1,obj2){//hacer aqui un formulario donde se escriba a los dos y luego un boton de enfrentar para que se ataquen
    if(obj2.fuerza>obj1.fuerza){//falta lo de usar fuerza
        return `Gano ${obj2.nombre}`
    }else if(obj2.fuerza===obj1.fuerza){
        return `La batalla genero un empate`
    }else{
        return `Gano ${obj1.nombre}`
    }
}

//instancias para yoda y darthVader
darthVader=new Sith('Darth Vader','500');
yoda=new MaestroJedi('Yoda','600');

const espacioBatallaFinal=document.getElementById("espacioBatallaFinal")

document.getElementById("aa1").addEventListener("click",guerra)
document.getElementById("bb1").addEventListener("click",guerra)
function guerra(){
    espacioBatallaFinal.textContent=batalla(yoda,darthVader)
}

bb2.addEventListener("click",usarBB)
aa2.addEventListener("click",usarAA)

function usarAA(){
    return espacioBatallaFinal.textContent=yoda.usarFuerza()
}
function usarBB(){
    return espacioBatallaFinal.textContent=darthVader.usarFuerza()
}