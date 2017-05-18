function formatRoman(num, RomChar, nextChar, midChar) {
    var buildString="";
    if (num == 4) {
        buildString= RomChar+midChar;
        return buildString;
    }
    if (num == 9) {
        buildString =RomChar+nextChar;
        return buildString;
    }
    if (Math.floor(num/ 5)) {
        buildString = midChar;
    }
    for ( i = 0; i < num % 5; i++) {
        buildString = buildString + RomChar;
    }
    return buildString;
}


function convertToRoman(num) {
    var Roman = "";
    console.log(num);
    var Mdigit = Math.floor(num /1000);
    if (Mdigit) {Roman = Roman + formatRoman(Mdigit, "M", " ", " ");}
    num = num % 1000;
    console.log(num);
    var Cdigit = Math.floor(num / 100);
    Roman = Roman + formatRoman(Cdigit, "C", "M", "D");
    num = num % 100;
    var Xdigit = Math.floor(num / 10);
    console.log(num, Xdigit);
    Roman = Roman + formatRoman(Xdigit, "X", "C", "L");
    num = num % 10;
    var Idigit = num;
    Roman = Roman + formatRoman(Idigit, "I", "X", "V");
    console.log(num, Roman);
    return Roman;
}

convertToRoman(36);
