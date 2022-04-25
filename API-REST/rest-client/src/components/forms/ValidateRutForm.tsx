import axios from "axios";
import React, { useState } from "react";
import Button from "../Button";
import Form from "./Form";
import Input from "../Input";
import RutStatusTile, { RutStatus } from "../RutStatus";

interface ValidateRutFormProps extends React.HTMLProps<HTMLFormElement> {}

function ValidateRutForm(props: ValidateRutFormProps): JSX.Element {
  const [rut, setRut] = useState("");
  const [status, setStatus] = useState<RutStatus | null>(null);
  const disabled = rut === "";

  const onChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setRut(event.currentTarget.value);
    if (status != null) setStatus(null);
  };

  const onSubmit: React.MouseEventHandler<HTMLButtonElement> = async event => {
    event.preventDefault();
    try {
      const response = await axios.get(`${window.server.url}/validar-rut/${rut}`);
      const status = response.data;
      setStatus(status);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Form>
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
      {status != null && <RutStatusTile {...status} />}
    </div>
  );
}

export default ValidateRutForm;
