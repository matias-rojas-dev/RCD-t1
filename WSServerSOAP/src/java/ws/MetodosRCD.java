/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ws;

import java.util.Arrays;
import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;

/**
 *
 * @author maigr
 */
@WebService(serviceName = "MetodosRCD")
public class MetodosRCD {

  /*Formato rut XXXXXXXX   Formato dv X*/
    @WebMethod(operationName = "ValidacionRut")
    public boolean ValidacionRut (@WebParam(name="rut") String rut, @WebParam(name="dv") String dv){
        int array [] = new int [8]; //Almacena rut de izq a der
        int RUT = 0;
        RUT = Integer.parseInt(rut); //Guarda el String en Int 20.467.652
        
        /*Guarda el rut de izq a derecha*/
        for (int i = 0; i < rut.length(); i++){ //Recorre el String = 20467652
            array[i] = RUT%10; //Retira el último número 20.467.65  -->  2 y lo guarda [2| | | | | | |...]
            RUT = RUT/10; //Actualiza el RUT a 2.046.765
        }
        /*              Resultado            */
        /* 20.467.652  --> [2|5|6|7|6|4|0|2] */
        
        
        /*Suma de productos*/
        int suma = 0;
        int serie = 2; //Se multiplica por "serie" = 2, 3, 4, 5, 6, 7 ... Repeat
        for (int i = 0; i < array.length; i++){
            suma = suma + (array[i] * serie); // 2*2 -> 5*3 -> 6*4 -> 7*5 -> 6*6 -> 4*7 -> 0*2
            serie ++; // 3 4 5 6 7 8
            if (serie > 7){ //3>7 4>7 5>7 6>7 7>7 8>7
                serie = 2;
            }
        }
        
        /*Calculo del DV*/
        int resultado = 11 - (suma - ((suma/11) * 11));
        /*Transformar a String para comparacion*/
        String comparar = String.valueOf(resultado);
        if (comparar.equals("11")){
            comparar = "0";
        }
        else if (comparar.equals("10")){
            comparar = "k";
        }
        
        boolean respuesta = false;
        if (dv.equals(comparar)){
            respuesta = true;
        }
        
        return respuesta;
    }
    
/*Formato recibido: Nombre1 Nombre2 ... NombreN Apellido1 Apellido2  [Utilizar método Split]*/
    @WebMethod(operationName = "ValidacionNombre")
    public String ValidacionNombre (@WebParam(name="nombreCompleto") String nombreCompleto){
        //Guarda el valor por campos separador por un " "
        String [] nombresApellidos = nombreCompleto.split(" ");
        int inicio = (nombresApellidos.length) - 2, fin = nombresApellidos.length;
        String[] apellidos = Arrays.copyOfRange(nombresApellidos, inicio, fin);
        String[] nombres = Arrays.copyOfRange(nombresApellidos, 0, fin-2);
        
        return "Nombres: " + Arrays.toString(nombres) + "Apellidos: " + Arrays.toString(apellidos);
    }
}
