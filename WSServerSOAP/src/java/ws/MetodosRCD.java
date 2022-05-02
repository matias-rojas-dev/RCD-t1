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
    public String [] ValidacionNombre (@WebParam(name="nombreCompleto") String name){
      String toValidate = name;
      String [] completeName = toValidate.split(" ");

      String validatedName []; 
      
      int sizeArray = completeName.length - 1; // we only want to use the positions of the elements in the array, for that we subs 1 from the length of the array

      validatedName = new String[completeName.length + 2];
      int lastsNamesPosition = sizeArray ;
      
      validatedName[0] = "Nombres";
      validatedName[lastsNamesPosition] = "Apellidos";
      
      int lnCompleteName = completeName.length - 1;
      int lnValidatedName = validatedName.length - 1;
      
      // Go through the array that already contains the values "Names" and "Surnames" in this way, 
      // those fields that are empty will be completed with the array that contains the full name.
      
      for(int cont = 0; lnValidatedName >= cont; lnValidatedName--){
          if(validatedName[lnValidatedName] == null || validatedName[lnValidatedName].isEmpty()){
              validatedName[lnValidatedName] = completeName[lnCompleteName];
              lnCompleteName--;
          }
      }
      
      lnValidatedName = validatedName.length - 2;
      
      for(int cont = lnValidatedName; validatedName.length - 1 >= cont; cont++ ) {
          if(cont < validatedName.length - 1){
              String auxValue = validatedName[cont];
              validatedName[cont] = "Apellido Paterno: " + auxValue;
          } 
          if(cont == validatedName.length - 1){
              String auxValue = validatedName[cont];
              validatedName[cont] = "Apellido Materno: " + auxValue;
          }
      }
 

      return validatedName;
      
    }
}
