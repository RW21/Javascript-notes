# Basics

## String

- Template literals

```javascript
`half of 100 is ${100 / 2}`
```

## Program control

### if

```javascript
// One line if
if (a == 1) return 1
```

## Logical operators

```javascript
console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
```

## Functions

- Javascript doesn't care much about number of arguments.

### Arrow operator

```javascript
const power = (base, exponent) => {
    if (exponent == 0) return 1 
    let result = base
    for (let i = 0; i < exponent - 1; i++) {
        result *= base
    }
    return result
}

const square = x => x * x;
```

### Closure

- Being able to reference a specific instance of a local binding in an enclosing scope—is called closure.

```javascript
function wrapValue(n) {
  let local = n;
  return () => local;
}

function multiplier(factor) {
   return number => number * factor;
}
let twice = multiplier(2); 
console.log(twice(5));
// → 10
```

## Data structures

### Object

```javascript
let descriptions = {
x: 1,
"touched tree": "Touched a tree"
};

Object.keys(descriptions)

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}
```

