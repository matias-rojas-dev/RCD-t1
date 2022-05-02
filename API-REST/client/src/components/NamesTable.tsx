interface HeaderCellProps extends React.HTMLProps<HTMLDivElement> {}

function HeaderCell({ className, ...props }: HeaderCellProps): JSX.Element {
  return (
    <div
      className={`flex h-full items-center
      border-blue-400/5 bg-blue-300/[3%]
      px-3 py-2 font-semibold text-slate-100 ${className}`}
      {...props}
    />
  );
}

export interface Names {
  names: string[];
  last?: {
    paternal: string;
    maternal?: string;
  };
}

interface CellProps extends React.HTMLProps<HTMLDivElement> {}

function Cell({ className, ...props }: CellProps): JSX.Element {
  return <div className={`border-blue-400/5 px-3 py-2 text-slate-300 ${className}`} {...props} />;
}

type NamesTableProps = Names & React.HTMLProps<HTMLDivElement>;

function NamesTable({ names, last, ...props }: NamesTableProps): JSX.Element {
  return (
    <div
      className="my-6 rounded-xl border-2 border-blue-400/5 bg-clip-border text-sm text-white"
      {...props}
    >
      <HeaderCell className="rounded-t-lg border-b-2">Nombres</HeaderCell>
      <div>
        {names.map(name => (
          <Cell key={name} className="border-b-2">
            {name}
          </Cell>
        ))}
      </div>
      {last != null && (
        <>
          <HeaderCell className="border-b-2">Apellidos</HeaderCell>
          <div className="grid grid-cols-[max-content_auto]">
            <HeaderCell className="border-b-2 border-r-2">Apellido paterno</HeaderCell>
            <Cell className="border-b-2">{last.paternal}</Cell>
            {last.maternal != null && (
              <>
                <HeaderCell className="border-r-2">Apellido materno</HeaderCell>
                <Cell>{last.maternal}</Cell>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default NamesTable;
