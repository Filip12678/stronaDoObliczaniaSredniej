function myFunction() {
	
	var doDodania = 0;
	var sumaTablicy = 0;
	var dlugoscTablicy = 0;
	
	var liczbyDoObliczeniaSredniej_W_Stringu = prompt("Wprowadź liczby z których chcesz obliczyć średnią oddzielone spacją");
	var liczbyDoObliczeniaSredniej = liczbyDoObliczeniaSredniej_W_Stringu.split(/(\s+)/);
	
	for (let i = 0; i < liczbyDoObliczeniaSredniej.length; i++) {
		if (liczbyDoObliczeniaSredniej[i] == " ") {
			
		}
		else {
			doDodania = parseFloat(liczbyDoObliczeniaSredniej[i]);
			sumaTablicy += doDodania;
			dlugoscTablicy = dlugoscTablicy + 1;
		}
	}
	
	var srednia = sumaTablicy / dlugoscTablicy;
	alert(`Średnia tych liczb: ${srednia}`);
	
	
}