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
    <div class="border-b-2 border-r-2 border-blue-400/5 px-3 py-2 text-slate-100 rounded-tl-lg font-semibold">
      Nombres
    </div>
    <div class="border-b-2 border-blue-400/5 px-3 py-2 text-slate-300">
      ${names.join(", ")}
    </div>
    <div class="border-b-2 border-r-2 border-blue-400/5 px-3 py-2 text-slate-100 font-semibold">
      Apellido paterno
    </div>
    <div class="border-b-2 border-blue-400/5 px-3 py-2 text-slate-300">
      ${paternal}
    </div>
    <div class="border-r-2 border-blue-400/5 px-3 py-2 text-slate-100 rounded-bl-lg font-semibold">
      Apellido materno
    </div>
    <div class="px-3 py-2 text-slate-300">
      ${maternal}
    </div>
  `;

  namesElement.classList =
    "grid border-2 border-blue-400/5 rounded-xl text-white my-6 bg-clip-border text-sm";
  namesElement.style.gridTemplateColumns = "max-content auto";
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

  const base =
    "flex items-center gap-2 border-2 border-blue-400/5 rounded-lg px-3 py-2 mt-4 font-semibold text-sm";
  if (isFormatValid && isValid) {
    rutStatus.innerHTML = `
      <span class="material-icons">verified</span>
      <span>El RUT es válido</span>
    `;

    rutStatus.className = `${base} text-emerald-400`;
  } else {
    rutStatus.innerHTML = `
      <span class="material-icons">error</span>
      <span>${isFormatValid ? "El RUT no es válido" : "Formato inválido"}</span>
    `;

    rutStatus.className = `${base} text-rose-400`;
  }
}

function isValidRutFormat(rut) {
  return /^(?:(?:(\d{1,2})(\d{3})(\d{3})\-?(\d|k))|(?:(\d{1,2})(\.\d{3}\.)(\d{3})\-(\d|k))|(\d{5,9}))$/g.test(
    rut
  );
}

function toggle(id) {
  const isEmpty = document.getElementById(id).value === "";
  document.getElementById(`${id}_button`).disabled = isEmpty;
}
