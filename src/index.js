module.exports = function toReadable (number) {
    let result;
    let num1 = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let num20 = ["","eleven ", "twelve ", "thirteen ", "fourteen", "fifteen ", "sixteen ", "seventeen", "eighteen ", "nineteen "];
    let num10 = ["","ten ", "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety "];
    let num100 = ["", "one hundred ", "two hundred ", "three hundred ", "four hundred ", "five hundred ", "six hundred ", "seven hundred ", "eight hundred ", "nine hundred "];
    
    const numarr = Array.from(String(number), Number);
    
    if (numarr.length===1) {result = num1[number];}
    else if (numarr.length===2) { switch(true){ case (numarr[0]===1):
        result = num20[number-10]; break;
                case (numarr[0]>1): result = num10[numarr[0]]+num1[numarr[1]];}
        }
    else if (numarr.length===3){switch(true){case (numarr[1]===1):
        result = num100[numarr[0]]+num20[numarr[2]]; break;
        case(numarr[1]>1): 
        result = num100[numarr[0]]+num10[numarr[1]]+num1[numarr[2]]}
    }
    result = result.trim().toString();
    return result;
}
