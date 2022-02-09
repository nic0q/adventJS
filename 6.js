const otroAlmacen = {
  baul: {
    fondo: {
      objeto: "cd-rom",
      "otro-objeto": "disquette",
      "otra-cosa": "mando",
    },
  },
}

const contains = (store, product) => {
  for (let estanteria in store) {
    for (const [k, v] of Object.entries(store[estanteria])) {
      if (v === "vacio") {
        continue
      } else {
        for (const [k1, v1] of Object.entries(v)) {
          if (v1 === product) {
            return true
          }
        }
      }
    }
  }
  return false
}

console.log(contains(otroAlmacen, "gameboy"))
