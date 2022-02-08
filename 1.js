const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

const contarOvejas = (ovejas) => {
  ovejas = ovejas.filter(
    (e) =>
      e.name.includes("a") &&
      (e.name.includes("n") || e.name.includes("N")) &&
      e.color === "rojo"
  );
  return ovejas;
};

console.log(contarOvejas(ovejas));
