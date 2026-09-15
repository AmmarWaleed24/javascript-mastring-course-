
/**
 * Number Methods
 * Two Dots to call a methods
 * toString()
 * tofixed()
 * parseInt()
 * parseFloat()
 * isInteger()
 * isInteger()
 * isNan() [ES6]
 *  **/

console.log(100..toString());
console.log((1000).toString())
/**
 * Deference between two dots and single dots:
 * They are the same but the single dot
 * is standard and best practise
 */
console.log(1000.5795.toFixed(2));//1000.57
//returns two or as desired numbers after point


console.log(Number("100"));
console.log(+"100");
console.log(parseInt("100"));
console.log(parseFloat("12.666"));
//Note: if string contains words or letters use the parseInt or ParseFloat
console.log(parseInt("100 Ammar"));//100
console.log(+"100 ammar");//NaN
console.log(Number("100 ammar"));//Nan


console.log(Number.isInteger("100")); //   false
console.log(Number.isInteger("100.90"));// false
console.log(Number.isInteger(100.90));//   false
console.log(Number.isInteger(100));//      true
