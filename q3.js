first = function(array, n){
    var result = [];
    if(n === undefined) return array[0];
    for (var i = 0; i < n; i++) {
      result.push(array[i]);
    } 
    return result;
   }

    console.log(first([7, 9, 0, -2]));
    console.log(first([],3));
    console.log(first([7, 9, 0, -2],3));
    console.log(first([7, 9, 0, -2],6));
    console.log(first([7, 9, 0, -2],-3));