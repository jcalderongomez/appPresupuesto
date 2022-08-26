import { Egreso } from "./egreso.model";

export class EgresoServicio{
    egresos: Egreso[]= [
        new Egreso("Renta Depto",60000),
        new Egreso("Ropa",200000),
        new Egreso("Alimentos",14000)
    ]

    eliminar(egreso: Egreso){
        const indice: number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1);
    }
}