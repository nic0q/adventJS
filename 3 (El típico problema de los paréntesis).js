const isValid = (letter) => {
  let stack = []
  const arr = letter.split("")
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "{" || arr[i] === "[" || arr[i] === "(") {
      stack.push(arr[i])
    } else {
      switch (arr[i]) {
        case "}":
          if (stack[stack.length - 1] === "{" && arr[i - 1] !== "{") {
            stack.pop()
          }
        case ")":
          if (stack[stack.length - 1] === "(" && arr[i - 1] !== "(") {
            stack.pop()
          }
        case "]":
          if (stack[stack.length - 1] === "[" && arr[i - 1] !== "[") {
            stack.pop()
          }
      }
    }
  }
  if (stack.length === 0) {
    return true
  }
  return false
}
console.log(isValid("()"))
