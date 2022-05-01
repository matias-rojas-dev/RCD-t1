import Container from "./Container";

export interface RutStatus {
  isValid: boolean;
  error?: string;
}

type RutStatusProps = RutStatus & React.HTMLProps<HTMLDivElement>;

function RutStatusTile({ isValid, error }: RutStatusProps): JSX.Element {
  if (isValid) {
    return (
      <Container className="text-emerald-400">
        <span className="material-symbols-outlined">verified</span>
        <span>El RUT es válido.</span>
      </Container>
    );
  }

  return (
    <Container className="text-rose-400">
      <span className="material-symbols-outlined">error</span>
      <span>{error ?? "El RUT no es válido."}</span>
    </Container>
  );
}

export default RutStatusTile;
