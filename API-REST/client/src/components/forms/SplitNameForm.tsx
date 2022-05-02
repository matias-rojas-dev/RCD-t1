import axios from "axios";
import { useState } from "react";
import Button from "../Button";
import Form from "./Form";
import Input from "../Input";
import NamesTable, { Names } from "../NamesTable";
import ErrorContainer from "../ErrorContainer";

interface SplitNameFormProps extends React.HTMLProps<HTMLFormElement> {}

function SplitNameForm(props: SplitNameFormProps): JSX.Element {
  const [name, setName] = useState("");
  const [names, setNames] = useState<Names | null>(null);
  const [isError, setIsError] = useState(false);
  const disabled = name === "";

  const onChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setName(event.currentTarget.value);
    if (names != null) setNames(null);
  };

  const onSubmit: React.MouseEventHandler<HTMLButtonElement> = async event => {
    event.preventDefault();
    axios
      .get(`${window.server.url}/separar-nombre/${name}`)
      .then(response => setNames(response.data))
      .catch(_ => setIsError(true));
  };

  return (
    <div>
      <Form {...props}>
        <Input
          value={name}
          onChange={onChange}
          name="name"
          placeholder="Nombre completo"
          focusColor="focus:border-violet-500"
        />
        <Button
          disabled={disabled}
          shadowColor="bg-gradient-to-r from-indigo-600 to-purple-600"
          backgroundColor="bg-purple-600"
          onClick={onSubmit}
        >
          Separar
        </Button>
      </Form>
      {isError ? (
        <ErrorContainer title="¡Ha ocurrido un error!">
          No se ha podido procesar su solicitud. Por favor, intente nuevamente.
        </ErrorContainer>
      ) : (
        names != null && <NamesTable {...names} />
      )}
    </div>
  );
}

export default SplitNameForm;
