interface FormProps extends React.HTMLProps<HTMLFormElement> {}

function Form(props: FormProps): JSX.Element {
  return <form className="flex items-center justify-between gap-6" {...props} />;
}

export default Form;
