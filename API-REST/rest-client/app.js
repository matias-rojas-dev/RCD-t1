const options = {
  method: "GET",
  mode: "cors",
};

async function validateNames(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get("name");

  const response = await fetch(
    `${serviceUrl}/separar-nombre/${name}`,
    options
  ).catch((error) => console.log(error));

  const {
    names,
    lastNames: { paternalName, maternalName },
  } = await response.json();

  const namesElement = document.getElementById("names");

  namesElement.innerHTML = `
    <div><span class="font-semibold">Nombres:</span> ${names.join(", ")}</div>
    <div><span class="font-semibold">Apellido paterno:</span> ${paternalName}</div>
    <div><span class="font-semibold">Apellido materno:</span> ${maternalName}</div>
  `;

  namesElement.classList = "m-3";
}

async function validateRut(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const rut = formData.get("rut");

  const response = await fetch(
    `${serviceUrl}/validar-rut/${rut}`,
    options
  ).catch((error) => console.log(error));

  const isValidRutElement = document.getElementById("isValidRut");

  const { isValid } = await response.json();
  const isFormatValid = isValidRutFormat(rut);

  const base = ["flex", "items-center", "gap-1", "ml-3"];
  if (isFormatValid && isValid) {
    isValidRutElement.innerHTML = `
      <span>El RUT es válido</span>
      <span class="material-icons">verified</span>
    `;

    isValidRutElement.className = [
      ...base,
      "text-green-500",
      "font-semibold",
      "mt-2",
    ].join(" ");
  } else {
    isValidRutElement.innerHTML = `
      <span>${isFormatValid ? "El RUT es no válido" : "Formato inválido"}</span>
      <span class="material-icons">error</span>
    `;

    isValidRutElement.className = [
      ...base,
      "text-red-500",
      "font-semibold",
      "mt-2",
    ].join(" ");
  }
}

function isValidRutFormat(rut) {
  return /^(?:(?:(\d{1,2})(\d{3})(\d{3})\-?(\d|k))|(?:(\d{1,2})(\.\d{3}\.)(\d{3})\-(\d|k))|(\d{5,9}))$/g.test(
    rut
  );
}
