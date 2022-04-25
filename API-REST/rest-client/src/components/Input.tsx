interface InputProps extends React.HTMLProps<HTMLInputElement> {
  focusColor?: string;
}

function Input({ focusColor, ...props }: InputProps): JSX.Element {
  return (
    <input
      className={`w-full rounded-lg border-2 border-blue-400/20 bg-transparent px-3 py-2 font-semibold
            text-white transition-colors duration-300 placeholder:text-slate-600
            ${focusColor} focus:outline-none`}
      {...props}
    />
  );
}

export default Input;
