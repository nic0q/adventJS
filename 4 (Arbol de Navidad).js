const createXmasTree = (height) => {
  tree = ""
  for (let i = 0; i < height + 2; i++) {
    if (i < height) {
      for (let j = 0; j < height * 2 - 1; j++) {
        if (height - i - 1 <= j && j <= height + i - 1) {
          tree = tree.concat("*")
        } else {
          tree = tree.concat("_")
        }
      }
      tree = tree.concat("\n")
    } else {
      for (let j = 0; j < height * 2 - 1; j++) {
        if (height - 1 === j) {
          tree = tree.concat("#")
        } else {
          tree = tree.concat("_")
        }
      }
      tree = tree.concat("\n")
    }
  }
  return tree
}

console.log(createXmasTree(3))
