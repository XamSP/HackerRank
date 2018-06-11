function miniMaxSum(arr) {
  arr = arr.sort()
  
  let arr1 = arr.slice();
  let arr2 = arr.slice();
 
  arr1 = arr1.splice(0,arr1.length-1).reduce((a,b)=>a+b);
  
  arr2 = arr2.splice(1,arr2.length).reduce((a,b)=>a+b);

  console.log(`${arr1} ${arr2}`);
}

miniMaxSum([1, 4, 3, 2, 5]);