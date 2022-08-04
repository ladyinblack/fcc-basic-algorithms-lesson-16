# js-fomvyy

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-fomvyy)

###[Chunky Monkey](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey)

## PROBLEM EXPLANATION
Our goal for this Algorithm is to split `arr` (first argument) into smaller chunks of arrays with the length provided by `size` (second argument).  There are 4 green checks (objectives) our code needs to pass in order to complete this Algorithm:
1. `(['a', 'b', 'c', 'd'], 2)` is expected to be `[['a', 'b'], ['c', 'd']]`
2. `([0, 1, 2, 3, 4, 5], 3)` is expected to be `[[0, 1, 2], [3, 4, 5]]`
3. `([0, 1, 2, 3, 4, 5], 2)` is expected to be `[[0, 1,], [2, 3], [4, 5]]`
4. `([0, 1, 2, 3, 4, 5], 4)` is expected to be `[[0, 1, 2, 3], [4, 5]]`

## HINTS
### Hint 1
The links above suggest to use `Array.push()`, so let's start by first creating a new array to store the smaller arrays we will soon have like this:
```js
var newArray = [];
```
### Hint 2
Next we'll need a `for` loop to loop through `arr`.
### Hint 3
Finally, we need a method to do the actual splitting and we can use `Array.slice()` to do that.  The key to this Algorithm is understanding how a `for` loop, `size`, `Array.slice()` and `Array.push()` all work together.

### REFERENCE LINKS
- [`Array.push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [`Array.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

