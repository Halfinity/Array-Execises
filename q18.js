const arr = [1, 2, 3, 4, 5, 7, 8, 9];
const binarySearch = (arr, start, end, num) => {
   const mid = start + Math.floor((end - start)/2);
   if(start <= end){
      if(arr[mid] === num){
         return mid;
      }
      if(num < arr[mid]){
         return binarySearch(arr, start, mid-1, num);
      }
      if(num > arr[mid]){
         return binarySearch(arr, mid+1, end, num);
      }
   }
   return -1;
};
console.log(binarySearch(arr, 0, arr.length-1, 13));
console.log(binarySearch(arr, 0, arr.length-1, 11));