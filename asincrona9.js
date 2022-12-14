//
/*
Crear una clase Empleado con los atributos: código, nombre, apellido, correo y cargo; y las operaciones: sueldoBruto (), descuento () y sueldoNeto (). Para calcular el sueldo bruto, considere los siguientes criterios:

Cargo	        Sueldo (S/)
Jefe	        5000
Analista	    4000
Programador	    3000
Soporte	        2000
Asistente	    1500

Para calcular el descuento, es el 12.5% del sueldo bruto. Finalmente calcule el sueldo neto.


*/

const jefe = 5000;
const analista = 4000;
const programador = 3000;
const soporte = 2000;
const asistente = 1500;


class empleado{
            codigo ;
            nombre ;
            apellido ;
            correo ;
            cargo ;
        sueldoBruto(){
            if(this.cargo=="jefe"){
                return jefe;
            }else if(this.cargo=="analista"){
                return analista;
            }else if(this.cargo=="programador"){
                return programador;
            }else if(this.cargo=="soporte"){
                return soporte;
            }else if(this.cargo == "asistente"){
                return asistente;
            }
        }
        descuento(){
            let sueldobruto=this.sueldoBruto();
            let descuento =(sueldobruto*0.125);
            return descuento;
        }
        sueldoNeto(){
            let descuento = this.descuento();
            let sueldoBruto = this.sueldoBruto();
            let total = sueldoBruto-descuento;
            return `Su sueldo neto es de : S/. ${total}`;
        }
}
let trabajador = new empleado();


trabajador.codigo = prompt("Ingrese su código");
trabajador.nombre= prompt("Ingrese su nombre");
trabajador.apellido = prompt("Ingrese su apellido");
trabajador.correo = prompt("Ingrese su correo");
trabajador.cargo = prompt("Ingrese su cargo");

alert(trabajador.sueldoNeto());