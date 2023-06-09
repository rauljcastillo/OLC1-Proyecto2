import { Tipo } from "../abstracts/Retorno";
import { Ambiente } from "../Simbolos/Ambiente";
import { Consola } from "../abstracts/Consola";
import { Expresion } from "../abstracts/Expresion";
import { Instruccion } from "../abstracts/Instruccion";

export class AsignarA extends Instruccion{
    constructor(public id:string,public position: Expresion, public nuevoValor: Expresion,linea:number,columna:number){
        super(linea,columna);
    }

    public ejecutar(entorno: Ambiente, consola: Consola): void {
        let pos=this.position.ejecutar(entorno,null);   //Retorna el valor de la posición
        let val=this.nuevoValor.ejecutar(entorno,null); //Retorna el nuevo valor a agregar
        let arrBase=entorno.getVariable(this.id);       // Busca en la tabla de simbolos el nombre del array
        if(arrBase==null){
            throw new Error("No existe la variable xd");
        }
        if(arrBase.type===val.type && pos.type==Tipo.INT){
            arrBase.valor[pos.valor]=val.valor;
        }else if(arrBase.type!=val.type){
            throw new Error("No se puede asignar tipos")
        }else{
            throw new Error("Error de indice");
        }
        
    }
}