import axios from "axios";
import React, { useState } from "react";
import Button from "../Button";
import Form from "./Form";
import Input from "../Input";
import RutStatusTile, { RutStatus } from "../RutStatus";
import ErrorContainer from "../ErrorContainer";

interface ValidateRutFormProps extends React.HTMLProps<HTMLFormElement> {}

function ValidateRutForm(props: ValidateRutFormProps): JSX.Element {
  const [rut, setRut] = useState("");
  const [status, setStatus] = useState<RutStatus | null>(null);
  const [isError, setIsError] = useState(false);
  const disabled = rut === "";

  const onChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setRut(event.currentTarget.value);
    if (status != null) setStatus(null);
  };

  const onSubmit: React.MouseEventHandler<HTMLButtonElement> = async event => {
    event.preventDefault();
    axios
      .get(`${window.server.url}/validar-rut/${rut}`)
      .then(response => setStatus(response.data))
      .catch(_ => setIsError(true));
  };

  return (
    <div>
      <Form {...props}>
        <Input
          value={rut}
          onChange={onChange}
          name="rut"
          placeholder="RUT con DV"
          focusColor="focus:border-cyan-500"
        />
        <Button
          disabled={disabled}
          shadowColor="bg-gradient-to-r from-sky-600 to-teal-600"
          backgroundColor="bg-cyan-500"
          onClick={onSubmit}
        >
          Validar
        </Button>
      </Form>
      {isError ? (
        <ErrorContainer title="¡Ha ocurrido un error!">
          No se ha podido procesar su solicitud. Por favor, intente nuevamente.
        </ErrorContainer>
      ) : (
        status != null && <RutStatusTile {...status} />
      )}
    </div>
  );
}

export default ValidateRutForm;
