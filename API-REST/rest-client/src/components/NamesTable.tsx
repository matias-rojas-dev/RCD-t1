interface HeaderCellProps extends React.HTMLProps<HTMLDivElement> {}

function HeaderCell({ className, ...props }: HeaderCellProps): JSX.Element {
  return (
    <div
      className={`border-r-2 border-blue-400/5 px-3 py-2 font-semibold text-slate-100 ${className}`}
      {...props}
    />
  );
}

export interface Names {
  names: string[];
  last: {
    paternal: string;
    maternal: string;
  };
}

interface CellProps extends React.HTMLProps<HTMLDivElement> {}

function Cell({ className, ...props }: CellProps): JSX.Element {
  return <div className={`border-blue-400/5 px-3 py-2 text-slate-300 ${className}`} {...props} />;
}

type NamesTableProps = Names & React.HTMLProps<HTMLDivElement>;

function NamesTable({
  names,
  last: { paternal, maternal },
  ...props
}: NamesTableProps): JSX.Element {
  return (
    <div
      className="my-6 grid rounded-xl border-2 border-blue-400/5 bg-clip-border text-sm text-white"
      style={{ gridTemplateColumns: "max-content auto" }}
      {...props}
    >
      <HeaderCell className="rounded-tl-lg border-b-2">Nombres</HeaderCell>
      <Cell className="border-b-2">{names.join(", ")}</Cell>
      <HeaderCell className="border-b-2">Apellido paterno</HeaderCell>
      <Cell className="border-b-2">{paternal}</Cell>
      <HeaderCell className="rounded-bl-lg">Apellido materno</HeaderCell>
      <Cell>{maternal}</Cell>
    </div>
  );
}

export default NamesTable;
