const carta = "bici coche balon _playstation bici coche peluche"
const convertirLista = (carta) => {
  const arr = carta.trim().split(" ")
  return arr
}

const contarOcurrencias = (letter) => {
  let cartaLista = letter.trim().split(" ")
  const are = []
  for (let i = 0; i < cartaLista.length; i++) {
    let cont = 1
    if (cartaLista[i].charAt(0) === "_") {
      cartaLista.splice(i, 1)
    }

    for (let j = i + 1; j <= cartaLista.length; j++) {
      if (cartaLista[i] === cartaLista[j]) {
        cont += 1
        cartaLista.splice(j, 1)
      }
    }

    are.push([cartaLista[i], cont])
  }
  const obj = Object.fromEntries(are)
  return obj
}

console.log(contarOcurrencias(carta))
