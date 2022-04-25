import axios from "axios";
import { useEffect } from "react";
import Card from "./Card";
import SplitNameForm from "./SplitNameForm";
import ValidateRutForm from "./ValidateRutForm";

function App(): JSX.Element {
  useEffect(() => {
    axios.get("server.json").then(response => (window.server = response.data));
  }, []);

  return (
    <Card>
      <h1 className="mb-2 text-lg font-semibold text-white">Web service - API REST</h1>
      <p className="mb-6 text-sm text-slate-300">
        Ingrese su nombre completo para separarlo en nombres y apellidos paterno y materno. Además,
        ingrese su RUT (con dígito verificador) para validarlo.
      </p>
      <div className="flex flex-col gap-6">
        <SplitNameForm />
        <ValidateRutForm />
      </div>
    </Card>
  );
}

export default App;
