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
    last: { paternal, maternal },
  } = await response.json();

  const namesElement = document.getElementById("names");

  namesElement.innerHTML = `
    <div><span class="font-semibold">Nombres:</span> ${names.join(", ")}</div>
    <div><span class="font-semibold">Apellido paterno:</span> ${paternal}</div>
    <div><span class="font-semibold">Apellido materno:</span> ${maternal}</div>
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

  const rutStatus = document.getElementById("rut_status");

  const { isValid } = await response.json();
  const isFormatValid = isValidRutFormat(rut);

  const base = "flex items-center gap-1 ml-3 mt-2 font-semibold";
  if (isFormatValid && isValid) {
    rutStatus.innerHTML = `
      <span>El RUT es válido</span>
      <span class="material-icons text-xl">verified</span>
    `;

    rutStatus.className = `${base} text-green-500`;
  } else {
    rutStatus.innerHTML = `
      <span>${isFormatValid ? "El RUT no es válido" : "Formato inválido"}</span>
      <span class="material-icons text-xl">error</span>
    `;

    rutStatus.className = `${base} text-red-500`;
  }
}

function isValidRutFormat(rut) {
  return /^(?:(?:(\d{1,2})(\d{3})(\d{3})\-?(\d|k))|(?:(\d{1,2})(\.\d{3}\.)(\d{3})\-(\d|k))|(\d{5,9}))$/g.test(
    rut
  );
}

function toggle(inputId, buttonId) {
  document.getElementById(buttonId).disabled =
    document.getElementById(inputId).value === "";
}
