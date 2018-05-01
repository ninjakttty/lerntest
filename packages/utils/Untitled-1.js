const fillRange = (start, end) => Array(end - start + 1).fill().map((item, index) => start + index)


const cA = (value) => Array.isArray(value) ? [...value] : [value]

var x = cA([1, 2, 3])
y = cA(1)
x
y
