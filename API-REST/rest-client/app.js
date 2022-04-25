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

  console.log(names)

  document.getElementById("names").innerHTML = `
    <strong>Nombres:</strong>
    <ul>
      ${names.map(name => `<li>${name}</li>`).join("\n")}
    </ul>
    <strong>Apellidos:</strong>
    <ul>
      <li><strong>Paterno:</strong> ${paternalName}</li>
      <li><strong>Materno:</strong> ${maternalName}</li>
    </ul>
  `;
}

async function validateRut(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const rut = formData.get("rut");

  const response = await fetch(
    `${serviceUrl}/validar-rut/${rut}`,
    options
  ).catch((error) => console.log(error));

  const { isValid } = await response.json();
  document.getElementById("isValidRut").innerHTML = isValid
    ? "Válido"
    : "Inválido";
}
