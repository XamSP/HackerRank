function solve(a, b) {

  let arr1 = 0;
  let arr2 = 0;

  for (let i=0; i < a.length; i++){
    if (a[i] === b[i]) {
      
    } else {
      a[i] > b[i] ? arr1++ : arr2++;
    }
  }
  return [arr1, arr2];
};

let alice = [5,6,7];

let bob = [3,6,10];


solve(alice, bob);