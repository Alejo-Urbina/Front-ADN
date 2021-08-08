
export class Cliente {
    id : any;
    nombre: string;
    cedula: string;
    genero: string;
    fechaNacimiento: Date;

    constructor(nombre: string, cedula: string, genero: string, fechaNacimiento: Date) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.genero = genero;
        this.fechaNacimiento = new Date(fechaNacimiento.getFullYear(),fechaNacimiento.getMonth(),fechaNacimiento.getDay());
    }
}