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
