function myFunction() {

    function findAverage(array){
        let average = 0;
        for (let i = 0; i < array.length; i++){
            let currentNum = array[i]
            average += currentNum;
        }
        average = average / array.length
        return average;
    }

    var liczbyDoObliczeniaSredniej = [];
    var iloscLiczb = prompt("Wprowadź z ilu liczb chcesz policzyć średnią")
    var licznik = 0;
    while (licznik < iloscLiczb) {
        var liczba = prompt(`Wprowadź ${licznik+1} liczbę`);
        liczba = parseFloat(liczba);
        liczbyDoObliczeniaSredniej.push(liczba);
        licznik = licznik + 1;
    }

    var wynik = findAverage(liczbyDoObliczeniaSredniej);
    var wynik = Math.round(wynik * 1000000) / 1000000;
    alert(`Średnia liczb: ${liczbyDoObliczeniaSredniej} wynosi: ${wynik}`);
}