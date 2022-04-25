interface CardProps extends React.HTMLProps<HTMLDivElement> {}

function Card(props: CardProps): JSX.Element {
  return (
    <div className="mx-auto mt-24 mb-5 max-w-xl rounded-xl bg-slate-800 p-7 shadow-lg" {...props} />
  );
}

export default Card;
