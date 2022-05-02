interface ContainerProps extends React.HTMLProps<HTMLDivElement> {}

function Container({ className, ...props }: ContainerProps): JSX.Element {
  return (
    <div
      className={`mt-4 flex items-center gap-2 rounded-lg
        border-2 border-blue-400/5 px-3 py-2
        text-sm font-semibold ${className}`}
      {...props}
    />
  );
}

export default Container;
