const fs = require("fs");

function jsonLeer(Data) {
  let rawdata = fs.readFileSync(Data);
  let devuelve = JSON.parse(rawdata);
  return devuelve;
}

function jsonEscribir(data) {
  // console.log(data)
  resultado = JSON.stringify(data);
  fs.writeFileSync("222.json", resultado);
}

hola = jsonLeer("111.json");
hola.name = 333;

jsonEscribir(hola);


