var price = [0.51, 1.95583, 0.61, 1.65, 0.59, 1.69];

var KMEUR = price[0];
var EURKM = price[1];
var KMUSD = price[2];
var USDKM = price[3];
var KMCHF = price[4];
var CHFKM = price[5];

var result = 0;

function convert(argument, convertFrom,convertTo) {

	if (convertFrom == "EUR" && convertTo == "KM") {
		result = argument * EURKM;

	}else if (convertFrom == "KM" && convertTo == "EUR") {
		result = argument * KMEUR;

	}else if (convertFrom == "USD" && convertTo == "KM") {
		result = argument * USDKM;

	}else if (convertFrom == "KM" && convertTo == "USD") {
		result = argument * KMUSD;

	}else if (convertFrom == "KM" && convertTo == "CHF") {
		result = argument * KMCHF;

	}else if (convertFrom == "CHF" && convertTo == "KM") {
		result = argument * CHFKM;

	}
	 else {
	 	alert("Smting Wron, please insert int")
	 }

	 document.write(argument + " " + convertFrom + " = " + result + " " + convertTo + "<br>");

}
convert(10, "EUR", "KM");
convert(10, "KM", "EUR");
convert(10, "USD", "KM");
convert(10, "KM", "USD");
convert(10, "CHF", "KM");
convert(10, "KM", "CHF");
