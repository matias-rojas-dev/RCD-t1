import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import ErrorContainer from "./ErrorContainer";
import SplitNameForm from "./forms/SplitNameForm";
import ValidateRutForm from "./forms/ValidateRutForm";

function App(): JSX.Element {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get("server.json")
      .then(response => (window.server = response.data))
      .catch(_ => setIsError(true));
  }, []);

  return (
    <Card>
      <h1 className="mb-2 text-lg font-semibold text-white">Web service - API REST</h1>
      {isError ? (
        <ErrorContainer title="¡Error al cargar los datos del servidor!">
          Asegurarse que el archivo <span className="font-mono">server.json</span> existe, y está
          ubicado en la misma carpeta del archivo <span className="font-mono">index.html</span>. Su
          contenido es un objeto JSON con una llave &ldquo;url&rdquo; y cuyo valor es la dirección
          URL absoluta del servidor.
        </ErrorContainer>
      ) : (
        <>
          <p className="text-sm text-slate-300">
            Ingrese su nombre completo para separarlo en nombres y apellidos paterno y materno.
            Además, ingrese su RUT (con dígito verificador) para validarlo.
          </p>
          <div className="mt-6 flex flex-col gap-6">
            <SplitNameForm />
            <ValidateRutForm />
          </div>
        </>
      )}
      <p className="mt-6 text-xs leading-normal text-blue-300/20">
        Trabajo realizado por el grupo 3 de la asignatura de Redes y Comunicación de Datos,
        integrado por Patricio Aguirre, Maximiliano Araya, Benjamín Herrera, Vania Palacios, Matías
        Rojas y David Uribe.
      </p>
    </Card>
  );
}

export default App;
