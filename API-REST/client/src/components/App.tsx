import axios from "axios";
import { useEffect } from "react";
import Card from "./Card";
import SplitNameForm from "./forms/SplitNameForm";
import ValidateRutForm from "./forms/ValidateRutForm";

function App(): JSX.Element {
  useEffect(() => {
    axios.get("server.json").then(response => (window.server = response.data));
  }, []);

  return (
    <Card>
      <h1 className="mb-2 text-lg font-semibold text-white">Web service - API REST</h1>
      <p className="text-sm text-slate-300">
        Ingrese su nombre completo para separarlo en nombres y apellidos paterno y materno. Además,
        ingrese su RUT (con dígito verificador) para validarlo.
      </p>
      <div className="mt-6 flex flex-col gap-6">
        <SplitNameForm />
        <ValidateRutForm />
      </div>
      <p className="mt-6 text-xs leading-normal text-blue-300/20">
        Trabajo realizado por el grupo 3 de la asignatura de Redes y Comunicación de Datos,
        integrado por Maximiliano Araya, Benjamín Herrera, Vania Palacios, Matías Rojas y David
        Uribe.
      </p>
    </Card>
  );
}

export default App;
