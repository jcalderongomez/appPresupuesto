import { Ingreso } from "./ingreso.model";

export class IngresoServicio{
    ingresos: Ingreso[]= [
        new Ingreso("Salario",4000),
        new Ingreso("Venta choche",4500),
        new Ingreso("Venta casa",14000),
    ]


    eliminar(ingreso: Ingreso){
        const indice: number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1);
    }
}