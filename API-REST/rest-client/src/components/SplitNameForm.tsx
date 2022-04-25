import axios from "axios";
import { useState } from "react";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";
import NamesTable, { Names } from "./NamesTable";

interface SplitNameFormProps extends React.HTMLProps<HTMLFormElement> {}

function SplitNameForm(props: SplitNameFormProps): JSX.Element {
  const [name, setName] = useState("");
  const [names, setNames] = useState<Names | null>(null);
  const disabled = name === "";

  const onSubmit: React.MouseEventHandler<HTMLButtonElement> = async event => {
    event.preventDefault();
    try {
      const response = await axios.get(`${window.server.url}/separar-nombre/${name}`);
      setNames(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Form>
        <Input
          value={name}
          onChange={event => setName(event.currentTarget.value)}
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
      {names != null && <NamesTable {...names} />}
    </div>
  );
}

export default SplitNameForm;
