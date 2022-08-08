/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

num1: number;
num2: number;
num3: number;
resultado: string;

  constructor() {}


verificar(){

if(this.num1 < (this.num2 + this.num3) && this.num2 < (this.num1 + this.num3) && this.num3 < (this.num1 + this.num2)){

if(this.num1 == this.num2 && this.num1 == this.num3 && this.num2 == this.num3){
  this.resultado = 'É um triângulo equilátero';
};

if(this.num1 == this.num2, this.num1 != this.num3, this.num2 != this.num3 ||
   this.num2 == this.num3, this.num2 != this.num1, this.num3 != this.num1){
   this.resultado = 'É um triângulo isósceles';
};

if(this.num3 == this.num1, this.num3 != this.num2, this.num1 != this.num2){
  this.resultado = 'É um triângulo isósceles';
};

if(this.num1 != this.num2 && this.num1 != this.num3 && this.num2 != this.num3){
  this.resultado = 'É um triângulo escaleno';
};

}
else{
  this.resultado = 'Não é um triângulo';
}

}

}
