var arr = [ 0, 1, '', undefined, false, 2, undefined, null, , 3, NaN ];
 
var filtered = arr.filter(Boolean);
console.log(filtered);