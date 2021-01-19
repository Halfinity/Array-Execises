function insertHyphen(str) {
    var strArr = str.split('');
    var numArr = strArr.map(Number);
    var result ="";
    for(var i = 0; i < numArr.length; i++) {
     if((numArr[i+1]!==undefined)&&(numArr[i]%2===0 && numArr[i+1]%2===0)) {
     
          result = result + numArr[i] + "-";
      }else{
          result = result + numArr[i];
      }
    }
    return result;
  }
  console.log(insertHyphen('112233445566'));