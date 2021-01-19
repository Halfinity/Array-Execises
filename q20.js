const isThereADuplicate = function(arrayOfNumbers) {
    let counts = {};
    
    for(var i = 0; i <= arrayOfNumbers.length; i++) {
        
        if(counts[arrayOfNumbers[i]] === undefined) {
            counts[arrayOfNumbers[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
}