		var vector=['Nombres'];
		
		var fingresar=function(){
			x=document.getElementById('dato1').value;
			if(x==""){
				console.log("dato vacio");
			}
			else
			{
				var mensaje1=document.getElementById('mensaje1').value;
				var dato1=document.getElementById('dato1').value;
				vector.push(dato1);
				console.log(vector);
				document.getElementById('mensaje1').value="Elemento ingresado";
			}
			
			
		}
		
		var fborrar=function(){
			var dato2=document.getElementById('dato2').value;
			var mensaje=document.getElementById('mensaje2').value;
			console.log(vector);
			n=0;
			largo=vector.length-1;

			while(n<=largo)
			{
				
				if (vector[n]==dato2) 
				{
					if (n==largo) {
						vector.pop();
						console.log("borrado");
						console.log(vector);
						n=largo+1;
						
					}
					else
					{
						var ultimo=vector[largo];
						vector[largo]=vector[n];
						vector[n]=ultimo;
						vector.pop();
						console.log("borrado al hacer cambio");
						console.log(vector);
						n=largo+1;;
					}
					document.getElementById('mensaje2').value="Elemento borrado";
				}
				else
				{
					if (n==largo&&vector[n]!=dato2) 
					{
						console.log("no encontrado");
						console.log(vector);
						document.getElementById('mensaje2').value="Elemento no encontrado";
					}
					
				}
				n++;
			}
		}
			
			
	
