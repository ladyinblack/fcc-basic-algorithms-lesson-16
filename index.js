// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Chunky Monkey</h1>`;

/** TODO:
 * Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 
 function chunkArrayInGroups(arr, size) {
   return arr;
 }
 
 chunkArrayInGroups(["a", "b", "c", "d"], 2);
 */

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let sliceArr = [];
  let remArr = [];
  for (let i = 0; i < arr.length; i += size) {
    sliceArr = arr.slice(i, i + size);
    newArr.push(sliceArr);
    // sliceArr = arr.slice(0, size);
    // newArr.push(sliceArr);
    // remArr = arr.slice(size);
    // if (remArr.length > size) {
    //   console.log(remArr.length > size);
    //   remArr = remArr.slice(0, size);
    // }
    // newArr.push(remArr);
    // return newArr;
  }
  return newArr;
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
