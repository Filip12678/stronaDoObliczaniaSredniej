function sredniaWazona(liczby, wagi)
{
	var sumaLiczb = 0;
	var sumaWag = 0;
	
	for (i = 0; i < liczby.length; i++)
	{
		//console.log(liczby[i], wagi[i])
		sumaLiczb = sumaLiczb + parseFloat(liczby[i]) * parseFloat(wagi[i]);
		sumaWag = sumaWag + parseFloat(wagi[i]);
	}
	
	//console.log(sumaLiczb, sumaWag);
	
	return sumaLiczb / sumaWag;
}




function obliczSredniaWazona() {
	
	//var liczbyDoObliczeniaSredniej_W_Stringu = prompt("Wprowadź liczby z których chcesz obliczyć średnią ważoną oddzielone spacją");
	var liczbyDoObliczeniaSredniej_W_Stringu = document.getElementById('liczby').value;
	var liczbyDoObliczeniaSredniej = liczbyDoObliczeniaSredniej_W_Stringu.split(" ");
	
	var wagi = [];
	var liczby = [];
	czyWartosc = 1;
	
	for (i = 0; i < liczbyDoObliczeniaSredniej.length; i++)
	{
		//console.log(czyWartosc, liczbyDoObliczeniaSredniej[i]);
		
		if (czyWartosc == 1)
		{
			liczby.push(liczbyDoObliczeniaSredniej[i]);
			czyWartosc = 0;
		}
		
		else if (czyWartosc == 0)
		{
			wagi.push(liczbyDoObliczeniaSredniej[i]);
			czyWartosc = 1;
		}
	}
	
	
	//console.log(liczby, wagi);
	//console.log(liczbyDoObliczeniaSredniej, liczbyDoObliczeniaSredniej.length);
	//console.log(sredniaWazona(liczby, wagi));
	
	//console.log(weighted_average(liczbyDoObliczeniaSredniej));
	var srednia = sredniaWazona(liczby, wagi);
	
	//alert(`Średnia ważona tych liczb: ${srednia}`);
	
	document.getElementById("srednia").innerHTML = `Średnia ważona tych liczb: ${srednia}`;
	
}




















function obliczSrednia() {
	
	var doDodania = 0;
	var sumaTablicy = 0;
	var dlugoscTablicy = 0;
	
	var liczbyDoObliczeniaSredniej_W_Stringu = document.getElementById('liczby').value;
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
	//alert(`Średnia tych liczb: ${srednia}`);
	
	document.getElementById("srednia").innerHTML = `Średnia tych liczb: ${srednia}`;
	
	
}