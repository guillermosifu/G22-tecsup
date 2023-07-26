Proceso calculadora
	//entrada
	Definir numero1 Como Entero;
	Definir numero2 Como Entero;
	Definir suma Como Entero;
	Definir resta como Entero;
	Definir cociente Como Real;
	
	
	//Proceso 
	Escribir 'ingresa numero 1';
	Leer numero1;
	Escribir 'ingresa numero 2';
	Leer numero2;
	
	si(numero2=0)Entonces
		Escribir 'no se puede dividir entre cero 0';
		cociente=0;
	SiNo
		cociente=numero1/numero2;
	FinSi
	
	suma = numero1 +numero2;
	resta= numero1 - numero2;
	
	
	//salida 
	Escribir 'el resultado de la suma es :' , suma;
	Escribir 'el resultado de la resta es :' , resta;
	
FinProceso
