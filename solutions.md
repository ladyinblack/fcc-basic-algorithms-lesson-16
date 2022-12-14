## SOLUTIONS

### Alternate Solution 1
```js
function chunkArrayInGroups(arr, size) {
  let temp = [];
  let result = [];
  
  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1)
      temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }
  if (temp.length !== 0)
    result.push(temp);
  return result;
}
```
### Code Explanation
- Firstly, we create two empty arrays called `temp` and `result`, which we will eventually return.
- Our **for loop** loops until `a` is equal to or more than the length of the array in our test.
- Inside our loop, we push to `temp` using `temp.push(arr[a]);` if the remainder of `a % size` is not equal to `size - 1`.
- Otherwise, we push to `temp`, push `temp` to the `result` variable and reset `temp` to an empty array.
- Next, if `temp` isn't an empty array, we push it to `result`.
- Finally, we return the value of `result`.

### REFERENCE LINKS
- [`Array.push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [For Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)


### Alternate Solution 2
```js
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}
```
### Code Explanation
- First, we create an empty array `newArr` where we will store our 'chunks'.
- The `for` loop starts at zero, increments by `size` each time through the loop, and stops when it reaches `arr.length`.
- Note that this `for` loop does not loop through `arr`.  Instead, we are using the loop to generate numbers we can use as indices to slice the array in the right locations.
- Inside our loop, we create chunks using `arr.slice(i, i + size)`, and add this value to `newArr` with `newArr.push()`.
- Finally, we return the value of `newArr`.

### REFERENCE LINKS
- [`Array.push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [`Array.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [For Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)


### Alternate Solution 3
```js
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  let i = 0;
  
  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
```
### Code Explanation
- Firstly, we create two variables.  `newArr` is an empty array which we will push to.  We also have the `i` variable set to zero, for use in our `while` loop.
- Our `while` loop loops until `i` is equal to or more than the length of the array in our test.
- Inside our loop, we push to the `newArr` array using `arr.slice(i, i + size)`.  For the first time it loops, it will look something like: `newArr.push(arr.slice(1, 1 + 2))`.
- After we push to `newArr`, we add the variable of `size` onto `i`.
- Finally, we return the value of `newArr`.

### REFERENCE LINKS
- [`Array.push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [`Array.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [While Loops](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/while)


### Alternate Solution 4
```js
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
```
### Code Explanation
- Firstly, we create a variable.  `newArr` is an empty array which we will push to.
- Our `while` loop loops until the length of the array in our test is not 0.
- Inside our loop, we push to the `newArr` array using `arr.splice(0, size)`.
- For each iteration of `while` loop, it deletes `size` number of elements from the front of `arr` and push them as an array to `newArr`.
- Finally, we return the value of `newArr`.

### REFERENCE LINKS
- [`Array.push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [`Array.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [While Loops](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/while)


### Alternate Solution 5
```js
function chunkArrayInGroups(arr, size) {
  if (arr.length <= size) {
    return [arr];
  } else {
    return [arr.slice(0, size)].concat(chunkArrayInGroups(arr.slice(size), size));
  }
}
```
### Code Explanation
- Array smaller than size is returned nested.
- For any array larger than size, it is split in two.  First segment is nested and concatenated with second segment which makes a recursive call.

### REFERENCE LINKS
- [Recursion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion)
- [`Array.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

