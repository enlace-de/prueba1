class Propietario{
    constructor(nombre,direccion, telefono){
        this._nombre= nombre;
        this._direccion= direccion;
        this._telefono= telefono;
    }
    get nombre(){
        return  this._nombre;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    get direccion(){
        return  this._direccion;
    }
    set direccion(nuevaDireccion){
        this._direccion= nuevaDireccion;
    }
    get telefono(){
        return this._telefono;
    }
    set telefono(nuevoTelefono){
        this._telefono= nuevoTelefono;
    }
    datosPropietario(){
        return `El nombre del dueño es ${this.nombre}. El domicilio es ${this.direccion} y el número telefónico de contacto: ${this.telefono}`
    }
}

class Animal extends Propietario{
    constructor(nombre,direccion, telefono,tipo){
        super (nombre,direccion, telefono);
        this._tipo= tipo;
    }
    get tipo(){
        return this._tipo;
    }
    set tipo(nuevoTipo){
        this._tipo= nuevoTipo;
    }
    datosAnimal(){
        return `El nombre del animal es ${this.nombre}. Siendo este un ${this.tipo} y la enfermedad es ${this.enfermedad}`
    }
}

class Perro extends Animal{
    constructor(nombre,direccion, telefono,tipo, enfermedad){
        super (nombre,direccion, telefono,tipo);
        this._enfermedad= enfermedad;
    }
    get enfermedad(){
        return this._enfermedad;
    }
    set enfernedad(nuevaEnfermedad){
        this._enfermedad= nuevaEnfermedad;
    }
}

class Gato extends Animal{
    constructor(nombre,direccion, telefono,tipo, enfermedad){
        super (nombre,direccion, telefono,tipo);
        this._enfermedad= enfermedad;
    }
    get enfermedad(){
        return this._enfermedad;
    }
    set enfernedad(nuevaEnfermedad){
        this._enfermedad= nuevaEnfermedad;
    }
}

class Conejo extends Animal{
    constructor(nombre,direccion, telefono,tipo, enfermedad){
        super (nombre,direccion, telefono,tipo);
        this._enfermedad= enfermedad;
    }
    get enfermedad(){
        return this._enfermedad;
    }
    set enfernedad(nuevaEnfermedad){
        this._enfermedad= nuevaEnfermedad;
    }
}


/*let agregando = (event) => {
    event.preventDefault();
    let conejo = new Mamifero(nombre.value,comida.value,distancia.value);
    resultado.innerHTML += `<p>${conejo.infoMamifero()}</p>`;
}

formulario.addEventListener('submit',agregando);*/

//propietario

let nombrePropietario= document.getElementById("propietario");
let direccionPropietario= document.getElementById("direccion");
let telefonoPropietario= document.getElementById("telefono");

//mascota

let nombreMascota= document.getElementById("nombreMascota");
let tipoMascota= document.getElementById("tipo"); //if y else
console.log(tipoMascota.value);
let enfermedadMascota= document.getElementById("enfermedad");

let agregando= (event)=> {
    event.preventDefault();
    let propietario1= new Propietario (nombrePropietario.value, direccionPropietario.value, telefonoPropietario.value);
    resultado.innerHTML += `<li>${propietario1.datosPropietario()}</li>`;
    if(tipoMascota.value == "gato"){
        console.log(tipoMascota.value);
        let mascota1= new Gato (nombreMascota.value, direccionPropietario.value, telefonoPropietario.value,tipoMascota.value,enfermedadMascota.value );
        resultado.innerHTML += `<li>${mascota1.datosAnimal()}</li>`;
    }else if (tipoMascota.value == "perro"){
        let mascota2= new Perro (nombreMascota.value, direccionPropietario.value, telefonoPropietario.value,tipoMascota.value,enfermedadMascota.value );
            resultado.innerHTML += `<li>${mascota2.datosAnimal()}</li>`;
         } else if (tipoMascota.value == "conejo"){
            let mascota3= new Conejo (nombreMascota.value, direccionPropietario.value, telefonoPropietario.value,tipoMascota.value,enfermedadMascota.value );
            resultado.innerHTML += `<li>${mascota3.datosAnimal()}</li>`;
            }else{
                alert("elija un tipo de animal");
            }
}
    
    


//Animal


//llamar a la función agregando
formulario.addEventListener('submit',agregando);

