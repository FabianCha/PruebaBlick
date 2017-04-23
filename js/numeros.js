function nums(){
	for(var i = 0; i < 100; i++){
				if(i == 3 || i == 5 || i == 7 || i == 11 || i == 13 || i == 17 || i == 19 ||
				i == 23 || i == 29 || i == 31 || i == 37 || i == 41 || i == 43 || i == 47 || i == 53 || i == 59 ||
				i == 61 || i == 67 || i == 71 || i == 73 || i == 79 || i == 83 || i == 89 || i == 97){
					var primo = i;
					document.write("El numero " + i + " es Primo");
					document.write("<br>");
				}else if(i % 2 == 0) {
					var par = i;
    				document.write("El numero " + i + " es Par");
    				document.write("<br>");
  				} else if(par!=primo && primo!=par){
    				var compuesto = i;
    				document.write("El numero " + i + " es Compuesto");
    				document.write("<br>");
  				}

	}
}