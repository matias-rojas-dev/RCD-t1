/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.calculator;

import javax.jws.WebService;
import javax.jws.WebMethod;

/**
 *
 * @author maigr
 */

@WebService
public class Calculator {
    @WebMethod
       public int add(int a, int b){
           return a+b;
       };
      @WebMethod
       public int substract(int a, int b){
           return a-b;
       }
}
