const os = require("os");
const path = require("path");
const fs = require("fs");
console.log("Hackeando tu sistema operativo...");
setTimeout(() => {
  if (os.platform() === "darwin") {
    console.log(
      "Tú no molas nada. Bueno, excepto si eres Geraldine o Pol. En ese caso molas. Pero por ser tú, no por usar Mac"
    );
  } else if (os.platform() === "linux") {
    console.log("Tú molas");
  } else if (os.platform() === "win32") {
    console.log("Tú no molas mucho");
  }

  console.log(
    "Cuidado, te quedan " + os.freemem() * 0.000001 + " Mb de RAM libre"
  );

  console.log("La version de tu sistema operativo es: " + os.version());

  console.log(
    "Tu usuario del sistema operativo es " +
      path.basename(os.homedir()) +
      " y tu carpeta es " +
      os.homedir()
  );

  fs.readdir(os.homedir(), (err, archivos) => {
    if (err) {
      console.log("Algo ha petado");
      return;
    }
    for (const archivo of archivos) {
      fs.stat(path.join(os.homedir(), archivo), (err, info) => {
        console.log(archivo + " tiene tamaño " + info.size);
      });
    }
  });
}, 2000);
