let numbers = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
numbers.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(numbers);