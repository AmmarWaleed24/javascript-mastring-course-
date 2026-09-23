/*
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/

let serials = "S100S S3000S S50000S S950000S";

//{x} Number of
console.log(serials.match(/s\d{3}s/gi)); //  S100S

//{x,y} range
console.log(serials.match(/s\d{3,5}s/gi)); // ['S100S', 'S3000S', 'S50000S']

//{x,} At least x
console.log(serials.match(/s\d{1,}s/gi)); //  ['S100S', 'S3000S', 'S50000S', 'S950000S']
